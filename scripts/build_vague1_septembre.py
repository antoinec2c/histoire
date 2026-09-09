# scripts/build_vague1_septembre.py
# -*- coding: utf-8 -*-
"""
Générateur des fiches 09-01 à 09-10 (Vague 1 de Septembre)
"""
import os
import re

# 1. Récupération scrupuleuse de 09-08 existante
src_09 = '/home/ajcha/projets/histoire/src/data/months/09_septembre.ts'
with open(src_09, 'r', encoding='utf-8') as f:
    content = f.read()

m_0908 = re.search(r"('09-08':\s*\{[\s\S]*?\n  \})", content)
if not m_0908:
    raise Exception("Bloc 09-08 introuvable !")
block_0908 = m_0908.group(1)

# Définition des journées 09-01 à 09-07 et 09-09 à 09-10
DAYS_DICT = {}

DAYS_DICT['09-01'] = """  '09-01': {
    id: '09-01',
    month: 9,
    day: 1,
    dateFormatted: '1er septembre',
    ephemerisTitle: "Le Crépuscule du Roi-Soleil : Mort de Louis XIV et permanence de l'État",
    saintOfTheDay: 'Saint Gilles',
    mainEvent: {
      year: 1715,
      yearDisplay: '1715',
      title: "La Mort de Louis XIV à Versailles : L'apogée et la transition de la monarchie administrative",
      subtitle: "Après 72 ans de règne, le Roi-Soleil s'éteint en affirmant la transcendance des institutions royales",
      era: 'grand_siecle_lumieres',
      theme: 'politique_pouvoir',
      scope: 'france',
      location: 'Versailles (Château de Versailles)',
      keyFigures: ['Louis XIV', 'Philippe d’Orléans (Le Régent)', 'Louis XV (Le Dauphin)', 'Madame de Maintenon'],
      narrativeExpress: `Le 1er septembre 1715, à huit heures et quart du matin, Louis XIV rend son dernier soupir dans sa chambre d'apparat du château de Versailles, entouré de ses prélats et de la cour. Âgé de près de 77 ans, il conclut un règne monumental de soixante-douze années, le plus long de toute l'histoire de France et d'Europe. Alors que la gangrène dévore sa jambe, le monarque montre un stoïcisme exemplaire. Quelques jours plus tôt, il adressait à son arrière-petit-fils, l'enfant de cinq ans qui deviendra Louis XV, ces mots solennels : « Mon enfant, vous allez être un grand roi. Ne m'imitez pas dans le goût que j'ai eu pour les bâtiments, ni dans celui que j'ai eu pour la guerre ». Et à ses courtisans effondrés, il rappelait la suprématie de l'institution sur l'individu mortel : « Je m'en vais, mais l'État demeurera toujours ». Sa disparition clôt le Grand Siècle et ouvre la Régence dans une France administrativement unifiée mais financièrement épuisée par la guerre de Succession d'Espagne.`,
      narrativeDeepDive: `Pour comprendre la portée de la journée du 1er septembre 1715 selon la méthode de Jacques Bainville, il faut mesurer l'œuvre géopolitique et institutionnelle léguée par Louis XIV. À son avènement effectif à la mort de Mazarin en 1661, la France sortait d'un demi-siècle de guerres intestines et de la Fronde des princes et parlementaires. Le royaume était menacé d'encerclement permanent par les Habsbourg de Madrid et de Vienne.

En cinquante-quatre ans de pouvoir personnel sans premier ministre, Louis XIV a accompli le « pré carré » théorisé par Vauban. Par les traités d'Aix-la-Chapelle, de Nimègue, de Ryswick et enfin d'Utrecht (1713), la France a intégré la Franche-Comté, l'Artois, l'Alsace, la Flandre lilloise et le Roussillon. Surtout, au prix de l'effroyable guerre de Succession d'Espagne (1701-1714), Louis XIV est parvenu à installer son petit-fils Philippe V sur le trône de Madrid, brisant définitivement l'étau espagnol qui étranglait la France depuis Charles Quint.

Mais cette hégémonie continentale a coûté un prix budgétaire démesuré. Face aux coalitions maritimes anglo-hollandaises, le royaume a dû supporter des dettes colossales (près de deux milliards de livres). En institutionnalisant l'intendance royale dans les provinces et en domestiquant la noblesse turbulente à Versailles, Louis XIV a forgé la machine administrative moderne.

Sur son lit de mort, le roi est lucide sur la fragilité de sa succession. Les épidémies de rougeole ont fauché son fils le Grand Dauphin, puis son petit-fils le duc de Bourgogne. La couronne échoit à un orphelin de cinq ans. Conscient des convoitises, Louis XIV rédige un testament attribuant la régence à son neveu Philippe d'Orléans mais confiant la garde de l'enfant et le commandement de la maison militaire à son fils légitimé, le duc du Maine. Dès le lendemain, le Parlement de Paris cassera ce testament en échange de la restitution de son droit de remontrance, réactivant l'éternelle opposition des magistrats qui minera la monarchie jusqu'en 1789.`,
      politicalAnalysis: {
        motive: "Consolider la continuité monarchique et préserver la souveraineté du jeune Louis XV face aux factions de la cour.",
        stakes: "Empêcher la dislocation du royaume après un règne écrasant et éviter que la noblesse parlementaire ne reprenne le contrôle de l'État.",
        consequence: "La mise en place de la Régence de Philippe d'Orléans et la résurgence de la contestation parlementaire qui fragilisera l'Ancien Régime."
      }
    },
    perspectiveEvent: {
      year: 1939,
      yearDisplay: '1939',
      title: "L'Invasion de la Pologne par la Wehrmacht : Le déclenchement de la Seconde Guerre mondiale",
      era: 'epoque_contemporaine',
      scope: 'europe',
      location: 'Frontière germano-polonaise (Wieluń / Dantzig)',
      summary: "Le 1er septembre 1939 à 4h45 du matin, sans déclaration de guerre préalable, les divisions blindées et les bombardiers de l'Allemagne nazie déferlent sur la Pologne. Prétextant une provocation fabriquée à Gleiwitz, Adolf Hitler lance la Blitzkrieg. Cette agression brise définitivement l'illusion d'un ordre international fondé sur les traités et contraint la France et le Royaume-Uni à honorer leurs garanties de sécurité deux jours plus tard."
    },
    centuryEchoes: [
      {
        year: 1159,
        yearDisplay: '1159',
        era: 'moyen_age_feodal',
        title: 'Élection du pape Alexandre III et schisme impérial',
        scope: 'europe',
        shortDescription: 'L’élection d’Alexandre III déclenche un conflit violent avec l’empereur germanique Frédéric Barberousse, affirmant l’indépendance spirituelle de l’Église.'
      },
      {
        year: 1557,
        yearDisplay: '1557',
        era: 'renaissance_moderne',
        title: 'Première banqueroute royale de l’Espagne sous Philippe II',
        scope: 'europe',
        shortDescription: 'Malgré les galions d’or des Amériques, la monarchie espagnole suspend ses paiements aux banquiers génois, révélant la crise structurelle des finances impériales.'
      },
      {
        year: 1715,
        yearDisplay: '1715',
        era: 'grand_siecle_lumieres',
        title: 'Mort de Louis XIV au château de Versailles',
        scope: 'france',
        shortDescription: 'Le Roi-Soleil s’éteint après 72 ans de règne ; son arrière-petit-fils Louis XV lui succède sous la régence du duc d’Orléans.'
      },
      {
        year: 1870,
        yearDisplay: '1870',
        era: 'revolutions_empires',
        title: 'Bataille de Sedan et écrasement de l’armée de Châlons',
        scope: 'france',
        shortDescription: 'Cernées par les armées prussiennes et bavaroises de Moltke, les troupes françaises sont pilonnées sans issue sous les yeux de Napoléon III.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'Prise d’Amiens par l’armée impériale allemande',
        scope: 'france',
        shortDescription: 'Au plus fort de la Grande Retraite, les troupes allemandes occupent temporairement Amiens avant d’être stoppées lors de la bataille de la Marne.'
      },
      {
        year: 1923,
        yearDisplay: '1923',
        era: 'epoque_contemporaine',
        title: 'Le Grand Séisme du Kanto ravage Tokyo et Yokohama',
        scope: 'monde',
        shortDescription: 'Un cataclysme d’une magnitude de 7,9 détruit la région de Tokyo, tuant plus de 100 000 personnes et précipitant le nationalisme autoritaire japonais.'
      },
      {
        year: 1939,
        yearDisplay: '1939',
        era: 'epoque_contemporaine',
        title: 'Invasion de la Pologne par le IIIe Reich',
        scope: 'monde',
        shortDescription: 'Les armées hitlériennes attaquent la Pologne par la terre et les airs, inaugurant la Seconde Guerre mondiale en Europe.'
      },
      {
        year: 1969,
        yearDisplay: '1969',
        era: 'epoque_contemporaine',
        title: 'Coup d’État militaire de Mouammar Kadhafi en Libye',
        scope: 'monde',
        shortDescription: 'De jeunes officiers nassériens renversent la monarchie pro-occidentale du roi Idris et proclament la République arabe libyenne.'
      },
      {
        year: 2004,
        yearDisplay: '2004',
        era: 'epoque_contemporaine',
        title: 'Prise d’otages terroriste de Beslan en Russie',
        scope: 'monde',
        shortDescription: 'Un commando islamiste tchétchène séquestre plus de mille enfants et adultes dans une école d’Ossétie du Nord, entraînant un assaut tragique.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Je m’en vais, mais l’État demeurera toujours »',
      content: '« Je m’en vais, mais l’État demeurera toujours. » Cette parole suprême prononcée par Louis XIV sur son lit de mort devant ses courtisans en larmes résume toute la philosophie politique du Grand Siècle : la personne physique du roi s’efface devant la permanence immortelle de la personne publique de l’État régalien.',
      sourceOrAttribution: 'Marquis de Dangeau, Journal de la cour de Louis XIV (tome XVI) et Saint-Simon, Mémoires (Année 1715)',
      contextExplanation: 'Louis XIV avait passé son règne à lutter contre les forces centrifuges de la féodalité et de la Fronde pour imposer l’autorité de la loi civile sur tout le territoire.'
    },
    quiz: {
      question: "Combien d'années dura le règne personnel et officiel de Louis XIV, constituant le plus long règne documenté de l'histoire de France ?",
      options: [
        { id: 'A', label: '72 ans et 110 jours' },
        { id: 'B', label: '60 ans et 4 mois' },
        { id: 'C', label: '54 ans et 8 mois' },
        { id: 'D', label: '68 ans et 20 jours' }
      ],
      correctOptionId: 'A',
      explanation: "Monté sur le trône le 14 mai 1643 à l'âge de quatre ans et demi, Louis XIV est mort le 1er septembre 1715, accomplissant un règne officiel de 72 ans et 110 jours (dont 54 ans de règne personnel sans premier ministre après la mort de Mazarin en 1661).",
      historicalContextTip: "Les 54 ans de règne personnel correspondent à la période s'étendant de la mort du cardinal Mazarin en 1661 jusqu'en 1715."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `1er septembre 1715. À Versailles, le silence fige la chambre du roi. À huit heures et quart du matin, Louis quatorze s'éteint après soixante-douze années de règne.

C'est la fin du Grand Siècle. Le monarque qui avait incarné l'apogée de la monarchie absolue de droit divin quitte la scène du monde avec une dignité glacée. Face à ses courtisans en larmes, il lâche ces mots qui résument l'essence de la souveraineté française : « Je m'en vais, mais l'État demeurera toujours ».

Quel bilan géopolitique laisse-t-il au royaume ? Par le génie militaire de Turenne, Condé et Vauban, Louis quatorze a sculpté le pré carré français : l'Alsace, la Flandre lilloise, la Franche-Comté et le Roussillon sont définitivement rattachés à la couronne. Par la guerre de Succession d'Espagne, il a assis un prince bourbon à Madrid, brisant l'encerclement séculaire des Habsbourg. Mais cette gloire s'est payée d'un fardeau financier écrasant et d'une noblesse domestiquée qui attend la mort du maître pour contester l'autorité centrale.

Mais regardez comment le 1er septembre scelle les tournants du destin à travers les époques :

En 1159, l'élection du pape Alexandre trois ouvre le grand schisme contre l'empereur germanique Frédéric Barberousse, sanctifiant l'indépendance de l'Église.

En 1557, la première banqueroute officielle de la monarchie espagnole de Philippe deux prouve que l'or des Amériques ne remplace pas une industrie productive.

En 1870, au canon de Sedan, l'armée française de Napoléon trois est encerclée par les Prussiens, prélude à la chute du Second Empire le surlendemain.

En 1914, au cœur de la Grande Retraite, les troupes allemandes occupent temporairement la ville d'Amiens.

En 1923, le grand séisme du Kanto anéantit Tokyo et Yokohama, accélérant la dérive militariste de l'Empire du Soleil-Levant.

En 1939, les panzers d'Hitler franchissent la frontière polonaise : l'Europe plonge dans la Seconde Guerre mondiale.

En 1969, le jeune colonel Mouammar Kadhafi prend le pouvoir par un coup d'État en Libye.

Et en 2004, le drame terroriste de Beslan en Ossétie du Nord rappelle la violence des fractures du Caucase.

La grande leçon de l'Histoire : les souverains et les régimes passent, mais l'armature administrative de l'État demeure le seul rempart des nations contre le chaos.

Votre question de mémoire active :
Combien d'années dura le règne officiel de Louis quatorze, constituant le record absolu de la monarchie française ?
Première proposition : 72 ans.
Deuxième proposition : 60 ans.
Troisième proposition : 54 ans.
Ou quatrième proposition : 68 ans.

La bonne réponse est la première proposition, 72 ans et 110 jours, dont 54 années de règne personnel après la disparition du cardinal Mazarin.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 1er septembre 1715 marque une coupure fondamentale dans l'histoire de France : la mort de Louis quatorze et la transition de l'État monarchique vers les incertitudes du dix-huitième siècle.

Pour juger l'œuvre du Roi-Soleil avec la rigueur réaliste de Jacques Bainville, il faut mesurer l'immense péril qui menaçait la France à son avènement en 1643. Le royaume sortait de la guerre de Trente Ans et allait sombrer dans les convulsions anarchiques de la Fronde. Des princes de sang comme Condé n'hésitaient pas à s'allier avec les Espagnols pour faire triompher leurs ambitions personnelles contre l'autorité royale.

Lorsque Mazarin meurt le 9 mars 1661, le jeune roi prend une décision inouïe : gouverner seul, sans premier ministre. Il élimine le surintendant Fouquet pour assainir les finances, place Jean-Baptiste Colbert aux commandes du commerce et de la marine, Louvois à la guerre, et charge Vauban de ceinturer le royaume d'une double ligne de forteresses imprenables.

Sur le plan géopolitique, toute la politique extérieure de Louis quatorze a consisté à repousser la frontière française vers le nord et vers l'est pour éloigner Paris des coups de main ennemis. À la fin de son règne, la France a gagné Strasbourg, Besançon, Lille, Dunkerque et Perpignan. Le traité d'Utrecht en 1713 consacre le couronnement de cette diplomatie : malgré l'hostilité furieuse de la coalition anglo-hollandaise et autrichienne, le petit-fils de Louis quatorze conserve la couronne d'Espagne sous le nom de Philippe cinq. L'alliance franco-espagnole neutralise pour un siècle la menace sur les Pyrénées.

Mais le revers de cette politique de puissance est brutal. La guerre de Succession d'Espagne a vidé les caisses de l'État. Pour financer les armées royales, il a fallu créer des impôts pesant sur tous, comme la capitation et le dixième. Le grand hiver de 1709 a ravagé les campagnes françaises. Sur son lit de mort, rongé par la gangrène, Louis quatorze adresse au petit Dauphin de cinq ans ce mea culpa pathétique : « J'ai trop aimé la guerre ».

Le drame immédiat du 1er septembre 1715 est la vacance du pouvoir d'un homme fort. Les fils et petit-fils légitimes du roi sont morts d'épidémies foudroyantes. Le futur Louis quinze n'est qu'un enfant. Conscient que son neveu le duc d'Orléans est contesté, Louis quatorze avait rédigé un testament complexe pour partager la régence avec le duc du Maine, son fils légitimé.

Dès le lendemain 2 septembre, le Parlement de Paris cassera le testament royal. Pour s'assurer le pouvoir suprême, le Régent Philippe d'Orléans rend aux magistrats parlementaires le droit de remontrance que Louis quatorze leur avait confisqué cinquante ans plus tôt. C'est l'étincelle qui réactive la fronde des robins et des parlements, opposition conservatrice qui bloquera toutes les réformes fiscales jusqu'à la Révolution de 1789.

Voici votre question de mémorisation active :
Quel ministre et réformateur militaire de génie organisa sous Louis quatorze l'armée permanente française et l'uniforme régulier de l'infanterie ?
Première proposition : Louvois.
Deuxième proposition : Colbert.
Troisième proposition : Vauban.
Ou quatrième proposition : Chamillart.

La bonne réponse est la première proposition, le marquis de Louvois. Secrétaire d'État à la Guerre, il transforma les bandes féodales en la première armée professionnelle moderne d'Europe, forte de quatre cent mille hommes.`
      }
    }
  }"""
