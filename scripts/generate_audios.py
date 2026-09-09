# scripts/generate_audios.py
import asyncio
import os
import sys

# Audio scripts map
SCRIPTS = {
    "09-08-express": """8 septembre 1303. Pourquoi le roi Philippe le Bel envoie-t-il son conseiller Nogaret bousculer le pape Boniface Huit dans son propre palais d'Anagni ?

Beaucoup d'historiens romantiques y ont vu un coup de sang orgueilleux. Pour l'analyse politique, la vérité est toute autre : tout découle d'une contrainte budgétaire.

Engagé dans une guerre coûteuse pour contrôler la Flandre et sécuriser le nord du royaume, Philippe le Bel taxe le clergé de France. Mais le pape réplique immédiatement en menaçant d'excommunier tout prince qui touche aux deniers de l'Église. Pour un roi capétien, tolérer qu'un souverain étranger s'arroge le pouvoir d'interdire l'impôt en France, c'est abdiquer la souveraineté nationale.

L'affrontement devient existentiel. Le 8 septembre au matin, Nogaret frappe préventivement à Anagni, quelques heures avant que l'excommunication royale ne soit proclamée. Le vieil évêque de Rome est acculé et brisé. Le résultat politique est retentissant : la théocratie pontificale s'effondre, et bientôt, les papes s'installeront à Avignon sous la tutelle de la couronne.

Le principe capétien est gravé pour les siècles à venir : le roi de France est empereur en son royaume.

Voici votre question de mémorisation :
Quel célèbre conseiller et juriste de Philippe le Bel a dirigé l'expédition d'Anagni ?
A : Enguerrand de Marigny,
B : L'abbé Suger,
C : Guillaume de Nogaret,
ou D : Pierre de Dreux ?

C'était bien Guillaume de Nogaret. Professeur de droit romain, il incarna la primauté du droit d'État sur les prétentions temporelles de l'Église.""",

    "12-25-express": """25 décembre 496. Dans la cathédrale de Reims, l'évêque Remi verse les huiles sacrées sur le front de Clovis, roi des Francs.

« Courbe la tête, fier Sicambre ; adore ce que tu as brûlé, brûle ce que tu as adoré. »

Ce jour-là naît la monarchie française. Mais pourquoi ce chef barbare redouté, habitué aux sacrifices païens et aux guerres de pillage, accepte-t-il de plier le genou devant la croix ?

L'explication est une magistrale leçon de géopolitique. Après la chute de Rome en 476, la Gaule est partagée entre des rois barbares chrétiens, mais ariens : les Wisigoths et les Burgondes. Or, le peuple autochtone gallo-romain et surtout ses puissants évêques détestent l'arianisme. 

Clovis comprend qu'en se convertissant à la foi catholique nicéenne, il ne conquiert pas seulement un paradis spirituel : il gagne le cœur et les clés des cités de la Gaule entière. Les évêques, qui gèrent la justice et les greniers, le reconnaissent comme le protecteur légitime de la civilisation.

Exactement trois siècles plus tard, le 25 décembre 800, Charlemagne utilisera ce même héritage pour se faire couronner empereur d'Occident à Rome.

Votre question du jour :
Quelle était la religion professée par les rivaux barbares de Clovis, Wisigoths et Burgondes, qu'il a ainsi pu isoler politiquement ?
A : Le paganisme d'Odin,
B : L'arianisme,
C : Le manichéisme,
ou D : Le nestorianisme ?

La bonne réponse est l'arianisme. Cette hérésie chrétienne créait un fossé entre les envahisseurs et la population gallo-romaine. En choisissant l'orthodoxie catholique, Clovis a scellé l'unité de la future France.""",

    "07-27-express": """27 juillet 1214. Dans la plaine de Bouvines, en Flandre, le soleil de midi cogne sur les armures de fer. 

Le roi de France Philippe Auguste joue la survie de sa couronne face à une immense coalition européenne : l'empereur germanique Othon Quatre, le comte de Flandre et le roi d'Angleterre Jean sans Terre qui finance toute l'opération.

Les coalisés veulent purement et simplement dépecer la France. Pris au piège alors que c'est un dimanche — jour de paix de Dieu —, Philippe Auguste fait face. Au cœur de la mêlée, le roi est tiré à bas de son cheval par des crochets de fer. Il est sauvé de justesse par ses chevaliers. La riposte française est irrésistible : la cavalerie capétienne brise les lignes flamandes, capture les comtes rebelles et met l'empereur allemand en fuite.

Pourquoi Bouvines est-elle notre première victoire nationale ? Parce que pour la première fois, les milices bourgeoises des villes d'Amiens, de Beauvais ou de Noyon ont combattu côte à côte avec les seigneurs féodaux sous la bannière royale de Saint-Denis. Sur le chemin du retour, tout un peuple en liesse acclame le roi de France.

Votre question de culture politique :
Quelle concession historique le roi Jean sans Terre dut-il céder à ses barons anglais après le désastre de Bouvines ?
A : La suppression de la livre sterling,
B : La Grande Charte, Magna Carta,
C : La vente de la Normandie à Philippe Auguste,
ou D : L'interdiction du droit de veto royal ?

C'était bien la Magna Carta en 1215. Sans la défaite de Bouvines, la monarchie anglaise n'aurait jamais été obligée de limiter ses pouvoirs face aux barons révoltés.""",

    "06-18-express": """18 juin 1940. Dans les couloirs feutrés de la BBC à Londres, un général de brigade inconnu s'approche du micro. 

La veille, le maréchal Pétain a demandé l'armistice, annonçant aux Français qu'il faut cesser le combat. Pour tout le monde, la guerre est terminée. Mais Charles de Gaulle prend la parole pour proférer le mot le plus difficile et le plus noble de la politique : NON.

« La France a perdu une bataille ! Mais la France n'a pas perdu la guerre ! »

Ce qui rend ce discours sublime, ce n'est pas seulement son héroïsme moral, c'est sa lucidité géopolitique. De Gaulle démontre avec une précision chirurgicale que le conflit n'est pas franco-allemand, mais mondial. Face à l'armée nazie, il y a l'Empire britannique, la maîtrise absolue des océans et le colosse industriel américain qui entrera tôt ou tard dans la danse. 

En un quart d'heure d'émission, de Gaulle sauve la légitimité de la souveraineté française et garantit que la France sera assise à la table des vainqueurs en 1945.

Votre question du jour :
Cent vingt-cinq ans plus tôt jour pour jour, le 18 juin 1815, quelle tragédie militaire mettait fin définitivement au règne de Napoléon Premier ?
A : La bataille d'Austerlitz,
B : La bataille de Leipzig,
C : La bataille de Waterloo,
ou D : La bataille de Trafalgar ?

C'était bien la bataille de Waterloo. Le 18 juin rassemble ainsi dans notre mémoire nationale le deuil de l'épopée impériale et la résurrection de la France Libre.""",

    "12-02-express": """2 décembre 1805. À l'aube, une brume épaisse enveloppe les collines de Moravie. Soudain, le soleil perce les nuées : c'est le mythique soleil d'Austerlitz.

Un an jour pour jour après s'être couronné empereur à Notre-Dame de Paris, Napoléon Premier livre la plus éclatante bataille de sa vie face aux empereurs de Russie et d'Autriche. 

Pour forcer les coalisés à livrer combat avant que la Prusse n'entre en guerre, Napoléon tend un piège magistral. Il fait semblant de paniquer et dégarnit son aile droite. Les Russes se précipitent dans le piège pour lui couper la retraite vers Vienne. Mais au sud, le maréchal Davout tient bon avec ses vétérans. Et dès que le plateau central de Pratzen est vidé par les ennemis, Napoléon lance le maréchal Soult à l'assaut. En un éclair, l'armée ennemie est sciée en deux.

Au soir de la bataille, le tsar fuit, l'empereur d'Autriche capitule et la Troisième Coalition est anéantie. Le Saint-Empire germanique, vieux de mille ans, est dissous pour toujours.

Votre question de stratégie militaire :
Quel plateau clé Napoléon a-t-il fait reprendre par Soult pour couper l'armée austro-russe en deux ?
A : Le plateau de Craonne,
B : Le plateau de Pratzen,
C : Le mont Saint-Jean,
ou D : Le plateau de Langres ?

C'était le plateau de Pratzen. Cette manœuvre est aujourd'hui encore étudiée dans toutes les écoles de guerre du monde comme le modèle absolu de la ruse et de la surprise tactique.""",

    "03-15-express": """15 mars 44 avant Jésus-Christ. Les fameuses Ides de Mars.

Jules César s'assied dans la Curie de Pompée à Rome. Nommé dictateur à perpétuité, le conquérant des Gaules est au sommet de son pouvoir. Mais soixante sénateurs ont dissimulé des dagues sous leurs toges. Menés par Brutus et Cassius, ils se jettent sur lui. Frappé de vingt-trois coups de couteau, César s'effondre au pied de la statue de Pompée.

Pourquoi les conjurés ont-ils frappé ? Par fidélité aveugle à la vieille République aristocratique. Ils étaient convaincus qu'en tuant le dictateur, la liberté sénatoriale renaîtrait spontanément.

Mais c'est l'exact inverse qui s'est produit. En politique, on ne remonte pas le cours de l'Histoire. La République romaine des cités-États était déjà morte, minée par la corruption et l'incapacité à gérer un empire immense. En assassinant César, les conjurés n'ont fait que déclencher une guerre civile effroyable qui amena son fils adoptif, Octave, à instaurer l'Empire absolu.

Votre question de culture historique :
En quelle langue César, selon l'historien Suétone, aurait-il murmuré ses derniers mots « Toi aussi, mon fils » à l'adresse de Brutus ?
A : En latin d'église,
B : En grec ancien,
C : En langue étrusque,
ou D : En celte gaulois ?

C'était en grec ancien, Kai su teknon. Les grandes familles sénatoriales de Rome parlaient le grec entre elles comme langue de haute culture et d'intimité philosophique."""
}

async def generate_all():
  out_dir = "/home/ajcha/projets/histoire/public/audio"
  os.makedirs(out_dir, exist_ok=True)
  
  import edge_tts
  voice = "fr-FR-HenriNeural" # Voix d'historien posée, chaude, culturelle
  
  for key, text in SCRIPTS.items():
    mp3_path = os.path.join(out_dir, f"{key}.mp3")
    print(f"Génération de {mp3_path} avec {voice}...")
    communicate = edge_tts.Communicate(text, voice, rate="-4%", volume="+25%")
    await communicate.save(mp3_path)
    print(f"Terminé : {mp3_path} ({os.path.getsize(mp3_path)} octets)")

if __name__ == "__main__":
  asyncio.run(generate_all())
