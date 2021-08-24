require('dotenv').config()
import { Client } from "recurly";

// CONNECT TO RECURLY ACCOUNT

const client = new Client(process.env.API_KEY);
