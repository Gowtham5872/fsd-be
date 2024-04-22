const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyparser.json());

const HandleGetRequest = (request, response) => {
    const requestedId = request.params.id;
    console.log(requestedId);
    if(requestedId == 1){
    response.send("Server running successfully with ID: " + requestedId);
    }else{
        response.send("server running success"+ 2);
    }
};

const HandleSecondRequest = (request, response) => {
    const id = request.query.id;
    console.log(id);
  response.send("second api looking good"+ id);
   
};

app.get("/myfirstapi/:id", HandleGetRequest);
app.get("/mysecondapi", HandleSecondRequest);

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
app.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"/index.html"));
})



