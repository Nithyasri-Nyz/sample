import React from "react";
import { BrowserRouter ,Routes,Route }from 'react-router-dom';

import Home from "./Home";
import Filter83 from "./Filter83";
import Detail83 from "./Detail83";
import Header84 from "./Header84";





function Router83(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            
            <Route path="*" element={<Header84/>}></Route>

            <Route exact path='/' element={<Home/>}> </Route>
            <Route path='/filter' element={<Filter83/>}> </Route>
            <Route path='/detail' element={<Detail83/>}> </Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}
export default Router83;