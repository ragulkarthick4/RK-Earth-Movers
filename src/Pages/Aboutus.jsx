import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Styles from '../Styles/Abt.module.css'
import Abt1 from '../Images/abt1.jpg'
function Aboutus() {
  return (
    <div>
        <Container>
            <div className={Styles.header}>
            <h2>Aboutus</h2>
            </div>
            <hr/>
            <div >
            <Row>
            <Col md={{ span: 4, offset: 0 }}>


            <div className={Styles.img_wrap}>


            <Image className={Styles.abt}  src={Abt1} alt="abt1" />

                <h2 className={Styles.img_desc}>Know us here</h2>
            </div>
       
            </Col>
                        
        
            <Col md={{ span: 8, offset: 0 }}>
                
                <div className={Styles.abt1}>
              <i>
              The story of JCB is one of innovation, ambition and sheer hard work. From small beginnings building agricultural tipping trailers in 1945, to the global force in manufacturing the company has become today, JCB has constantly pushed the boundaries in our desire to be the best.
              n 1948, six people were working for the company, and it made the first hydraulic tipping trailer in Europe. In 1950, it moved to an old cheese factory in Rocester, still employing six. A year later, Bamford began painting his products yellow. In 1953, he developed JCB's first backhoe loader, and the JCB logo appeared for the first time. It was designed by Derby Media and advertising designer Leslie Smith. In 1957, the firm launched the "hydra-digga", incorporating the excavator and the major loader as a single all-purpose tool useful for the agricultural and construction industries.

                </i> 
                </div>
            </Col>
          

            </Row>
            </div>

            <div className={Styles.company}>
                <h4><i>Company</i></h4>
                <p>
                JCB India Limited is a leading manufacturer of earthmoving and construction equipment in India. The company started as a joint venture in 1979 and is now a fully owned subsidiary of J.C Bamford Excavators, United Kingdom. With five state-of-the-art factories in India, JCB manufactures a wide range of world-class equipment in India for the domestic market as well as for exports to more than 110 countries.

JCB introduced the iconic Backhoe Loader in India over four decades ago. It has since expanded its range to over 60 products in nine categories.

The Ballabgarh factory near New Delhi, which is the world’s largest factory for Backhoe Loaders, is also the Headquarters for JCB India. This facility, apart from Backhoe Loaders, also manufactures Skid Steer Loaders, Telehandlers, Diesel Generators and Diesel Engines. 

The company expanded its operations in 2006 and 2007 by setting up two factories at Pune for its ‘Heavyline’ business. These factories manufactureTracked Excavators, Wheeled Loaders, Compaction equipment and Fabrications for the Group. With over 400 engineers, Pune also has JCB’s largest Design Center outside of the United Kingdom. Further investment in India was made at Jaipur in 2014 with the inauguration of a 114-acre, eco-friendly, green manufacturing facility. This facility today manufactures Mini Excavators, Skid Steers and Fabrications and 34% of the workforce on the shop floor comprise women. A sixth factory is being constructed on a 44-acre campus at Vadodara, Gujarat, to be commissioned later this year.

The company has built and supported a local supply chain for the manufacturing of its products in India. The JCB Backhoe Loader manufactured in India is indigenised to over 95%. Close to 380 world-class Indian suppliers are aligned to JCB’s group objectives and have grown along with the company through various supplier development and cluster initiatives. 

JCB has a network of more than 60 dealers and 700 outlets spread throughout India, who further employ 8,000 professionally trained personnel. These far-reaching outlets provide vital product support to customers for their equipment. Five strategically set up warehouses at Pune, Chennai, Faridabad, Guwahati and Kolkata support these dealerships and outlets for parts supplies. The network also extends to the South Asia region of Nepal, Bhutan, Bangladesh, Myanmar, and Sri Lanka, where JCB businesses are managed by the Indian Operations.  

JCB has a 16-week detailed induction program at the welding training school at the Jaipur facility for ITI and Diploma graduates. Comprehensive skills developed through these programmes have helped young men and women excel in their careers, especially women engineers, who are now making their careers in traditionally male-dominated areas of manufacturing such as welding and assembly.

 The company is creating employment and entrepreneurship amongst youth through its 10 Operator Training Centres in India. It provides a one-month certified course on machine operations and maintenance, which includes both, classroom, and practical training. Over 30,000 candidates have been trained on operating JCB machines safely and productively, to date.

The company’s CSR journey began over two decades ago, by supporting a school near its Delhi-NCR factory through the Lady Bamford Charitable Trust (LBCT). This commitment has now grown across three in-house foundations, four Sustainable Development Goals and outreach to communities that include – Women, Adolescent Girls, Children, Rural Artisans and Youth.

These initiatives help provide 15,500 students with quality education, and over 2,000 Artisans and Women’s groups with market access and production efficiencies. It supports over 50 panchayats with accessing quality projects on the ground.

JCB India has also established two pioneering and innovative CSR projects: Nila House – a centre of excellence for craft in Jaipur – and the JCB prize for Literature – an annual prize for Literature, celebrating distinguished works of fiction by Indian writers.
                </p>
            </div>
            <hr/>

            </Container>
    </div>
  )
}

export default Aboutus