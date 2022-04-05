import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/users' , usersRoutes);

app.get('/' , (req,response) => response.send('hello roroororo'));

app.listen(PORT,() => console.log(`Server is Running on Port: http://localhost:${PORT}`));

