import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsCard from './Components/ProductsCard'

function App() {
  const products=[
    {name:"mobile",price:1000000,id:100}
    ,{name:"laptop",price:3000000,id:200}
    ,{name:"bicycle",price:500000,id:300}
    ,{name:"perfium",price:200000,id:400}
  ];
  return (
    <div>
   {products.map((item)=>{
    return<ProductsCard key={item.id} product={item}/>
   })}
    </div>
    
  )
}

export default App
