import {WebSocketServer} from "ws";
import {WorkspaceModel} from "db"
import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL!)
const server = new WebSocketServer();

server.on("connection",(ws)=>{
    ws.on("message",(msg)=>{
        console.log(msg);
        WorkspaceModel.create({
            path:"123",
            name:"Adarsh"
        })
    })
})