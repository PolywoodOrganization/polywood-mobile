# Polywood

## L'application mobile Polywood

L'application Polywood est une application mobile cross-platform développée 
sous React Native. Nous obtenons donc une application native android et IOS.

<div align="center">
<img src="./polywood-mobile.gif" alt="polywood demo" width="450px">
</div>

### Fonctionnalités 
- **Page de connexion** : Il est possible de se connecter en entrant un 
nom d'utilisateur (login) et un mot de passe puis en cliquant sur le bouton 
"connexion" qui, si toutes les informations sont correctes, redirige l'utilisateur vers 
le page d'acceuil. Cette page contient également un lien vers la page de création de compte.
- **Page d'inscription** : Il est possible de créer un compte en renseignant différents
champs et en appuyant sur le bouton "valider", si la création s'est bien passée l'utilisateur
est redirigé sur la page de connexion.
- **Page d'acceuil** : cette page contient plusieurs éléments
  - *Liste des films* : les films sont affichés avec quelques détails dans une liste
  déroulante (la pagination s'y fait grâce à un infinite scroll pour un gain de performance)
  - *Recherche par titre* : une barre de recherche permet à l'utilisateur de filtrer les fims
  en fonction de leur titre
  - *Recherche par genre* : il est possible de cliquer sur les vignettes indiquant le
  genre du film dans chaque élément de la liste afin de filtrer la liste de films
  en fonction de leurs genres.
  - *Boutons de déconnexion et de visualisation du profil* : ces deux boutons sont visibles sur
  la page d'acceuil et redirigent l'utilisateur respectivement vers l'écran de connexion
  ou la page "Mon profil"
- **Page détail du film** : Elle s'affiche lorsqu'on clique sur l'icône + dans la liste des films
ou sur le nom d'un film sur la page acteur. Elle affiche les détails du films et les
acteurs qui y ont joué. Il est possible de cliquer sur un acteur pour afficher sa fiche
détaillée. Cette page contient également un bouton ♥ qui permet à l'utilisateur
 d'ajouter ou de retirer un film de ses favoris.
- **Page détail d'un acteur**: Elle s'affiche lorsqu'on clique sur le nom d'un acteur 
depuis la page détail d'un film. Elle présente les différentes informations de l'acteur
ainsi que les films dans lesquels il a joué.
- **Page mon profil**: Elle présente les différentes informations du compte (prénom,
nom et login) ainsi que la liste des favoris de l'utilisateur.
  - *Visualisation des favoris* : Il s'affichent dans une liste. Il est possible d'ajouter
  ou de modifier un commentaire se rapportant à chaque film. Il est aussi possible
  de supprimer un favori en cliquant sur le ♥.
  - *Modification des informations du profil*: L'utilisateur peut modifier son nom
  ou son prénom en cliquant sur le crayon à droite de son nom.
- **Gestion des erreurs** : Tous les évènements d'erreur ou de succès sont notifiés
  à l'utilisateur par l'intermédiaire de bandeau déroulant en haut de l'écran de couleur
  associée à l'évènement qu'il décrit (rouge pour une erreur et vert pour un succès)


## Lancer l'application mobile Polywood
### Pré-requis
Il faut avoir installé sur sa machine l'environnement suivant: 
- Node 8 ou plus
- Suivre la documentation React-native pour le développement android en choisissant
l'onglet "React Native CLI Quickstart" [ici](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- Pour le développement sur IOS il est nécessaire de posséder un Mac et suivre
la documentation précédente.

### Lacnement de l'application 
Une fois les pré-requis validés, il faut installer les dépendance en lançant
 à la racine du projet : 
```shell script
yarn install
```
Dans le fichier App/Config/index.js, il faut modifier l'ip présente dans le fichier
par l'adresse ip de la machine actuelle (il est possible de retrouver cette IP
en entrant la commande ipconfig). 
Il est ensuite nécessaire de désactiver le pare-feu de la machine jusqu'à la fin
de l'utilisation de l'API. (En effet, les web services n'étant pas déployés sur un serveur,
ils ne sont accessibles qu'en localhost. Il est donc nécessaire d'effectuer ces étapes
pour que le téléphone y est accès)

####Android

Lors de la première utilisation du projet, il faut effectuer les étapes suivantes :
- ``cd android/app``
- ``keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000``
- ``cd ../..``

Pour lancer le projet : 
```
yarn react-native run-android --port 3001
```
*Si le projet ne se lance pas après avoir suivi toutes les étapes c'est probablement
que le port 3001 de la machine est occupé. Il suffit alors de le remplacer par 
n'importe quel port libre de la machine*