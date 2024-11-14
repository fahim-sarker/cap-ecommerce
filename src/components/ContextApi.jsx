import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

let apidata = createContext();

const ContextApi = ({children}) => {
    let [capdata, setCapdata] = useState([]);

    let getcapdata = () => axios.get("https://fakestoreapi.com/products").then((response)=>{
        setCapdata(response.data);
    })

    useEffect(() => {
        getcapdata();
    })


  return (
    <apidata.Provider value={capdata}>{children}</apidata.Provider>
  )
}

export {ContextApi, apidata} 
