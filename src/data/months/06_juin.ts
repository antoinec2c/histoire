// src/data/months/06_juin.ts
import type { EphemerisDay } from '../../types/ephemeris';

export const JUIN_DAYS: Record<string, EphemerisDay> = {
  '06-18': {
    id: '06-18',
    month: 6,
    day: 18,
    dateFormatted: '18 juin',
    ephemerisTitle: "L'Honneur et la Défaite : De Waterloo à l'Appel de Londres",
    saintOfTheDay: 'Saint Léonce',
    mainEvent: {
      year: 1940,
      yearDisplay: '1940',
      title: "L'Appel du 18 Juin : Le refus de la servitude et la permanence de l'État",
      subtitle: "Un général inconnu s'empare de la souveraineté nationale au micro de la BBC",
      era: 'epoque_contemporaine',
      theme: 'politique_pouvoir',
      scope: 'france',
      location: 'Londres (Studio de la BBC)',
      keyFigures: ['Charles de Gaulle', 'Winston Churchill', 'Philippe Pétain'],
      narrativeExpress: `Le 18 juin 1940, alors que l'armée française s'effondre et que le maréchal Pétain a annoncé la veille qu'il fallait capituler, un général de brigade à titre temporaire, sous-secrétaire d'État déchu, s'assied devant un micro de la BBC à Londres. Charles de Gaulle prononce des mots qui relèvent la fierté de la nation : « La France a perdu une bataille ! Mais la France n'a pas perdu la guerre ! ». Dans ce geste de rupture inouïe, de Gaulle ne fait pas qu'un acte de bravoure : il pose un diagnostic géopolitique froid et prophétique. La guerre est mondiale ; l'Empire colonial français, la maîtrise navale britannique et l'industrie géante des États-Unis broieront l'Allemagne nazie. Par cette allocution solitaire, la légitimité souveraine de l'État refuse de mourir et prépare la victoire de 1945.`,
      narrativeDeepDive: `L'esprit d'État dans le désastre sépare les géants de la politique des simples commis administratifs. En juin 1940, la faillite politique et intellectuelle de la IIIe République est consommée. Le 17 juin, Philippe Pétain déclare qu'il faut « cesser le combat ». La quasi-totalité des généraux, des sénateurs et des diplomates s'incline devant la puissance du vainqueur allemand.

Charles de Gaulle récuse ce verdict immédiat. Réfugié à Londres avec l'aval stratégique de Churchill, il utilise la radio comme une arme de guerre et un glaive de souveraineté. Son discours n'est pas un appel émotionnel, c'est une démonstration rationnelle : la France a été battue par la force mécanique terrestre et aérienne. Or, les démocraties anglo-saxonnes possèdent une force industrielle décuplée capable de forger des dizaines de milliers de chars et d'avions supplémentaires.

En se proclamant chef de la France Libre, de Gaulle commet un acte de dissidence légale mais de sauvegarde nationale suprême : il interdit que la France soit traitée en nation complice et vaincue au jour de la victoire alliée. Cent vingt-cinq ans plus tôt jour pour jour, le 18 juin 1815, sur la plaine de Waterloo, Napoléon Ier voyait s'effondrer le Premier Empire sous les charges coalisées de Wellington et Blücher. Le 18 juin est la date charnière où la nation mesure la précarité des hégémonies militaires et la puissance inaltérable du verbe politique.`,
      politicalAnalysis: {
        motive: "Refuser l'armistice capitulard pour maintenir la France dans le camp des puissances belligérantes alliées.",
        stakes: "Préserver la souveraineté et le rang diplomatique futur de la nation française lors de la victoire inéluctable des forces industrielles anglo-américaines.",
        consequence: "La création de la France Libre, l'unification de la Résistance et la présence de la France à la table des vainqueurs en 1945 avec un siège permanent à l'ONU."
      }
    },
    perspectiveEvent: {
      year: 1815,
      yearDisplay: '1815',
      title: "La Bataille de Waterloo : La fin de l'épopée impériale et le concert des nations",
      era: 'revolutions_empires',
      scope: 'europe',
      location: 'Waterloo (Belgique)',
      summary: "Le 18 juin 1815, sur le plateau de Mont-Saint-Jean, l'armée de Napoléon Ier est submergée par les forces coalisées de Wellington et de Blücher. Malgré les charges désespérées du maréchal Ney et le sacrifice héroïque de la Garde impériale, les Cent-Jours s'achèvent dans un désastre sanglant. La France perd ses frontières naturelles et le Congrès de Vienne réorganise l'Europe sous l'hégémonie de la Sainte-Alliance et de l'Empire britannique."
    },
    centuryEchoes: [
      {
        year: 1429,
        yearDisplay: '1429',
        era: 'moyen_age_feodal',
        title: 'Bataille de Patay : Jeanne d’Arc brise les archers anglais',
        scope: 'france',
        shortDescription: 'L’avant-garde royale culbute l’armée de Talbot et Fastolf en rase campagne, lavant l’affront d’Azincourt et ouvrant la route du sacre de Reims à Charles VII.'
      },
      {
        year: 1815,
        yearDisplay: '1815',
        era: 'revolutions_empires',
        title: 'Bataille de Waterloo : La chute de l’Aigle impérial',
        scope: 'europe',
        shortDescription: 'Sur le plateau de Mont-Saint-Jean, l’armée napoléonienne cède sous les assauts combinés de Wellington et Blücher, refermant l’épopée impériale des Cent-Jours.'
      },
      {
        year: 1887,
        yearDisplay: '1887',
        era: 'revolutions_empires',
        title: 'Traité de réassurance germano-russe de Bismarck',
        scope: 'europe',
        shortDescription: 'Le chancelier de fer scelle une alliance secrète avec Saint-Pétersbourg pour garantir la neutralité russe et éviter à l’Allemagne le cauchemar d’une guerre sur deux fronts.'
      },
      {
        year: 1940,
        yearDisplay: '1940',
        era: 'epoque_contemporaine',
        title: 'L’Appel du 18 juin à la BBC',
        scope: 'france',
        shortDescription: 'De Gaulle récuse l’armistice capitulard de Pétain au micro de Londres, refusant la mort politique de la France et fondant la légitimité de la France Libre.'
      },
      {
        year: 1953,
        yearDisplay: '1953',
        era: 'epoque_contemporaine',
        title: 'Proclamation de la République en Égypte',
        scope: 'monde',
        shortDescription: 'Le mouvement des Officiers libres mené par Néguib et Nasser abolit la monarchie du roi Farouk, prélude à la crise de Suez et au reflux colonial en Orient.'
      },
      {
        year: 1979,
        yearDisplay: '1979',
        era: 'epoque_contemporaine',
        title: 'Signature des accords SALT II à Vienne',
        scope: 'monde',
        shortDescription: 'Jimmy Carter et Léonid Brejnev s’accordent sur la limitation des lanceurs de missiles nucléaires intercontinentaux, au sommet de la détente bilatérale.'
      },
      {
        year: 1983,
        yearDisplay: '1983',
        era: 'epoque_contemporaine',
        title: 'Sally Ride devient la première Américaine dans l’espace',
        scope: 'monde',
        shortDescription: 'L’astrophysicienne décolle à bord de la navette Challenger, illustrant les conquêtes scientifiques et la compétition spatiale de la guerre froide.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« La flamme de la résistance française »',
      content: '« Quoi qu’il arrive, la flamme de la résistance française ne doit pas s’éteindre et ne s’éteindra pas. Demain, comme aujourd’hui, je parlerai à la Radio de Londres. » Ces ultimes phrases du 18 juin 1940 ne figuraient pas mot pour mot dans le texte initial soumis au cabinet de guerre britannique ; de Gaulle les ajouta avec la prescience du symbole éternel.',
      sourceOrAttribution: 'Charles de Gaulle, Appel du 18 Juin 1940',
      contextExplanation: 'Certains ministres britanniques hésitaient à laisser parler de Gaulle pour ménager le gouvernement Pétain dans l’espoir qu’il n’abandonne pas la flotte française aux Allemands.'
    },
    quiz: {
      question: "Quel Premier ministre britannique a personnellement soutenu de Gaulle pour qu'il puisse prononcer l'Appel du 18 Juin sur la BBC malgré les réticences de certains ministres ?",
      options: [
        { id: 'A', label: 'Winston Churchill' },
        { id: 'B', label: 'Neville Chamberlain' },
        { id: 'C', label: 'Lord Halifax' },
        { id: 'D', label: 'Anthony Eden' }
      ],
      correctOptionId: 'A',
      explanation: "Winston Churchill comprit immédiatement la valeur stratégique d'avoir un chef militaire français incarnant le refus de la capitulation et imposa la diffusion du discours contre l'avis de son ministre des Affaires étrangères Lord Halifax.",
      historicalContextTip: "Lord Halifax souhaitait encore négocier avec le gouvernement Pétain pour éviter que la flotte française ne tombe sous contrôle allemand."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `18 juin 1940. Dans les couloirs feutrés de la BBC à Londres, un général de brigade inconnu du grand public s'avance vers le micro. 

La veille, le maréchal Philippe Pétain a parlé aux Français pour ordonner la reddition et vanter le « don de sa personne ». Dans la débâcle générale, les élites républicaines et l'état-major baissent les bras. Charles de Gaulle s'empare du micro pour opposer un refus sans compromis. 

« La France a perdu une bataille ! Mais la France n'a pas perdu la guerre ! »

Ce qui fait la puissance de ce texte, ce n'est pas une incantation lyrique, c'est une froide analyse de géopolitique industrielle. De Gaulle démontre que l'Allemagne hitlérienne, enfermée sur le continent européen, est condamnée face à la maîtrise des mers britannique et à la puissance de fabrication illimitée des usines américaines. En incarnant la résistance légitime, il sauve le droit de la France de siéger parmi les vainqueurs à Potsdam et à l'ONU en 1945.

Mais le 18 juin est une date jalonnée de fractures géopolitiques majeures à travers les âges :

Le 18 juin 1429, dans la plaine de Patay, l'armée de Jeanne d'Arc écrase l'ost anglais de Talbot, libérant la vallée de la Loire et rendant possible le sacre de Charles sept à Reims.

Cent vingt-cinq ans avant de Gaulle, le 18 juin 1815, sur la morne plaine de Waterloo, l'épopée napoléonienne s'abîme sous le feu des carrés britanniques de Wellington et l'arrivée des Prussiens de Blukère, rétablissant l'hégémonie britannique sur les mers.

Le 18 juin 1887, le chancelier Bismarck signe le traité secret de réassurance avec la Russie, sommet de l'équilibre diplomatique évitant à l'Allemagne une guerre sur deux fronts.

Le 18 juin 1953, l'Égypte proclame la République et chasse la monarchie sous l'impulsion de Nasser, ébranlant l'emprise impériale britannique sur le canal de Suez.

Le 18 juin 1979, à Vienne, Carter et Brejnev signent les accords SALT deux, tentative majeure de limiter la course aux armements nucléaires intercontinentaux.

Et le 18 juin 1983, l'astrophysicienne Sally Ride s'envole sur Challenger, affirmant la supériorité technique et scientifique américaine dans l'espace.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 18 juin résonne dans l'histoire de France et du monde d'une façon tragique et glorieuse : c'est le jour de la chute définitive de Napoléon à Waterloo en 1815, et c'est le jour du relèvement souverain incarné par Charles de Gaulle en 1940.

Arrêtons-nous sur ce triomphe éclatant de la prescience politique sur le défaitisme des foules. Le 17 juin 1940, lorsque le vainqueur de Verdun, Philippe Pétain, annonce qu'il s'est adressé à l'ennemi pour solliciter l'armistice, la panique et la stupeur paralysent la nation. Des millions de réfugiés encombrent les routes du sud ; l'armée est tronçonnée ; le gouvernement s'est replié à Bordeaux. La quasi-totalité des généraux et des parlementaires considèrent la partie perdue.

Pourquoi de Gaulle, alors sous-secrétaire d'État à la Guerre depuis seulement dix jours, refuse-t-il cette logique ? Parce qu'il pense en stratège des forces mondiales, et non en officier de corps d'armée cantonné à la ligne de front métropolitaine.

Parti pour Londres le matin du 17 juin dans l'avion du général Spears, de Gaulle négocie avec Winston Churchill. Le Premier ministre britannique comprend immédiatement qu'il a devant lui le seul homme capable de porter le drapeau de la souveraineté française. Malgré l'opposition de Lord Halifax, son ministre des Affaires étrangères qui souhaite ménager Bordeaux, Churchill autorise la diffusion sur les ondes de la BBC le 18 juin à 20 heures.

Le texte prononcé par de Gaulle est un chef-d'œuvre de concision politique. En moins de cinq cents mots, il démonte les illusions du gouvernement de Bordeaux :
Premièrement, la cause de la défaite est tactique : « Foudroyés aujourd'hui par la force mécanique, nous pourrons vaincre dans l'avenir par une force mécanique supérieure ».
Deuxièmement, le théâtre d'opérations est mondial : « Car la France n'est pas seule ! Elle a un vaste Empire derrière elle. Elle peut faire bloc avec l'Empire britannique qui tient la mer et continue la lutte. Elle peut, comme l'Angleterre, utiliser sans limites l'immense industrie des États-Unis ».
Troisièmement, la promesse de la continuité de l'État : « Moi, Général de Gaulle, actuellement à Londres, j'invite les officiers et les soldats français à se mettre en rapport avec moi ».

Mais la résonance du 18 juin embrasse tous les siècles :
En 1429, Jeanne d'Arc écrase les Anglais à Patay, restaurant la monarchie capétienne.
En 1815, la foudre s'abat sur l'armée napoléonienne à Waterloo.
En 1887, Bismarck conclut le traité secret de réassurance avec la Russie.
En 1953, l'Égypte renverse la monarchie et ouvre l'ère de l'émancipation post-coloniale.
En 1979, les accords SALT deux à Vienne fixent l'équilibre de la terreur thermonucléaire.
Et en 1983, Sally Ride s'élance dans l'espace à bord de la navette Challenger.`
      }
    }
  }
};
