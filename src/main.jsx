// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { programing } from "./programing";

const Hafiz = {
  Lastname: "Hamdard",
  Email: "Hafiz@gmail.com",
  Country: "USA",
  job: "software Engineer",
  company: "Facebook"
}
console.log("Destructureing")

const {Lastname, Email, Country, job, company} = Hafiz;
console.log(Hafiz)

const products = ['book', 'pen', 'pencil', 'Notebook'];
const displayItems = products.map(function(product){product})
console.log(displayItems)
 
const fillter = products.filter((product)=>{ product.startsWith("b")})
console.log(fillter)

const arrone = [2,3,4]
const arrtwo = [6,7,8,9]
const arrthree = [4,5]
const mixed = arrone.concat(arrtwo);
const four = mixed.concat(arrthree)
console.log(four)
const newway = [...arrone, ...arrthree,...arrtwo]


const Occupation =()=> {
  console.log("I'm software engineer")
 programing();

}
Occupation();