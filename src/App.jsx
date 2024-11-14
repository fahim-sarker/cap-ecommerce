import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Productpage from "./pages/Productpage";
import Rootlayout from "./components/Rootlayout"
import Productdetails from "./pages/Productdetails";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Productpage/>}></Route>
    <Route path="/details" element={<Productdetails/>}></Route>
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
