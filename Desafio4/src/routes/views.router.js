import express from 'express';
const router = express.Router();



const users = [
    { name: 'Roco',
    last_name: 'Pereira',
    edad: 38,
    correo: 'roco@gmiel.com',
    telefono: "895687578",
    role: "admin"
},
{
    name: 'Chikiy',
    last_name: 'ayrton',
    edad: 28,
    correo: 'cayrton@gmiel.com',
    telefono: "895687578",
    role: "user"

}];

const food = [
    {name: 'Hamburguesa', price: "500"},
    {name: 'Boniato', price: "100"},
    {name: 'Chorizo', price: "300"},
    {name: 'Refresco', price: "200"},
    {name: 'Sushi', price: "800"},
    {name: 'Berengena', price: "50"},

]

router.get('/', (req, res) => {
    const indice = Math.floor (Math.random() * users.length)
    
    res.render('index', {
        user: users[indice],
        style: 'index.css',
        isAdmin: users[indice].role === 'admin',
        food

    });
});

router.get('/register', (req, res) => res.render('register'))

router.post ('/user', (req, res) => {
    const { name, email, password} = req.body;

    users.push({name, email, password})

    res.render('register', { registroExitoso: true})
})

router.get ('/socket', (req, res) => {
    res.render('socket')
})


export default router; 
