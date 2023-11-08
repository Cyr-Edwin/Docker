## Docker Volumes

<h6> type=bind</h6>

> Mount a specific **path** on the host machine to the container.

<h5> Example of Bind Mount volume</h5>

> Change to the home directory: **cd ~/**

> make a directory: **mkdir message**

> Create date and save it to message.txt: **echo Hello, Worl... > message/message.txt**

> Create a bind mount volume and the container read only the file message.txt: **docker run --mount type=bind, source=/home/edmundo/message, destination=/root,readonly busybox cat /root/message.txt**

<h6> type=volume</h6>

> Create a volume and container: **docker run --mount type=volume, source=my-volume,destination=/root busybox sh -c "echo Hello World! > /root/message.txt && cat /root/message.txt**

<h6> -v flag</h6>

> Create volume with -v flag: **docker run -v /home/eddmundo/message:/root:ro busybox cat/root/message.txt**
or
> Used the my-volume: **docker run -v my-volume:/root busybox cat /root/messages.txt**

<h6>Managing Volumes</h6>

> Create a volume: **docker volume create VOLUME_NAME**

> List current volumes: **docker volume ls**

> Get details information about a volume: **docker volume inspect VOLUME_NAME**

> Delete a volume: **docker rm VOLUME_NAME**