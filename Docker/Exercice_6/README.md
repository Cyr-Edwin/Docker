## Create Files Handling Node App in Docker

<h6> Tasks</h6>

* Ask in the terminal for **filename**

*  Write some text in the file created

* Use **filename** created previously to create a file with the **.txt** extension

* Use the command **ls** to see the **filename** created inside the container

*  Use the command **cat** to see the content of the **filename** created


 * Run container

 > docker run it -v $PWD:/app -w /app image_name node index.js

 <h6>  Example:</h6>
 
 > Enter filename here: test

 > Enter some content:Test file
 
 > File was created!
