markdown
Copier le code
# Excursion Djerba

Un projet pour gérer les excursions à Djerba.

## Prérequis

Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :
- [Git](https://git-scm.com/)
- Un serveur web (Apache, Nginx, etc.)
- [MySQL](https://www.mysql.com/) ou tout autre SGBD compatible

## Installation

1. Clonez le dépôt

```bash
git clone https://github.com/votre-utilisateur/excursionDjerba.git
Accédez au répertoire du projet
bash
Copier le code
cd excursionDjerba
Initialisez une base de données avec le nom excursiondjerba et importez le fichier de base de données qui se trouve dans le répertoire base_de_donnees.
sql
Copier le code
mysql -u root -p
CREATE DATABASE excursiondjerba;
USE excursiondjerba;
SOURCE chemin/vers/le/fichier/base_de_donnees.sql;
Placez le projet sous votre répertoire racine du serveur web.
bash
Copier le code
# Par exemple, pour un serveur Apache sur Ubuntu
sudo cp -r excursionDjerba /var/www/html/
Lancez le serveur web et accédez à l'URL suivante pour voir le site en fonctionnement :
http://localhost/excursionDjerba/

Pour accéder au backend, utilisez l'URL suivante :
http://localhost/excursionDjerba/wp-admin

Informations de connexion pour le backend
Nom d'utilisateur : root
Mot de passe : Djerba-26309698