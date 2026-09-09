# scripts/master_all_audios.py
import asyncio
import os
import subprocess
import edge_tts
from generate_audios import SCRIPTS

VOICES = {
    "remy": "fr-FR-RemyMultilingualNeural",   # Voix moderne, chaleureuse, naturelle
    "henri": "fr-FR-HenriNeural",             # Voix posée, d'époque, solennelle
}

async def master_file(text: str, voice_key: str, voice_id: str, day_key: str, out_dir: str):
    raw_path = f"/tmp/{day_key}_{voice_key}_raw.mp3"
    final_path = os.path.join(out_dir, f"{day_key}_{voice_key}.mp3")
    
    # 1. Génération par edge-tts
    comm = edge_tts.Communicate(text, voice_id, rate="-2%")
    await comm.save(raw_path)
    
    # 2. Chaîne de traitement studio broadcast avec ffmpeg :
    # - Filtre passe-haut à 70Hz pour couper les infrabasses inutiles
    # - Égalisation rondeur (+2.5dB @ 130Hz) et présence (+3.5dB @ 3400Hz)
    # - Compresseur dynamique dynaudnorm pour égaliser le niveau de chaque syllabe
    # - Normalisation broadcast forte EBU R128 à -11 LUFS (-0.5 dB True Peak)
    filter_chain = (
        "highpass=f=70,"
        "equalizer=f=130:width_type=h:width=90:g=2.5,"
        "equalizer=f=3400:width_type=h:width=1400:g=3.5,"
        "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
        "loudnorm=I=-11:TP=-0.5:LRA=7"
    )
    cmd = [
        "ffmpeg", "-y", "-i", raw_path,
        "-af", filter_chain,
        "-b:a", "192k",
        final_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Also save the default one as just {day_key}.mp3 (pointing to remy by default)
    if voice_key == "remy":
        default_path = os.path.join(out_dir, f"{day_key}.mp3")
        subprocess.run(["cp", "-f", final_path, default_path])
        
    print(f"✅ {final_path} terminé (Poids: {os.path.getsize(final_path)} octets)")
    if os.path.exists(raw_path):
        os.remove(raw_path)

async def main():
    out_dir = "/home/ajcha/projets/histoire/public/audio"
    os.makedirs(out_dir, exist_ok=True)
    
    # Scripts express
    for day_key, text in SCRIPTS.items():
        for v_key, v_id in VOICES.items():
            await master_file(text, v_key, v_id, day_key, out_dir)
            
    # Script approfondi 09-08
    deep_path = "scripts/generate_deep.py"
    if os.path.exists(deep_path):
        with open(deep_path) as f:
            deep_code = f.read()
        s_idx = deep_code.find('text = """') + 10
        e_idx = deep_code.find('"""\n\nasync def')
        deep_text = deep_code[s_idx:e_idx]
        for v_key, v_id in VOICES.items():
            await master_file(deep_text, v_key, v_id, "09-08-approfondi", out_dir)

if __name__ == "__main__":
    asyncio.run(main())
