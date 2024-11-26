import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Productpage from "./pages/Productpage";
import Rootlayout from "./components/Rootlayout"
import Productdetails from "./pages/Productdetails";
import Cartpage from "./pages/Cartpage";
import Billingpage from "./pages/Billingpage";
import Contact from "./pages/Contact";
import Checkoutpage from "./pages/Checkoutpage";
import Categoryproduct from "./pages/Categoryproduct";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Productpage/>}></Route>
    <Route path="/:id" element={<Productdetails/>}></Route>
    <Route path="/cart" element={<Cartpage/>}></Route>
    <Route path="/bill" element={<Billingpage/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/checkout" element={<Checkoutpage/>}></Route>
    <Route path="/category/:category" element={<Categoryproduct/>}></Route>

  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
