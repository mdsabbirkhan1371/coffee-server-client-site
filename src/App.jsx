
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  
  const dataCoffees = useLoaderData()
  const [coffees,setCoffees]=useState(dataCoffees)



  return (
    <div className='m-24'>
      <h2 className='text-center text-3xl my-12'>All  Coffee</h2>
      <div className='grid md:grid-cols-2 gap-3'>
        {
        coffees.map(coffee=><CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>

    </div>
  )
}

export default App
