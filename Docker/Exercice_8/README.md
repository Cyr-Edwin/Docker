## Communication between TWO Ccontainers

1 - Create custom network called **elasticsearch**.

2 - Create **elasticsearch** container with custom name **elasticsearch**. Use following env variable: **discovery.type=single-node**. Expose port **9200** in elasticsearch container and check connectivity in web browser

3 - Run **appropriate/curl** container with custom name **curl** and **-it** options. Override default command with **sh** command

4 - Ping **elasticsearch** container from **curl** container

<h6> Implementation</h6>

1 
> docker network create elasticsearch

2
> docker run --name elasticsearch  -e "discovery.type=single-node" -p 9200:9200 --network elasticsearch  elasticsearch:7.6.2

3
> docker run --name curl --network elasticsearch -d appropriate/curl sh

4
> ping elasticsearch 

<h6>Interacting with Elasticsearch</h6>

* Run command below on container named  **curl**
 
    - Create  INDEX

       - Create new index

    > curl -XPUT http://elasticsearch:9200/my-page

       - Get existing indeces
       
    > curl -XGET http://elasticsearch:9200/_cat/indices?v



    - INSERT DOCUMENTS INTO THE INDEX

> curl -XPOST http://elasticsearch:9200/my-page/cities/1 \
    -H 'Content-Type: application/json' \
    -d '{"city":"Nasville"}'

    - GET DOCUMENT BY ID

> curl -XGET http://elasticsearch:9200/my-page/cities/1?pretty
