import subprocess

filter_chain = (
    "highpass=f=65,"
    "equalizer=f=120:width_type=h:width=90:g=3.8,"
    "equalizer=f=750:width_type=h:width=400:g=-1.8,"
    "equalizer=f=2850:width_type=h:width=1100:g=3.8,"
    "equalizer=f=6000:width_type=h:width=2200:g=1.8,"
    "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
    "loudnorm=I=-11:TP=-0.5:LRA=7"
)
cmd = [
    "ffmpeg", "-y", "-i", "/home/ajcha/projets/histoire/public/audio/09-08-express_remy.mp3",
    "-af", filter_chain, "-b:a", "192k", "/tmp/test_chain.mp3"
]
res = subprocess.run(cmd, capture_output=True, text=True)
print("Code:", res.returncode)
if res.returncode == 0:
    print("Succès filtre FFmpeg !")
else:
    print("Erreur:", res.stderr)
