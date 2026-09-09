import re
with open('/home/ajcha/projets/histoire/src/data/months/09_septembre.ts', 'r', encoding='utf-8') as f:
    c = f.read()

for d in ['09-02', '09-07']:
    m = re.search(r"'" + d + r"':\s*\{[\s\S]*?approfondi:\s*\{[\s\S]*?script:\s*`([\s\S]*?)`\s*\}", c)
    if m:
        w = len(m.group(1).split())
        print(f"{d} approfondi word count: {w}")
