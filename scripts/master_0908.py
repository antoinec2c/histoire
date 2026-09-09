# scripts/master_0908.py
import asyncio
import os
import subprocess
import edge_tts

text = """8 septembre 1303. Pourquoi le roi de France Philippe IV le Bel envoie-t-il son conseiller Guillaume de Nogaret forcer le palais pontifical d’Anagni et violenter un pape octogénaire ?

Quittons les images d'Épinal et les jugements moraux : l’Histoire est une affaire de fer et d’argent. Pour briser la Flandre rebelle et contrer l'or anglais, Philippe le Bel a besoin d’une armée permanente de mercenaires soldés. Ne pouvant plus s'en remettre au bon vouloir de barons indociles, il lui faut de l'or. Et pour financer cette armée, il frappe là où dort la richesse foncière : l'Église de France.

Lorsque le pape Boniface VIII réplique par la menace d'excommunication et proclame, dans sa bulle Unam Sanctam, que tout monarque chrétien n'est qu'un vassal révocable de la tiare, le conflit devient existentiel. Admettre la tutelle de Rome, c'était livrer la Couronne de France à l'arbitraire d'un tribunal étranger. Nogaret frappe préventivement. Le 8 septembre au matin, le pape est acculé dans sa chambre, bousculé par le gantelet de fer de Sciarra Colonna, et meurt brisé un mois plus tard. Par cette violence d'État calculée naît le gallicanisme : en France, le roi ne reconnaît aucun maître terrestre au-dessus de sa tête.

Mais le 8 septembre ne s'arrête pas à cette estocade capétienne. À travers deux millénaires, cette même date illustre la constante brutalité des rapports de force et du choc des puissances :

En l’an 70, les légions romaines de Titus prennent d'assaut Jérusalem. Le Second Temple est incendié, les insurgés sont massacrés ou crucifiés par milliers, scellant la dispersion millénaire du peuple juif dans l'Empire romain.

En 1565, au terme de quatre mois d'un siège atroce où les têtes coupées servaient de boulets de canon, les chevaliers de Malte commandés par Jean de Valette brisent l'armada navale de Soliman le Magnifique, mettant un terme à l'expansion ottomane en Méditerranée occidentale.

En 1855, sous le Second Empire, Mac-Mahon s'élance à l'assaut de la tour Malakoff à Sébastopol. Au milieu d'un carnage annonçant 1914, il refuse d'évacuer la redoute : « J'y suis, j'y reste ! ». La Russie tsariste capitule, la France redevient l'arbitre diplomatique de l'Europe.

Enfin, le 8 septembre 1914, au quatrième jour de la gigantesque hécatombe de la Marne, le général Foch lance sa contre-attaque désespérée aux marais de Saint-Gond, brisant net le plan d'invasion allemand qui devait anéantir l'armée française en quarante jours.

Et plus près de nous, le 8 septembre 1943, alors que retentit la capitulation sans conditions de l'Italie face aux Alliés, la Corse insurgée prend les armes. Au signal du sous-marin Casabianca, les patriotes corses et les tirailleurs débarqués d'Alger chassent les garnisons de l'Axe : l'Île de Beauté devient le premier morceau de la métropole libéré de l'occupant.

La maxime politique à retenir est celle des légistes capétiens : « Rex in regno suo est imperator ». Le roi est empereur en son royaume.

Votre question d'ancrage mémoriel :
Quel juriste de Philippe le Bel, petit-fils de cathare languedocien, fut le bras armé impitoyable de la monarchie à Anagni ?
A : Enguerrand de Marigny,
B : L'abbé Suger,
C : Guillaume de Nogaret,
ou D : Pierre de Dreux ?

La réponse est Guillaume de Nogaret. Rompu aux subtilités impériales du droit romain, il comprit que l'indépendance de l'État exigeait de briser sans faiblesse les prétentions théocratiques du Vatican."""

async def generate():
    out_dir = "/home/ajcha/projets/histoire/public/audio"
    voices = {
        "remy": "fr-FR-RemyMultilingualNeural",
        "henri": "fr-FR-HenriNeural"
    }
    for v_key, v_id in voices.items():
        raw = f"/tmp/0908_{v_key}.mp3"
        final = f"{out_dir}/09-08-express_{v_key}.mp3"
        c = edge_tts.Communicate(text, v_id, rate="-2%")
        await c.save(raw)
        
        filter_chain = (
            "highpass=f=70,"
            "equalizer=f=130:width_type=h:width=90:g=2.5,"
            "equalizer=f=3400:width_type=h:width=1400:g=3.5,"
            "dynaudnorm=f=120:g=15:p=0.95:m=10.0:r=0.9,"
            "loudnorm=I=-11:TP=-0.5:LRA=7"
        )
        subprocess.run(["ffmpeg", "-y", "-i", raw, "-af", filter_chain, "-b:a", "192k", final], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if v_key == "remy":
            subprocess.run(["cp", "-f", final, f"{out_dir}/09-08-express.mp3"])
        print(f"Terminé : {final}")
        if os.path.exists(raw): os.remove(raw)

if __name__ == "__main__":
    asyncio.run(generate())
