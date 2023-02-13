import React from 'react'
import Aboutus from './Aboutus.jsx'
import Cards from '../Components/Cards'
import Carousel from '../Components/CarouselItem'
import {Container} from 'react-bootstrap'
function Home() {
  return (
    <div>
      <Carousel/>
      <Container>
       
      
            <br/>

              <Cards/>

<br/>
            <div id='aboutUs'>
              <Aboutus/>
            </div>

      </Container>
    </div>
  )
}

export default Home