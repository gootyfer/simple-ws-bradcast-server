if(window.WebSocket) //Comprobar que existe la funcionalidad        

var ws = new WebSocket('ws://localhost:3000');

ws.onopen = function() {
    alert('Conectado');
};

ws.onclose = function() {
    alert('Desconectado');
};

ws.onmessage = function(e) {
    var message = e.data;
    alert('Mensaje recibido: ' + message);
};

ws.send('Hola, websockets!');