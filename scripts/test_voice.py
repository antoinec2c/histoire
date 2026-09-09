# scripts/test_voice.py
import asyncio
import os
import subprocess
import edge_tts

text = """8 septembre 1303. Pourquoi le roi Philippe le Bel envoie-t-il son conseiller Guillaume de Nogaret bousculer le pape Boniface Huit dans son propre palais d'Anagni ?

Beaucoup d'historiens romantiques y ont vu un coup de sang orgueilleux. Pour l'analyse politique, la vérité est toute autre : tout découle d'une contrainte budgétaire.

Engagé dans une guerre coûteuse pour contrôler la Flandre et sécuriser le nord du royaume, Philippe le Bel taxe le clergé de France. Mais le pape réplique immédiatement en menaçant d'excommunier tout prince qui touche aux deniers de l'Église. Pour un roi capétien, tolérer qu'un souverain étranger s'arroge le pouvoir d'interdire l'impôt en France, c'est abdiquer la souveraineté nationale."""

async def generate_samples():
    voices = [
        ("remy", "fr-FR-RemyMultilingualNeural"),
        ("vivienne", "fr-FR-VivienneMultilingualNeural"),
        ("henri", "fr-FR-HenriNeural"),
        ("denise", "fr-FR-DeniseNeural")
    ]
    os.makedirs("public/audio/tests", exist_ok=True)
    
    for name, v in voices:
        raw_path = f"public/audio/tests/{name}_raw.mp3"
        mastered_path = f"public/audio/tests/{name}_mastered.mp3"
        
        # 1. Synthèse avec le modèle
        comm = edge_tts.Communicate(text, v, rate="-2%")
        await comm.save(raw_path)
        
        # 2. Mastering audio broadcast avec ffmpeg :
        # - Egalisation voix radio (présence et rondeur)
        # - Compression dynamique et normalisation EBU R128 à -11 LUFS (très puissant et clair sans saturation)
        filter_chain = (
            "equalizer=f=120:width_type=h:width=100:g=2.5,"
            "equalizer=f=3200:width_type=h:width=1500:g=3.0,"
            "dynaudnorm=f=150:g=15:p=0.95:m=10.0:r=0.9,"
            "loudnorm=I=-11:TP=-0.5:LRA=7"
        )
        cmd = [
            "ffmpeg", "-y", "-i", raw_path,
            "-af", filter_chain,
            "-b:a", "192k",
            mastered_path
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(f"Généré : {mastered_path}")

if __name__ == "__main__":
    asyncio.run(generate_samples())
