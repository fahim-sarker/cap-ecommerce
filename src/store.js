import { configureStore } from '@reduxjs/toolkit'
import  Productslice  from './components/slice/Productslice'

export default configureStore({
  reducer: {
    product: Productslice
  },
})