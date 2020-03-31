import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import { Container, Card } from 'react-bootstrap';
import logo from "../../images/logo.png"


const Footer = () => {
    return (


        <footer className="page-footer stylish-color-dark pt-4">

<div className="container-fluid text-center text-md-left">


  <div className="row">


    <div className="col-md-4 mt-md-0 mt-3">


      <h3 className="text-uppercase">You can find us here...</h3>
      <p>Thankyou for visiting our website.</p>
      <img className="footer-logo" src={logo} alt="EduStream"/>

    </div>


    <hr className="clearfix w-100 d-md-none pb-3"/>



<div className="row">
    <div className="col-md-4 mb-md-0 mb-3">

      

      <ul className="list-unstyled">
        <li >
        <div className="business_nfo">
                           <div className="tag">
                              <FontAwesomeIcon
                                  icon={faCompass}
                                  className="icon"
                              />
                              <div className="nfo">
                                  <div>Address</div>
                                  <div>India/West-Bengal/Kolkata</div>
                              </div>
                          </div>
                          </div>
        </li>
        <li >
          <div className="business_nfo">
              <div className="tag">
                               <FontAwesomeIcon
                                  icon={faPhone}
                                  className="icon"
                              />
                              <div className="nfo">
                                  <div>Phone-No</div>
                                  <div>+91 8100838105</div>
                              </div>
                          </div>

                          </div>
        
        </li>
        
      </ul>

    </div>
    </div>

    <div className="col-md-4 mb-md-0 mb-3">


      <ul className="list-unstyled">
        <li >
        <div className="business_nfo">
        <div className="tag">
                               <FontAwesomeIcon
                                  icon={faEnvelope}
                                  className="icon"
                              />
                              <div className="nfo">
                                  <div>Email</div>
                                  <div>webwarriors@gmail.com</div>
                              </div>
                          </div>

        </div>
        </li>
        <li >
        <div className="business_nfo">
            <div className="tag">
                               <FontAwesomeIcon
                                  icon={faClock}
                                  className="icon"
                              />
                              <div className="nfo">
                                  <div>Working hours</div>
                                  <div>Mon-Sun/ 9am-8pm</div>
                              </div>
                          </div>

        </div>
        
        </li>
      </ul>

    </div>


    </div>

  <div className="container">


    <div className="row">


       <div className="mb-5 flex-center">

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 py-5"> 
              <a className="fb-ic">
               <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
            </div>
   
           <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 py-5">
              <a className="gplus-ic">
               <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 py-5">
                <a className="li-ic">
                 <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 py-5">
                 <a className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

          </div>
      </div>

    </div>

  </div>    

              <div className="container-fluid footer-copyright text-center py-3">© 2020 Copyright:
                   <a href="https://mdbootstrap.com/"> webwarriors.com</a>
              </div>


     </div>
</footer>




    );
};

export default Footer;

/* // <footer className="bck_b_dark">
        //     <div className="containerf">
                
        //         <div className="wrapper">
        //             <div className="left">
        //                 <h2>Contact information</h2>
        //                 <div className="business_nfo">
        //                     <div className="tag">
        //                         <FontAwesomeIcon
        //                             icon={faCompass}
        //                             className="icon"
        //                         />
        //                         <div className="nfo">
        //                             <div>Address</div>
        //                             <div>India/West-Bengal/Kolkata</div>
        //                         </div>
        //                     </div>
        //                     <div className="tag">
        //                         <FontAwesomeIcon
        //                             icon={faPhone}
        //                             className="icon"
        //                         />
        //                         <div className="nfo">
        //                             <div>Phone</div>
        //                             <div>111111111</div>
        //                         </div>
        //                     </div>
        //                     <div className="tag">
        //                         <FontAwesomeIcon
        //                             icon={faClock}
        //                             className="icon"
        //                         />
        //                         <div className="nfo">
        //                             <div>Working hours</div>
        //                             <div>Mon-Sun/ 9am-8pm</div>
        //                         </div>
        //                     </div>
        //                     <div className="tag">
        //                         <FontAwesomeIcon
        //                             icon={faEnvelope}
        //                             className="icon"
        //                         />
        //                         <div className="nfo">
        //                             <div>Email</div>
        //                             <div>webwarriors@gmail.com</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div> 
        //             <div className="left">
        //                 <h2>Be the first to know</h2>
        //                 <div>
        //                     <div>
        //                     Get all the latest information on our projects.
        //                     </div>
        //                 </div>
        //             </div>      
        //         </div>
        //     </div>
        // </footer> */