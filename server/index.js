import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from M4R10!',
    });
 
  });


  const startServer = async () => {

    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080 ya bghal'));
    } catch (error) {
      console.log(error);
    }
  };

  startServer();