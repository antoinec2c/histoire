# scripts/generate_deep.py
import asyncio
import os
import edge_tts

text = """Bienvenue dans l'almanach d'analyse historique du 8 septembre.

Nous sommes le 8 septembre 1303, dans la petite cité fortifiée d'Anagni, à une soixantaine de kilomètres au sud de Rome. Ce qui s'y déroule ce matin-là n'est pas une simple échauffourée médiévale : c'est l'un des actes fondateurs de l'État moderne en Europe.

Pour comprendre le drame d'Anagni selon la méthode de Jacques Bainville, il faut remonter à la mécanique froide des finances publiques. À la fin du XIIIe siècle, le féodalisme traditionnel montre ses limites militaires. La chevalerie d'ost, tenue seulement à quarante jours de service gratuit, ne suffit plus aux guerres prolongées. Philippe le Bel a besoin d'hommes de pied, d'arbalétriers génois, de fortifications modernes face aux riches cités flamandes soutenues par l'or anglais. Il lui faut une armée soldée. Et qui dit armée soldée dit trésor permanent.

Or, qui détient alors la plus formidable richesse foncière du royaume de France ? L'Église. Philippe le Bel décide donc de prélever des décimes sur le clergé. C'est l'étincelle. 

Le pape régnant, Boniface Huit, le cardinal Benedetto Caetani, est un canoniste brillant mais animé d'un orgueil théocratique d'un autre âge. Il conçoit la papauté comme la monarchie suprême du monde connu, héritière de l'Empire romain, devant laquelle tous les rois de la terre doivent plier le genou. Par sa bulle Clericis Laicos, il interdit au roi de France de lever un sou sur le clergé.

La riposte de Philippe le Bel est un modèle de blocus économique : il coupe l'exportation de tout métal précieux et de tout titre de crédit hors des frontières. Rome est privée de ses subsides français. 

Pendant dix ans, la dispute s'envenime. Boniface publie la célèbre bulle Unam Sanctam : deux glaives gouvernent le monde, le spirituel et le temporel, mais le temporel est confié aux rois pour n'être exercé que sous la direction du sacerdoce. Pour la monarchie capétienne, l'enjeu devient vital. Si le pape a le pouvoir de déposer le roi de France, la légitimité capétienne n'est plus qu'une illusion précaire à la merci d'un consistoire romain.

Philippe le Bel convoque alors en 1302 les premiers États généraux à Notre-Dame de Paris pour souder la noblesse, le clergé et les bourgeoisies urbaines derrière sa personne. 

À l'été 1303, apprenant que Boniface Huit s'apprête à publier le 8 septembre la bulle Super Petri solio qui délie formellement les Français de leur fidélité au roi, Philippe le Bel passe à l'offensive clandestine. Il mandate son conseiller Guillaume de Nogaret. Muni d'or capétien, Nogaret s'allie au clan romain des Colonna, mortels ennemis des Caetani. 

Le 7 septembre au soir, six cents cavaliers forcent les portes d'Anagni. Le 8 septembre à l'aube, Nogaret et Sciarra Colonna pénètrent dans la chambre pontificale. Le pape les attend en majesté, assis sur son trône, tenant la croix et les clés de saint Pierre. Sciarra Colonna le menace de son épée ; la légende rapporte qu'il l'aurait giflé de son gantelet de fer. Nogaret s'interpose, préférant la capture juridique : il signifie au pape qu'il sera emmené captif à Lyon pour être jugé par un concile universel pour simonie et hérésie.

Le pape ne sera jamais conduit en France. Délivré par une émeute locale deux jours plus tard, il rentre à Rome, mais brisé physiquement et moralement, il meurt quelques semaines plus tard.

La portée politique de ce 8 septembre 1303 est incommensurable. L'idéal de la Chrétienté médiévale unifiée sous l'autorité temporelle du vicaire du Christ vole en éclats. En imposant par la force la primauté de son intérêt national, Philippe le Bel pose les bases du gallicanisme et affirme que la France est un État souverain qui ne reconnaît aucun suzerain sur terre. Bientôt, la papauté élira le Français Clément Cinq et s'établira en Avignon sous l'œil direct de la dynastie capétienne.

Passons au quiz de mémoire active :
Quel juriste de Philippe le Bel mena cette opération décisive à Anagni ?
A : Enguerrand de Marigny,
B : L'abbé Suger,
C : Guillaume de Nogaret,
ou D : Pierre de Dreux ?

La bonne réponse est la C, Guillaume de Nogaret. Ce petit-fils de cathare originaire du Languedoc mit sa maîtrise du droit romain au service exclusif de la puissance capétienne, démontrant que la politique moderne se gagne autant par la clarté du droit que par la résolution des armes."""

async def main():
  out_path = "/home/ajcha/projets/histoire/public/audio/09-08-approfondi.mp3"
  comm = edge_tts.Communicate(text, "fr-FR-HenriNeural", rate="-4%", volume="+25%")
  await comm.save(out_path)
  print(f"Généré : {out_path} ({os.path.getsize(out_path)} octets)")

if __name__ == "__main__":
  asyncio.run(main())
