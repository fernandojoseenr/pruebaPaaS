const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



cons cosmos de Cosos DB
const cosmosCliente=new CosmosClient(process.env.COSMOS_BD_CONNECTION_STRNG);
const database=cosmosClient.database('academic-db');
const container-database.container('student');
app.use(express.json());


app.post('/student',async(req,res)=>(
    try{
        const(body)=req;
        const(resource:createdItem)=await container.items.create(body);
        res.status(201).send(createdItem);
        }catch(error){
        res.status(500).send(error;
        }
});

app.get('students',async(req,res)=>(
    try{
        const(resources)=await container.items.readAll().fetchAll();
        res.status(200).send(resources);
}catch(error){
    res.status(500).send(error);

});
