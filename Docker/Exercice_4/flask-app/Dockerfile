# base image
FROM ubuntu
RUN apt update
RUN apt install python3 -y
RUN apt -y install python3-pip
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 3000
CMD [ "flask" ,"run","--host=0.0.0.0" ]

