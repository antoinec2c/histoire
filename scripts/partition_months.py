# scripts/partition_months.py
import os
import re

src_path = '/home/ajcha/projets/histoire/src/data/ephemerisData.ts'
with open(src_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r"  '(\d{2}-\d{2})':\s*(\{[\s\S]*?\n  \}),?\n")
matches = pattern.findall(content)

months_map = {
    '03': ('03_mars.ts', 'MARS_DAYS'),
    '06': ('06_juin.ts', 'JUIN_DAYS'),
    '07': ('07_juillet.ts', 'JUILLET_DAYS'),
    '09': ('09_septembre.ts', 'SEPTEMBRE_DAYS'),
    '12': ('12_decembre.ts', 'DECEMBRE_DAYS')
}

by_month = {}
for day_id, day_body in matches:
    m = day_id.split('-')[0]
    by_month.setdefault(m, []).append((day_id, day_body))

out_dir = '/home/ajcha/projets/histoire/src/data/months'
os.makedirs(out_dir, exist_ok=True)

for m, day_list in by_month.items():
    filename, var_name = months_map[m]
    filepath = os.path.join(out_dir, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f"// src/data/months/{filename}\n")
        f.write("import type { EphemerisDay } from '../../types/ephemeris';\n\n")
        f.write(f"export const {var_name}: Record<string, EphemerisDay> = {{\n")
        for i, (day_id, day_body) in enumerate(day_list):
            f.write(f"  '{day_id}': {day_body}")
            if i < len(day_list) - 1:
                f.write(",\n")
            else:
                f.write("\n")
        f.write("};\n")
    print(f"Wrote {filepath} with {len(day_list)} days")
