import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./components/ProductList.jsx"
import AddProduct from "./components/AddProduct.jsx"
import EditProduct from "./components/EditProduct.jsx"

function App() {
  return (
    <>
    <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element= { <ProductList/>}/>
            <Route path="/add" element= { <AddProduct/> }/>
            <Route path="/edit/:id" element= { <EditProduct/> }/>
          </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
