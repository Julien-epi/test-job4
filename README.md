# test-job4
Back-end : NestJs, TypeORM

Front-end : ReactJs, Tailwinds

Database: postgreSQL

Démarrage Back-end : 

- cd back
- npm i
- npm run start:dev

Démarrage Front :

- cd front 
- npm i
- npm run start 

Remarques / Bilan :

- Toutes les tâches à réaliser dans l'énoncé ont été effectué.

Back : 

Création des tables suivantes : 
    
    - users 
    - address
    - user_address

Ainsi que de leurs routes et controllers associés.

Ayant voulu approfondir l'exercice, j'ai voulu créer une relation Many-To-Many afin de relier par une table pivot les users et leurs adresses associés.

Toutefois je n'ai pas réussi à finaliser cette relation lors de la création de l'adresse dans la page profil. 

La table user_address se créée et la rentrée de données dans le formulaire est bien enregistrée mais je suis resté bloqué lors de la synchro avec la table pivot. 

Bien évidemment tout le back demandé lors de l'énoncé est fonctionnel.

Front : 

J'ai choisi d'utiliser le framework tailwind pour le css et le typescript afin de permettre le typage de mes données et des routes envoyer au back.

Le projet contient 2 pages principales.

- La homepage où l'on retrouve la liste des users s'affiche.
- La page profile qui permet la modification du user, lui ajouter une adresse et de le supprimer.

Tous les formulaires s'effectuent avec le useForm des hooks de react.

L'application possède une NavBar où se situe un bouton register afin d'inscrire des utilisateurs.

Merci pour cette chance supplémentaire et de l'attention que vous porterez à mon rendu et ma candidature :).
