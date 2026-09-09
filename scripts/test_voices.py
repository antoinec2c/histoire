import asyncio
import os
import edge_tts

text = "Le 8 septembre 1303, à Anagni, le roi de France Philippe quatre le Bel défie le pape Boniface huit. Une rupture capitale dans la genèse de l'État moderne."

voices = [
    ("andrew", "en-US-AndrewMultilingualNeural"),
    ("brian", "en-US-BrianMultilingualNeural"),
    ("florian", "de-DE-FlorianMultilingualNeural"),
    ("gerard", "fr-BE-GerardNeural"),
    ("fabrice", "fr-CH-FabriceNeural"),
    ("antoine", "fr-CA-AntoineNeural"),
    ("jean", "fr-CA-JeanNeural"),
]

async def main():
    os.makedirs("/home/ajcha/projets/histoire/public/audio/tests", exist_ok=True)
    for name, voice in voices:
        out_file = f"/home/ajcha/projets/histoire/public/audio/tests/test_{name}.mp3"
        print(f"Generating {name} ({voice})...")
        try:
            communicate = edge_tts.Communicate(text, voice)
            await communicate.save(out_file)
            print(f"Success: {name}")
        except Exception as e:
            print(f"Error {name}: {e}")

if __name__ == "__main__":
    asyncio.run(main())
