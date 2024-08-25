import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from "./Pages/Shop/Shop"
import ShopCategory from "./Pages/Shop/ShopCategory"
import Login from "./Pages/SignUp/Login";
import Register from "./Pages/SignUp/Register";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/todays-deals' element={<ShopCategory category="deals" />} />
            <Route path='/mens-fashion' element={<ShopCategory category="men" />} />
            <Route path='/womens-fashion' element={<ShopCategory category="women"/>} />
            <Route path='/kids-fashion' element={<ShopCategory category="kid"/>} />
            <Route path='/toys&games' element={<ShopCategory category="games"/>} />
            <Route path='/health&beauty' element={<ShopCategory category="health"/>} />
            <Route path='/mobiles&tablets' element={<ShopCategory category="mobiles"/>} />
            <Route path='/tvs&electronics' element={<ShopCategory category="electronics"/>} />
            <Route path='/video-games' element={<ShopCategory category="video-games"/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App