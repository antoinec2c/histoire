# scripts/days_vague1.py
# -*- coding: utf-8 -*-
"""
Contenu éditorial rigoureux pour la Vague 1 de Septembre (09-01 à 09-05)
"""

DAYS = {}

# 09-02 : Bataille d'Actium (-31) & Capitulation de Sedan (1870)
DAYS['09-02'] = """  '09-02': {
    id: '09-02',
    month: 9,
    day: 2,
    dateFormatted: '2 septembre',
    ephemerisTitle: "La Naissance de l'Empire romain à Actium et l'Effondrement de Sedan",
    saintOfTheDay: 'Saint Just',
    mainEvent: {
      year: -31,
      yearDisplay: '31 av. J.-C.',
      title: "La Bataille navale d'Actium : Octave anéantit Marc Antoine et fonde le Principat",
      subtitle: "La fin des guerres civiles romaines et la métamorphose de la République en Empire universel",
      era: 'antiquite',
      theme: 'guerres_diplomatie',
      scope: 'europe',
      location: 'Golfe d’Ambracie (Grèce occidentale)',
      keyFigures: ['Octave (futur Auguste)', 'Marcus Vipsanius Agrippa', 'Marc Antoine', 'Cléopâtre VII'],
      narrativeExpress: `Le 2 septembre de l'an 31 avant J.-C., au large du promontoire d'Actium en Grèce, se joue le sort de l'Occident. Dans les eaux calmes du golfe d'Ambracie, la gigantesque flotte d'Orient de Marc Antoine et de la reine Cléopâtre affronte les escadres légères d'Octave, commandées par son génial amiral Agrippa. Alors que les lourds quinquérèmes d'Antoine peinent à manœuvrer, Agrippa utilise la vitesse de ses liburnes pour harceler et encercler le flanc ennemi. Au cœur de la mêlée, Cléopâtre prend subitement la fuite avec ses soixante navires égyptiens ; Marc Antoine l'imite dans un accès de panique, abandonnant ses légions et ses équipages au désastre. Cette victoire éclatante met un terme définitif à un siècle de guerres civiles qui rongeaient Rome depuis les Gracques. Maître incontesté du monde méditerranéen, le jeune Octave rentre à Rome pour recevoir le titre sacré d'Auguste et fonder le régime impérial du Principat.`,
      narrativeDeepDive: `La bataille d'Actium illustre la loi géopolitique primordiale du monde méditerranéen antique : l'incompatibilité entre deux visions du pouvoir. D'un côté, Marc Antoine, séduit par les fastes hellénistiques d'Alexandrie et sous l'emprise politique de Cléopâtre, aspire à fonder une monarchie théocratique orientale où Rome ne serait plus que la province occidentale d'un empire ptolémaïque universel. De l'autre côté, Octave incarne le génie pragmatique et sévère de la tradition républicaine et italienne, appuyé sur le loyalisme des vétérans césariens et de l'oligarchie foncière.

Sur le plan stratégique, la campagne a été gagnée des mois plus tôt par Marcus Vipsanius Agrippa. En s'emparant par surprise des bases logistiques de Méthone et de Leucade, l'amiral d'Octave a coupé les lignes de ravitaillement d'Antoine avec l'Égypte, condamnant son armée à la faim et à la malaria sur les plages marécageuses d'Ambracie.

Lorsque la flotte d'Antoine tente une percée désespérée le 2 septembre, ses galères sont trop lourdes et leurs rameurs affaiblis. Les navires d'Octave, plus petits mais manœuvriers, projettent le feu grégeois et brisent les rames adverses. La désertion soudaine de Cléopâtre scelle l'effondrement moral d'Antoine.

La portée politique d'Actium est gigantesque : l'Égypte, grenier à blé du monde méditerranéen, devient la propriété personnelle de l'empereur romain. Avec cette victoire, les institutions vermoulues de la cité romaine sont définitivement remplacées par le pouvoir monarchique centralisé d'Auguste, apportant au monde la célèbre Pax Romana qui durera plus de deux siècles.`,
      politicalAnalysis: {
        motive: "Empêcher Marc Antoine et Cléopâtre de transférer le centre de gravité de l'Empire romain vers Alexandrie et l'Orient hellénistique.",
        stakes: "L'affrontement mortel entre la culture politique romaine d'Occident et la monarchie divine de type oriental.",
        consequence: "L'annexion de l'Égypte par Rome et la fondation officielle du Principat impérial par Octave-Auguste en 27 av. J.-C."
      }
    },
    perspectiveEvent: {
      year: 1870,
      yearDisplay: '1870',
      title: "La Capitulation de Sedan : La chute du Second Empire et la captivité de Napoléon III",
      era: 'revolutions_empires',
      scope: 'france',
      location: 'Sedan (Château fort et plaine de Floing)',
      summary: "Le 2 septembre 1870, cernée dans la cuvette de Sedan par les armées prussiennes et écrasée sous le feu convergent de cinq cents canons Krupp, l'armée de Châlons capitule. Napoléon III remet son épée au roi Guillaume Ier de Prusse. Cet anéantissement militaire provoque la proclamation de la République à Paris quarante-huit heures plus tard et livre l'Alsace-Lorraine aux exigences du futur Empire allemand."
    },
    centuryEchoes: [
      {
        year: -31,
        yearDisplay: '31 av. J.-C.',
        era: 'antiquite',
        title: 'Bataille navale d’Actium en Grèce',
        scope: 'europe',
        shortDescription: 'Octave et Agrippa détruisent la flotte d’Antoine et Cléopâtre, consacrant le triomphe de Rome et la fondation de l’Empire.'
      },
      {
        year: 1666,
        yearDisplay: '1666',
        era: 'grand_siecle_lumieres',
        title: 'Le Grand Incendie de Londres',
        scope: 'europe',
        shortDescription: 'Un feu dévastateur ravage la Cité de Londres pendant quatre jours, détruisant 13 000 maisons et permettant la reconstruction moderne de Christopher Wren.'
      },
      {
        year: 1792,
        yearDisplay: '1792',
        era: 'revolutions_empires',
        title: 'Début des massacres de Septembre à Paris',
        scope: 'france',
        shortDescription: 'Sous la panique de l’invasion prussienne après la prise de Verdun, des foules révolutionnaires égorgent plus de mille prisonniers dans les geôles parisiennes.'
      },
      {
        year: 1870,
        yearDisplay: '1870',
        era: 'revolutions_empires',
        title: 'Capitulation de Napoléon III à Sedan',
        scope: 'france',
        shortDescription: 'L’armée impériale dépose les armes devant Guillaume Ier et Moltke ; la défaite scelle la mort du Second Empire et l’essor de la puissance prussienne.'
      },
      {
        year: 1898,
        yearDisplay: '1898',
        era: 'epoque_contemporaine',
        title: 'Bataille d’Omdurman au Soudan',
        scope: 'monde',
        shortDescription: 'Le général Kitchener et l’armée britannique écrasent les insurgés mahdistes au Nil, affirmant l’hégémonie de l’Empire britannique sur l’Afrique de l’Est.'
      },
      {
        year: 1945,
        yearDisplay: '1945',
        era: 'epoque_contemporaine',
        title: 'Capitulation du Japon et fin de la Seconde Guerre mondiale',
        scope: 'monde',
        shortDescription: 'À bord du cuirassé USS Missouri en baie de Tokyo, les plénipotentiaires japonais signent la capitulation sans conditions devant le général MacArthur.'
      },
      {
        year: 1945,
        yearDisplay: '1945',
        era: 'epoque_contemporaine',
        title: 'Proclamation de l’indépendance du Viêt Nam par Hô Chi Minh',
        scope: 'monde',
        shortDescription: 'Sur la place Ba Dinh à Hanoï, Hô Chi Minh proclame la République démocratique du Viêt Nam, coup d’envoi de la guerre de décolonisation indochinoise.'
      },
      {
        year: 1990,
        yearDisplay: '1990',
        era: 'epoque_contemporaine',
        title: 'Proclamation unilatérale de sécession de la Transnistrie',
        scope: 'europe',
        shortDescription: 'La région russophone de Transnistrie fait sécession de la Moldavie, créant l’un des plus durables conflits gelés de l’espace post-soviétique.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« N’ayant pas pu mourir au milieu de mes troupes... »',
      content: '« N’ayant pas pu mourir au milieu de mes troupes, il ne me reste plus qu’à rendre mon épée entre les mains de Votre Majesté. » Par cette lettre pathétique rédigée depuis le château de Bellevue à Sedan et adressée au roi Guillaume Ier de Prusse, Napoléon III met un terme à la journée sanglante du 2 septembre 1870.',
      sourceOrAttribution: 'Napoléon III, Lettre au roi de Prusse, 2 septembre 1870 (reproduite dans les Mémoires du maréchal de Mac-Mahon)',
      contextExplanation: 'L’Empereur avait passé la journée à cheval sous le feu des obus sur la crête de Floing, cherchant ostensiblement une mort héroïque pour épargner le déshonneur à sa dynastie.'
    },
    quiz: {
      question: "Quel amiral et ami de jeunesse d'Octave fut le véritable concepteur militaire de la victoire d'Actium contre Marc Antoine et Cléopâtre ?",
      options: [
        { id: 'A', label: 'Marcus Vipsanius Agrippa' },
        { id: 'B', label: 'Caius Cilnius Mécène' },
        { id: 'C', label: 'Lucius Munatius Plancus' },
        { id: 'D', label: 'Sextus Pompée' }
      ],
      correctOptionId: 'A',
      explanation: "Marcus Vipsanius Agrippa était le bras armé et le génie militaire d'Octave. C'est sa stratégie navale de blocus maritime qui asphyxia la flotte d'Antoine à Actium avant de l'anéantir sur l'eau.",
      historicalContextTip: "Mécène était le conseiller politique et protecteur des poètes, tandis qu'Agrippa dirigeait les légions et fit bâtir le Panthéon de Rome."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `2 septembre de l'an 31 avant notre ère. Au large de la Grèce, sur les eaux bleues du golfe d'Ambracie, retentit le fracas naval d'Actium.

D'un côté, les escadres rapides d'Octave, menées par son brillant amiral Agrippa. De l'autre, les lourds navires cuirassés de Marc Antoine et de la reine Cléopâtre. L'enjeu est colossal : décider si l'Empire sera romain et occidental, ou s'il deviendra une monarchie théocratique orientale centrée sur Alexandrie.

Agrippa manœuvre à merveille : il coupe les vivres de l'ennemi et harcèle ses flancs. En pleine bataille, Cléopâtre prend la fuite avec ses soixante galères égyptiennes ; Marc Antoine abandonne ses hommes pour la suivre. La déroute est totale. Avec Actium s'achève un siècle de guerres civiles à Rome. Octave devient Auguste : la République cède la place à l'Empire.

Mais ce même 2 septembre traverse le temps et scelle d'autres destins fracassants :

En 1666, le Grand Incendie de Londres détruit les quatre cinquièmes de la capitale anglaise en quatre jours de cauchemar.

En 1792, sous la panique de l'invasion prussienne après la chute de Verdun, débutent à Paris les sanglants massacres de Septembre dans les prisons.

En 1870, dans la cuvette de Sedan, l'armée française écrasée sous les canons de Krupp capitule : Napoléon trois est fait prisonnier, emportant le Second Empire dans le désastre.

En 1898, à la bataille d'Omdurman au Soudan, les mitrailleuses de Kitchener fauchent les mahdistes, assurant le contrôle britannique sur la vallée du Nil.

En 1945, à bord du cuirassé Missouri dans la baie de Tokyo, le Japon signe sa capitulation définitive : la Seconde Guerre mondiale est terminée.

Le même jour, à Hanoï, Hô Chi Minh proclame l'indépendance de la République du Viêt Nam.

Et en 1990, la Transnistrie fait sécession de la Moldavie, allumant l'un des conflits gelés du monde post-soviétique.

La leçon géopolitique d'Actium : les civilisations ne périssent pas sous les coups de l'étranger tant que leurs élites ne se sont pas divisées dans des querelles intestines sans réconciliation possible.

Votre question de culture classique :
Quel amiral et génie militaire assura la victoire d'Octave à la bataille d'Actium ?
Première proposition : Marcus Agrippa.
Deuxième proposition : Mécène.
Troisième proposition : Pompée le Jeune.
Ou quatrième proposition : Lépide.

La réponse est la première proposition, Marcus Vipsanius Agrippa. Fidèle compagnon d'Octave, il lui donna l'Empire par ses victoires avant de doter Rome du Panthéon.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 2 septembre réunit deux journées miroirs d'une tragique intensité dans l'histoire des empires : la naissance du Principat romain à Actium en 31 avant notre ère, et l'effondrement sanglant du Second Empire français à Sedan en 1870.

Analysons d'abord la dynamique d'Actium à la lumière des lois de la géopolitique antique. Après l'assassinat de Jules César aux Ides de Mars en 44 av. J.-C. et la vengeance implacable exercée contre les républicains de Brutus et Cassius à Philippes, le monde romain avait été partagé entre Octave et Marc Antoine. Mais ce triumvirat n'était qu'une trêve fragile entre deux conceptions fondamentalement inconciliables de la civilisation.

Installé dans les palais d'Alexandrie, Marc Antoine a épousé la reine Cléopâtre sept. Séduit par les rituels et les fastes de la monarchie ptolémaïque, il distribue des territoires romains aux enfants nés de son union avec la reine égyptienne. À Rome, le jeune Octave exploite magistralement ce scandale national. Il révèle publiquement le testament d'Antoine exigeant d'être enseveli auprès de Cléopâtre à Alexandrie. Dès lors, le conflit n'est plus présenté comme une guerre civile fratricide entre citoyens romains, mais comme une croisade sacrée de l'Italie et de ses dieux ancestraux contre une reine orientale qui prétend asservir le Capitole.

La manœuvre militaire d'Actium est un modèle absolu de stratégie préparatoire. Marcus Vipsanius Agrippa, l'ami d'enfance et général en chef d'Octave, sait que les lourdes galères d'Antoine sont redoutables en choc frontal. Dès le printemps 31, Agrippa coupe les routes maritimes d'Antoine en s'emparant des ports stratégiques de Méthone et de Corfou. Lorsque la flotte ennemie se risque hors du golfe d'Ambracie le 2 septembre, ses équipages sont décimés par la faim et la fièvre. Les liburnes romaines, légères et manœuvrières, encerclent les monstres marins adverses. La fuite subite de Cléopâtre, suivie par Antoine affolé, sonne le glas de la dynastie ptolémaïque.

Les conséquences institutionnelles d'Actium sont colossales. L'Égypte devient le domaine personnel d'Octave, qui interdit à tout sénateur romain d'y entrer sans son autorisation afin de sanctuariser le ravitaillement en blé de Rome. Le temple de Janus est fermé pour signifier la paix universelle : la République des oligarques s'efface devant le règne quarantenaire d'Auguste et deux siècles de Pax Romana.

Dix-neuf siècles plus tard, le 2 septembre 1870, c'est l'Empire des Bonaparte qui sombre dans la cuvette de Sedan. Pris en tenaille sous les feux convergents de cinq cents canons Krupp qui pilonnent les positions françaises depuis les hauteurs, Napoléon trois capitule pour éviter le massacre inutile de son armée. La défaite balaye le régime impérial et livre l'Alsace-Lorraine au Reich unifié par Bismarck.

Voici votre question de mémoire active :
Quel roi de Prusse reçut la capitulation de Napoléon trois au château de Bellevue le 2 septembre 1870 avant d'être couronné empereur d'Allemagne à Versailles ?
Première proposition : Guillaume Premier.
Deuxième proposition : Frédéric-Guillaume Quatre.
Troisième proposition : Frédéric Trois.
Ou quatrième proposition : Guillaume Deux.

La réponse est la première proposition, Guillaume Premier de Hohenzollern. C'est devant lui que Napoléon trois remit son épée, scellant l'unification de l'Empire allemand sur les ruines du Second Empire français.`
      }
    }
  }"""
