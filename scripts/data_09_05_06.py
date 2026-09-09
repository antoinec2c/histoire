# scripts/data_09_05_06.py
# -*- coding: utf-8 -*-

DAYS = {}

# 09-05 : Arrestation de Nicolas Fouquet (1661) & Bataille de la Marne (1914)
DAYS['09-05'] = """  '09-05': {
    id: '09-05',
    month: 9,
    day: 5,
    dateFormatted: '5 septembre',
    ephemerisTitle: "L'Arrestation de Fouquet et le Miracle de la Marne",
    saintOfTheDay: 'Sainte Raïssa',
    mainEvent: {
      year: 1661,
      yearDisplay: '1661',
      title: "L'Arrestation de Nicolas Fouquet à Nantes : L'affirmation du pouvoir personnel de Louis XIV",
      subtitle: "Le Roi-Soleil élimine le tout-puissant surintendant des finances et instaure l'absolutisme régalien",
      era: 'grand_siecle_lumieres',
      theme: 'politique_pouvoir',
      scope: 'france',
      location: 'Nantes (Place Saint-Pierre)',
      keyFigures: ['Louis XIV', 'Nicolas Fouquet', 'Jean-Baptiste Colbert', 'D’Artagnan'],
      narrativeExpress: `Le 5 septembre 1661, à la sortie du conseil royal réuni au château des ducs de Bretagne à Nantes, le surintendant des finances Nicolas Fouquet monte dans son carrosse. Soudain, les mousquetaires du roi barrent la route. Le capitaine Charles de Batz de Castelmore, dit d'Artagnan, s'avance l'épée à la main et lui notifie son arrestation solennelle par ordre du roi. Fouquet, l'homme le plus riche et le plus influent du royaume, mécène de La Fontaine et de Molière, propriétaire du somptueux château de Vaux-le-Vicomte, s'effondre en disgrâce. Ce coup de majesté d'une audace inouïe est préparé dans le secret le plus absolu depuis des mois par le jeune Louis XIV, âgé de vingt-deux ans, et son discret conseiller Jean-Baptiste Colbert. En abattant le surintendant corrupteur qui fortifiait l'île de Belle-Île-en-Mer pour son compte, Louis XIV supprime définitivement la charge de surintendant et prend le contrôle exclusif des cordons de la bourse : l'État moderne ne tolérera plus aucun rival financier.`,
      narrativeDeepDive: `Pour analyser l'arrestation de Fouquet selon la causalité politique de Jacques Bainville, il faut observer l'affrontement entre deux mondes : le capitalisme prédateur des financiers de l'ancienne monarchie et la naissance de l'État administratif centralisé.

Sous les ministériats de Richelieu et de Mazarin, l'effort colossal de la guerre de Trente Ans avait contraint la monarchie à recourir aux « partisans » et « traitants » : des financiers privés qui avançaient des espèces au Trésor royal à des taux d'usure exorbitants (souvent 15 à 25 %), en se remboursant sur la perception directe des impôts royaux. Nicolas Fouquet s'était rendu indispensable en devenant le pivot de ce système opaque, mélangeant sans scrupule sa colossale fortune personnelle avec les deniers publics du royaume.

Mais après la mort de Mazarin en mars 1661, Louis XIV refuse de continuer à subir le chantage des banquiers. Colbert, travaillant dans l'ombre, dresse un mémoire accablant prouvant les malversations de Fouquet et surtout ses préparatifs militaires séditieux : Fouquet achetait des canons et fortifiait Belle-Île pour se prémunir contre un coup de force royal, reproduisant les réflexes frondeurs de la haute noblesse.

La fête somptueuse donnée à Vaux-le-Vicomte le 17 août 1661 n'a pas causé la chute de Fouquet — celle-ci était déjà arrêtée en mai —, mais elle a conforté le roi dans son jugement : le faste du sujet insultait la misère du Trésor royal.

Le 5 septembre 1661, l'arrestation menée par d'Artagnan à Nantes met fin à cette oligarchie financière. Louis XIV crée la Chambre de justice pour faire rendre gorge aux financiers véreux et confie la gestion des comptes à Colbert comme contrôleur général des finances. La souveraineté de l'État régalien sur l'argent est définitivement rétablie.`,
      politicalAnalysis: {
        motive: "Mettre un terme à la prédation des finances publiques par les traitants privés et punir les velléités de rébellion armée de Fouquet.",
        stakes: "L'indépendance financière absolue de la Couronne face aux puissances d'argent et l'affirmation du gouvernement personnel de Louis XIV.",
        consequence: "La suppression de la surintendance des finances, l'ascension de Colbert et la mise en place d'une comptabilité publique rigoureuse."
      }
    },
    perspectiveEvent: {
      year: 1914,
      yearDisplay: '1914',
      title: "Le Déclenchement de la Bataille de la Marne : Le sursaut de l'armée française",
      era: 'epoque_contemporaine',
      scope: 'france',
      location: 'Vallée de la Marne et de l’Ourcq (Meaux / Villeroy)',
      summary: "Le 5 septembre 1914, après deux semaines d'une retraite épuisante depuis les frontières, la 6e armée du général Maunoury attaque sur l'Ourcq le flanc découvert de la Ière armée allemande de von Kluck. Repérée par les reconnaissances aériennes du général Gallieni, cette faute tactique ennemie déclenche la bataille de la Marne, au cours de laquelle tombe l'écrivain Charles Péguy à Villeroy."
    },
    centuryEchoes: [
      {
        year: 1534,
        yearDisplay: '1534',
        era: 'renaissance_moderne',
        title: 'Retour de Jacques Cartier à Saint-Malo après son exploration du Canada',
        scope: 'monde',
        shortDescription: 'Le navigateur malouin rentre en France après avoir exploré le golfe du Saint-Laurent et planté la croix royale à Gaspé au nom de François Ier.'
      },
      {
        year: 1661,
        yearDisplay: '1661',
        era: 'grand_siecle_lumieres',
        title: 'Arrestation de Nicolas Fouquet à Nantes par d’Artagnan',
        scope: 'france',
        shortDescription: 'Louis XIV fait embastiller son surintendant des finances, supprimant la charge et affirmant son autorité monarchique absolue.'
      },
      {
        year: 1698,
        yearDisplay: '1698',
        era: 'grand_siecle_lumieres',
        title: 'Le tsar Pierre le Grand instaure l’impôt sur la barbe en Russie',
        scope: 'europe',
        shortDescription: 'Rentré de son voyage en Occident, le tsar force les boyards à se raser ou à payer une taxe pour arracher la Russie aux archaïsmes médiévaux.'
      },
      {
        year: 1793,
        yearDisplay: '1793',
        era: 'revolutions_empires',
        title: 'La Terreur est « mise à l’ordre du jour » à la Convention',
        scope: 'france',
        shortDescription: 'Sous la pression des sans-culottes assiégeant l’Assemblée, les députés décrètent des mesures d’exception sanglantes pour écraser les ennemis de la Révolution.'
      },
      {
        year: 1905,
        yearDisplay: '1905',
        era: 'epoque_contemporaine',
        title: 'Signature du traité de Portsmouth mettant fin à la guerre russo-japonaise',
        scope: 'monde',
        shortDescription: 'Sous la médiation de Theodore Roosevelt, le Japon victorieux impose ses conditions à l’Empire tsariste, première défaite d’une puissance blanche face à l’Asie moderne.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'Début de la bataille de la Marne et mort de Charles Péguy',
        scope: 'france',
        shortDescription: 'L’armée française fait volte-face sur l’Ourcq pour stopper l’invasion allemande ; le poète lieutenant Péguy est tué d’une balle au front à Villeroy.'
      },
      {
        year: 1972,
        yearDisplay: '1972',
        era: 'epoque_contemporaine',
        title: 'Prise d’otages sanglante aux Jeux Olympiques de Munich',
        scope: 'monde',
        shortDescription: 'Le commando terroriste palestinien Septembre Noir assassine onze athlètes et entraîneurs israéliens au village olympique.'
      },
      {
        year: 1977,
        yearDisplay: '1977',
        era: 'epoque_contemporaine',
        title: 'Lancement de la sonde spatiale interstellaire Voyager 1',
        scope: 'monde',
        shortDescription: 'La NASA lance depuis Cap Canaveral la sonde qui deviendra l’artefact humain le plus éloigné de la Terre dans l’espace interstellaire.'
      },
      {
        year: 1997,
        yearDisplay: '1997',
        era: 'epoque_contemporaine',
        title: 'Mort de Mère Teresa à Calcutta',
        scope: 'monde',
        shortDescription: 'La fondatrice des Missionnaires de la Charité et prix Nobel de la paix s’éteint à l’âge de 87 ans après une vie consacrée aux plus démunis.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Quo non ascendet ? » — La devise imprudente de Fouquet',
      content: '« Quo non ascendet ? » (Jusqu’où ne montera-t-il pas ?). Cette devise orgueilleuse choisie par Nicolas Fouquet, accompagnée sur ses armoiries d’un écureuil bondissant vers les cimes, scella sa perte psychologique auprès du roi. Lorsque Louis XIV contempla cette formule peinte sur les plafonds de Vaux-le-Vicomte, il y vit le défi intolérable d’un vassal prêt à escalader le trône de France.',
      sourceOrAttribution: 'Paul Morand, Fouquet ou le Soleil offusqué (Éditions Gallimard)',
      contextExplanation: 'Le mot fouquet signifiait « écureuil » en dialecte angevin ; Louis XIV ordonna de confisquer les tapisseries et les orangers du domaine pour embellir Versailles.'
    },
    quiz: {
      question: "Quel célèbre capitaine des mousquetaires procéda personnellement à l'arrestation de Nicolas Fouquet à Nantes le 5 septembre 1661 ?",
      options: [
        { id: 'A', label: 'Charles de Batz de Castelmore, dit d’Artagnan' },
        { id: 'B', label: 'Le comte de Tréville' },
        { id: 'C', label: 'Le chevalier de Lorraine' },
        { id: 'D', label: 'Henri de La Tour d’Auvergne, vicomte de Turenne' }
      ],
      correctOptionId: 'A',
      explanation: "C'est d'Artagnan qui arrêta Fouquet à Nantes avec ses mousquetaires sur ordre direct de Louis XIV. Il assura la garde rapprochée du prisonnier pendant trois ans durant son procès avant de le conduire à la forteresse de Pignerol.",
      historicalContextTip: "Le comte de Tréville était capitaine des mousquetaires sous Louis XIII et Richelieu, immortalisé par Alexandre Dumas."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `5 septembre 1661. À Nantes, devant la cathédrale Saint-Pierre, un carrosse d'apparat est soudainement cerné par les mousquetaires du roi.

Un officier s'avance, la main sur la garde de son épée : Charles de Batz de Castelmore, dit d'Artagnan. Par ordre personnel du jeune roi Louis quatorze, il vient d'arrêter le surintendant des finances, Nicolas Fouquet.

C'est un coup de tonnerre qui stupéfie l'Europe. Fouquet était l'homme le plus puissant et le plus opulent du royaume, protecteur des poètes, mécène de Molière et de La Fontaine, maître d'un réseau immense de banquiers et de créanciers. Mais Louis quatorze, qui a décidé de gouverner seul depuis la mort de Mazarin, refuse que l'argent dicte sa loi à l'État. En abattant le surintendant qui fortifiait l'île de Belle-Île pour son propre compte, le Roi-Soleil supprime définitivement la charge de surintendant et confie la gestion des finances à Colbert. Désormais, l'administration royale prime sur les intérêts privés.

Mais regardez comment le 5 septembre scelle d'autres tournants décisifs à travers les siècles :

En 1698, le tsar Pierre le Grand instaure l'impôt sur la barbe en Russie pour forcer ses boyards à adopter les mœurs de l'Europe moderne.

En 1793, sous la pression des sans-culottes parisiens, la Convention nationale met la Terreur à l'ordre du jour.

En 1905, le traité de Portsmouth met fin à la guerre russo-japonaise : pour la première fois, une nation asiatique terrasse un empire européen.

En 1914, sur les bords de l'Ourcq, s'engage la bataille de la Marne où l'armée française stoppe l'invasion allemande, tandis que tombe au champ d'honneur le poète Charles Péguy.

En 1972, la prise d'otages des Jeux Olympiques de Munich par le commando Septembre Noir plonge le monde dans la stupeur.

En 1977, la NASA lance la sonde Voyager 1, l'objet humain le plus lointain voguant aujourd'hui dans l'espace interstellaire.

Et en 1997, Mère Teresa s'éteint à Calcutta après une vie de dévouement absolu aux plus pauvres.

La grande constante politique : un État digne de ce nom ne tolère aucune féodalité financière capable de disputer la souveraineté à la loi commune.

Votre question de mémoire historique :
Quel célèbre capitaine des mousquetaires procéda à l'arrestation de Nicolas Fouquet à Nantes le 5 septembre 1661 ?
Première proposition : d'Artagnan.
Deuxième proposition : Tréville.
Troisième proposition : le marquis de Louvois.
Ou quatrième proposition : Turenne.

La réponse est la première proposition, Charles de Batz de Castelmore, dit d'Artagnan. Fidèle serviteur du roi, le véritable d'Artagnan assura la garde vigilante de Fouquet jusqu'à sa détention à la forteresse de Pignerol.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 5 septembre est dominé par l'acte fondateur de l'absolutisme régalien sous Louis quatorze : l'arrestation du surintendant Nicolas Fouquet en 1661, qui résonne étrangement avec le sursaut patriotique de la Marne en 1914.

Analysons la chute de Fouquet selon la méthode rigoureuse de Jacques Bainville. Lorsqu'en mars 1661 le cardinal Mazarin meurt, il laisse un royaume exsangue financièrement mais libéré de l'étau espagnol. Louis quatorze a vingt-deux ans. La cour et les ministres pensent que le jeune souverain va se contenter de mener une vie de plaisirs et de ballets, en déléguant le pouvoir réel au surintendant Nicolas Fouquet.

Fouquet est un homme séduisant, cultivé, doté d'une intelligence vive. Mais c'est le pur produit de l'anarchie financière issue de la Fronde. Depuis des années, pour faire face aux dépenses urgentes de l'armée, Fouquet avance de sa propre bourse des millions de livres au Trésor royal, en se remboursant avec des bénéfices exorbitants sur les fermes d'impôts et les gabelles. Le mélange entre ses deniers privés et l'argent du roi est si obscur que personne ne sait plus qui est le créancier et qui est le débiteur.

Pire encore aux yeux de Louis quatorze : Fouquet commet l'erreur politique de vouloir se bâtir une place de sûreté militaire. Il achète l'île de Belle-Île-en-Mer sur les côtes de Bretagne, fait creuser des fortifications sous la direction d'ingénieurs et y stocke des canons et des poudres. Aux yeux d'un roi qui se souvient avec effroi des barricades de la Fronde où les grands seigneurs faisaient tirer sur les troupes royales, ce comportement relève du crime de lèse-majesté.

Dans le plus grand secret, avec la complicité méticuleuse de Jean-Baptiste Colbert qui épluche les comptes truqués de la surintendance, Louis quatorze organise le piège de Nantes. Le 5 septembre 1661, après avoir présidé le conseil royal avec son amabilité coutumière pour ne pas éveiller les soupçons de Fouquet, le roi ordonne à d'Artagnan et à ses mousquetaires d'arrêter le surintendant à sa sortie.

Le procès de Fouquet durera trois ans. Condamné par une chambre de justice au bannissement, le roi commue la peine en réclusion criminelle à perpétuité à la forteresse de Pignerol, dans les Alpes, où l'ancien surintendant mourra vingt ans plus tard. Avec cette élimination, Louis quatorze n'a pas seulement puni un concussionnaire : il a aboli la surintendance et fait de l'État le seul maître légitime des deniers publics.

Voici votre question de mémorisation active :
Quel sublime château privé, chef-d'œuvre de Le Vau, Le Brun et Le Nôtre, abrita le 17 août 1661 la fête légendaire qui scella aux yeux de la cour la rivalité entre Fouquet et le Roi-Soleil ?
Première proposition : le château de Vaux-le-Vicomte.
Deuxième proposition : le château de Chambord.
Troisième proposition : le château de Dampierre.
Ou quatrième proposition : le château de Chantilly.

La réponse est la première proposition, le château de Vaux-le-Vicomte. Ébloui et irrité par la perfection de ce palais, Louis quatorze embaucha les mêmes artistes pour métamorphoser le pavillon de chasse de Versailles en capitale du Grand Siècle.`
      }
    }
  }"""

# 09-06 : Retour de la Victoria d'Elcano (1522) & Ordre du jour de Joffre (1914)
DAYS['09-06'] = """  '09-06': {
    id: '09-06',
    month: 9,
    day: 6,
    dateFormatted: '6 septembre',
    ephemerisTitle: "Le Premier Tour du Monde d'Elcano et l'Ordre Sacré de la Marne",
    saintOfTheDay: 'Saint Bertrand',
    mainEvent: {
      year: 1522,
      yearDisplay: '1522',
      title: "Le Retour de la Victoria à Sanlúcar : L'achèvement de la première circumnavigation de la Terre",
      subtitle: "Juan Sebastián Elcano boucle le premier tour du monde maritime après la mort de Magellan",
      era: 'renaissance_moderne',
      theme: 'decouvertes_sciences',
      scope: 'monde',
      location: 'Sanlúcar de Barrameda / Séville (Espagne)',
      keyFigures: ['Juan Sebastián Elcano', 'Fernand de Magellan', 'Antonio Pigafetta', 'Charles Quint'],
      narrativeExpress: `Le 6 septembre 1522, une nef délabrée aux voiles déchirées et à la coque rongée par les vers accoste au port de Sanlúcar de Barrameda, à l'embouchure du Guadalquivir. C'est la Victoria, seule rescapée des cinq navires qui avaient quitté l'Espagne trois ans plus tôt sous le commandement de Fernand de Magellan. À son bord ne restent que dix-huit marins faméliques, squelettiques et épuisés, commandés par le capitaine basque Juan Sebastián Elcano. Magellan ayant péri aux Philippines lors d'une échauffourée avec le chef Lapu-Lapu, c'est Elcano qui a pris la décision héroïque de cingler vers l'ouest à travers l'océan Indien et de doubler le cap de Bonne-Espérance en bravant les patrouilles portugaises. Pour la première fois dans l'histoire humaine, des hommes ont bouclé le tour du monde maritime, prouvant de manière irréfutable la sphéricité de la Terre et inaugurant la première mondialisation commerciale sous l'égide de Charles Quint.`,
      narrativeDeepDive: `L'expédition de Magellan et d'Elcano représente le sommet de la rivalité géopolitique maritime entre l'Espagne et le Portugal au XVIe siècle. Par le traité de Tordesillas de 1494, le pape Alexandre VI avait partagé le monde extra-européen par un méridien : l'Atlantique et les Amériques revenaient à l'Espagne, tandis que l'Afrique et l'océan Indien appartenaient au monopole des souverains portugais.

L'objectif de Magellan, navigateur portugais passé au service du jeune roi d'Espagne Charles Quint, était de contourner le continent américain par le sud pour atteindre les richissimes « îles aux Épices » (les Moluques, dans l'actuelle Indonésie) par l'ouest, démontrant ainsi qu'elles appartenaient à la sphère espagnole.

L'épopée est une suite de tourments terrifiants : mutinerie réprimée dans le sang en Patagonie, découverte du détroit tumultueux qui porte désormais le nom de Magellan en octobre 1520, puis la traversée interminable d'un océan immense baptisé « Pacifique » où les équipages en viennent à manger les cuirs des voiles et la sciure de bois pour survivre au scorbut.

Après la mort absurde de Magellan à la bataille de Mactan en avril 1521, les rescapés atteignent enfin les Moluques et chargent la Victoria de clous de girofle et de cannelle. Elcano prend alors un pari géopolitique insensé : plutôt que de rebrousser chemin par le Pacifique, il choisit de traverser tout l'océan Indien sous le nez des vaisseaux portugais sans jamais toucher terre.

Lorsque la Victoria remonte le Guadalquivir jusqu'à Séville le 8 septembre 1522, les dix-huit survivants montent pieds nus et un cierge à la main remercier la Vierge à l'église Santa María de la Victoria. La cargaison d'épices suffit à elle seule à rembourser l'intégralité des frais de l'expédition et à dégager un bénéfice pour la Couronne. Charles Quint anoblit Elcano en lui accordant des armoiries portant un globe terrestre et cette devise immortelle : Primus circumdedisti me (« Tu m'as le premier contourné »).`,
      politicalAnalysis: {
        motive: "Ouvrir une route maritime espagnole vers les îles aux Épices par l'Occident pour contourner le monopole portugais sur la route du Cap.",
        stakes: "Le partage commercial et territorial du globe entre les couronnes ibériques au début de la Renaissance.",
        consequence: "La démonstration physique de la continuité des océans et la confirmation de la rotondité de la Terre unifiant pour la première fois le commerce planétaire."
      }
    },
    perspectiveEvent: {
      year: 1914,
      yearDisplay: '1914',
      title: "L'Ordre du Jour de Joffre sur la Marne : « Se faire tuer sur place plutôt que de reculer »",
      era: 'epoque_contemporaine',
      scope: 'france',
      location: 'Châtillon-sur-Seine (Grand Quartier Général français)',
      summary: "Le 6 septembre 1914 à l'aube, le généralissime Joseph Joffre fait lire sur tout le front de la Marne son célèbre ordre du jour n° 40. Après la retraite éperdue depuis la Belgique, l'armée française fait demi-tour pour engager une bataille de vie ou de mort face à l'envahisseur allemand. Le même jour, le gouverneur militaire de Paris, Gallieni, réquisitionne six cents taxis parisiens pour acheminer d'urgence des troupes de réserve sur l'Ourcq."
    },
    centuryEchoes: [
      {
        year: 1522,
        yearDisplay: '1522',
        era: 'renaissance_moderne',
        title: 'Retour de la Victoria en Espagne et premier tour du monde',
        scope: 'monde',
        shortDescription: 'Juan Sebastián Elcano et 18 survivants achèvent la circumnavigation du globe après trois ans d’une expédition dantesque.'
      },
      {
        year: 1620,
        yearDisplay: '1620',
        era: 'grand_siecle_lumieres',
        title: 'Départ du Mayflower depuis le port anglais de Plymouth',
        scope: 'monde',
        shortDescription: 'Cent deux puritains anglais et colons quittent l’Europe pour fonder la colonie de Plymouth en Nouvelle-Angleterre, matrice de la culture américaine.'
      },
      {
        year: 1757,
        yearDisplay: '1757',
        era: 'grand_siecle_lumieres',
        title: 'Naissance du marquis de La Fayette en Auvergne',
        scope: 'france',
        shortDescription: 'Au château de Chavaniac naît le futur général et député qui deviendra le Héros des Deux Mondes pour son engagement aux côtés de George Washington.'
      },
      {
        year: 1879,
        yearDisplay: '1879',
        era: 'epoque_contemporaine',
        title: 'Massacre de la mission britannique à Kaboul en Afghanistan',
        scope: 'monde',
        shortDescription: 'Le meurtre de l’envoyé Louis Cavagnari embrase la Seconde Guerre anglo-afghane, symbole des rivalités du « Grand Jeu » entre Londres et Moscou.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'L’ordre du jour de Joffre et l’offensive générale de la Marne',
        scope: 'france',
        shortDescription: '« Se faire tuer sur place plutôt que de reculer » : les armées alliées font volte-face et lancent la contre-offensive qui sauvera Paris.'
      },
      {
        year: 1914,
        yearDisplay: '1914',
        era: 'epoque_contemporaine',
        title: 'L’épopée des Taxis de la Marne ordonnée par Gallieni',
        scope: 'france',
        shortDescription: 'Six cents taxis parisiens réquisitionnés aux Invalides transportent cinq régiments d’infanterie de réserve vers le front de l’Ourcq.'
      },
      {
        year: 1948,
        yearDisplay: '1948',
        era: 'epoque_contemporaine',
        title: 'Intronisation de la reine Juliana des Pays-Bas',
        scope: 'europe',
        shortDescription: 'Succédant à sa mère la reine Wilhelmine, Juliana monte sur le trône néerlandais et supervise la décolonisation de l’Indonésie.'
      },
      {
        year: 1991,
        yearDisplay: '1991',
        era: 'epoque_contemporaine',
        title: 'Léningrad redevient officiellement Saint-Pétersbourg',
        scope: 'europe',
        shortDescription: 'Par décret du soviet municipal après consultation populaire, la deuxième ville de Russie abandonne le nom de Lénine et retrouve son patronyme tsariste.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Primus circumdedisti me » — La devise accordée à Elcano',
      content: '« Primus circumdedisti me » (Tu m’as le premier contourné). Par cette devise gravée sur le blason d’anoblissement remis au capitaine Juan Sebastián Elcano, Charles Quint rendit hommage au marin basque qui avait ramené la Victoria à bon port après la mort de Magellan.',
      sourceOrAttribution: 'Lettres patentes d’anoblissement accordées par l’empereur Charles Quint à Juan Sebastián Elcano à Valladolid en 1523',
      contextExplanation: 'Le blason comportait également des branches de cannelle, des noix de muscade et des clous de girofle, symboles des richesses ramenées des îles Moluques.'
    },
    quiz: {
      question: "Quel capitaine basque prit le commandement de la nef Victoria après la mort de Magellan aux Philippines et boucla le tout premier tour du monde en 1522 ?",
      options: [
        { id: 'A', label: 'Juan Sebastián Elcano' },
        { id: 'B', label: 'Antonio Pigafetta' },
        { id: 'C', label: 'Vasco de Gama' },
        { id: 'D', label: 'Alonso de Salazar' }
      ],
      correctOptionId: 'A',
      explanation: "C'est Juan Sebastián Elcano qui ramena la nef Victoria à Sanlúcar de Barrameda le 6 septembre 1522 avec dix-sept autres survivants, accomplissant la première circumnavigation de la Terre.",
      historicalContextTip: "Antonio Pigafetta était le chroniqueur italien de l'expédition dont le journal manuscrit permit de sauver le récit de cette odyssée."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `6 septembre 1522. À l'embouchure du fleuve espagnol de Sanlúcar, une nef fantôme aux flancs rongés d'algues jette l'ancre.

Son nom : la Victoria. C'est le seul bâtiment rescapé des cinq navires partis trois ans plus tôt sous les ordres de Fernand de Magellan. Sur les deux cent quarante marins embarqués au départ, ils ne sont plus que dix-huit survivants faméliques, commandés par le capitaine basque Juan Sebastián Elcano. Magellan ayant péri dans une échauffourée aux Philippines, c'est Elcano qui a pris la décision héroïque de traverser l'océan Indien et de doubler le cap de Bonne-Espérance pour rentrer en Espagne.

Pour la toute première fois dans l'histoire humaine, des marins ont bouclé le tour du monde maritime. La sphéricité de la Terre n'est plus une théorie géométrique : c'est une réalité vécue. Charles Quint anoblit Elcano avec cette fière devise : « Tu m'as le premier contourné ».

Mais ce même 6 septembre vibre de moments d'un héroïsme saisissant :

En 1620, le Mayflower prend la mer depuis le port de Plymouth en Angleterre, emportant les Pères pèlerins vers le Nouveau Monde.

En 1757, naissance en Auvergne du marquis de La Fayette, le futur Héros des Deux Mondes.

En 1879, le massacre de l'ambassade britannique à Kaboul relance la seconde guerre d'Afghanistan au cœur du Grand Jeu colonial.

En 1914, au matin, le généralissime Joffre fait lire à l'armée française son ordre d'acier : « Une troupe qui ne peut plus avancer devra se faire tuer sur place plutôt que de reculer ». La bataille de la Marne commence.

Ce même jour, le général Gallieni réquisitionne six cents taxis parisiens pour acheminer d'urgence des troupes fraîches sur l'Ourcq.

En 1948, Juliana devient reine des Pays-Bas.

Et en 1991, la ville de Léningrad efface le nom du père de la révolution bolchevique pour redevenir Saint-Pétersbourg.

La grande leçon de l'Histoire : la volonté humaine et la persévérance indomptable sont les seuls moteurs capables de transformer des périls mortels en triomphes éternels.

Votre question de culture maritime :
Quel navigateur basque ramena la Victoria en Espagne le 6 septembre 1522, achevant le premier tour du monde de l'Histoire ?
Première proposition : Juan Sebastián Elcano.
Deuxième proposition : Vasco de Gama.
Troisième proposition : Antonio Pigafetta.
Ou quatrième proposition : Pedro Álvares Cabral.

La bonne réponse est la première proposition, Juan Sebastián Elcano. C'est à lui que revient l'honneur militaire et nautique d'avoir dirigé le dernier acte de la circumnavigation après la disparition de Magellan.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 6 septembre réunit l'une des plus colossales aventures géographiques de l'humanité en 1522 et l'un des plus purs sursauts de survie nationale française en 1914.

Revenons sur l'exploit de la première circumnavigation du globe. En 1519, le jeune roi Charles d'Espagne — futur Charles Quint — finance l'expédition de Fernand de Magellan. L'enjeu est financier et géopolitique : trouver un passage au sud de l'Amérique pour accéder aux îles Moluques, les fabuleuses îles aux Épices, sans violer les eaux territoriales africaines réservées au Portugal par le traité de Tordesillas.

Le voyage est une tragédie de chaque jour. Après avoir surmonté des mutineries et bravé les tempêtes australes, Magellan découvre le 21 octobre 1520 le détroit sinueux qui portera son nom. Puis commence la traversée terrifiante de l'océan Pacifique : pendant plus de trois mois, les hommes ne rencontrent aucune terre habitable. Privés d'eau potable et de vivres fraîches, les marins mangent du biscuit moisi grouillant de vers, puis font bouillir le vieux cuir des vergues pour tromper la faim.

Aux Philippines, Magellan commet une erreur d'orgueil : il s'ingère dans une guerre tribale locale et périt sur les récifs de l'île de Mactan, transpercé par les lances des guerriers du chef Lapu-Lapu. C'est alors que surgit la figure de Juan Sebastián Elcano. Navigateur basque originaire de Getaria, Elcano prend le commandement de la Victoria.

Ayant atteint les Moluques et rempli ses cales de clous de girofle, Elcano sait que la route du retour par le Pacifique est suicidaire contre les vents dominants. Il prend la décision la plus audacieuse de l'histoire navale : cingler plein ouest à travers l'océan Indien sous juridiction portugaise, en évitant tout contact avec les côtes pour ne pas être capturé. Malgré la faim et les tempêtes du cap de Bonne-Espérance, Elcano ramène son navire à Sanlúcar de Barrameda le 6 septembre 1522 avec dix-huit survivants. La Terre est mesurée, bouclée, réunie.

Trois cent quatre-vingt-douze ans plus tard, le 6 septembre 1914, c'est la survie de la France qui se joue le long de la Marne. Après l'échec sanglant de la bataille des Frontières et deux semaines d'une retraite épuisante sous la canicule d'août, les armées allemandes ne sont plus qu'à quarante kilomètres de Notre-Dame de Paris. Le généralissime Joffre, imperturbable dans la tourmente, saisit l'opportunité repérée par le général Gallieni : la Première armée allemande du général von Kluck a infléchi sa marche vers le sud-est, exposant son flanc droit à l'armée de Maunoury.

À l'aube du 6 septembre, l'ordre de Joffre résonne aux avant-postes : « Au moment où s'engage une bataille dont dépend le salut du pays, il importe de rappeler à tous que le moment n'est plus de regarder en arrière. Une troupe qui ne peut plus avancer devra, coûte que coûte, garder le terrain conquis et se faire tuer sur place plutôt que de reculer ». L'armée française fait volte-face, et les taxis parisiens réquisitionnés aux Invalides par Gallieni transportent d'urgence la brigade du général de Trentinian sur l'Ourcq : le rouleau compresseur allemand est brisé, Paris est sauvé.

Voici votre question de mémoire active :
Quel gouverneur militaire de Paris organisa le célèbre transport de troupes par les taxis de la Marne le 6 septembre 1914 ?
Première proposition : le général Gallieni.
Deuxième proposition : le général Joffre.
Troisième proposition : le général Foch.
Ou quatrième proposition : le général Pétain.

La réponse est la première proposition, le général Joseph Gallieni. Lucidité stratégique exceptionnelle, ce vieux colonial comprit le premier la faute d'alignement de von Kluck et mobilisa toute l'énergie de la capitale pour appuyer la manœuvre de la Marne.`
      }
    }
  }"""
