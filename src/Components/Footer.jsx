import React from 'react'
import { useLocation } from 'react-router-dom';
import Img from '../Images/footerImg.jpg'
import Styles from '../Styles/Footer.module.css'
import {Row,Col} from 'react-bootstrap'
function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
  if (pathname === "/") return null;
  else if (pathname === "/register") return null;
  return (
    <div className={Styles.footer}>
      <Row>
        <Col>
        <ul>
          
          
        </ul>
        </Col>
        <Col>
        <div className={Styles.img_wrap}>

          <img
            src={Img}
            alt="footer"
         
          />
            <h2 className={Styles.img_desc}>We dig for the Growth</h2>
            </div>
        </Col>
        <Col>
        <ul>
          
          
        </ul>        </Col>
            </Row>

            <div className={Styles.foot}>
              ©RkEarthMovers
            </div>
    </div>
  )
}

export default Footer