/* jshint esversion: 6 */

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8910;
const mongoUri = `mongodb://localhost:27017/es6-profiles`;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + `/dist`));

mongoose.connect(mongoUri);
mongoose.connection.once(`open`, () => {
  console.log(`Connected to MongoDB at ${ port }`);
});

import profileRoutes from './server/components/profile/profileRoutes';

profileRoutes( app );

app.listen(port, () => {
  console.log(`Listening on ${ port }`);
});
