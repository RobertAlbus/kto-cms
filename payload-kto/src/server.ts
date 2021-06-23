import express from 'express';
import payload, { Payload } from 'payload';

function expandedLog(item, maxDepth = 100, depth = 0){
  if (depth > maxDepth ) {
      console.log(item);
      return;
  }
  if (typeof item === 'object' && item !== null) {
      Object.entries(item).forEach(([key, value]) => {
          console.group(key + ' : ' +(typeof value));
          expandedLog(value, maxDepth, depth + 1);
          console.groupEnd();
      });
  } else {
      console.log(item);
  }
}



require('dotenv').config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    // expandedLog(payload.config)

    // console.log("=============================================================")
    // console.log("=============================================================")
    // console.log("=============================================================")
    // console.log("=============================================================")
    // console.log("=============================================================")
    // console.log("=============================================================")
    // console.log(payload.config)
  },
});

// Add your own express routes here

app.listen(3000);