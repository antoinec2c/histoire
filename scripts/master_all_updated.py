# scripts/master_all_updated.py
import asyncio
import os
import re
import subprocess
import edge_tts

VOICE_CONFIG = {
    "remy": {
        "id": "fr-FR-RemyMultilingualNeural",
        "rate": "-3%",
        "pitch": "-4Hz",  # Assise naturelle, timbrée et chaleureuse
        "filter": (
            "highpass=f=65,"
            "equalizer=f=120:width_type=h:width=90:g=3.8,"
            "equalizer=f=750:width_type=h:width=400:g=-1.8,"
            "equalizer=f=2850:width_type=h:width=1100:g=3.8,"
            "equalizer=f=6000:width_type=h:width=2200:g=1.8,"
            "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
            "loudnorm=I=-11:TP=-0.5:LRA=7"
        )
    },
    "remy_grave": {
        "id": "fr-FR-RemyMultilingualNeural",
        "rate": "-4%",
        "pitch": "-7Hz",  # Baryton profond, posé, solennel, grain prononcé
        "filter": (
            "highpass=f=60,"
            "equalizer=f=110:width_type=h:width=80:g=4.5,"
            "equalizer=f=240:width_type=h:width=120:g=2.2,"
            "equalizer=f=750:width_type=h:width=400:g=-2.2,"
            "equalizer=f=2850:width_type=h:width=1100:g=4.0,"
            "equalizer=f=6500:width_type=h:width=2200:g=1.5,"
            "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
            "loudnorm=I=-11:TP=-0.5:LRA=7"
        )
    }
}

BASE_DIR = "/home/ajcha/projets/histoire"

def extract_audio_scripts():
    months_dir = os.path.join(BASE_DIR, "src/data/months")
    scripts = {}
    
    if os.path.exists(months_dir):
        for fname in sorted(os.listdir(months_dir)):
            if fname.endswith(".ts") and fname != "index.ts":
                fpath = os.path.join(months_dir, fname)
                with open(fpath, "r", encoding="utf-8") as f:
                    content = f.read()
                day_blocks = re.findall(r"'(\d{2}-\d{2})':\s*\{([\s\S]*?)\n  \},?\n", content)
                for day_id, block in day_blocks:
                    m_express = re.search(r"express:\s*\{[\s\S]*?script:\s*`([\s\S]*?)`\s*\}", block)
                    if m_express:
                        scripts[f"{day_id}-express"] = m_express.group(1).strip()
                    m_deep = re.search(r"approfondi:\s*\{[\s\S]*?script:\s*`([\s\S]*?)`\s*\}", block)
                    if m_deep:
                        scripts[f"{day_id}-approfondi"] = m_deep.group(1).strip()
    return scripts

async def master_file(text: str, voice_key: str, conf: dict, file_key: str, out_dir: str):
    raw_path = f"/tmp/{file_key}_{voice_key}_raw.mp3"
    final_path = os.path.join(out_dir, f"{file_key}_{voice_key}.mp3")
    
    # 1. Génération edge-tts
    comm = edge_tts.Communicate(text, conf["id"], rate=conf["rate"], pitch=conf["pitch"])
    await comm.save(raw_path)
    
    # 2. Chaîne de traitement studio broadcast avec ffmpeg
    cmd = [
        "ffmpeg", "-y", "-i", raw_path,
        "-af", conf["filter"],
        "-b:a", "96k",
        final_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    print(f"✅ {final_path} terminé ({os.path.getsize(final_path)} octets)", flush=True)
    if os.path.exists(raw_path):
        os.remove(raw_path)

async def main():
    out_dir = "/home/ajcha/projets/histoire/public/audio"
    os.makedirs(out_dir, exist_ok=True)
    scripts = extract_audio_scripts()
    print(f"Total scripts audio identifiés : {len(scripts)}", flush=True)
    
    # 1. Tous les express en priorité absolue (format par défaut pour écoute immédiate)
    express_keys = sorted([k for k in scripts.keys() if k.endswith("-express")])
    deep_keys = sorted([k for k in scripts.keys() if k.endswith("-approfondi")])
    ordered_keys = express_keys + deep_keys
    
    total_todo = 0
    for file_key in ordered_keys:
        for v_key in VOICE_CONFIG.keys():
            final_path = os.path.join(out_dir, f"{file_key}_{v_key}.mp3")
            if not (os.path.exists(final_path) and os.path.getsize(final_path) > 1000):
                total_todo += 1
                
    print(f"Pistes audio restant à graver : {total_todo} fichiers studio", flush=True)
    done_count = 0
    
    for file_key in ordered_keys:
        text = scripts[file_key]
        for v_key, conf in VOICE_CONFIG.items():
            final_path = os.path.join(out_dir, f"{file_key}_{v_key}.mp3")
            if os.path.exists(final_path) and os.path.getsize(final_path) > 1000:
                continue
            done_count += 1
            print(f"\n🎙️ [{done_count}/{total_todo}] En cours : {file_key} ({v_key})...", flush=True)
            try:
                await master_file(text, v_key, conf, file_key, out_dir)
            except Exception as e:
                print(f"❌ Erreur lors de la génération de {file_key}_{v_key}: {e}", flush=True)

    print("\n🎉 Toutes les pistes audio sont désormais gravées et disponibles !", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
