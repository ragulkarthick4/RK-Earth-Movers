import React ,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Styles from '../Styles/Cards.module.css'
import firebase from '../firebase'
function Cards() {
    const [Works, setWorks] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        

          //ONE TIME GET FUNCTION
    const ref = firebase.firestore().collection("Works");
    function getWorks() {
        // setLoading(true);
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            console.log(items);
        setWorks(items);
        
        });
    }   getWorks();
    },[]);

  return (
    <div>

    {/* <div className={Styles.row}> */}
    <Row className="justify-content-md-center">
    {Works.map((work)=>(
        
            <Col>
                <div className={Styles.Cards} key={work.key}>
                    <img
                    className="mt-1"
                        src={work.img}
                        width={100} 
                        height={70}
                    />
                    <h1>{work.name}</h1>
                               
                </div>
            </Col>
       
                        
                    ))}
            </Row>
    {/* </div> */}
</div>
  );
}

export default Cards;