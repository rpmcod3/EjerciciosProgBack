import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'; 
import viewsRouter from './routes/views.router.js';
import {Server} from "socket.io";



const app = express();
const httpServer = app.listen (8080, ()=>  console.log('server running in port 8080'));
const socketServer = new Server (httpServer);

app.use(express.urlencoded({ extended: true}));



app.engine('handlebars', handlebars.engine());
app.set ( 'views', __dirname + "/views");
app.set ('view engine', 'handlebars');

app.use(express.static(__dirname + '/public')); 

app.use('/', viewsRouter);

socketServer.on('connection', socket => { 
    console.log('Nuevo cliente')

    socket.on ('message', data => {
        console.log(data)
    })

    socket.emit('evento socket individual ' ,'mensaje enviado para el socket actual' )


    socket.broadcast.emit('evento para todos menos el socket actual', 'se conecto otro cliente')
})


