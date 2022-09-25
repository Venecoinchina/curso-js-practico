# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

R: Son espacios en memoria donde podemos guardar informacion (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguage).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

R: Declarar (let, const) es cuando le decimos a JavaScript que vamos a crear una variable con el nombre X. 
   Inicializar es asignarle un valor a esa variable de nombre X.  


- ¿Cuál es la diferencia entre sumar números y concatenar strings? y/o ¿Cuál operador me permite sumar o concatenar?

let suma = 2 + 2;

let string = "Hola, " + "Skalex"

El operador que nos perimte sumar y concatenar es "+". Cuando se usa con numeros los que hace es sumar. Cuando lo hace con string los une como texto.


### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: String
- Apellido: String
- Nombre de usuario en Platzi: String (@nombre, concatenarle un @)
- Edad: Number
- Correo electrónico: String (con @ y dominio .com)
- Mayor de edad: boolean (true or false)
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let name = 'Skalex';
let lastName = 'Stuch';
let userName = 'skalexstuch';
let age = 40;
let email = 'skalexstuch@me.com';
let isItOlder = true;
let savedMoney = 500;
let debt = 90;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let fullName = name + ' ' + lastName;
let totalMoney = savedMoney - debt; 

```




## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
R: Nos permiten encapsular (guardar) bloques de codigos para que sean reutilizables y ejecutables mas adeltante en el programa.

```
function fullName(name, lastName) {
    return name + ' ' + lastName
}

fullName('any Name','any lastName')
```


- ¿Cuándo me sirve usar una función en mi código?
R: Cuando tenemos varaiables o codigos repetidos o muy parecidos, que podemos encapsular y cambiar sus parametros y/o argumentos.

Tambien sirve para ordernarnuestro codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
R: Los párametros se crean al momentos de hacer la funcion.

Los argumentos se usan cuando estamos ejecutando la funcion.



### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
```
function fullName(name, lastName) {
    return name + ' ' + lastName
}

function sayHello(name, lastName, userName) {
    const totalName = fullName(name, lastName);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
R: forma en ejecutar un bloque de codigo dependiendo de condicion o validacion.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R: If, else, else if and switch

las codiciones if, else, and else if permiten hacer validaciones completamente distintas en cada validacion.

El switch todos los cases se comparan con la misma codicion o variale declarada en el switch al principio.


- ¿Puedo combinar funciones y condicionales?
R: Si, las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.


### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
R:

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion == 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}








### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
R: Forma de ejecutar bloques de codigos hasta que se cumpla cierta condicion.


- ¿Qué tipos de ciclos existen en JavaScript?
R: While, do-while and for.


- ¿Qué es un ciclo infinito y por qué es un problema?
R: Es cuando nuestra validacion de la condicion para ejecutar nuestro ciclo nunca se cumple, terminan dañando la aplicacion. 


- ¿Puedo mezclar ciclos y condicionales?
R: Si ya que los ciclos son unos condicionales.


### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

R: 
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}



for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

R: 
let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}


```





### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
R: 
while (respuesta != '4') {
    let pregunta = prompt('How much is 2 + 2?');
    respuesta = pregunta;
}
```



## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
R: son una lista de elementos. Usan [].

```js
const array = [1, 3, 9, 5, false, true];
```


- ¿Qué es un objeto?
R: son una lista de elementos, pero cada elemento tienen nombre clave. Usan {}.

```js
const obj = {
    name: 'Skalex',
    age: 40
};
```


- ¿Cuándo es mejor usar objetos o arrays?
R: Los arrays cuando lo que haremos en un elemento el los mismo que en todo lo demas. Hay exepciones.

Un objeto cuando los nombres de cada elemento representan importancia en nuestro programa.


- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R: Si!



### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function printFirstElement(arr) {
    console.log(arr[0]);
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function printElementByElement(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js

Se usara Object.values:

function printElementByElementObject(obj) {
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


```



## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
