import { useEffect, useState } from "react";
import MyButton from "./component/MyButton";
import{FormControl,FormLabel,FormControlLabel,Radio,RadioGroup} from '@mui/material'
import MyForm from "./component/MyForm";
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";

function App() {
 

  return (
    <BrowserRouter>
     {/* <MyForm/> */}
     <Routes>
       <Route exact path="/" element={<Home/>}></Route>
       <Route exact path="/product/:id" element={<Product/>}></Route>
       <Route path="*" render={<h1>No Page Found</h1>}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
