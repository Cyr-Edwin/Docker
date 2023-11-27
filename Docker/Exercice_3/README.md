## Run a Simple Python Calender App on Docker

* Pull up the Python image from Docker Hub

> docker pull python

* Run the app

> docker run -it -v  $PWD:/app -w /app python python3 app.py