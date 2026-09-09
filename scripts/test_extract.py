# scripts/test_extract.py
import sys
sys.path.insert(0, '/home/ajcha/projets/histoire/scripts')
from master_all_updated import extract_audio_scripts
s = extract_audio_scripts()
print(f"Found {len(s)} audio scripts: {list(s.keys())}")
