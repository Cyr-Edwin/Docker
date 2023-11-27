## Simple Python Program running on Docker

* Pull up the image from Docker Hup

> docker pull python

* Run the python code

> docker run -it -v $PWD:app/  python  python3 /app/hello-world.py 

<h6> or </h6>

> docker run -it -v $PWD:/app -w /app python3 hello-world.py