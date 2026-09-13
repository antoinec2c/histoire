// src/data/months/03_mars.ts
import type { EphemerisDay } from '../../types/ephemeris';

export const MARS_DAYS: Record<string, EphemerisDay> = {
  '03-15': {
    id: '03-15',
    month: 3,
    day: 15,
    dateFormatted: '15 mars',
    ephemerisTitle: "Les Ides de Mars : La République romaine s'éteint sous les poignards",
    saintOfTheDay: 'Sainte Louise de Marillac',
    mainEvent: {
      year: -44,
      yearDisplay: '44 av. J.-C.',
      title: "L'Assassinat de Jules César aux Ides de Mars",
      subtitle: "En croyant sauver la liberté républicaine, les sénateurs précipitent l'Empire",
      era: 'antiquite',
      theme: 'politique_pouvoir',
      scope: 'europe',
      location: 'Rome (Curie de Pompée)',
      keyFigures: ['Jules César', 'Marcus Junius Brutus', 'Caius Cassius Longinus', 'Marc Antoine'],
      narrativeExpress: `Le 15 mars de l'an 44 avant J.-C. (les Ides de Mars), Jules César pénètre dans la Curie de Pompée où s'assemble le Sénat romain. Nommé dictateur à perpétuité, vainqueur des Gaules et maître de l'Occident, César est cerné par soixante conspirateurs sénatoriaux menés par Brutus et Cassius. Sous prétexte de supplique, les conspirateurs tirent leurs lames dissimulées sous leurs toges et le frappent de vingt-trois coups de dague. César s'effondre au pied de la statue de Pompée en murmurant à Brutus en grec : « Kai su teknon » (Toi aussi, mon fils). L'illusion des républicains est totale : loin de restaurer la liberté de l'oligarchie sénatoriale, ce régicide plonge Rome dans treize ans d'effroyables guerres civiles dont émergera l'Empire absolu d'Octave-Auguste.`,
      narrativeDeepDive: `L'assassinat de César illustre la loi bainvillienne par excellence : les hommes politiques provoquent presque toujours les conséquences inverses de celles qu'ils recherchaient.

À la fin du Ier siècle avant notre ère, les institutions de la cité-État romaine sont incapables de gérer un empire universel qui s'étend désormais de l'Hispanie à l'Asie Mineure et de la Gaule à l'Afrique. L'oligarchie sénatoriale, corrompue et attachée à ses privilèges terriens, a échoué à intégrer les provinces et à nourrir la plèbe urbaine. Seuls les chefs militaires victorieux, appuyés sur des légions de soldats professionnels dévoués à leur général (Syllas, Pompée, César), disposent de l'autorité réelle.

César a compris que la survie de Rome exigeait une centralisation monarchique du pouvoir, l'octroi de la citoyenneté romaine aux élites provinciales (notamment aux notables gaulois qu'il fait entrer au Sénat) et une réforme agraire vigoureuse. En acceptant la dictature perpétuelle en février 44 av. J.-C., César franchit la ligne rouge aux yeux des conservateurs républicains, qui y voient le retour détesté de la royauté.

Brutus, Cassius et leurs complices assassinent César au nom de la liberté sénatoriale. Mais ils commettent une erreur politique capitale : ils n'ont aucun plan pour l'après. Ils n'éliminent ni Marc Antoine, consul en exercice, ni les vétérans des légions qui adorent leur général défunt. Lorsque Marc Antoine lit le testament de César léguant ses jardins à la plèbe et une somme d'argent à chaque citoyen romain, la foule se soulève contre les meurtriers, contraints de fuir Rome.

Le résultat mécanique du complot est l'anéantissement final de la République : les conjurés sont écrasés à Philippes deux ans plus tard, et le jeune héritier testamentaire de César, Octave, deviendra Auguste, premier empereur romain.`,
      politicalAnalysis: {
        motive: "Empêcher César d'instaurer une monarchie dynastique universelle et de reléguer le Sénat au rang de simple chambre d'enregistrement.",
        stakes: "Le conflit irréductible entre une oligarchie sénatoriale dépassée et la nécessité d'un pouvoir centralisé pour administrer un empire immense.",
        consequence: "La chute définitive de la République romaine et la naissance du régime impérial fondé par Octave-Auguste."
      }
    },
    perspectiveEvent: {
      year: 1848,
      yearDisplay: '1848',
      title: "Le Printemps des Peuples en Hongrie : L'embrasement des nationalités",
      era: 'revolutions_empires',
      scope: 'europe',
      location: 'Budapest (Hongrie)',
      summary: "Le 15 mars 1848, sous l'onde de choc de la révolution parisienne de février, les patriotes de Pest menés par Sándor Petőfi descendent dans la rue et proclament les Douze Points pour exiger la liberté de la presse et l'indépendance nationale. Cet embrasement marque le réveil des nationalités européennes et fait vaciller pour la première fois le vieil empire multiethnique des Habsbourg de Vienne."
    },
    centuryEchoes: [
      {
        year: -44,
        yearDisplay: '44 av. J.-C.',
        era: 'antiquite',
        title: 'L’Assassinat de Jules César aux Ides de Mars',
        scope: 'europe',
        shortDescription: 'César est poignardé dans la Curie de Pompée par les conjurés républicains, précipitant l’avènement de l’Empire absolu.'
      },
      {
        year: 1493,
        yearDisplay: '1493',
        era: 'renaissance_moderne',
        title: 'Retour triomphal de Christophe Colomb en Espagne',
        scope: 'monde',
        shortDescription: 'La caravelle La Niña accoste au port de Palos, confirmant la découverte du Nouveau Monde et déplaçant le centre de gravité mondial vers l’Atlantique.'
      },
      {
        year: 1848,
        yearDisplay: '1848',
        era: 'revolutions_empires',
        title: 'Le Printemps des Peuples en Hongrie',
        scope: 'europe',
        shortDescription: 'La jeunesse et les patriotes de Pest menés par Sándor Petőfi réclament l’indépendance hongroise face au carcan séculaire des Habsbourg.'
      },
      {
        year: 1917,
        yearDisplay: '1917',
        era: 'epoque_contemporaine',
        title: 'Abdication du tsar Nicolas II et chute des Romanov',
        scope: 'europe',
        shortDescription: 'Isolé dans son train impérial à Pskov par la Révolution de Février, le dernier souverain russe abdique, mettant fin à trois siècles de dynastie.'
      },
      {
        year: 1939,
        yearDisplay: '1939',
        era: 'epoque_contemporaine',
        title: 'Invasion de Prague et dépeçage de la Tchécoslovaquie',
        scope: 'europe',
        shortDescription: 'Violant les accords de Munich, la Wehrmacht entre en Bohême-Moravie, réduisant à néant les illusions pacifistes des démocraties occidentales.'
      },
      {
        year: 1944,
        yearDisplay: '1944',
        era: 'epoque_contemporaine',
        title: 'Adoption clandestine du Programme du CNR (« Les Jours Heureux »)',
        scope: 'france',
        shortDescription: 'Dans la clandestinité la plus totale, le Conseil National de la Résistance adopte le plan qui fonde la Sécurité sociale et les nationalisations républicaines.'
      },
      {
        year: 1985,
        yearDisplay: '1985',
        era: 'epoque_contemporaine',
        title: 'Enregistrement du tout premier nom de domaine internet .com',
        scope: 'monde',
        shortDescription: 'L’entreprise Symbolics enregistre symbolics.com, marquant le point de départ civil et commercial de la mondialisation numérique.'
      },
      {
        year: 2011,
        yearDisplay: '2011',
        era: 'epoque_contemporaine',
        title: 'Soulèvement de Deraa et début de la tragédie syrienne',
        scope: 'monde',
        shortDescription: 'Les manifestations pro-démocratie réprimées dans le sang déclenchent une guerre civile internationale déstabilisant durablement le Proche-Orient.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: '« Tu quoque mi fili »',
      content: '« Kai su teknon » (en grec, langue de l’élite romaine cultivée de l’époque). Selon l’historien Suétone, César aurait prononcé ces paroles en grec à l’adresse de Brutus en le voyant lever son poignard, avant de rabattre sa toge sur son visage pour mourir avec dignité. La formule latine « Tu quoque mi fili » a été popularisée plus tard au XVIIIe siècle par l’abbé Lhomond.',
      sourceOrAttribution: 'Suétone, Vie des douze Césars (Vie de Jules César, LXXXII)',
      contextExplanation: 'Brutus était le fils de Servilia, maîtresse de jeunesse de César ; César l’avait toujours protégé et comblé d’honneurs politiques.'
    },
    quiz: {
      question: "Quelle conséquence politique immédiate et paradoxale l'assassinat de Jules César par les républicains a-t-il entraîné à Rome ?",
      options: [
        { id: 'A', label: "L'accélération de la fin de la République et l'avènement de l'Empire" },
        { id: 'B', label: "La restauration durable du pouvoir suprême du Sénat conservateur" },
        { id: 'C', label: "La dissolution immédiate des légions professionnelles romaines" },
        { id: 'D', label: "L'annexion de l'Italie par les royaumes hellénistiques d'Orient" }
      ],
      correctOptionId: 'A',
      explanation: "En éliminant César sans maîtriser l'armée ni la plèbe, les conjurés sénatoriaux déclenchèrent une guerre civile qui anéantit l'oligarchie et porta au pouvoir le premier empereur absolu, Octave-Auguste.",
      historicalContextTip: "Les républicains croyaient que le peuple célébrerait le retour de la liberté sénatoriale, alors que la plèbe vénérait César."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `15 mars 44 avant notre ère. Les fameuses Ides de Mars.

Dans la Curie de Pompée à Rome, Jules César s'avance parmi les sénateurs. Dictateur à perpétuité, le conquérant des Gaules est au zénith de son autorité. Soixante sénateurs ont dissimulé des poignards sous leurs toges patriciennes. Menés par Brutus et Cassius, ils se ruent sur lui. Frappé de vingt-trois coups de lame, César s'effondre au pied de la statue de son rival Pompée en murmurant en grec à son protégé : « Kaï su tèknon » — Toi aussi, mon fils.

Pourquoi les sénateurs ont-ils assassiné César ? Par fidélité aveugle à la vieille république oligarchique. Ils croyaient qu'en poignardant l'homme fort, les privilèges du Sénat renaîtraient spontanément.

Mais c'est l'exacte mécanique inverse qui s'est enclenchée. On ne ressuscite pas un régime mort. La République romaine des cités-États était vermoulue et incapable d'administrer un empire méditerranéen. En supprimant César, les républicains ont provoqué treize années de guerres civiles sanglantes qui portèrent son héritier Octave à instaurer le régime impérial absolu.

Mais regardez comment le 15 mars traverse les millénaires et scelle le destin du monde :

En 44 avant notre ère, la chute de César précipite l'agonie de la République romaine et annonce l'avènement d'Auguste.

En 1493, Christophe Colomb accoste au port de Palos à bord de La Niña, rapportant d'Amérique la nouvelle de terres nouvelles et déplaçant le centre de gravité mondial de la Méditerranée vers l'Atlantique.

En 1848, sous l'onde de choc des révolutions européennes, la jeunesse de Pest et le poète Sándor Petőfi soulèvent la Hongrie contre la domination séculaire des Habsbourg de Vienne.

En 1917, acculé par la foule de Petrograd et abandonné par ses généraux, le tsar Nicolas deux abdique dans son train à Pskov, mettant fin à trois siècles de dynastie des Romanov.

En 1939, les divisions blindées de la Wehrmacht entrent dans Prague sans coup férir : Hitler déchire les accords de Munich, anéantissant l'illusion de paix des démocraties occidentales.

En 1944, dans la clandestinité parisienne sous la terreur de la Gestapo, le Conseil National de la Résistance unifié adopte à l'unanimité son programme « Les Jours Heureux », matrice des conquis sociaux de la France libérée.

En 1985, le dépôt de symbolics point com inaugure l'enregistrement des noms de domaine internet, coup d'envoi discret de la révolution planétaire du Web.

Et le 15 mars 2011, la répression sanglante des manifestations de Deraa plonge la Syrie dans une guerre civile internationale dévastatrice dont les plaies béantes marquent encore le siècle.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 15 mars 44 avant notre ère offre la démonstration la plus implacable de la loi fondamentale de la mécanique historique : les conjurations politiques provoquent presque mathématiquement le contraire absolu du but recherché par leurs auteurs.

Replaçons les Ides de Mars dans leur cadre géopolitique réel. Rome a conquis le bassin méditerranéen : l'Hispanie, la Grèce, Carthage, la Syrie, l'Égypte vassalisée et la Gaule pacifiée par Jules César entre 58 et 50 avant notre ère.

Mais les structures institutionnelles qui gouvernent ce colossal empire demeurent celles d'une modeste cité du Latium, taillées pour quelques dizaines de milliers de citoyens. Le Sénat est dominé par une oligarchie patricienne jalouse de ses rentes, sourde aux besoins des provinces et impuissante devant la misère de la plèbe urbaine. Face à cette paralysie civile, la force réelle a glissé vers les légions de métier, dont les soldats ne reconnaissent d'autre autorité que leur chef de guerre victorieux.

César a parfaitement compris que la survie du monde romain exige un pouvoir monarchique centralisateur, capable d'arracher l'État aux luttes de factions, de distribuer des terres aux vétérans et d'octroyer la citoyenneté aux élites provinciales, y compris aux notables gaulois qu'il fait siéger au Sénat. Mais pour les traditionalistes comme Brutus et Cassius, ces réformes relèvent du sacrilège monarchique.

Le 15 mars au matin, César pénètre dans la Curie de Pompée. Entouré par soixante conspirateurs armés de stylets dissimulés dans les plis de leurs toges, le dictateur est criblé de vingt-trois blessures. En apercevant Marcus Junius Brutus, fils de sa maîtresse Servilia qu'il avait comblé de bienfaits, César lâche en grec ce cri immortel : « Kaï su tèknon » — Toi aussi, mon fils — avant de voiler sa tête pour mourir avec la dignité d'un grand de Rome.

Mais les meurtriers n'ont rien prévu pour l'après. Ils s'imaginaient que le peuple saluerait la restauration du pouvoir sénatorial. Or le peuple déteste le Sénat et chérit César. Marc Antoine soulève la plèbe en lisant le testament du dictateur, et le jeune héritier Octave rassemble les vétérans des légions césariennes. Les assassins sont pourchassés et exterminés deux ans plus tard à Philippes. De leurs poignards naît non pas la liberté républicaine, mais l'Empire autoritaire et universel d'Auguste.

Et ce même 15 mars résonne comme un fil conducteur de rupture à travers les siècles :
En 1493, Christophe Colomb débarque à Palos à son retour des Antilles, scellant la bascule de l'Histoire humaine vers l'Atlantique et l'empire colonial espagnol.
En 1848, le poète Sándor Petőfi et les patriotes de Budapest proclament les Douze Points de liberté, allumant la flamme du réveil des nationalités face aux Habsbourg d'Autriche.
En 1917, dans le wagon impérial immobilisé à Pskov, le tsar Nicolas deux signe son abdication sous la pression de la Révolution de Février, mettant un terme à trois siècles d'autocratie des Romanov.
En 1939, la Wehrmacht pénètre dans Prague : Hitler viole les accords de Munich et prouve à la France et à l'Angleterre que l'illusion de l'apaisement diplomatique conduit inéluctablement à la guerre générale.
En 1944, dans Paris occupé par les nazis, le Conseil National de la Résistance adopte clandestinement le programme « Les Jours Heureux », qui instaurera à la Libération la Sécurité sociale, les retraites et la nationalisation de l'énergie.
En 1985, le dépôt du nom de domaine symbolics point com marque les premiers pas de l'internet civil et commercial moderne.
Et en 2011, la répression des cortèges pacifiques de Deraa embrase la Syrie, prélude à une décennie de guerre par procuration entre grandes puissances régionales et mondiales.`
      }
    }
  }
};
