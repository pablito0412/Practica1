import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// let pingButton = document.querySelector('#pingButton')
// let message = document.querySelector('#message')

// //emparejar el boton con la funcion
// pingButton.addEventListener('click',getPingFromWebServices)

// function getPingFromWebServices(){
// const url = 'http://localhost:3000/ping'
// //Encadenar los datos de la url con la respuesta
// fetch (url)
// .then((response) => {
// return response.json()//solicitar respuesta en formato json
// })
// .then((data)=> {
// console.log(data)
// message.innerHTML=data.message//asignar la data retornada al message
// })
// .catch(function(error){
// console.log(error)
// message. innerHTML='No se puede conectar al servidor ${url} '

// })


// }
