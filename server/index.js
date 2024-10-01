
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';   
import cors from 'cors';
  
import postRoutes from './routes/posts.js'; 
import userRouter from "./routes/user.js";  
  
const app = express();
  
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get('/', (req,res) => {
  res.send('hello to snapwall');
});

const CONNECTION_URL = 'mongodb+srv://snapwall:qwerty1234@cluster0.hvr2t.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
