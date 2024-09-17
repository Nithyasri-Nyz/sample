import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Header84 from './Components/Header84';
import Router83 from './Components/Router83';


import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <GoogleOAuthProvider clientId="154958749331-npv6l6m2mm1k4d3p4ga5os3ekc87u8e1.apps.googleusercontent.com">
        < Router83/>
     
    </GoogleOAuthProvider>
   
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
