# scripts/compile_vague1.py
# -*- coding: utf-8 -*-
"""
Assemble les 10 fiches de la Vague 1 de Septembre et met à jour src/data/months/09_septembre.ts
"""
import os
import re

# 1. Récupérer 09-08
with open('/home/ajcha/projets/histoire/src/data/months/09_septembre.ts', 'r', encoding='utf-8') as f:
    content = f.read()

m_0908 = re.search(r"('09-08':\s*\{[\s\S]*?\n  \})", content)
if not m_0908:
    # Si déjà écrasé ou modifié, chercher dans le backup
    with open('/home/ajcha/projets/histoire/src/data/ephemerisData.ts.bak', 'r', encoding='utf-8') as f:
        bak_content = f.read()
    m_0908 = re.search(r"('09-08':\s*\{[\s\S]*?\n  \})", bak_content)
    if not m_0908:
        raise Exception("Impossible de retrouver 09-08 !")

day_0908 = "  " + m_0908.group(1)

# 2. Importer les autres journées
from build_vague1_septembre import DAYS_DICT as D1
from days_vague1 import DAYS as D2
from data_09_03_04 import DAYS as D34
from data_09_05_06 import DAYS as D56
from data_09_07_09_10 import DAYS as D7910

all_days = {}
all_days.update(D1)      # 09-01
all_days.update(D2)      # 09-02
all_days.update(D34)     # 09-03, 09-04
all_days.update(D56)     # 09-05, 09-06
all_days.update(D7910)   # 09-07, 09-09, 09-10
all_days['09-08'] = day_0908

ordered_keys = sorted(all_days.keys())
print(f"Compilation de {len(ordered_keys)} fiches pour 09_septembre.ts : {ordered_keys}")

out_path = '/home/ajcha/projets/histoire/src/data/months/09_septembre.ts'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write("// src/data/months/09_septembre.ts\n")
    f.write("import type { EphemerisDay } from '../../types/ephemeris';\n\n")
    f.write("export const SEPTEMBRE_DAYS: Record<string, EphemerisDay> = {\n")
    for i, k in enumerate(ordered_keys):
        body = all_days[k].strip()
        f.write(f"  {body}")
        if i < len(ordered_keys) - 1:
            f.write(",\n\n")
        else:
            f.write("\n")
    f.write("};\n")

print(f"✅ Succès ! {out_path} écrit avec {len(ordered_keys)} fiches historiques.")
