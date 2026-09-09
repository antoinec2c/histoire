# scripts/data_09_07_09_10.py
# -*- coding: utf-8 -*-

DAYS = {}

# 09-07 : Bataille de la Moskova / Borodino (1812) & Naissance d'Élisabeth Ire (1533)
DAYS['09-07'] = """  '09-07': {
    id: '09-07',
    month: 9,
    day: 7,
    dateFormatted: '7 septembre',
    ephemerisTitle: "Le Choc Titanesque de la Moskova et l'Éveil de l'Angleterre Élisabéthaine",
    saintOfTheDay: 'Sainte Reine',
    mainEvent: {
      year: 1812,
      yearDisplay: '1812',
      title: "La Bataille de la Moskova (Borodino) : Le carnage héroïque aux portes de Moscou",
      subtitle: "Napoléon force les redoutes russes de Koutouzov au prix de 70 000 victimes en une seule journée",
      era: 'revolutions_empires',
      theme: 'guerres_diplomatie',
      scope: 'europe',
      location: 'Borodino / Rivière Moskova (Russie)',
      keyFigures: ['Napoléon Ier', 'Mikhaïl Koutouzov', 'Maréchal Ney', 'Prince Bagration', 'Général Caulaincourt'],
      narrativeExpress: `Le 7 septembre 1812 à six heures du matin, sous les brumes de la plaine de Borodino à cent kilomètres à l'ouest de Moscou, Napoléon lance la Grande Armée à l'assaut des retranchements russes. Face aux deux cent cinquante mille hommes engagés et aux mille pièces d'artillerie qui tonnent sans discontinuer, la journée vire au massacre le plus meurtrier de l'épopée impériale. Les Français s'emparent de haute lutte de la redoute de Schwardino, puis de la terrible redoute Raïevski où le général Auguste de Caulaincourt trouve la mort au galop de ses cuirassiers. Le maréchal Ney gagne le titre de « prince de la Moskowa » en menant personnellement les charges d'infanterie sous la mitraille. Bien que Koutouzov ordonne la retraite à la tombée de la nuit et livre Moscou sans nouveau combat, l'armée russe n'est pas anéantie : elle a reculé avec ordre, laissant Napoléon s'enfoncer dans le piège mortel d'un hiver russe sans ravitaillement.`,
      narrativeDeepDive: `Pour comprendre la campagne de Russie de 1812 avec Jacques Bainville, il faut revenir aux causes structurelles du Blocus continental. Depuis le traité de Tilsit en 1807, l'Empire napoléonien tente d'étouffer économiquement l'Angleterre en lui interdisant tout commerce avec le continent européen. Mais le tsar Alexandre Ier, dont l'aristocratie terrienne vit de l'exportation du bois, du suif et du blé vers les ports anglais, rouvre ses frontières aux navires neutres et taxe lourdement les produits manufacturés français dès 1810.

Pour contraindre la Russie à respecter le Blocus, Napoléon n'a d'autre choix que d'engager la Grande Armée : une force colossale de six cent mille hommes levée dans toute l'Europe (Français, Polonais, Allemands, Italiens). Mais les états-majors russes refusent la bataille décisive et appliquent la stratégie de la terre brûlée théorisée par Barclay de Tolly : détruire les récoltes, brûler les villages et attirer l'envahisseur toujours plus loin dans l'immensité des steppes.

À Borodino, la pression patriotique et religieuse force Koutouzov à livrer bataille pour sauver la ville sainte de Moscou. Le choc est d'une brutalité mécanique effroyable : cinquante boulets par minute tombent sur les lignes russes. Napoléon, fiévreux et souffrant, refuse d'engager sa Garde impériale pour porter le coup de grâce : « À huit cents lieues de Paris, je ne puis risquer mon dernier pion ».

La Grande Armée entre à Moscou le 14 septembre, mais la ville est incendiée par ordre du gouverneur Rostopchine. Napoléon attend en vain des offres de paix d'Alexandre. Le piège s'est refermé : la retraite dans la neige glacée et le désastre de la Bérézina anéantiront l'armée impériale, ouvrant la voie au soulèvement général de l'Allemagne contre la domination française.`,
      politicalAnalysis: {
        motive: "Contraindre le tsar Alexandre Ier à réintégrer le Blocus continental dirigé contre l'Angleterre.",
        stakes: "L'impossibilité géopolitique de soumettre l'immensité continentale russe sans bases logistiques durables.",
        consequence: "L'occupation éphémère de Moscou, l'anéantissement de la Grande Armée lors de la retraite d'hiver et le basculement des puissances européennes contre la France."
      }
    },
    perspectiveEvent: {
      year: 1533,
      yearDisplay: '1533',
      title: "La Naissance d'Élisabeth Ire d'Angleterre au Palais de Greenwich",
      era: 'renaissance_moderne',
      scope: 'europe',
      location: 'Greenwich (Londres)',
      summary: "Le 7 septembre 1533 naît Élisabeth Tudor, fille d'Henri VIII et d'Anne Boleyn. Considérée comme illégitime après la décapitation de sa mère, elle deviendra la 'Reine Vierge', forgeant au cours d'un règne de 45 ans l'indépendance de l'Église anglicane, le triomphe sur l'Invincible Armada espagnole en 1588 et l'essor de la puissance maritime anglaise."
    },
    centuryEchoes: [
      {
        year: 1191,
        yearDisplay: '1191',
        era: 'moyen_age_feodal',
        title: 'Bataille d’Arsouf en Terre sainte',
        scope: 'monde',
        shortDescription: 'Richard Cœur de Lion bat l’armée musulmane de Saladin durant la Troisième Croisade, sécurisant la côte levantine pour les chrétiens.'
      },
      {
        year: 1533,
        yearDisplay: '1533',
        era: 'renaissance_moderne',
        title: 'Naissance de la reine Élisabeth Ire à Greenwich',
        scope: 'europe',
        shortDescription: 'Fille d’Anne Boleyn, elle deviendra la souveraine emblématique de l’Âge d’or élisabéthain et de l’expansion maritime anglaise.'
      },
      {
        year: 1701,
        yearDisplay: '1701',
        era: 'grand_siecle_lumieres',
        title: 'Signature du traité de La Haye (Grande Alliance contre Louis XIV)',
        scope: 'europe',
        shortDescription: 'L’Angleterre, l’Autriche et les Provinces-Unies s’unissent pour contester l’accession de Philippe V au trône d’Espagne, déclenchant la guerre de Succession d’Espagne.'
      },
      {
        year: 1812,
        yearDisplay: '1812',
        era: 'revolutions_empires',
        title: 'Bataille de la Moskova (Borodino) aux portes de Moscou',
        scope: 'europe',
        shortDescription: 'Napoléon enfonce les redoutes russes de Koutouzov au terme d’un choc sanglant faisant 70 000 victimes en une journée.'
      },
      {
        year: 1822,
        yearDisplay: '1822',
        era: 'revolutions_empires',
        title: '« Le Cri d’Ipiranga » et l’Indépendance du Brésil',
        scope: 'monde',
        shortDescription: 'Sur les bords de l’Ipiranga, le prince régent Pierre proclame « L’Indépendance ou la Mort ! », rompant les liens coloniaux avec le Portugal.'
      },
      {
        year: 1940,
        yearDisplay: '1940',
        era: 'epoque_contemporaine',
        title: 'Début du Blitz aérien allemand sur Londres',
        scope: 'europe',
        shortDescription: 'La Luftwaffe déclenche cinquante-sept nuits consécutives de bombardements massifs sur la capitale britannique pour briser le moral civil.'
      },
      {
        year: 1977,
        yearDisplay: '1977',
        era: 'epoque_contemporaine',
        title: 'Signature des traités Torrijos-Carter sur le canal de Panama',
        scope: 'monde',
        shortDescription: 'Les États-Unis acceptent de restituer le contrôle de la zone stratégique du canal de Panama aux autorités panaméennes d’ici l’an 2000.'
      },
      {
        year: 1986,
        yearDisplay: '1986',
        era: 'epoque_contemporaine',
        title: 'Desmond Tutu devient le premier archevêque noir du Cap',
        scope: 'monde',
        shortDescription: 'Le prix Nobel de la paix prend la tête de l’Église anglicane d’Afrique du Sud, tournant moral majeur dans la lutte contre l’apartheid.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Les Français s’y montrèrent dignes de vaincre... »',
      content: '« De toutes les batailles que j’ai livrées, la plus terrible a été celle devant Moscou. Les Français s’y montrèrent dignes de vaincre, et les Russes dignes d’être invincibles. » Ce jugement lucide consigné par Napoléon dans ses mémoires à Sainte-Hélène résume le choc titanesque de Borodino, où le courage des soldats s’épuisa contre l’immensité de la résistance russe.',
      sourceOrAttribution: 'Napoléon Bonaparte, Mémorial de Sainte-Hélène recueilli par le comte de Las Cases',
      contextExplanation: 'Sur le champ de bataille jonché de cadavres, Napoléon parcourut les redoutes silencieuses au crépuscule, frappé par le stoïcisme des grenadiers russes qui mouraient sans crier.'
    },
    quiz: {
      question: "Quel généralissime russe, vieux vétéran borgne des guerres contre les Ottomans, commandait l'armée tsariste retranchée à Borodino le 7 septembre 1812 ?",
      options: [
        { id: 'A', label: 'Mikhaïl Koutouzov' },
        { id: 'B', label: 'Michel Barclay de Tolly' },
        { id: 'C', label: 'Piotr Bagration' },
        { id: 'D', label: 'Alexeï Iermolov' }
      ],
      correctOptionId: 'A',
      explanation: "Le prince Mikhaïl Koutouzov, nommé commandant en chef par le tsar Alexandre pour galvaniser la fibre nationale et religieuse russe, organisa la défense de Borodino avant de choisir d'abandonner Moscou pour préserver son armée intacte.",
      historicalContextTip: "Le prince Bagration, héros légendaire de l'infanterie russe, fut mortellement blessé à la cuisse lors de la défense acharnée des flèches de Borodino."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `7 septembre 1812. À cent kilomètres de Moscou, dans la plaine boueuse de Borodino, la terre tremble sous le tonnerre de mille canons.

C'est la bataille de la Moskova. Napoléon lance deux cent cinquante mille hommes à l'assaut des redoutes russes défendues avec un fanatisme sacré par les troupes de Koutouzov. Le carnage est effroyable : soixante-dix mille hommes tombent en une seule journée. Le maréchal Ney mène les charges sous la mitraille et gagne son titre de prince de la Moskowa.

Napoléon l'emporte, et Moscou lui ouvre ses portes sans combat. Mais cette victoire est un piège mortel. L'armée russe n'a pas été anéantie ; elle s'est repliée avec discipline. Privé d'interlocuteur dans une ville incendiée par ses propres habitants, l'Empereur devra ordonner la retraite dans l'hiver blanc, où le froid et les Cosaques dévoreront la Grande Armée.

Mais regardez comment le 7 septembre rythme les grands basculements du monde :

En 1191, à la bataille d'Arsouf en Terre sainte, Richard Cœur de Lion inflige un revers cinglant à Saladin.

En 1533, naissance d'Élisabeth Première d'Angleterre au palais de Greenwich, souveraine qui forgera la suprématie maritime britannique.

En 1701, le traité de La Haye coalise l'Europe contre Louis quatorze, ouvrant la guerre de Succession d'Espagne.

En 1822, sur les rives de l'Ipiranga, le prince régent Pierre proclame l'indépendance du Brésil vis-à-vis du Portugal.

En 1940, la Luftwaffe commence le Blitz sur Londres : cinquante-sept nuits d'enfer sous les bombes pour plier le peuple britannique.

En 1977, les traités de Panama amorcent la rétrocession du canal sous la présidence de Jimmy Carter.

Et en 1986, Desmond Tutu devient le premier archevêque noir du Cap, symbole du recul de l'apartheid en Afrique du Sud.

La grande constante politique : aucune puissance, aussi géniale et invincible soit-elle militairement, ne peut triompher d'un empire géographique immense dont le peuple a fait le sacrifice de sa propre terre.

Votre question de stratégie militaire :
Quel illustre maréchal français s'illustra avec tant d'héroïsme à Borodino que Napoléon lui décerna le titre de prince de la Moskowa ?
Première proposition : le maréchal Ney.
Deuxième proposition : le maréchal Davout.
Troisième proposition : le maréchal Murat.
Ou quatrième proposition : le maréchal Lannes.

La bonne réponse est la première proposition, le maréchal Michel Ney, « le brave des braves », dont l'énergie indomptable sur le front de Borodino emporta les lignes fortifiées russes.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 7 septembre 1812 offre la tragédie militaire la plus sanglante du Premier Empire : la bataille de la Moskova, que les Russes appellent Borodino, et qui scelle le commencement de la fin pour Napoléon.

Replongeons dans la logique inexorable de cette campagne à l'aide des analyses de Jacques Bainville. Pourquoi Napoléon est-il allé jusqu'à Moscou ? Non pas par soif de conquête stérile, mais parce qu'il était prisonnier de son système du Blocus continental. Depuis la rupture navale de Trafalgar, la France ne peut vaincre l'Angleterre qu'en fermant hermétiquement tous les marchés européens aux marchandises de Londres. Lorsque le tsar Alexandre Premier refuse de ruiner le commerce de son pays et rouvre ses ports baltes aux navires britanniques, Napoléon est condamné à frapper la Russie pour contraindre le souverain russe à capituler.

Mais la Russie n'est pas l'Autriche ni la Prusse. En quelques semaines de marche forcée à travers la Lituanie et la Biélorussie, le climat d'été étouffant, la dysenterie et le manque de fourrage tuent plus de chevaux et d'hommes que les combats. Les généraux russes refusent la bataille rangée et brûlent leurs propres récoltes pour affamer l'armée française.

Lorsque le prince Koutouzov accepte enfin la bataille devant Moscou le 7 septembre 1812, il a retranché ses cent vingt mille hommes derrière des fortifications de terre formidables : les flèches de Bagration et la redoute Raïevski.

Dès l'aube, le bombardement est d'une intensité inouïe. Les boulets français et russes fauchent des rangs entiers. La cavalerie de Murat charge avec fureur ; le prince Bagration combat héroïquement avant d'être mortellement fauché par un éclat d'obus. Le général Auguste de Caulaincourt pénètre au galop de ses cuirassiers dans la redoute Raïevski et s'y fait tuer à bout portant. Mais Napoléon hésite. Affaibli par un rhume et une crise d'urémie, le conquérant refuse d'engager la Garde impériale — vingt mille hommes d'élite intacts — pour briser définitivement l'armée russe en déroute. « Si je perds la Garde, qui me ramènera à Paris ? » répond-il à ses maréchaux furieux qui réclamaient le coup de grâce.

Koutouzov évacue le champ de bataille la nuit venue avec les débris organisés de son armée, et ordonne l'abandon de Moscou. Mais ce n'est qu'une victoire à la Pyrrhus : les Russes refusent obstinément de négocier. L'incendie de Moscou allumé par son propre gouverneur Rostopchine et l'arrivée brutale du terrible général Hiver transformeront cette marche triomphale en l'un des plus effroyables calvaires de l'histoire militaire européenne, prélude à la chute du régime impérial.

Voici votre question de mémoire active :
Quel officier et mémorialiste français, grand écuyer de Napoléon et frère du général tué à la redoute de Borodino, a laissé le récit le plus poignant et le plus lucide de la campagne de Russie ?
Première proposition : Armand de Caulaincourt.
Deuxième proposition : le général de Marbot.
Troisième proposition : le général de Ségur.
Ou quatrième proposition : le baron Fain.

La bonne réponse est la première proposition, Armand de Caulaincourt, duc de Vicence. Ancien ambassadeur à Saint-Pétersbourg, il avait vainement prévenu Napoléon que l'empereur Alexandre ne capitulerait jamais et que le climat russe engloutirait la Grande Armée.`
      }
    }
  }"""

# 09-09 : Colloque de Poissy (1561) & Mort de Mao Zedong (1976)
DAYS['09-09'] = """  '09-09': {
    id: '09-09',
    month: 9,
    day: 9,
    dateFormatted: '9 septembre',
    ephemerisTitle: "Le Colloque de Poissy : La tentative capétienne de paix religieuse",
    saintOfTheDay: 'Saint Alain',
    mainEvent: {
      year: 1561,
      yearDisplay: '1561',
      title: "L'Ouverture du Colloque de Poissy : La recherche désespérée de la concorde civile",
      subtitle: "Catherine de Médicis et Michel de L'Hospital réunissent catholiques et calvinistes pour éviter la guerre civile",
      era: 'renaissance_moderne',
      theme: 'politique_pouvoir',
      scope: 'france',
      location: 'Poissy (Réfectoire du couvent des dominicaines)',
      keyFigures: ['Catherine de Médicis', 'Michel de L’Hospital', 'Théodore de Bèze', 'Cardinal Charles de Lorraine', 'Charles IX'],
      narrativeExpress: `Le 9 septembre 1561, dans le grand réfectoire du prieuré royal de Poissy, s'ouvre une assemblée sans précédent dans les annales du royaume de France. Autour du jeune roi Charles IX, âgé de onze ans, et de sa mère la reine régente Catherine de Médicis, prennent place quarante-six cardinaux, évêques et docteurs de la Sorbonne sous la conduite du cardinal de Lorraine. En face d'eux, pour la première fois officiellement reçue par la Couronne, s'avance une délégation de douze pasteurs protestants conduite par Théodore de Bèze, éminent théologien et bras droit de Jean Calvin. Le chancelier Michel de L'Hospital prononce un discours historique suppliant les théologiens d'oublier leurs haines séditieuses : « Ôtons ces mots diaboliques de luthériens, huguenots et papistes : ne changeons le nom de chrétien ! ». Cette tentative désespérée de concilier la foi romaine et la Réforme échouera sur le dogme de l'Eucharistie, mais elle posera l'un des principes cardinaux de l'État royal français : la distinction politique entre la citoyenneté civile et l'appartenance confessionnelle.`,
      narrativeDeepDive: `Pour comprendre l'enjeu du colloque de Poissy avec la hauteur de vue de Jacques Bainville, il faut mesurer le gouffre dans lequel la France risquait de sombrer en 1561. À la mort accidentelle d'Henri II en 1559 lors d'un tournoi, puis de son fils aîné François II en 1560, la monarchie capétienne est affaiblie. La noblesse française se divise en deux factions rivales et armées : la maison ultra-catholique des Guise, soutenue par l'Espagne de Philippe II, et les princes du sang réformés (Condé, Coligny, Antoine de Bourbon), séduits par la Réforme calviniste venue de Genève.

La reine mère Catherine de Médicis refuse de voir la royauté vassalisée par l'un des deux partis. Secondée par son admirable chancelier Michel de L'Hospital, elle invente la politique des « Politiques » : subordonner la querelle religieuse à la paix publique et à l'autorité souveraine de l'État.

Le 9 septembre 1561 à Poissy, Catherine réunit les deux clergés pour tenter de forger un compromis théologique national. Lorsque Théodore de Bèze, orateur brillant, prononce son plaidoyer calviniste avec éloquence, les évêques catholiques s'insurgent quand il nie la présence réelle du corps du Christ dans l'hostie consacrée, déclarant que le Christ est « aussi éloigné du pain que le plus haut ciel est éloigné de la terre ».

Le cardinal de Lorraine refuse toute concession dogmatique. Le colloque théologique s'achève sur une impasse. Mais Catherine de Médicis en tire une conséquence politique audacieuse : par l'édit de Saint-Germain de janvier 1562, elle autorise pour la première fois le culte protestant public hors des villes closes. C'est l'embryon de la liberté de conscience. Hélas, l'esprit de concorde arrive trop tôt : deux mois plus tard, le massacre de protestants par les hommes du duc de Guise à Wassy déclenchera trente années de sanglantes guerres de Religion, qui ne prendront fin qu'avec l'avènement d'Henri IV et l'édit de Nantes en 1598.`,
      politicalAnalysis: {
        motive: "Trouver une conciliation théologique entre catholiques et protestants pour préserver la paix civile et l'unité du royaume.",
        stakes: "L'affirmation de la souveraineté royale au-dessus des factions religieuses et le refus de voir la monarchie asservie par l'Espagne ou Genève.",
        consequence: "L'échec doctrinal du colloque suivi de l'édit de tolérance de 1562, précurseur de l'édit de Nantes, mais vite balayé par le début des guerres de Religion."
      }
    },
    perspectiveEvent: {
      year: 1976,
      yearDisplay: '1976',
      title: "La Mort de Mao Zedong à Pékin : La fin d'un titan totalitaire et le réveil chinois",
      era: 'epoque_contemporaine',
      scope: 'monde',
      location: 'Pékin (Chine)',
      summary: "Le 9 septembre 1976 s'éteint à l'âge de 82 ans le président du Parti communiste chinois Mao Zedong. Fondateur de la République populaire de Chine en 1949, responsable de dizaines de millions de morts lors du Grand Bond en avant et de la Révolution culturelle, sa disparition entraîne l'arrestation de la « Bande des Quatre » et ouvre la voie aux réformes économiques pragmatiques de Deng Xiaoping."
    },
    centuryEchoes: [
      {
        year: 9,
        yearDisplay: '9 apr. J.-C.',
        era: 'antiquite',
        title: 'Le désastre de Varus dans la forêt de Teutobourg',
        scope: 'europe',
        shortDescription: 'Le chef germain Arminius anéantit les trois légions romaines de Varus, fixant définitivement la frontière de l’Empire romain sur le Rhin.'
      },
      {
        year: 1087,
        yearDisplay: '1087',
        era: 'moyen_age_feodal',
        title: 'Mort de Guillaume le Conquérant à Rouen',
        scope: 'europe',
        shortDescription: 'Le duc de Normandie et roi d’Angleterre s’éteint des suites d’une blessure à cheval ; ses fils se partagent son empire anglo-normand.'
      },
      {
        year: 1513,
        yearDisplay: '1513',
        era: 'renaissance_moderne',
        title: 'Bataille de Flodden Field entre l’Angleterre et l’Écosse',
        scope: 'europe',
        shortDescription: 'L’armée anglaise écrase les forces écossaises alliées de la France ; le roi Jacques IV d’Écosse est tué sur le champ de bataille.'
      },
      {
        year: 1561,
        yearDisplay: '1561',
        era: 'renaissance_moderne',
        title: 'Ouverture du Colloque de Poissy devant Charles IX',
        scope: 'france',
        shortDescription: 'Catherine de Médicis et Michel de L’Hospital tentent de réconcilier prélats catholiques et théologiens calvinistes pour conjurer la guerre civile.'
      },
      {
        year: 1570,
        yearDisplay: '1570',
        era: 'renaissance_moderne',
        title: 'Prise sanglante de Nicosie par l’Empire ottoman',
        scope: 'monde',
        shortDescription: 'Après quarante-cinq jours de siège, les troupes du sultan sélim II prennent Nicosie aux Vénitiens, prélude à la bataille de Lépante.'
      },
      {
        year: 1776,
        yearDisplay: '1776',
        era: 'grand_siecle_lumieres',
        title: 'Adoption officielle du nom d’« United States of America »',
        scope: 'monde',
        shortDescription: 'Le Congrès continental substitue officiellement l’appellation « United States » à celle d’« United Colonies » pour désigner la nouvelle république.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'La victoire de la Marne : L’armée allemande sonne la retraite',
        scope: 'france',
        shortDescription: 'Cernée sur ses arrières et constatant la brèche entre ses armées, la Première armée de von Kluck ordonne le repli général derrière l’Aisne.'
      },
      {
        year: 1976,
        yearDisplay: '1976',
        era: 'epoque_contemporaine',
        title: 'Mort de Mao Zedong et fin de la Révolution culturelle',
        scope: 'monde',
        shortDescription: 'Le Grand Timonier meurt à Pékin à l’âge de 82 ans, tournant historique ouvrant la voie à la modernisation économique chinoise.'
      },
      {
        year: 1991,
        yearDisplay: '1991',
        era: 'epoque_contemporaine',
        title: 'Proclamation d’indépendance de la République du Tadjikistan',
        scope: 'monde',
        shortDescription: 'Le Soviet suprême de Douchanbé vote la séparation de l’URSS en voie d’effondrement, ouvrant une décennie de guerre civile en Asie centrale.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Ôtons ces mots diaboliques de huguenots et papistes »',
      content: '« Ôtons ces mots diaboliques, noms de parts, factions et séditions : luthériens, huguenots, papistes. Ne changeons le nom de chrétien ! Le couteau vaut peu contre l’esprit, si ce n’est à perdre l’âme ensemble avec le corps. » Ce discours sublime prononcé par le chancelier Michel de L’Hospital devant les députés et à Poissy posa pour la première fois en Europe les principes de la tolérance civile d’État.',
      sourceOrAttribution: 'Michel de L’Hospital, Discours à l’assemblée des prélats à Poissy et aux États généraux d’Orléans (1560-1561)',
      contextExplanation: 'Face au fanatisme des théologiens des deux camps, L’Hospital affirmait que le roi de France devait veiller à l’ordre civil et à la justice sans sonder les reins et les cœurs de ses sujets.'
    },
    quiz: {
      question: "Quel éminent théologien et successeur désigné de Jean Calvin dirigea la délégation calviniste au Colloque de Poissy en 1561 ?",
      options: [
        { id: 'A', label: 'Théodore de Bèze' },
        { id: 'B', label: 'Guillaume Farel' },
        { id: 'C', label: 'Heinrich Bullinger' },
        { id: 'D', label: 'Philippe Mélanchthon' }
      ],
      correctOptionId: 'A',
      explanation: "Théodore de Bèze, humaniste français exilé à Genève et bras droit de Calvin, représenta avec un brio oratoire remarquable la Réforme protestante devant Charles IX et les prélats catholiques au couvent de Poissy.",
      historicalContextTip: "Jean Calvin, affaibli par la maladie à Genève, préféra envoyer son plus fidèle disciple pour négocier avec la reine Catherine de Médicis."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `9 septembre 1561. À Poissy, au bord de la Seine, les portes du grand réfectoire du couvent royal s'ouvrent sur un spectacle extraordinaire.

Autour du jeune roi Charles neuf, âgé de onze ans, et de sa mère la reine régente Catherine de Médicis, se tiennent quarante-six cardinaux et évêques en soutane écarlate et violette. Face à eux s'avance une douzaine de pasteurs protestants austères vêtus de noir, menés par le brillant théologien Théodore de Bèze, disciple de Jean Calvin.

Pour la toute première fois, la Couronne réunit les deux religions ennemies pour tenter de réconcilier les Français et d'éviter la guerre civile. Le chancelier Michel de L'Hospital lance ce cri mémorable : « Ôtons ces mots diaboliques de papistes et huguenots : ne changeons le nom de chrétien ! ».

Le compromis doctrinal échoue sur la question de l'Eucharistie. Mais Catherine de Médicis persévère et accordera quelques mois plus tard le droit aux protestants de célébrer leur culte. Pour la première fois émerge l'idée moderne que la citoyenneté d'un sujet français ne dépend pas de sa confession religieuse mais de sa fidélité aux lois de la nation.

Mais observez comment le 9 septembre traverse la chaîne des siècles :

En l'an 9, le désastre de Teutobourg voit les trois légions de Varus anéanties par les Germains, fixant la frontière romaine sur le Rhin.

En 1087, Guillaume le Conquérant meurt à Rouen des suites d'un accident de cheval.

En 1513, à Flodden Field, l'armée anglaise écrase les Écossais alliés de la France.

En 1570, la prise sanglante de Nicosie par les Ottomans consacre la chute de Chypre sous la domination du croissant.

En 1776, le Congrès américain adopte officiellement l'appellation « United States of America ».

En 1914, au terme de la bataille de la Marne, la Première armée allemande sonne la retraite générale : Paris est sauvé.

En 1976, la mort de Mao Zedong à Pékin tourne la page tragique de la Révolution culturelle et ouvre la voie à la modernisation économique de la Chine.

Et en 1991, le Tadjikistan proclame son indépendance de l'URSS en décomposition.

La leçon géopolitique de Poissy : lorsque les passions idéologiques ou religieuses divisent un peuple, seule l'autorité impartiale de l'État souverain peut empêcher les citoyens de s'égorger mutuellement.

Votre question de culture classique :
Quel disciple et successeur de Jean Calvin représenta la Réforme protestante au Colloque de Poissy en 1561 ?
Première proposition : Théodore de Bèze.
Deuxième proposition : Guillaume Farel.
Troisième proposition : Thomas Müntzer.
Ou quatrième proposition : John Knox.

La réponse est la première proposition, Théodore de Bèze. Humaniste de grand talent, son éloquence séduisit la reine Catherine mais se heurta au refus intransigeant des théologiens de la Sorbonne.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 9 septembre 1561 constitue un épisode prophétique de l'histoire politique française : le colloque de Poissy, où la monarchie capétienne tenta d'inventer la paix civile par la conciliation deux siècles avant les Lumières.

Pour comprendre la démarche de Catherine de Médicis selon l'analyse de Jacques Bainville, il faut mesurer l'effroyable menace qui pèse alors sur le trône. En 1561, la France est au bord de l'implosion. Le calvinisme a conquis près d'un tiers de la noblesse militaire du royaume. Des grandes familles féodales comme les Bourbons et les Châtillon-Coligny voient dans la Réforme un moyen de secouer le joug de l'administration royale centralisée. En face, les princes de Lorraine, la maison de Guise, se pose en championne absolue de l'orthodoxie romaine et s'allie avec Philippe deux d'Espagne.

Le roi Charles neuf n'est qu'un enfant. La reine régente Catherine de Médicis sait que si la royauté prend parti pour un camp contre l'autre, elle deviendra l'otage d'une faction et le royaume sera dépecé par ses voisins.

Catherine fait appel à un juriste d'une envergure morale exceptionnelle : le chancelier Michel de L'Hospital. Ensemble, ils formulent pour la première fois la doctrine des « Politiques ». L'Hospital pose une distinction révolutionnaire pour le seizième siècle : le roi n'est pas le juge des âmes, il est le gardien de la paix commune. « On peut être bon citoyen sans être catholique », affirme-t-il avec une audace inouïe devant les cours souveraines scandalisées.

Le 9 septembre 1561, le colloque s'ouvre au prieuré royal de Poissy. Pour la première fois dans l'histoire de l'Église, des pasteurs réformés sont autorisés à s'exprimer librement devant les princes de l'Église et la famille royale. Théodore de Bèze, humaniste cultivé et porte-parole de Calvin, prononce un discours d'une dignité remarquable.

Mais le fossé théologique est infranchissable. Dès que Bèze aborde le sacrement de l'Eucharistie et déclare que le corps du Christ n'est pas physiquement présent dans l'hostie, les cardinaux crient au blasphème. Le cardinal de Lorraine, pourtant partisan d'une réforme interne de l'Église, exige la soumission complète des calvinistes aux décrets du concile de Trente.

Le colloque de Poissy se sépare le 14 octobre sans accord. Mais cette tentative royale n'a pas été vaine : elle a accouché en janvier 1562 de l'édit de tolérance de Saint-Germain, autorisant le culte protestant de jour et hors des villes. Les fanatismes auront le dessus temporairement, et le massacre de Wassy par les soldats du duc de Guise ouvrira trois décennies d'atrocités civiles. Mais le sillon était tracé : il faudra attendre Henri quatre et l'édit de Nantes en 1598 pour que la vision royale de Michel de L'Hospital triomphe enfin sur le fanatisme des factions.

Voici votre question de mémorisation active :
Quel illustre juriste et chancelier de France formula au colloque de Poissy les premiers principes de la concorde civile et de la distinction entre l'État et la religion ?
Première proposition : Michel de L'Hospital.
Deuxième proposition : Jean de La Valette.
Troisième proposition : Guillaume de Lamoignon.
Ou quatrième proposition : Jean Bodin.

La bonne réponse est la première proposition, le chancelier Michel de L'Hospital. Magistrat intègre et philosophe chrétien, il préféra perdre son pouvoir plutôt que de cautionner les massacres religieux de son époque.`
      }
    }
  }"""

# 09-10 : Traité de Nystad (1721) & Traité de Saint-Germain-en-Laye (1919)
DAYS['09-10'] = """  '09-10': {
    id: '09-10',
    month: 9,
    day: 10,
    dateFormatted: '10 septembre',
    ephemerisTitle: "L'Essor de l'Empire Russe à Nystad et le Démembrement de l'Autriche à Saint-Germain",
    saintOfTheDay: 'Saint Aubert',
    mainEvent: {
      year: 1721,
      yearDisplay: '1721',
      title: "La Signature du Traité de Nystad : La naissance géopolitique de l'Empire russe",
      subtitle: "Pierre le Grand arrache les provinces baltes à la Suède et hisse la Russie au rang de grande puissance européenne",
      era: 'grand_siecle_lumieres',
      theme: 'guerres_diplomatie',
      scope: 'europe',
      location: 'Uusikaupunki / Nystad (Finlande)',
      keyFigures: ['Pierre Ier le Grand', 'Charles XII de Suède', 'Heinrich Ostermann', 'Frédéric Ier de Suède'],
      narrativeExpress: `Le 10 septembre 1721, dans la petite bourgade finlandaise de Nystad, les plénipotentiaires du tsar Pierre Ier et du roi Frédéric Ier de Suède signent le traité de paix qui clôt vingt-et-une années d'une guerre sanglante et acharnée : la Grande Guerre du Nord. Par ce traité historique, la Suède, épuisée et ruinée par les campagnes démesurées de son roi guerrier Charles XII, abandonne définitivement à la Russie la Livonie, l'Estonie, l'Ingrie et une partie de la Carélie avec la forteresse de Vyborg. Pierre le Grand réalise le rêve obsédant de toute son existence : doter la Russie d'une façade maritime permanente sur la mer Baltique et sécuriser pour toujours sa nouvelle capitale européenne, Saint-Pétersbourg. Six semaines plus tard, le Sénat de Saint-Pétersbourg proclame Pierre « Père de la Patrie et Empereur de toutes les Russies ». La Suède est déclassée au rang de puissance régionale de second ordre, tandis que l'Empire russe fait une entrée fracassante dans le concert des grandes nations qui dominent les destinées de l'Europe.`,
      narrativeDeepDive: `Pour apprécier le traité de Nystad avec la rigueur géopolitique de Jacques Bainville, il faut comprendre le verrou qui étouffait la Moscovie au début du XVIIIe siècle. Jusqu'en 1700, la Russie était un État continental isolé, coupé des mers chaudes par l'Empire ottoman sur la mer Noire, et privé de tout débouché maritime direct vers l'Occident par la domination écrasante de la Suède sur la Baltique. La Baltique était alors un véritable « lac suédois », défendu par la meilleure armée professionnelle d'Europe.

Pierre le Grand a compris que la modernisation technique, militaire et commerciale de son pays était impossible sans un accès direct aux voies navigables européennes. Dès 1700, il s'allie avec le Danemark et la Pologne-Saxe pour attaquer l'empire suédois. Malgré la défaite humiliante subie à Narva où les troupes russes sont balayées par le jeune roi Charles XII, Pierre apprend de ses revers. Il refond l'armée de fond en comble, lève des régiments disciplinés, fond des canons avec les cloches des églises et bâtit à partir de 1703 la ville de Saint-Pétersbourg sur les marais conquis de la Neva.

Le tournant survient en 1709 à la bataille de Poltava, en Ukraine : Pierre anéantit l'armée de Charles XII imprudemment aventurée dans les steppes. Dix ans plus tard, la flotte de galères construite par Pierre effectue des raids destructeurs jusqu'aux faubourgs de Stockholm, contraignant la Suède à demander la paix.

Le traité de Nystad du 10 septembre 1721 consacre une mutation géopolitique fondamentale : l'équilibre nordique est brisé au profit de Moscou. La Russie devient l'arbitre indispensable de l'Europe centrale et orientale. De Louis XV à Napoléon et jusqu'aux tsars du XIXe siècle, toute la diplomatie française devra désormais compter avec cette immense puissance continentale qui frappe aux portes de l'Occident.`,
      politicalAnalysis: {
        motive: "Arracher à la Suède les provinces baltes pour donner à la Russie un débouché maritime permanent vers l'Europe.",
        stakes: "Le basculement de l'hégémonie militaire en mer Baltique et l'intégration irréversible de la Russie dans le système d'équilibre européen.",
        consequence: "La fin de l'Empire suédois, la proclamation de l'Empire de toutes les Russies et la sanctuarisation de Saint-Pétersbourg."
      }
    },
    perspectiveEvent: {
      year: 1919,
      yearDisplay: '1919',
      title: "La Signature du Traité de Saint-Germain-en-Laye : Le démembrement de l'Autriche-Hongrie",
      era: 'epoque_contemporaine',
      scope: 'europe',
      location: 'Saint-Germain-en-Laye (Château de Saint-Germain)',
      summary: "Le 10 septembre 1919, les puissances alliées victorieuses imposent le traité de Saint-Germain à la république d'Autriche. Ce traité liquide l'empire séculaire des Habsbourg, réduit l'Autriche à un modeste État germanique de 6 millions d'habitants, lui interdit toute union avec l'Allemagne (Anschluss) et entérine la création de la Tchécoslovaquie, de la Yougoslavie et de la grande Pologne, créant un vide géopolitique béant en Europe centrale."
    },
    centuryEchoes: [
      {
        year: 1419,
        yearDisplay: '1419',
        era: 'moyen_age_feodal',
        title: 'Assassinat de Jean sans Peur sur le pont de Montereau',
        scope: 'france',
        shortDescription: 'Le duc de Bourgogne est assassiné lors d’une entrevue avec les partisans du dauphin Charles, jetant la Bourgogne dans l’alliance anglaise durant la guerre de Cent Ans.'
      },
      {
        year: 1547,
        yearDisplay: '1547',
        era: 'renaissance_moderne',
        title: 'Bataille de Pinkie Cleugh entre l’Angleterre et l’Écosse',
        scope: 'europe',
        shortDescription: 'L’armée anglaise du régent Somerset écrase les Écossais durant le « Rough Wooing », dernière bataille rangée entre les deux nations avant l’Union.'
      },
      {
        year: 1721,
        yearDisplay: '1721',
        era: 'grand_siecle_lumieres',
        title: 'Signature du traité de Nystad entre la Russie et la Suède',
        scope: 'europe',
        shortDescription: 'La Russie acquiert la Livonie et l’Estonie, achevant la Grande Guerre du Nord et fondant l’Empire russe de Pierre le Grand.'
      },
      {
        year: 1898,
        yearDisplay: '1898',
        era: 'epoque_contemporaine',
        title: 'Assassinat de l’impératrice Élisabeth d’Autriche (« Sissi ») à Genève',
        scope: 'europe',
        shortDescription: 'L’anarchiste italien Luigi Lucheni poignarde mortellement l’impératrice au bord du lac Léman avec une lime aiguisée.'
      },
      {
        year: 1919,
        yearDisplay: '1919',
        era: 'epoque_contemporaine',
        title: 'Signature du traité de Saint-Germain liquidant les Habsbourg',
        scope: 'europe',
        shortDescription: 'Les Alliés démantèlent l’Empire austro-hongrois et consacrent l’émergence des États successeurs d’Europe centrale.'
      },
      {
        year: 1944,
        yearDisplay: '1944',
        era: 'epoque_contemporaine',
        title: 'Libération de la ville de Luxembourg par les troupes américaines',
        scope: 'europe',
        shortDescription: 'La 5e division blindée américaine entre dans la capitale luxembourgeoise, mettant fin à quatre années d’annexion nazie.'
      },
      {
        year: 1974,
        yearDisplay: '1974',
        era: 'epoque_contemporaine',
        title: 'Reconnaissance officielle de l’indépendance de la Guinée-Bissau',
        scope: 'monde',
        shortDescription: 'Après la Révolution des Œillets à Lisbonne, le Portugal reconnaît la souveraineté de son ancienne colonie ouest-africaine.'
      },
      {
        year: 1981,
        yearDisplay: '1981',
        era: 'epoque_contemporaine',
        title: 'Retour du tableau Guernica de Picasso en Espagne',
        scope: 'europe',
        shortDescription: 'Conservée au MoMA de New York pendant le franquisme, la toile monumentale de Picasso rejoint Madrid après le rétablissement de la démocratie.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« L’Autriche, c’est ce qui reste »',
      content: '« L’Autriche, c’est ce qui reste. » Par ce mot d’un cynisme historique implacable attribué au Premier ministre français Georges Clemenceau lors des négociations des traités de paix de 1919, les vainqueurs résumaient le dépeçage méthodique de l’Empire austro-hongrois des Habsbourg, réduit à un petit État croupion germanique sans accès à la mer.',
      sourceOrAttribution: 'Formule attribuée à Georges Clemenceau lors de la Conférence de la paix de Paris (1919)',
      contextExplanation: 'Jacques Bainville souligna avec effroi les conséquences de ce démembrement dans Les Conséquences politiques de la paix : en détruisant l’Autriche catholique régulatrice, les traités ouvraient un boulevard géopolitique à l’expansionnisme pangermaniste de Berlin.'
    },
    quiz: {
      question: "Quelle ville portuaire et nouvelle capitale sur le golfe de Finlande Pierre le Grand fit-il bâtir dès 1703 pour ouvrir sa fenêtre sur l'Europe, consacrée par le traité de Nystad ?",
      options: [
        { id: 'A', label: 'Saint-Pétersbourg' },
        { id: 'B', label: 'Kronstadt' },
        { id: 'C', label: 'Arkhangelsk' },
        { id: 'D', label: 'Riga' }
      ],
      correctOptionId: 'A',
      explanation: "Pierre le Grand fonda Saint-Pétersbourg en 1703 sur les rives marécageuses de la Neva conquises sur les Suédois. Le traité de Nystad en 1721 sécurisa définitivement cette 'fenêtre sur l'Europe' qui devint la capitale impériale de la Russie jusqu'en 1918.",
      historicalContextTip: "Kronstadt était la forteresse insulaire défendant l'accès maritime de Saint-Pétersbourg, tandis qu'Arkhangelsk était l'ancien port arctique russe gelé six mois par an."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `10 septembre 1721. Dans la petite ville finlandaise de Nystad, une signature change pour toujours la carte de l'Europe.

La Suède capitule après vingt-et-un ans de conflit ininterrompu. Par ce traité de Nystad, la Russie du tsar Pierre le Grand s'empare de la Livonie, de l'Estonie et des rives du golfe de Finlande.

Le rêve de Pierre le Grand s'accomplit : la Russie n'est plus cette principauté asiatique reculée, coupée des mers. Elle possède enfin sa « fenêtre sur l'Europe » avec sa nouvelle capitale étincelante, Saint-Pétersbourg. Quelques semaines plus tard, le Sénat russe décerne à Pierre le titre d'Empereur de toutes les Russies. La Suède cesse d'être une grande puissance militaire ; l'Empire russe fait son entrée irréversible dans le concert des maîtres du continent.

Mais regardez comment le 10 septembre marque l'Histoire à travers les âges :

En 1419, sur le pont de Montereau, le meurtre du duc de Bourgogne Jean sans Peur par les hommes du dauphin Charles précipite l'alliance anglo-bourguignonne au cœur de la guerre de Cent Ans.

En 1547, la bataille de Pinkie Cleugh marque le dernier grand affrontement sanglant entre les royaumes d'Angleterre et d'Écosse.

En 1898, à Genève, l'impératrice Élisabeth d'Autriche, la célèbre Sissi, est assassinée d'un coup de lime en plein cœur par un anarchiste italien.

En 1919, au château de Saint-Germain-en-Laye, les Alliés signent le traité qui démantèle l'Empire austro-hongrois millénaire des Habsbourg, créant le vide géopolitique en Europe centrale que Jacques Bainville dénoncera prophétiquement.

En 1944, les blindés américains libèrent la ville de Luxembourg.

En 1974, le Portugal de la Révolution des Œillets reconnaît l'indépendance de la Guinée-Bissau.

Et en 1981, le chef-d'œuvre de Picasso, Guernica, regagne Madrid après quarante ans d'exil à New York.

La grande leçon de l'Histoire : les traités qui déplacent les frontières sans respecter les équilibres démographiques et géopolitiques préparent inévitablement les guerres de la génération suivante.

Votre question de haute culture géopolitique :
Quelle ville fondée par Pierre le Grand en 1703 devint la capitale impériale de la Russie consacrée par le traité de Nystad ?
Première proposition : Saint-Pétersbourg.
Deuxième proposition : Moscou.
Troisième proposition : Kiev.
Ou quatrième proposition : Sébastopol.

La bonne réponse est la première proposition, Saint-Pétersbourg. Surgie des marais de la Baltique par la volonté de fer de Pierre le Grand, elle incarna l'ancrage définitif de la Russie dans la civilisation européenne.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 10 septembre met en vis-à-vis deux mutations géopolitiques majeures de l'histoire européenne : l'irruption de l'Empire russe sur la scène internationale à Nystad en 1721, et la disparition de l'Empire austro-hongrois à Saint-Germain-en-Laye en 1919.

Analysons d'abord le coup de maître de Pierre le Grand selon la logique des équilibres continentaux chère à Jacques Bainville. Au début du dix-huitième siècle, la Moscovie était un empire terrestre enclavé, étranger aux mœurs et aux techniques de l'Occident. Pour commercer avec l'Angleterre ou la Hollande, les marchands russes devaient contourner la Scandinavie par la mer Blanche et le port glacé d'Arkhangelsk.

La mer Baltique était alors la chasse gardée de la monarchie suédoise, dotée d'une armée admirablement entraînée et commandée à partir de 1697 par un roi guerrier fanatique, Charles douze.

Pierre le Grand a le génie de comprendre que le courage barbare ne suffit pas face aux armées modernes. Il vient lui-même incognito en Hollande et en Angleterre apprendre la charpenterie navale et la métallurgie. Lorsque la guerre éclate en 1700, les Russes essuient un désastre initial à Narva. Loin de se décourager, Pierre applique la maxime politique selon laquelle les revers sont les meilleurs maîtres d'école. Il fait fondre le bronze des cloches pour fabriquer des canons et fonde sa nouvelle capitale, Saint-Pétersbourg, sur le territoire même que les Suédois lui contestent.

Lorsque Charles douze s'enfonce follement dans les profondeurs de l'Ukraine en 1709, Pierre l'attend à Poltava et détruit l'armée suédoise. Le traité de Nystad signé le 10 septembre 1721 parachève cette guerre de vingt ans : la Russie annexe l'Estonie et la Livonie, soit toute la côte baltique jusqu'à Riga. Pierre prend le titre d'Empereur. Désormais, aucune coalition européenne ne pourra plus se former sans l'accord ou l'arbitrage de Saint-Pétersbourg.

Cent quatre-vingt-dix-huit ans plus tard, le 10 septembre 1919, les diplomates français et anglo-saxons commettent au château de Saint-Germain-en-Laye la faute géopolitique inverse. Grisés par la victoire de 1918, ils appliquent aveuglément le principe des nationalités et détruisent l'Empire austro-hongrois des Habsbourg.

L'Autriche est réduite à un modeste État montagneux de six millions d'habitants, privé de son industrie de Bohême et de ses greniers hongrois. Comme l'écrira Jacques Bainville avec une angoisse prophétique dans Les Conséquences politiques de la paix, en pulvérisant l'Empire danubien qui équilibrait le centre de l'Europe, les vainqueurs ont créé une poussière de petits États désunis et vulnérables (Tchécoslovaquie, Yougoslavie, Pologne), incapables de résister à la renaissance du militarisme germanique à Berlin et de l'impérialisme soviétique à Moscou. Vingt ans plus tard, l'Anschluss et les accords de Munich viendront valider avec cruauté cet avertissement.

Voici votre question de mémoire active :
Quel roi de Suède, guerrier brillant mais stratège imprudent, fut le grand rival vaincu par Pierre le Grand lors de la Grande Guerre du Nord ?
Première proposition : Charles Douze.
Deuxième proposition : Gustave Adolphe.
Troisième proposition : Charles Onze.
Ou quatrième proposition : Gustave Trois.

La réponse est la première proposition, Charles Douze de Suède. Monté sur le trône à quinze ans, il passa sa vie sur les champs de bataille de Pologne et de Russie avant de trouver la mort d'une balle au front au siège de Fredrikshald en Norvège en 1718.`
      }
    }
  }"""
