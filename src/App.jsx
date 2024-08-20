import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/Filter'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList/>
      <Filter/>
    </>
  )
}

export default App