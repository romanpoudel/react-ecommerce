import './App.css'
import Error from './components/Error'
import Header from './components/Header'
import Home from './components/Home'
import Item from './components/Item'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { fetchProducts } from './features/product/productSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cart from './components/Cart'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch data
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className='w-full'>
        <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/item/:id" element={<Item />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
