import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions de Vente",
  description:
    "Conditions de vente de l'agence Rêves de Voyages : information précontractuelle, prix, réservation, modification, annulation, réclamation et médiation.",
  alternates: { canonical: "/conditions-de-vente" },
};

const { legal } = siteConfig;

/**
 * NOTE — les barèmes ci-dessous (acompte, solde, frais de modification,
 * barème d'annulation, sections 4 à 6) sont des VALEURS PAR DÉFAUT standard
 * du secteur, à faire confirmer ou ajuster par Véronique avant la mise en
 * ligne définitive (recherchez "À CONFIRMER"). Rappel : les conditions
 * particulières de chaque organisateur (TO, croisiériste…) prévalent et sont
 * remises au client avant la réservation. Le reste du texte reflète le cadre
 * légal standard d'un détaillant immatriculé Atout France.
 */
export default function ConditionsDeVente() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
          Conditions de Vente
        </h1>

        <div className="space-y-10 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              1. Objet et champ d’application
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Les présentes conditions de vente régissent les relations entre
                l’agence <strong>Rêves de Voyages</strong> (EURL{" "}
                {siteConfig.legalName}, immatriculée au registre des opérateurs
                de voyages et de séjours d’Atout France sous le numéro{" "}
                {legal.atoutFrance}) et toute personne effectuant une
                réservation de voyage, séjour, circuit, croisière ou prestation
                touristique.
              </p>
              <p>
                La vente de voyages et de séjours est régie par le Code du
                tourisme, notamment ses articles L211-1 et suivants et R211-3
                à R211-11, ainsi que par la directive (UE) 2015/2302 relative
                aux voyages à forfait et aux prestations de voyage liées.
              </p>
              <p>
                Rêves de Voyages agit en qualité de{" "}
                <strong>détaillant</strong> : elle commercialise des forfaits
                touristiques et prestations conçus par des organisateurs
                (tour-opérateurs, compagnies de croisière, réceptifs) dont les
                conditions particulières de vente sont remises au client avant
                la conclusion du contrat et prévalent pour l’exécution du
                voyage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              2. Information précontractuelle
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Avant toute conclusion de contrat, le client reçoit le{" "}
                <strong>formulaire d’information standard</strong> prévu par
                l’arrêté du 1er mars 2018, ainsi que les informations sur les
                caractéristiques principales des prestations proposées : dates,
                destinations, moyens de transport, hébergement, repas,
                itinéraire, formalités administratives et sanitaires, prix et
                modalités de paiement, conditions d’annulation et de
                modification, assurances proposées.
              </p>
              <p>
                Les informations précontractuelles engagent l’agence et
                l’organisateur ; toute modification avant la conclusion du
                contrat est communiquée au client de manière claire et
                compréhensible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              3. Prix
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Les prix sont indiqués en euros, toutes taxes comprises, par
                personne sauf mention contraire. Ils comprennent les
                prestations expressément mentionnées au contrat ; ne sont
                jamais compris, sauf mention contraire : les frais de
                formalités (passeport, visas, vaccins), les assurances
                facultatives, les dépenses personnelles, les pourboires et les
                excursions non prévues au programme.
              </p>
              <p>
                Conformément à l’article L211-12 du Code du tourisme, le prix
                peut être révisé après la conclusion du contrat, au plus tard
                20 jours avant le départ, uniquement pour tenir compte de
                l’évolution du coût du transport (carburant), des redevances et
                taxes, ou des taux de change. Si la majoration dépasse 8 % du
                prix total, le client peut résoudre le contrat sans frais.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              4. Réservation et paiement
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                La réservation devient ferme à la signature du contrat de
                voyage (ou du bulletin d’inscription) et au versement d’un
                acompte. Sauf conditions particulières de l’organisateur :
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                {/* À CONFIRMER — acompte par défaut : 30 %. */}
                <li>
                  Acompte à la réservation :{" "}
                  <strong>30 % du montant total du voyage</strong>
                </li>
                {/* À CONFIRMER — délai de solde par défaut : 30 jours. */}
                <li>
                  Solde :{" "}
                  <strong>au plus tard 30 jours avant le départ</strong>
                </li>
                <li>
                  Réservation à moins de 30 jours du départ : paiement intégral
                  à l’inscription.
                </li>
              </ul>
              <p>
                À défaut de paiement du solde à la date convenue, l’agence peut
                considérer le voyage comme annulé par le client et appliquer
                les frais d’annulation prévus à l’article 6.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              5. Modification par le client
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Toute demande de modification (dates, noms, prestations) doit
                être formulée par écrit et reste soumise à disponibilité et à
                l’accord de l’organisateur. Elle peut entraîner des frais,
                selon le barème de l’organisateur concerné, communiqué avant la
                réservation. {/* À CONFIRMER — frais de dossier modification : 30 €/personne. */}
                L’agence applique en outre des{" "}
                <strong>
                  frais de dossier de 30 € par personne
                </strong>{" "}
                en cas de modification à la demande du client, en sus des
                éventuels frais facturés par l’organisateur.
              </p>
              <p>
                Conformément à l’article L211-11 du Code du tourisme, le client
                peut céder son contrat à une personne remplissant les mêmes
                conditions, en prévenant l’agence au plus tard 7 jours avant le
                départ ; les frais réels engendrés par la cession restent à la
                charge du cédant et du cessionnaire, solidairement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              6. Annulation par le client
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Le client peut résoudre le contrat à tout moment avant le début
                du voyage, moyennant des frais de résolution. Sauf barème
                spécifique de l’organisateur (communiqué avant la réservation),
                le barème indicatif suivant s’applique :
              </p>
              {/* À CONFIRMER — barème d'annulation par défaut (frais de dossier + paliers). */}
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>
                  Plus de 60 jours avant le départ :{" "}
                  <strong>50 € de frais de dossier par personne</strong>
                </li>
                <li>
                  De 60 à 31 jours avant le départ :{" "}
                  <strong>25 % du montant total</strong>
                </li>
                <li>
                  De 30 à 21 jours avant le départ :{" "}
                  <strong>50 % du montant total</strong>
                </li>
                <li>
                  De 20 à 8 jours avant le départ :{" "}
                  <strong>75 % du montant total</strong>
                </li>
                <li>
                  À 7 jours ou moins du départ, ou en cas de non-présentation :{" "}
                  <strong>100 % du montant total</strong>
                </li>
              </ul>
              <p>
                Conformément à l’article L211-14 du Code du tourisme, le client
                a le droit de résoudre le contrat sans frais si des
                circonstances exceptionnelles et inévitables, survenant au lieu
                de destination ou à proximité immédiate, ont des conséquences
                importantes sur l’exécution du contrat. Dans ce cas, il a droit
                au remboursement intégral des paiements effectués, sans
                indemnisation supplémentaire.
              </p>
              <p>
                <strong>Important</strong> : conformément à l’article L221-28
                du Code de la consommation, les prestations de voyage ne sont
                pas soumises au droit de rétractation de 14 jours applicable à
                la vente à distance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              7. Modification ou annulation du fait de l’agence ou de
              l’organisateur
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Si, avant le départ, un élément essentiel du contrat est
                modifié de façon significative ou si le prix est majoré de plus
                de 8 %, le client peut accepter la modification ou résoudre le
                contrat sans frais et obtenir le remboursement des sommes
                versées dans les 14 jours.
              </p>
              <p>
                En cas d’annulation du voyage par l’organisateur, le client est
                remboursé intégralement dans les 14 jours et peut prétendre à
                un dédommagement, sauf si l’annulation résulte de circonstances
                exceptionnelles et inévitables ou d’un nombre insuffisant de
                participants signalé dans les délais légaux.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              8. Formalités administratives et sanitaires
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Les informations relatives aux formalités (passeport, carte
                d’identité, visa, autorisations de voyage électroniques,
                vaccins) sont communiquées pour les ressortissants français
                avant la conclusion du contrat. Il appartient au client de s’y
                conformer et de vérifier la validité de ses documents ; les
                frais et conséquences d’un défaut de formalité (refus
                d’embarquement notamment) restent à sa charge exclusive.
              </p>
              <p>
                Les ressortissants étrangers sont invités à se rapprocher du
                consulat des pays de destination et de transit. Consultez
                également les recommandations officielles sur{" "}
                <a
                  href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  diplomatie.gouv.fr
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              9. Assurances
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Aucune assurance n’est incluse dans les prix, sauf mention
                contraire. L’agence propose des contrats d’assurance
                multirisque (annulation, bagages, assistance-rapatriement,
                interruption de séjour) dont les conditions et tarifs sont
                communiqués avant la réservation. La souscription est
                facultative mais vivement recommandée, et doit intervenir au
                moment de l’inscription.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              10. Responsabilité
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Conformément à l’article L211-16 du Code du tourisme, l’agence
                est responsable de plein droit de la bonne exécution des
                services de voyage prévus au contrat, qu’ils soient exécutés
                par elle-même ou par d’autres prestataires, sans préjudice de
                son droit de recours contre ceux-ci. Elle peut toutefois
                s’exonérer de tout ou partie de sa responsabilité en apportant
                la preuve que le dommage est imputable au voyageur, à un tiers
                étranger à la fourniture des services, ou à des circonstances
                exceptionnelles et inévitables.
              </p>
              <p>
                L’agence est couverte par une assurance responsabilité civile
                professionnelle ({legal.insurance}) et dispose d’une garantie
                financière auprès de l’{legal.guarantee}, couvrant notamment le
                rapatriement et le remboursement des fonds déposés.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              11. Réclamations et médiation
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Toute non-conformité constatée sur place doit être signalée
                sans retard afin de permettre sa résolution. Après le retour,
                toute réclamation doit être adressée par écrit à l’agence
                (courrier ou email à {siteConfig.email}), accompagnée des
                justificatifs.
              </p>
              <p>
                À défaut de réponse satisfaisante dans un délai de 60 jours, le
                client peut saisir gratuitement le médiateur du Tourisme et du
                Voyage : <strong>{legal.mediator.name}</strong>,{" "}
                {legal.mediator.address} —{" "}
                <a
                  href={legal.mediator.url}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mtv.travel
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              12. Données personnelles et droit applicable
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Le traitement des données personnelles est décrit dans notre{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </a>
                . Les présentes conditions sont soumises au droit français.
              </p>
              <p>
                Conformément à l’article R211-12 du Code du tourisme, les
                articles R211-3 à R211-11 du Code du tourisme, dont le texte
                intégral est consultable sur{" "}
                <a
                  href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074073/LEGISCTA000006158517/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  legifrance.gouv.fr
                </a>
                , sont reproduits dans les documents contractuels remis au
                client avant toute inscription.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
