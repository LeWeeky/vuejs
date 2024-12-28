# NeoMobility

# Connexion

https://stage-nm.clappycrew.com/
-> lien vers le projet

npm run dev
-> démarrage en mode dev

npm run build
npm install -g serve
serve -s dist
-> démarrage en mode production

# Fonctionnalités

1. NavBar

Vous pouvez utiliser les boutons sur la droite de la navbar pour
faire apparaître / disparaître le menu correspondant au bouton.

2. Clients

Dans le menu des clients, vous pouvez ajouter un client
en lui donnant un prénom, nom et une adresse email.

En dessous, vous retrouverez la liste des clients,
il y en aura 1 par défaut.

Vous pouvez à tout moment retirer un client en cliquant
sur "REMOVE" en dessous de celui-ci.

3. Véhicules

Ajoutez un modèle en précisant sa couleur et son nombre de places.

Juste en dessous, vous retrouverez la liste des modèles avec leurs
caractéristiques, filtrez-les par nombre de sièges et/ou couleur
pour trouver rapidement le modèle idéal.

Vous pouvez bien entendu en retirer en cliquant sur "REMOVE"
en dessous du modèle.

4. Réservations

Enfin, recherchez un modèle de voiture, un client, une date 
de début et une date de fin pour créer une réservation.

Le site s'occupe de vérifier si les dates sont disponibles
pour le véhicule avant de valider.

Vous pourrez bien entendu consulter toutes les réservations 
en dessous et en retirer en cliquant sur "REMOVE" en bas 
de la réservation.

N'ayez pas peur si un message d'erreur s'affiche après avoir
"SUBMIT". Si le "SUBMIT" s'est transformé en "ADDED",
c'est que tout s'est bien passé mais la page vous prévient
que vous ne pouvez pas ajouter une nouvelle fois le véhicule
pour cette période (puisque vous venez de définir
qu'elle est prise à cette date).

Si une réservation pose problème à cause de la date, il faudra
bien entendu la changer ou changer de véhicule. En appuyant une
première fois sur "SUBMIT", le formulaire va vérifier s'il n'y a
plus d'erreur, si c'est le cas toutes les erreurs disparaîtront
et vous pourrez à nouveau appuyer sur "SUBMIT" pour réellement
envoyer cette fois-là.

5. Logs

Vous pouvez consulter les logs des interactions avec les boutons
dans la console via F12.