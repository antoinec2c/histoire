import asyncio
import os
import subprocess
import edge_tts

text = "Le 8 septembre 1303, à Anagni, le roi de France Philippe quatre le Bel défie le pape Boniface huit. Une rupture capitale dans la genèse de l'État moderne."

CANDIDATES = {
    "remy_studio": {
        "id": "fr-FR-RemyMultilingualNeural",
        "rate": "-3%",
        "pitch": "-4Hz",
        "title": "Rémy - Studio (Actuel)"
    },
    "remy_grave": {
        "id": "fr-FR-RemyMultilingualNeural",
        "rate": "-4%",
        "pitch": "-7Hz",
        "title": "Rémy - Timbre Profond & Grave"
    },
    "fabrice": {
        "id": "fr-CH-FabriceNeural",
        "rate": "-3%",
        "pitch": "-2Hz",
        "title": "Fabrice - Voix suisse posée et calme"
    },
    "gerard": {
        "id": "fr-BE-GerardNeural",
        "rate": "-3%",
        "pitch": "-2Hz",
        "title": "Gérard - Voix belge mature et solennelle"
    },
    "andrew": {
        "id": "en-US-AndrewMultilingualNeural",
        "rate": "-3%",
        "pitch": "-2Hz",
        "title": "Andrew - Multilingue chaleureux"
    }
}

async def main():
    out_dir = "/home/ajcha/projets/histoire/public/audio/tests"
    os.makedirs(out_dir, exist_ok=True)
    
    filter_chain = (
        "highpass=f=65,"
        "equalizer=f=120:width_type=h:width=90:g=3.8,"
        "equalizer=f=750:width_type=h:width=400:g=-1.8,"
        "equalizer=f=2850:width_type=h:width=1100:g=3.8,"
        "equalizer=f=6000:width_type=h:width=2200:g=1.8,"
        "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
        "loudnorm=I=-11:TP=-0.5:LRA=7"
    )

    for key, conf in CANDIDATES.items():
        raw_path = f"/tmp/test_voice_{key}_raw.mp3"
        final_path = os.path.join(out_dir, f"sample_{key}.mp3")
        print(f"Generating {key} ({conf['id']})...")
        comm = edge_tts.Communicate(text, conf["id"], rate=conf["rate"], pitch=conf["pitch"])
        await comm.save(raw_path)
        
        cmd = [
            "ffmpeg", "-y", "-i", raw_path,
            "-af", filter_chain,
            "-b:a", "192k",
            final_path
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(raw_path):
            os.remove(raw_path)
        print(f"Mastered: {final_path} ({os.path.getsize(final_path)} bytes)")

if __name__ == "__main__":
    asyncio.run(main())
