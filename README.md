Vous aurez besoin de Node Js pour mettre en place l'interface
# Installation : 
NPM est installé par défaut avec NodeJS, mais yarn est plus efficace lors du téléchargement 
## Installer les dépendances : 
- Avec npm : `npm i`
- Avec yarn : `yarn install`

## Configurer :
Changer toutes les occurences de *"http://localhost:5000/"* par l'url et le port de votre instance de l'api.

## Build l'interface : 
- Avec npm: `npm run build`
- Avec yarn: `yarn build` 
## Lancer l'interface (après avoir build) :
- Avec npm: `npm run serve`
- Avec yarn: `yarn serv`
## Lancer l'interface en mode développement :
- Avec npm: `npm run dev`
- Avec yarn: `yarn dev` 


___
# Fonctionnalités :
## Infos client

- nom
- adresse mail  _à implementer_
- adresse postale  _à implementer_
- numéros de téléphones  _à implementer_
- référents  _à implementer_
- informations commerciales  _à implementer_
- etc


## Acces admin

- Ajouter/supprimer utilisateurs  _à corriger_
- Ajouter/supprimer nouveau client  _à corriger_
- Ajouter nouvelle facture  _fait_
- Mettre à jour utilisateur  _fait_
- Mettre à jour clients  _fait_
- Pouvoir associer des factures aux clients  _fait_

## Acces utilisateur lambda

- Afficher les informations :  _fait_
  - Factures client (lecture seule)  _à corriger_
  - Ensemble des informations sur un client (modification)  _fait_
  - Ensemble des clients résidant dans un département en particulier  _à implementer_

## Alertes

- Alerte lors de la connexion pour les factures de plus de deux mois non réglées. _à implementer_
