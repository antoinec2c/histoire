# scripts/validate_corpus.py
import os
import re
import sys

BASE_DIR = "/home/ajcha/projets/histoire"
MONTHS_DIR = os.path.join(BASE_DIR, "src/data/months")

def validate():
    print("🔍 Validation du corpus historique (standard Bainville / De Jaeghere)...")
    errors = []
    warnings = []
    total_days = 0
    total_echoes = 0

    if not os.path.exists(MONTHS_DIR):
        print(f"❌ Répertoire introuvable : {MONTHS_DIR}")
        sys.exit(1)

    for fname in sorted(os.listdir(MONTHS_DIR)):
        if not fname.endswith(".ts") or fname == "index.ts":
            continue
        
        fpath = os.path.join(MONTHS_DIR, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        day_blocks = re.findall(r"  '(\d{2}-\d{2})':\s*\{([\s\S]*?\n  \}),?\n", content)
        for day_id, block in day_blocks:
            total_days += 1
            prefix = f"[{day_id}]"

            # 1. Vérification des échos des siècles
            m_echoes = re.search(r"centuryEchoes:\s*\[([\s\S]*?)\],\s*anecdote:", block)
            if not m_echoes:
                errors.append(f"{prefix} Bloc centuryEchoes introuvable")
                continue
            echoes_text = m_echoes.group(1)
            echo_matches = re.findall(r"year:\s*(-?\d+),[\s\S]*?yearDisplay:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)',", echoes_text)
            num_echoes = len(echo_matches)
            total_echoes += num_echoes

            if num_echoes < 7:
                errors.append(f"{prefix} Échos insuffisants : {num_echoes} (minimum 7 requis)")
            elif num_echoes > 12:
                warnings.append(f"{prefix} Nombre élevé d'échos : {num_echoes}")

            # Vérification du tri chronologique des échos
            years = [int(m[0]) for m in echo_matches]
            if years != sorted(years):
                errors.append(f"{prefix} Chronologie des échos non respectée : {years}")

            # Vérification de l'empan temporel
            if years and years[0] > 1600:
                warnings.append(f"{prefix} L'arc chronologique débute tardivement ({years[0]}), manque d'ancrage antique ou médiéval")
            if years and years[-1] < 1950:
                warnings.append(f"{prefix} L'arc chronologique s'arrête prématurément ({years[-1]}), manque de repère contemporain/XXe-XXIe")

            # 2. Vérification analyse politique (motif, stakes, consequence)
            if "motive:" not in block or "stakes:" not in block or "consequence:" not in block:
                errors.append(f"{prefix} politicalAnalysis incomplet (motive, stakes, consequence requis)")

            # 3. Vérification de la citation / anecdote sourcée
            if "sourceOrAttribution:" not in block or "contextExplanation:" not in block:
                errors.append(f"{prefix} Anecdote/citation incomplète (sourceOrAttribution et contextExplanation requis)")

            # 4. Vérification quiz
            options_count = len(re.findall(r"id:\s*'[A-D]'", block))
            if options_count < 4:
                errors.append(f"{prefix} Quiz incomplet : {options_count}/4 options trouvées")

            # 5. Vérification script audio quotidien unique
            m_exp = re.search(r"express:\s*\{[\s\S]*?script:\s*`([\s\S]*?)`\s*\}", block)
            if not m_exp or len(m_exp.group(1).split()) < 180:
                errors.append(f"{prefix} Script audio quotidien manquant ou trop court")

    print(f"\n📊 Bilan : {total_days} fiches analysées, {total_echoes} repères historiques (moyenne {total_echoes/total_days:.1f} par jour)")
    
    if warnings:
        print(f"\n⚠️  {len(warnings)} Avertissement(s) :")
        for w in warnings:
            print(f"  - {w}")

    if errors:
        print(f"\n❌ {len(errors)} Erreur(s) critique(s) :")
        for e in errors:
            print(f"  - {e}")
        return False
    else:
        print("✅ Toutes les fiches respectent scrupuleusement le standard !")
        return True

if __name__ == "__main__":
    success = validate()
    sys.exit(0 if success else 1)
