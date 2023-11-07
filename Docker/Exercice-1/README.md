## Launch a container from a Prebuild Image

<h6> Commands </h6>

> Pull an image from Docker Hub: **docker pull**

> Run a container : **docker run**

> Image name: **httpd**

> Pull an image to our workspace: **docker pull httpd** 

> Check running containers: **docker ps**

> Check images: **docker images**

> Mount data (home.html)  to  htdocs: **docker run --rm -d -p 80:80 -v $(pwd)/website:/usr/local/apache2/htdocs httpd**

> Access the content on the browser: **localhost/home.html**
