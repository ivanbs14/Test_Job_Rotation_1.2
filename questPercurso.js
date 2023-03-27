/* 
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h 
e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. 
Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles 
e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.
*/

let velocidadeCarro = 110;
let velocidadeTruck = 80
let distanciaRibeirao = 100;
let tempPedagio = 10;
let minutsEmHoras = 60;

/* 
equação horaria do carro: 
carro = velocidade1 * tempo 
*/

/* 
equação horaria do caminhão:
caminhão = velocidade2 * tempo 
*/

/* total de perda de tempo do caminhão no pedágio em horas */
let pedagio = tempPedagio/minutsEmHoras;

/* tempo de viagem do caminhão sem obstáculos */
let tso = distanciaRibeirao/velocidadeTruck;

/* tempo de viagem do caminhão com obstáculos */
let tempViagemTruck = tso + pedagio;


/* Velocidade media do caminhão */
let velocidadeMediaTruck = distanciaRibeirao/tempViagemTruck;

/* Nas equações horarias podemos igualar e zerar o tempo, para achar o ponto de cruzamento dos veículos:
onde:
    velocidadeMediaTruck = velocidadeCarro * distanciaRibeirao / velocidadeCarro + velocidadeMediaTruck
*/

let cruzamentoDosVeiculos = (velocidadeCarro*distanciaRibeirao) / (velocidadeCarro + velocidadeMediaTruck)

console.log(`Os veiculos se cruzam na distancia de ${cruzamentoDosVeiculos.toFixed(1)}`);