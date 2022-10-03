const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Ahora vamos a escuchar los eventos que sucendan:

form.addEventListener('submit', sumarInputs);


function sumarInputs (event) {
    //console.log({event});
    event.preventDefault();
    const sumInputs = input1.value + input2.value;
    pResult.innerText = "The Results is: " + sumInputs;
}