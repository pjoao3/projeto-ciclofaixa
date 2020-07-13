import React from 'react';
import './index.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
       <div className="container">
           <div className="row">

          

             <p className="col-sm">
                  <p className="P">(Eco-via) é uma site para cadastro de avenidas e ciclo Faixas</p> 
                   &copy;{new Date().getFullYear()} | All right reserved | Terms Of Service | Privacy 
               </p>

           </div>
       </div>

   </div>
  )
}     
export default Footer;
