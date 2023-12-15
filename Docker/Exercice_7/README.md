## Launch Mysql , Wordpress and PHP with Docker

* Create a new custom network called **wordpress**.

* Create three containers: mysql , wordpress and phymyadmin

* Use tagged image mysql:5.7 and worpress:5.4

* Set env variables for mysql container:
 
  - MYSQL_ROOT_PASSWORD

  - MYSQL_DATABASE

  - MSQL_USER

  - MYSQL_PASSWORD

* Expose wordpress and phpmyadmin using two different ports

* Perform initial setup ofr Wordpress CMS

<h6>Walkthrough</h6>

* Pull images

> docker pull mysql:5.7

> docker pull wordpress:5.4

* Create custom bridge network

> docker network create 

* Create containers with env

> docker run --network wordpress -d -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=wordpress -e MYSQL_USER=student -e MYSQL_PASSWORD=wordpress --name mysql mysql:5.7

> docker run --network wordpress --name wordpress -p 8080:80 -d wordpress:5.4

>docker run --network wordpress --name phpmyadmin --p 8081:80 -e PMA_HOST=mysql -d phpmyadmin

