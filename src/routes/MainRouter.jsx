import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "../components/pages/home";
 import Category from "../components/pages/Category";
 import NavBarComponent from "../components/NavBarComponents/NavBarComponents";

const MainRouter = () => {

     return (
        <BrowserRouter>
          < NavBarComponent />
         <Routes>
         <Route path="/" element={< Home />}></Route>
       
         <Route path="/category/:categoryId" element={<Category />} />
            
             {/* <Route path="/category/category:Id" element={<category />} /> */}
           
         
        </Routes>
         </BrowserRouter>
    )
    
 }

 export default MainRouter
