const socket = io()

socket.emit('message', 'hola desde web socket ')

socket.on('evento socket individual', data => console.log(data))

socket.on('evento para todos menos el actual ', data => console.log(data))

