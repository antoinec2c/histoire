// src/data/months/12_decembre.ts
import type { EphemerisDay } from '../../types/ephemeris';

export const DECEMBRE_DAYS: Record<string, EphemerisDay> = {
  '12-25': {
    id: '12-25',
    month: 12,
    day: 25,
    dateFormatted: '25 décembre',
    ephemerisTitle: "La Naissance sacrée de la France et la Restauration impériale",
    saintOfTheDay: 'Nativité du Seigneur',
    mainEvent: {
      year: 496,
      yearDisplay: '496 (ou 498)',
      title: "Le Baptême de Clovis à Reims : L'alliance fondatrice des Francs et de l'Église des Gaules",
      subtitle: "Le choix politique d'un chef barbare au milieu de l'anarchie post-romaine",
      era: 'haut_moyen_age',
      theme: 'politique_pouvoir',
      scope: 'france',
      location: 'Reims',
      keyFigures: ['Clovis Ier', 'Saint Remi', 'Sainte Clotilde'],
      narrativeExpress: `Le 25 décembre 496 (ou 498), dans le baptistère de Reims décoré d'oriflammes et de cierges précieux, Clovis, roi des Francs saliens, reçoit l'onction baptismale des mains de l'évêque Remi : « Courbe la tête, fier Sicambre ; adore ce que tu as brûlé, brûle ce que tu as adoré ». Avec lui, trois mille de ses féroces guerriers plongent dans l'eau sainte. Loin d'une simple illumination mystique, cet acte est un coup de maître politique. Tandis que les autres rois germaniques (Wisigoths, Burgondes, Ostrogoths) sont adeptes de l'hérésie arienne et haïs par les populations indigènes gallo-romaines, Clovis embrasse la foi catholique nicéenne. Il s'assure ainsi le ralliement de l'épiscopat gaulois, unique armature administrative survivante de l'Empire romain, scellant le pacte millénaire entre le peuple franc et l'Église.`,
      narrativeDeepDive: `Après l'effondrement de l'Empire romain d'Occident en 476, la Gaule sombre dans le morcellement féodal primitif. Les Wisigoths ariens occupent l'Aquitaine et l'Espagne ; les Burgondes s'implantent en vallée du Rhône ; au nord, les Francs ne sont qu'une confédération de tribus barbares païennes.

Dans ce chaos, une seule institution a conservé ses cadastres, ses tribunaux et sa cohésion : l'Église catholique des Gaules. Ses évêques, issus de la haute noblesse sénatoriale gallo-romaine, sont les véritables maîtres des cités. Or, ces évêques abhorrent les envahisseurs wisigoths et burgondes parce qu'ils sont ariens (doctrine niant la consubstantialité du Christ).

Clovis, fils de Childéric, mesure la faille géopolitique. Poussé par son épouse Clotilde, princesse burgonde catholique, et conseillé par l'évêque Remi de Reims, il comprend qu'en embrassant le catholicisme romain, il s'ouvre les portes de toutes les cités de Gaule sans coup férir. Le baptême de Reims n'est pas un caprice pieux consécutif à la bataille de Tolbiac : c'est un traité d'alliance stratégique. En recevant l'huile sainte, Clovis devient le bras séculier légitime de la population gallo-romaine autochtone contre les rois ariens. En quelques années, de Vouillé à Toulouse, les populations lui livrent les forteresses : la France est née de cette fusion entre l'épée franque et la civilisation romaine.`,
      politicalAnalysis: {
        motive: "S'assurer le ralliement sans combat de la population gallo-romaine et de l'administration épiscopale contre les royaumes barbares ariens rivaux.",
        stakes: "Surmonter l'hostilité séculaire entre conquérants germains et conquis gallo-romains pour unifier l'espace des Gaules.",
        consequence: "La naissance du titre de « Fille aînée de l'Église » et la prééminence dynastique de la lignée franque sur l'Occident chrétien."
      }
    },
    perspectiveEvent: {
      year: 800,
      yearDisplay: '800',
      title: "Le Couronnement de Charlemagne à Rome : La renaissance impériale d'Occident",
      era: 'haut_moyen_age',
      scope: 'europe',
      location: 'Rome (Basilique Saint-Pierre)',
      summary: "Le 25 décembre 800, dans la basilique Saint-Pierre de Rome, le pape Léon III pose la couronne impériale sur la tête de Charles, roi des Francs et des Lombards. Acclamé par le peuple romain comme empereur auguste, Charlemagne ressuscite la souveraineté impériale d'Occident disparue depuis 476. Cet acte audacieux fonde le modèle carolingien et détache définitivement la politique européenne de l'orbite byzantine."
    },
    centuryEchoes: [
      {
        year: 800,
        yearDisplay: '800',
        era: 'haut_moyen_age',
        title: 'Couronnement impérial de Charlemagne à Rome',
        scope: 'europe',
        shortDescription: 'Le pape Léon III couronne le roi franc empereur des Romains à Saint-Pierre, ressuscitant l’Empire d’Occident face à Constantinople.'
      },
      {
        year: 1066,
        yearDisplay: '1066',
        era: 'moyen_age_feodal',
        title: 'Couronnement de Guillaume le Conquérant',
        scope: 'europe',
        shortDescription: 'Après le bain de sang d’Hastings, le duc de Normandie ceint la couronne d’Angleterre en l’abbaye de Westminster le jour de Noël.'
      },
      {
        year: 1100,
        yearDisplay: '1100',
        era: 'moyen_age_feodal',
        title: 'Baudouin Ier couronné roi de Jérusalem à Bethléem',
        scope: 'monde',
        shortDescription: 'Au terme de la Première Croisade, Baudouin de Boulogne est sacré premier roi du Royaume franc de Jérusalem dans la basilique de la Nativité.'
      },
      {
        year: 1492,
        yearDisplay: '1492',
        era: 'renaissance_moderne',
        title: 'Naufrage de la Santa María et fondation de La Navidad',
        scope: 'monde',
        shortDescription: 'Christophe Colomb perd sa caravelle amirale sur les récifs d’Hispaniola et érige avec son bois le premier établissement européen permanent aux Amériques.'
      },
      {
        year: 1745,
        yearDisplay: '1745',
        era: 'grand_siecle_lumieres',
        title: 'Traité de Dresde : la Prusse conserve la Silésie',
        scope: 'europe',
        shortDescription: 'Frédéric II force Marie-Thérèse d’Autriche à lui abandonner la riche Silésie, imposant définitivement la puissance militaire prussienne sur l’échiquier européen.'
      },
      {
        year: 1799,
        yearDisplay: '1799',
        era: 'revolutions_empires',
        title: 'Entrée en vigueur de la Constitution de l’An VIII',
        scope: 'france',
        shortDescription: 'Bonaparte concentre les pouvoirs exécutifs comme Premier Consul, clôturant l’instabilité révolutionnaire et posant les bases de l’administration moderne.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'Fraternisation de Noël dans les tranchées d’Ypres',
        scope: 'europe',
        shortDescription: 'Entre les lignes de barbelés des Flandres, soldats français, britanniques et allemands déposent spontanément leurs fusils pour chanter et enterrer leurs morts.'
      },
      {
        year: 1989,
        yearDisplay: '1989',
        era: 'epoque_contemporaine',
        title: 'Exécution des époux Ceaușescu en Roumanie',
        scope: 'europe',
        shortDescription: 'Après un procès sommaire de quelques minutes, le dictateur communiste et son épouse sont fusillés le jour de Noël, achevant l’effondrement des régimes satellites de l’Est.'
      },
      {
        year: 1991,
        yearDisplay: '1991',
        era: 'epoque_contemporaine',
        title: 'Démission de Mikhaïl Gorbatchev et chute de l’URSS',
        scope: 'monde',
        shortDescription: 'Le drapeau rouge soviétique est abaissé sur le Kremlin ; l’Empire soviétique s’effondre sans un coup de feu après soixante-dix ans de tyrannie marxiste-léniniste.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Courbe la tête, fier Sicambre »',
      content: '« Depone colla, mitis Sigamber, adora quod incendisti, incende quod adorasti » (Courbe la tête, fier Sicambre ; adore ce que tu as brûlé, brûle ce que tu as adoré). Par cette injonction solennelle rapportée par Grégoire de Tours, l’évêque Remi rappelle au souverain franc que la force brute de la hache barbare doit désormais s’incliner devant la loi morale et spirituelle.',
      sourceOrAttribution: 'Grégoire de Tours, Histoire des Francs (Livre II)',
      contextExplanation: 'Les Sicambres étaient une tribu franque fameuse pour sa férocité martiale ; Remi honore le sang guerrier de Clovis tout en exigeant la discipline de la foi.'
    },
    quiz: {
      question: "Quelle raison géopolitique majeure a poussé Clovis à choisir la foi catholique plutôt que l'arianisme professé par les autres rois barbares ?",
      options: [
        { id: 'A', label: "Obtenir l'alliance de l'épiscopat gallo-romain qui tenait l'administration des cités" },
        { id: 'B', label: "S'attirer les faveurs de l'Empereur byzantin qui menaçait d'envahir la Gaule" },
        { id: 'C', label: "Remplir les caisses de son trésor avec les impôts levés par le pape" },
        { id: 'D', label: "Éviter une révolte militaire de ses propres guerriers francs déjà convertis" }
      ],
      correctOptionId: 'A',
      explanation: "L'épiscopat catholique représentait la seule armature administrative subsistant après la chute de Rome. En adoptant leur foi, Clovis se fit reconnaître comme libérateur par la masse gallo-romaine contre les envahisseurs ariens.",
      historicalContextTip: "Les guerriers francs de Clovis étaient encore des païens farouches attachés au culte des armes."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `25 décembre 496. Dans le baptistère illuminé de Reims, l'évêque Remi verse l'huile sainte sur le front de Clovis, roi des Francs saliens.

« Courbe la tête, fier Sicambre ; adore ce que tu as brûlé, brûle ce que tu as adoré. »

Ce jour-là est fondé le royaume des Francs, matrice de la France. Mais refusons l'angélisme d'un miracle de catéchisme : Clovis est un chef barbare sanguinaire, assassin de ses rivaux de sang, habitué au pillage et à la loi des armes. Pourquoi plie-t-il le genou devant la croix ?

Par un calcul politique d'un cynisme et d'une lucidité foudroyants. Après la déposition du dernier empereur romain en 476, la Gaule est aux mains des rois barbares wisigoths et burgondes. Mais ces conquérants ont commis l'erreur politique de professer l'hérésie arienne, ce qui leur aliène la population autochtone gallo-romaine et surtout ses puissants évêques, seuls banquiers, juges et administrateurs encore debout. En choisissant l'orthodoxie catholique, Clovis s'achète sans débourser un denier l'appui du peuple et des élites locales. Les cités d'Aquitaine lui ouvriront leurs portes comme à un libérateur.

Mais regardez comment le 25 décembre scelle le destin de l'Europe à travers deux millénaires d'histoire ininterrompue :

En l’an 800, Charlemagne se fait couronner empereur d'Occident à Rome par le pape Léon trois, relevant l'Empire romain face à Byzance.

En 1066, après le carnage d'Hastings, Guillaume le Conquérant est sacré roi d'Angleterre à Westminster le jour de Noël, liant à jamais les destins de la France et de l'Angleterre.

En 1100, au terme de la Première Croisade, Baudouin de Boulogne est couronné premier roi de Jérusalem dans la basilique de Bethléem.

En 1492, Christophe Colomb fait naufrage avec la Santa María sur les côtes d'Hispaniola et fonde La Navidad, premier établissement permanent européen aux Amériques.

En 1745, par le traité de Dresde, Frédéric deux de Prusse arrache la riche Silésie aux Habsbourg et hisse la Prusse au rang de grande puissance militaire.

En 1799, Bonaparte met en vigueur la Constitution de l'An Huit : devenu Premier Consul, il clôt l'anarchie révolutionnaire et fonde l'État moderne.

En 1914, au cœur de la boue d'Ypres, retentit la trêve de Noël où soldats français, britanniques et allemands déposent spontanément leurs fusils pour fraterniser.

En 1989, le dictateur communiste roumain Nicolae Ceaușescu est fusillé avec son épouse à Târgoviște après un procès éclair, marquant l'effondrement du rideau de fer.

Et le 25 décembre 1991, le drapeau rouge soviétique est descendu du Kremlin dans le silence de la nuit moscovite : après soixante-dix ans de tyrannie, l'URSS cesse d'exister.

La grande leçon politique est limpide : le pouvoir ne dure que s'il repose sur une légitimité civile partagée.

Votre question de culture géopolitique :
Quelle hérésie chrétienne professaient les royaumes wisigoths et burgondes rivaux de Clovis, qui précipita leur perte face à l'alliance franque ?
Première proposition : le catharisme.
Deuxième proposition : l'arianisme.
Troisième proposition : le donatisme.
Ou quatrième proposition : le nestorianisme.

La réponse est la deuxième proposition, l'arianisme. En rejetant cette dissidence théologique pour s'allier à l'orthodoxie romaine, Clovis a forgé l'unité de la future nation française.`
      },
      approfondi: {
        durationMinutes: 10,
        script: `Le 25 décembre est sans conteste la date matricielle de l'Europe occidentale. En ce même jour d'hiver se superposent deux sacres fondateurs : le baptême de Clovis à Reims en 496, et le couronnement impérial de Charlemagne à Rome en 800.

Analysons avec réalisme l'acte politique de Clovis. En 481, lorsqu'il succède à son père Childéric Premier, Clovis n'est qu'un chef de bande parmi d'autres au milieu de l'anarchie barbare qui a suivi la dislocation de l'Empire d'Occident. Les Wisigoths d'Alaric règnent sur l'Aquitaine et l'Espagne ; les Burgondes dominent Lyon et la vallée du Rhône ; les Alamans menacent sur le Rhin.

Mais les rois wisigoths et burgondes souffrent d'une faiblesse rédhibitoire : ils sont ariens. Aux yeux de la masse des Gallo-Romains et de leur clergé, ils sont des usurpateurs et des hérétiques. Or, la seule force institutionnelle ayant survécu à la disparition des légions romaines, c'est l'épiscopat catholique. Les évêques, issus des grandes familles de la noblesse sénatoriale gallo-romaine, contrôlent les greniers à blé, administrent les villes, rendent la justice et orientent les volontés populaires.

Conseillé par saint Remi de Reims et soutenu par son épouse Clotilde, Clovis comprend que le catholicisme nicéen est la clé géopolitique de la Gaule. Le baptême de Reims n'a rien d'une métamorphose morale : c'est un traité de souveraineté. En recevant l'eau du baptême avec trois mille de ses guerriers, Clovis devient le protecteur officiel de la foi de ses futurs sujets. Lorsqu'en 507 il marche contre les Wisigoths à la bataille de Vouillé, les évêques et les bourgeois lui livrent les villes d'Aquitaine sans résistance.

Trois siècles plus tard, le 25 décembre 800, Charlemagne franchit l'étape suivante : en recevant le diadème impérial des mains du pape Léon trois dans la basilique Saint-Pierre de Rome, le roi des Francs et des Lombards ressuscite le titre d'Empereur des Romains. L'Occident chrétien se dote d'un pôle politique unifié, capable de rivaliser avec l'Empire byzantin d'Orient et le Califat abbasside de Bagdad.

Mais la chaîne des siècles ne s'interrompt pas à ces deux piliers :
En 1066, Guillaume le Conquérant ceint la couronne d'Angleterre à Westminster le jour de Noël, créant l'entrelacement géopolitique franco-anglais.
En 1100, Baudouin Premier est couronné roi de Jérusalem dans la basilique de Bethléem, couronnant l'épopée de la Première Croisade.
En 1492, Christophe Colomb fonde le fort La Navidad à Hispaniola après le naufrage de la Santa María, ancrant l'Europe dans le Nouveau Monde.
En 1745, Frédéric deux de Prusse signe le traité de Dresde et arrache définitivement la Silésie à l'Autriche, bouleversant l'équilibre germanique.
En 1799, la promulgation de la Constitution de l'An Huit consacre Bonaparte Premier Consul et rétablit l'autorité de l'État après la tourmente révolutionnaire.
En 1914, les tranchées d'Ypres s'apaisent lors de la fraternisation de Noël, parenthèse d'humanité dans la tourmente industrielle.
En 1989, le dictateur Nicolae Ceaușescu est exécuté en Roumanie, refermant la chape de plomb communiste sur l'Europe orientale.
Et le 25 décembre 1991, la démission de Mikhaïl Gorbatchev et l'abaissement du drapeau soviétique sur le Kremlin scellent l'effondrement de l'empire d'Octobre.

Voici la question de mémorisation active :
Quel évêque gallo-romain administra le baptême à Clovis et devint le principal conseiller de la première dynastie capétienne et mérovingienne ?
Première proposition : Saint Remi de Reims.
Deuxième proposition : Saint Martin de Tours.
Troisième proposition : Grégoire de Tours.
Ou quatrième proposition : Césaire d'Arles.

C'était la première proposition, saint Remi de Reims. Évêque politique de premier ordre, il comprit que seule l'alliance du glaive franc et de la culture romaine pouvait sauver la Gaule de la dislocation.`
      }
    }
  },
  '12-02': {
    id: '12-02',
    month: 12,
    day: 2,
    dateFormatted: '2 décembre',
    ephemerisTitle: "Le Soleil d'Austerlitz et le Sacre de la France post-révolutionnaire",
    saintOfTheDay: 'Sainte Viviane',
    mainEvent: {
      year: 1805,
      yearDisplay: '1805',
      title: "La Bataille d'Austerlitz : Le chef-d'œuvre tactique de la manœuvre napoléonienne",
      subtitle: "Un an jour pour jour après son sacre, Napoléon terrasse la coalition austro-russe",
      era: 'revolutions_empires',
      theme: 'guerres_diplomatie',
      scope: 'france',
      location: 'Austerlitz (Moravie)',
      keyFigures: ['Napoléon Ier', 'Alexandre Ier de Russie', 'François Ier d’Autriche', 'Maréchal Soult', 'Maréchal Davout'],
      narrativeExpress: `Le 2 décembre 1805, dans les brouillards matinaux de Moravie, perce le mythique « soleil d'Austerlitz ». Exactement un an après son sacre à Notre-Dame de Paris, Napoléon Ier anéantit la Troisième Coalition à la « bataille des Trois Empereurs ». Feignant la panique et dégarnissant sciemment son aile droite pour attirer les armées austro-russes loin du plateau central de Pratzen, Napoléon tend un piège magistral. Tandis que Davout encaisse le choc au sud avec une endurance de fer, Soult monte à l'assaut du plateau déserté et coupe l'armée ennemie en deux morceaux. Pris au piège sur les étangs gelés de Satschan, Russes et Autrichiens sont écrasés. Cette victoire fulgurante anéantit la coalition, dépouille les Habsbourg et dissout pour toujours le Saint-Empire romain germanique, vieux de mille ans.`,
      narrativeDeepDive: `Selon l'analyse de Jacques Bainville, l'Empire napoléonien est prisonnier d'un dilemme insoluble : consolider les frontières naturelles héritées de la Révolution française (la rive gauche du Rhin et la Belgique) tout en affrontant l'hostilité perpétuelle de l'Angleterre, qui refuse toute hégémonie française sur le continent.

À l'automne 1805, après avoir dû renoncer au débarquement en Angleterre suite au désastre de Trafalgar, Napoléon pivote avec sa Grande Armée du camp de Boulogne vers le Danube avec une vitesse foudroyante. Après avoir capturé l'armée autrichienne du général Mack à Ulm sans coup férir, Napoléon s'enfonce en Moravie. Mais sa situation est périlleuse : ses lignes de communication sont étirées sur 800 kilomètres, la Prusse menace d'entrer en guerre dans son dos, et les forces austro-russes lui sont numériquement supérieures (85 000 coalisés contre 73 000 Français).

Pour forcer les Alliés à une bataille décisive immédiate, Napoléon conçoit un piège psychologique. Il affecte l'hésitation, évacue ostensiblement le plateau dominant d'Austerlitz et affaiblit délibérément son aile droite. Les états-majors tsaristes et autrichiens tombent dans le panneau et jettent le gros de leurs divisions sur l'aile droite française pour couper la route de Vienne.

Mais sur l'aile droite, le maréchal Davout, après une marche forcée légendaire de 140 kilomètres en quarante-huit heures, tient le choc avec une ténacité de fer. Dès que le plateau de Pratzen est dégarni de troupes ennemies, Napoléon lance le corps d'armée du maréchal Soult : « Un coup de poing vigoureux et la guerre est finie ». La Grande Armée coupe les armées alliées en deux morceaux et les anéantit. Le traité de Presbourg dépouille les Habsbourg et dissout pour toujours le millénaire Saint-Empire romain germanique.`,
      politicalAnalysis: {
        motive: "Forcer la Troisième Coalition à capituler rapidement avant que la Prusse ne rejoigne le front contre la France.",
        stakes: "Prouver la légitimité militaire et dynastique du régime impérial proclamé un an plus tôt face aux vieilles monarchies d'Europe.",
        consequence: "La dissolution définitive du Saint-Empire romain germanique et la création de la Confédération du Rhin sous protectorat français."
      }
    },
    perspectiveEvent: {
      year: 1804,
      yearDisplay: '1804',
      title: "Le Sacre de Napoléon Ier à Notre-Dame : La légitimité impériale consacrée",
      era: 'revolutions_empires',
      scope: 'europe',
      location: 'Paris (Notre-Dame)',
      summary: "Le 2 décembre 1804, en présence du pape Pie VII, Napoléon Bonaparte pose lui-même la couronne impériale sur sa tête avant de couronner Joséphine. Exactement un an avant Austerlitz, ce sacre fonde la dynastie bonapartiste, alliant l'onction de l'Église, le souvenir impérial de Charlemagne et les principes civils de 1789 pour imposer la grandeur française aux monarchies européennes."
    },
    centuryEchoes: [
      {
        year: 1804,
        yearDisplay: '1804',
        era: 'revolutions_empires',
        title: 'Sacre de Napoléon Ier à Notre-Dame',
        scope: 'france',
        shortDescription: 'En présence du pape Pie VII, Napoléon pose lui-même la couronne impériale sur sa tête, sacralisant le nouveau régime devant l’Europe.'
      },
      {
        year: 1805,
        yearDisplay: '1805',
        era: 'revolutions_empires',
        title: 'La Bataille d’Austerlitz (« Bataille des Trois Empereurs »)',
        scope: 'europe',
        shortDescription: 'Napoléon anéantit les armées austro-russes sur le plateau de Pratzen, provoquant la chute du Saint-Empire romain germanique vieux de mille ans.'
      },
      {
        year: 1823,
        yearDisplay: '1823',
        era: 'revolutions_empires',
        title: 'Proclamation de la Doctrine Monroe aux États-Unis',
        scope: 'monde',
        shortDescription: 'Le président James Monroe interdit toute ingérence coloniale européenne dans les Amériques, posant le socle de l’hégémonie américaine moderne.'
      },
      {
        year: 1851,
        yearDisplay: '1851',
        era: 'revolutions_empires',
        title: 'Coup d’État de Louis-Napoléon Bonaparte',
        scope: 'france',
        shortDescription: 'Le prince-président dissout l’Assemblée nationale républicaine, ouvrant la voie à la proclamation du Second Empire le 2 décembre 1852.'
      },
      {
        year: 1870,
        yearDisplay: '1870',
        era: 'epoque_contemporaine',
        title: 'Bataille de Loigny et sacrifice des Zouaves pontificaux',
        scope: 'france',
        shortDescription: 'Durant la guerre franco-prussienne, l’armée de la Loire tente une contre-offensive désespérée dans la neige pour débloquer Paris assiégé.'
      },
      {
        year: 1942,
        yearDisplay: '1942',
        era: 'epoque_contemporaine',
        title: 'Première réaction nucléaire en chaîne contrôlée',
        scope: 'monde',
        shortDescription: 'Enrico Fermi et son équipe réussissent à Chicago la première fission nucléaire artificielle, ouvrant l’âge atomique civil et militaire.'
      },
      {
        year: 1971,
        yearDisplay: '1971',
        era: 'epoque_contemporaine',
        title: 'Fondation de la Fédération des Émirats Arabes Unis',
        scope: 'monde',
        shortDescription: 'Sous la conduite du cheikh Zayed, six émirats du golfe Persique s’unissent après le retrait britannique, forgeant une puissance pétrolière majeure.'
      },
      {
        year: 1990,
        yearDisplay: '1990',
        era: 'epoque_contemporaine',
        title: 'Premières élections fédérales de l’Allemagne réunifiée',
        scope: 'europe',
        shortDescription: 'Moins de deux mois après la réunification officielle, Helmut Kohl triomphe dans le premier scrutin libre panallemand depuis 1932.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Soldats, je suis content de vous »',
      content: '« Soldats, je suis content de vous. Vous avez, à la journée d’Austerlitz, justifié tout ce que j’attendais de votre intrépidité... Il vous suffira de dire : J’étais à la bataille d’Austerlitz, pour que l’on vous réponde : Voilà un brave ! » Cette proclamation rédigée par Napoléon au soir de la bataille demeure l’un des sommets de l’éloquence militaire française.',
      sourceOrAttribution: 'Napoléon Bonaparte, Proclamation du 3 décembre 1805 au bivouac d’Austerlitz',
      contextExplanation: 'L’Empereur avait passé la nuit précédant la bataille au milieu de ses bivouacs, accueilli par les soldats allumant des torches de paille pour célébrer le premier anniversaire de son sacre.'
    },
    quiz: {
      question: "Quel plateau stratégique, délibérément dégarni par Napoléon pour tendre son piège, fut repris d'assaut par le maréchal Soult pour fendre le centre austro-russe ?",
      options: [
        { id: 'A', label: 'Le plateau de Pratzen' },
        { id: 'B', label: 'Le plateau de Craonne' },
        { id: 'C', label: 'Le mont Saint-Jean' },
        { id: 'D', label: 'Le plateau de Montmirail' }
      ],
      correctOptionId: 'A',
      explanation: "Le plateau de Pratzen constituait la clé de voûte de la plaine d'Austerlitz. Dès que les coalisés l'eurent quitté pour attaquer l'aile droite de Davout, Napoléon y fit monter les divisions de Soult, coupant l'armée ennemie en deux.",
      historicalContextTip: "Le mont Saint-Jean fut le théâtre de Waterloo en 1815, tandis que Craonne et Montmirail furent des victoires napoléoniennes de la campagne de France en 1814."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `2 décembre 1805. Dans les brumes glacées de Moravie, se lève le mythique soleil d'Austerlitz.

Exactement un an après son sacre à Notre-Dame de Paris, Napoléon Premier joue son trône et l'héritage de la France post-révolutionnaire contre les empereurs d'Autriche et de Russie. L'armée française est à huit cents kilomètres de ses frontières, les caisses de l'État sont exsangues et la Prusse menace d'entrer en guerre sur ses arrières. Il faut une victoire décisive en une seule journée.

Napoléon conçoit un piège magistral : il feint l'hésitation et dégarnit délibérément son aile droite. Les états-majors tsaristes et autrichiens s'y engouffrent pour couper la route de Vienne. Mais au sud, le maréchal Davou, accouru de Vienne après une marche surhumaine de cent quarante kilomètres en quarante-huit heures, brise les vagues d'assaut avec une ténacité d'acier. Dès que le plateau central de Prat-zen est abandonné par les Alliés, Napoléon lance le corps de Soult : « Un coup de poing vigoureux et la guerre est finie ». L'armée ennemie est coupée en deux et culbutée sur les étangs gelés de Sat-chann. Le Saint-Empire germanique, fondé par Otton le Grand en 962, est dissous pour toujours.

Mais observez comment le 2 décembre rythme la dynamique des empires et des nations à travers deux siècles d'histoire :

En 1804, Napoléon s'était fait couronner empereur des Français à Notre-Dame en présence du pape Pie sept, conférant l'onction religieuse à l'ordre civil issu de 1789.

En 1805, la victoire d'Austerlitz consacre l'hégémonie militaire française sur l'Europe continentale.

En 1823, le président américain James Monroe énonce devant le Congrès sa fameuse doctrine interdisant toute ingérence coloniale européenne dans les Amériques, posant les bases de la future superpuissance d'outre-Atlantique.

En 1851, le prince-président Louis-Napoléon Bonaparte organise son coup d'État militaire à Paris, dissolvant la Deuxième République avant de restaurer l'Empire un an plus tard.

En 1870, au cœur du tragique hiver de la guerre franco-prussienne, l'armée de la Loire et les Zouaves pontificaux se sacrifient héroïquement dans la plaine enneigée de Loigny pour tenter de sauver l'honneur de la patrie.

En 1942, sous les tribunes d'un stade de l'université de Chicago, Enrico Fermi réalise dans le secret du projet Manhattan la toute première réaction nucléaire en chaîne contrôlée, ouvrant l'âge atomique.

En 1971, six émirats du golfe Persique s'unissent sous la conduite du cheikh Zayed pour fonder les Émirats Arabes Unis, comblant le vide géopolitique laissé par le départ britannique à l'est de Suez.

Et le 2 décembre 1990, moins de deux mois après la réunification formelle, le chancelier Helmut Kohl triomphe lors des premières élections libres de l'Allemagne tout entière depuis 1932.

La grande constante politique : la manœuvre militaire ou diplomatique ne triomphe jamais par la seule accumulation de force brute, mais par l'art de pousser l'adversaire à commettre la faute qu'il brûle secrètement d'accomplir.

Votre question de stratégie militaire :
Quel plateau clé, délibérément évacué par Napoléon pour tromper les coalisés, fut repris d'assaut par Soult pour fendre l'armée austro-russe ?
Première proposition : le plateau de Craonne.
Deuxième proposition : le plateau de Pratzen.
Troisième proposition : le mont Saint-Jean.
Ou quatrième proposition : le plateau de Langres.

La réponse est la deuxième proposition, le plateau de Pratzen. En s'emparant de cette position dominante, Napoléon a brisé l'armée ennemie en deux blocs incapables de communiquer.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 2 décembre est le pivot calendaire de l'épopée napoléonienne : le sacre de 1804, le triomphe d'Austerlitz en 1805, et le coup d'État du futur Napoléon trois en 1851.

Replaçons la campagne de 1805 dans sa réalité géopolitique la plus crue. Après la rupture de la paix d'Amiens par William Pitt, l'Angleterre finance sans compter les monarchies continentales pour empêcher la France de conserver ses frontières sur le Rhin et l'embouchure de l'Escaut. Le 21 octobre 1805, le désastre naval de Trafalgar ruine les espoirs d'une invasion des îles britanniques. Napoléon n'a plus le choix : il doit terrasser les puissances continentales sur la terre ferme pour contraindre Londres à capituler.

Par une manœuvre foudroyante qui stupéfie l'Europe, les sept corps d'armée de la Grande Armée quittent Boulogne et franchissent le Rhin. Après avoir encerclé et capturé l'armée autrichienne du général Mack à Ulm sans livrer de grande bataille, Napoléon entre à Vienne. Mais la situation reste précaire. Les troupes russes du tsar Alexandre et de Koutouzov ont opéré leur jonction avec les rescapés autrichiens en Moravie. Plus périlleux encore : la Prusse hésite et s'apprête à jeter deux cent mille hommes dans la balance contre la France.

Napoléon doit forcer l'ennemi à une bataille décisive immédiate. Il feint alors la terreur et le désarroi : il propose un armistice, reçoit l'envoyé du tsar avec une mine défaite et fait évacuer ostensiblement le plateau de Prat-zen, clé de voûte naturelle de la plaine d'Austerlitz.

Persuadés que Napoléon cherche à fuir vers Vienne, les généraux coalisés tombent dans l'illusion. Ils précipitent le gros de leurs divisions en bas du plateau pour écraser le flanc droit français à Telnitz et Sokolnitz. Mais sur ce flanc sud, le maréchal Davou, arrivé de Vienne au terme d'une marche forcée légendaire de cent quarante kilomètres en quarante-huit heures, encaisse le choc avec une ténacité prodigieuse.

À neuf heures du matin, lorsque le plateau de Prat-zen est totalement dégarni par le mouvement tournant des Russes, le soleil dissipe les brouillards. Napoléon se tourne vers le maréchal Soult : « Combien de temps vous faut-il pour couronner le plateau ? — Vingt minutes, Sire. — En ce cas, partons ! »

Les divisions Vandamme et Saint-Hilaire gravissent les pentes et surprennent le centre coalisé qui est transpercé en un quart d'heure. L'armée ennemie est coupée en deux morceaux disjoints. Les troupes coalisées qui s'épuisaient contre Davou sont prises à revers et précipitées sur les étangs gelés de Sat-chann.

Au crépuscule, l'armée austro-russe a perdu trente mille hommes et toute son artillerie. L'empereur François Premier d'Autriche vient en personne solliciter un armistice au bivouac impérial. Le traité de Presbourg dépouille les Habsbourg de leurs territoires italiens et tyroliens. Le 6 août suivant, François deux renonce au titre d'Empereur des Romains : le Saint-Empire germanique, vieux de près d'un millénaire, s'effondre dans le néant.

Mais la portée historique du 2 décembre s'élargit à travers les époques :
En 1804, Napoléon recevait la couronne impériale à Notre-Dame de Paris des mains du pape Pie sept, scellant la synthèse entre légitimité monarchique et réformes civiles de 1789.
En 1823, le président américain James Monroe prononce son discours sur l'état de l'Union interdisant aux puissances européennes toute intervention sur le continent américain, fondant la doctrine qui guidera l'expansion des États-Unis.
En 1851, Louis-Napoléon Bonaparte accomplit son coup d'État militaire à Paris pour briser le blocage parlementaire, préparant l'avènement du Second Empire.
En 1870, durant l'invasion prussienne, les volontaires de l'armée de la Loire et les Zouaves pontificaux du général de Sonis et de Charette succombent avec honneur à la bataille de Loigny.
En 1942, sous les gradins du stade Stagg Field à Chicago, le physicien Enrico Fermi réalise la première réaction nucléaire en chaîne contrôlée au sein du réacteur Chicago Pile One.
En 1971, six émirats du Golfe s'unissent pour donner naissance aux Émirats Arabes Unis sous la direction du cheikh Zayed.
Et en 1990, l'Allemagne unifiée célèbre ses premières élections démocratiques communes depuis la République de Weimar, confirmant le chancelier Helmut Kohl à la tête de la première puissance économique d'Europe.

Voici la question de mémorisation active :
Quel maréchal de fer, accouru de Vienne en quarante-huit heures, permit le triomphe d'Austerlitz en résistant seul avec son corps d'armée sur l'aile droite française ?
Première proposition : le maréchal Ney.
Deuxième proposition : le maréchal Davout.
Troisième proposition : le maréchal Bernadotte.
Ou quatrième proposition : le maréchal Lannes.

La bonne réponse est la deuxième proposition, le maréchal Davout. Son endurance légendaire et le sang-froid de ses soldats au village de Sokolnitz ont fixé les trois quarts de l'armée austro-russe, permettant à Soult de porter le coup fatal au centre ennemi.`
      }
    }
  }
};
