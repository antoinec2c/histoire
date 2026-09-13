// src/data/months/07_juillet.ts
import type { EphemerisDay } from '../../types/ephemeris';

export const JUILLET_DAYS: Record<string, EphemerisDay> = {
  '07-27': {
    id: '07-27',
    month: 7,
    day: 27,
    dateFormatted: '27 juillet',
    ephemerisTitle: "Bouvines : Le jour où la Nation française prit conscience d'elle-même",
    saintOfTheDay: 'Sainte Nathalie',
    mainEvent: {
      year: 1214,
      yearDisplay: '1214',
      title: "La Bataille de Bouvines : Le triomphe capétien sur la coalition européenne",
      subtitle: "La première grande communion patriotique de l'histoire de France",
      era: 'moyen_age_feodal',
      theme: 'guerres_diplomatie',
      scope: 'france',
      location: 'Bouvines (Flandre)',
      keyFigures: ['Philippe II Auguste', 'Othon IV du Saint-Empire', 'Ferrand de Flandre', 'Renaud de Dammartin'],
      narrativeExpress: `Le dimanche 27 juillet 1214, sous une chaleur de plomb, la couronne capétienne joue sa survie dans la plaine marécageuse de Bouvines. Face au roi de France Philippe Auguste s'avance une formidable coalition financée par l'or de Jean sans Terre, roi d'Angleterre : l'empereur germanique Othon IV, le comte de Flandre et le comte de Boulogne. Malgré la trêve dominicale violée par les coalisés, la mêlée s'engage avec une férocité sauvage. Philippe Auguste est tiré à bas de son cheval par des crochets de fer et manque d'être égorgé par des piétons flamands avant d'être sauvé par ses chevaliers. Dans l'après-midi, la cavalerie royale pulvérise le centre impérial ; Othon s'enfuit en abandonnant son étendard d'aigle dorée. Lorsque Philippe Auguste regagne Paris, les manants, paysans et bourgeois des communes l'acclament tout au long de la route : pour la première fois, le peuple français a vibré à l'unisson de son roi pour préserver la terre des pères.`,
      narrativeDeepDive: `Pour apprécier Bouvines avec la rigueur bainvillienne, il faut observer la carte géopolitique de 1214. Philippe Auguste a passé son règne à démanteler l'empire Plantagenêt en confisquant la Normandie, l'Anjou, le Maine et la Touraine à Jean sans Terre. Furieux de ces pertes territoriales, le roi d'Angleterre ourdit une gigantesque manœuvre en tenaille contre la France. 

Jean sans Terre débarque à La Rochelle pour attaquer par le sud-ouest, tandis qu'au nord, ses immenses subsides financiers lèvent une formidable coalition : l'empereur Othon IV de Brunswick, les comtes rebelles de Flandre et de Boulogne, et les ducs de Brabant et de Limbourg. Le plan des coalisés est net : anéantir Philippe Auguste, dépecer le domaine capétien et ramener le royaume au statut d'une constellation de petits fiefs sous tutelle impériale.

Le génie stratégique de Philippe Auguste consiste d'abord à diviser ses forces : il confie à son fils le prince Louis (futur Louis VIII) le soin de fixer et repousser Jean sans Terre à La Roche-aux-Moines le 2 juillet. Puis, le roi remonte à marche forcée vers le nord avec son armée royale, complétée par les milices communales des villes de France (Amiens, Arras, Beauvais, Noyon).

Le 27 juillet, jour du Seigneur où les armes devraient se taire, les coalisés attaquent l'arrière-garde française près du pont de Bouvines. Philippe fait volte-face. La bataille est d'une sauvagerie rare. La cavalerie française manœuvre avec une cohésion exemplaire. Ferrand de Flandre et Renaud de Dammartin sont capturés vivants ; Othon IV s'enfuit éperdu vers l'Allemagne, où il sera bientôt déposé au profit de Frédéric II.

Les conséquences de Bouvines sont immenses : en Angleterre, le désastre de Jean sans Terre force ce dernier à concéder la Grande Charte (Magna Carta) à ses barons révoltés. En Allemagne, la puissance impériale s'effondre dans l'anarchie. En France, la dynastie capétienne acquiert un prestige invincible, et les provinces fêtent la victoire royale comme la leur. C'est l'étincelle primitive de la conscience nationale.`,
      politicalAnalysis: {
        motive: "Rompre l'étau mortel de la coalition anglo-germanique cherchant à anéantir les conquêtes territoriales capétiennes en Normandie et Anjou.",
        stakes: "La survie même du royaume de France indépendant face au dépeçage programmé par l'Empire germanique et l'Angleterre.",
        consequence: "La naissance du sentiment national unissant le peuple et la couronne, la signature de la Magna Carta en Angleterre et l'effondrement d'Othon IV."
      }
    },
    perspectiveEvent: {
      year: 1794,
      yearDisplay: '1794',
      title: "Le 9 Thermidor : La Chute de Robespierre et la fin de la Grande Terreur",
      era: 'revolutions_empires',
      scope: 'europe',
      location: 'Paris (Convention nationale)',
      summary: "Le 27 juillet 1794 (9 Thermidor an II), la Convention nationale se soulève contre l'Incorruptible. Terrorisés par les listes de proscription imminentes, les députés hurlent : « À bas le tyran ! ». Décrété d'arrestation avec Saint-Just et Couthon, Robespierre est guillotiné le lendemain. Cette journée met un terme abrupt à la Terreur jacobine et ouvre la réaction thermidorienne qui stabilisera les conquêtes bourgeoises de la Révolution."
    },
    centuryEchoes: [
      {
        year: 1245,
        yearDisplay: '1245',
        era: 'moyen_age_feodal',
        title: 'Déposition de l’empereur Frédéric II au concile de Lyon',
        scope: 'europe',
        shortDescription: 'Le pape Innocent IV frappe d’anathème et déchoit l’empereur germanique Stupor Mundi, point d’orgue du duel titanesque entre le Sacerdoce et l’Empire.'
      },
      {
        year: 1675,
        yearDisplay: '1675',
        era: 'grand_siecle_lumieres',
        title: 'Mort du maréchal de Turenne à Salzbach',
        scope: 'europe',
        shortDescription: 'Frappé en plein cœur par un boulet de canon alors qu’il reconnaissait le front impérial, le plus illustre maréchal de Louis XIV laisse la France orpheline.'
      },
      {
        year: 1794,
        yearDisplay: '1794',
        era: 'revolutions_empires',
        title: 'Le 9 Thermidor : Chute de Robespierre et Saint-Just',
        scope: 'france',
        shortDescription: 'À la Convention nationale, les députés terrifiés par l’échafaud mettent l’Incorruptible hors-la-loi, brisant net la Terreur jacobine dès le lendemain.'
      },
      {
        year: 1830,
        yearDisplay: '1830',
        era: 'revolutions_empires',
        title: 'Début des Trois Glorieuses à Paris',
        scope: 'france',
        shortDescription: 'En réponse aux ordonnances autoritaires de Charles X, Paris se hérisse de barricades ; le peuple et les étudiants chassent la branche aînée des Bourbons.'
      },
      {
        year: 1890,
        yearDisplay: '1890',
        era: 'revolutions_empires',
        title: 'Blessure fatale de Vincent van Gogh à Auvers-sur-Oise',
        scope: 'france',
        shortDescription: 'L’artiste tourmenté se tire une balle dans la poitrine au milieu des champs de blé, figure tragique marquant la genèse de l’art moderne occidental.'
      },
      {
        year: 1909,
        yearDisplay: '1909',
        era: 'epoque_contemporaine',
        title: 'Premier vol militaire record d’Orville Wright',
        scope: 'monde',
        shortDescription: 'À Fort Myer, Orville Wright effectue un vol historique de plus d’une heure avec passager, validant l’emploi de l’aviation comme arme de guerre stratégique.'
      },
      {
        year: 1953,
        yearDisplay: '1953',
        era: 'epoque_contemporaine',
        title: 'Signature de l’armistice de Panmunjeom',
        scope: 'monde',
        shortDescription: 'Fin des hostilités meurtrières de la guerre de Corée et fixation du 38e parallèle, premier grand affrontement armé indirect de la Guerre froide.'
      },
      {
        year: 1996,
        yearDisplay: '1996',
        era: 'epoque_contemporaine',
        title: 'Attentat du parc du Centenaire à Atlanta',
        scope: 'monde',
        shortDescription: 'Une bombe artisanale explose en plein cœur des Jeux Olympiques d’été, révélant la vulnérabilité des démocraties au terrorisme intérieur asymétrique.'
      }
    ],
    anecdote: {
      type: 'citation',
      title: 'L’Aigle impériale abandonnée',
      content: 'Lors de sa fuite éperdue à Bouvines, l’empereur Othon IV laissa derrière lui son char triomphal surmonté d’un dragon ailé et d’une aigle dorée. Philippe Auguste fit briser les ailes de l’aigle impériale et envoya les dépouilles du char au jeune Frédéric de Hohenstaufen, son allié, pour signifier que l’Empire germanique ne régnerait plus jamais sur la France.',
      sourceOrAttribution: 'Chronique de Guillaume le Breton (1214)',
      contextExplanation: 'Guillaume le Breton, chapelain du roi et témoin oculaire, a décrit avec minutie la ferveur populaire lors du retour triomphal de Philippe Auguste à Paris.'
    },
    quiz: {
      question: "Quelle conséquence institutionnelle majeure en Angleterre a découlé directement de la défaite des coalisés à Bouvines ?",
      options: [
        { id: 'A', label: "L'obligation pour Jean sans Terre d'accorder la Magna Carta" },
        { id: 'B', label: "L'annexion immédiate de Londres par le prince Louis de France" },
        { id: 'C', label: "L'abdication de la dynastie des Plantagenêt au profit des Lancastre" },
        { id: 'D', label: "La conversion obligatoire des barons anglais au catholicisme romain" }
      ],
      correctOptionId: 'A',
      explanation: "Privé de son armée et ruiné par les subsides colossaux versés aux princes allemands à Bouvines, Jean sans Terre ne put résister à l'insurrection de ses barons et dut signer la Magna Carta en 1215.",
      historicalContextTip: "Le prince Louis tenta d'envahir l'Angleterre en 1216 mais dut rembarquer en 1217."
    },
    audio: {
      express: {
        durationMinutes: 4,
        script: `27 juillet 1214. Dans la boue et sous le soleil étouffant de Bouvines, en Flandre, la France capétienne joue son existence même face à la première coalition européenne de son histoire.

En face de Philippe Auguste se dressent l'empereur germanique Othon quatre, le comte de Flandre et les subsides inépuisables de Jean sans Terre, roi d'Angleterre. Les coalisés veulent dépecer le domaine royal et renvoyer la France au néant féodal. Les princes allemands violent la paix du dimanche pour surprendre l'ost royal. Le corps à corps est d'une violence inouïe : désarçonné par des faulx à crochet, le roi de France manque d'être égorgé au sol avant d'être relevé par ses chevaliers. La riposte capétienne est foudroyante : les lignes impériales sont enfoncées, Othon quatre prend la fuite en abandonnant son étendard d'aigle dorée, et les barons rebelles sont jetés aux fers. Pour la première fois, sous la bannière royale, les milices des communes urbaines et la noblesse ont versé leur sang ensemble : la nation française est née sur ce champ de bataille.

Mais voyez comme le 27 juillet porte à travers les siècles l'empreinte des bascules géopolitiques et des drames de souveraineté :

En 1245, au concile de Lyon, le pape Innocent quatre dépose solennellement l'empereur germanique Frédéric deux, sommet de la lutte séculaire entre le pape et l'empereur.

En 1675, le maréchal de Turenne, génie militaire du Grand Siècle, est tué net par un boulet de canon à la bataille de Salzbach, plongeant Louis quatorze et la France dans un deuil immense.

Le 27 juillet 1794, c'est le 9 Thermidor à la Convention nationale : les députés terrifiés par l'échafaud mettent Robespierre et Saint-Just hors-la-loi, brisant net la Terreur jacobine.

Le 27 juillet 1830, les ordonnances scélérates de Charles dix déclenchent les Trois Glorieuses à Paris : le peuple dresse les barricades et renverse la branche aînée des Bourbons.

En 1890, Vincent van Gogh se tire une balle de revolver dans un champ d'Auvers-sur-Oise, drame intime ouvrant la voie à la révolution de la peinture moderne.

En 1909, Orville Wright accomplit le premier vol d'aviation militaire de plus d'une heure avec passager, scellant l'entrée du ciel dans la guerre moderne.

En 1953, l'armistice de Panmunjeom fige la partition coréenne sur le 38e parallèle après un affrontement sanglant de la guerre froide ayant coûté plus de deux millions de vies.

Et le 27 juillet 1996, un attentat à la bombe ensanglante le parc olympique d'Atlanta, marquant l'irruption du terrorisme asymétrique au cœur des grandes démocraties.`
      },
      approfondi: {
        durationMinutes: 9,
        script: `Le 27 juillet 1214, la bataille de Bouvines tranche la première grande guerre européenne de notre histoire.

Bouvines est l'exemple magistral d'une crise existentielle résolue par la vision géopolitique et le courage tactique. L'origine du conflit n'est pas idéologique : elle est territoriale. Pendant vingt ans, Philippe Auguste a mené un travail patient de réunification du domaine royal. En confisquant la Normandie, le Maine et l'Anjou à Jean sans Terre en application du droit féodal, le Capétien a triplé la puissance matérielle de la couronne. 

Mais l'Angleterre ne peut accepter d'être rejetée outre-Manche. Jean sans Terre orchestre alors un gigantesque encerclement diplomatique. Avec son trésor, il soudoie l'empereur germanique Othon quatre, son propre neveu, ainsi que Ferrand de Flandre et Renaud de Boulogne, deux vassaux français passés à l'ennemi. Le plan d'invasion est une tenaille impitoyable : Jean sans Terre attaquera par le Poitou pour remonter sur Paris, pendant qu'Othon et l'armée du Nord déferleront par la Flandre.

La parade de Philippe Auguste témoigne d'un sang-froid militaire absolu. Conscient qu'il ne peut affronter les deux monstres en même temps, il scinde ses forces. Il délègue à son fils, le futur Louis huit, le front du sud-ouest. Le 2 juillet 1214, à La Roche-aux-Moines, le prince Louis met en déroute l'armée anglaise sans même livrer une bataille générale, Jean sans Terre ayant fui devant l'ost royal.

Délivré de la menace du sud, Philippe Auguste marche vers le nord avec quinze mille hommes pour intercepter l'armée coalisée d'Othon, forte de près de vingt-cinq mille combattants. À l'armée royale se joignent les milices communales des cités françaises : c'est l'entrée du tiers état dans l'histoire militaire du royaume.

Le dimanche 27 juillet, alors que l'armée française franchit le pont de Bouvines, l'empereur Othon décide d'attaquer l'arrière-garde, violant sciemment la trêve de Dieu du dimanche. Philippe Auguste fait volte-face, fait bénir ses troupes et harangue ses barons : « En Dieu est notre espérance ! Othon et ses gens sont excommuniés par le pape, car ils sont les ennemis de l'Église. Nous combattons pour la défense de notre royaume ! »

Le choc dure plus de trois heures dans une chaleur étouffante. Philippe Auguste manque d'être tué lorsque des fantassins flamands le désarçonnent avec des faulx et des crochets ; son écuyer Pierre Tristan et ses chevaliers font rempart de leurs corps. Rejeté sur son destrier, le roi lance la contre-attaque au centre. La cavalerie royale disloque les lignes allemandes. Othon s'enfuit en abandonnant son étendard d'aigle dorée.

Les répercussions de Bouvines remodèlent l'Europe pour deux siècles :
En 1245, le pape Innocent quatre tire profit du déclin impérial amorcé à Bouvines pour déposer Frédéric deux au concile de Lyon.
En 1675, Turenne est tué à Salzbach, privant Louis quatorze de son plus grand capitaine face aux Impériaux.
En 1794, le 9 Thermidor fauche Robespierre et Saint-Just sur les bancs de la Convention, sonnant le glas de la Terreur jacobine.
En 1830, les Trois Glorieuses éclatent à Paris pour abattre la Restauration des Bourbons.
En 1909, Orville Wright ouvre l'ère de l'aviation militaire à Fort Myer.
En 1953, l'armistice de Panmunjeom scelle le gel de la guerre de Corée sur le 38e parallèle.
Et en 1996, l'attentat du parc olympique d'Atlanta rappelle la fragilité sécuritaire du monde moderne.

La question de révision active :
Quelle charte fondamentale de l'histoire anglaise a été arrachée à Jean sans Terre en conséquence directe de la défaite de Bouvines ?
Première proposition : la Déclaration des droits.
Deuxième proposition : la Magna Carta.
Troisième proposition : l'Habeas Corpus.
Ou quatrième proposition : le Traité de Troyes.

C'était bien la deuxième proposition, la Magna Carta en 1215. Sans le triomphe capétien de Bouvines, le roi d'Angleterre n'aurait pas été affaibli au point de céder ce contrôle parlementaire à ses barons.`
      }
    }
  }
};
