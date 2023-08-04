import express from 'express';
import fetch from 'node-fetch';
import morgan from 'morgan';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(morgan('dev'));
app.use(cors());
const PORT = 5000;
const URL = 'https://polls.apiblueprint.org/questions';
const URI ='https://jsonplaceholder.typicode.com/todos';

//consola fetch
//fetch(URL)
  //  .then((response) => {
    //    return response.json()
    
    //}).then ((resp) => {
      //  console.log(resp);
    //})

//consola axios
   /* await axios.get(URI)
            .then(response => {
               res.json(response.data);
                console.log(data);
            })
               
            .catch(error => {
                 console.log("error" + error);
            })*/
        
//end point 
    app.get("/",async (req, res) =>{
        try {
            const response =  await axios.get(URI)
            .then(response => {
               res.json(response.data);
                console.log(data);
            })
               
            .catch(error => {
                 console.log("error" + error);
            })
        
            
        } catch (error) {
            console.log()
        }
    })


app.listen[PORT, () => console.log (`SERVER RUNNING ON PORT ${PORT}`)];
