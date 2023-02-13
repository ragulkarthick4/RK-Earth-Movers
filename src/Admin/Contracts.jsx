import React ,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Styles from '../Styles/Cards.module.css'
import firebase from '../firebase'
function Contracts() {
    const [Works, setWorks] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        

          //ONE TIME GET FUNCTION
    const ref = firebase.firestore().collection("Contracts");
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
                    
                    <h1>firstname{work.firstname}</h1>&nbsp;<span>lastName{work.lastname}</span>
                    <p>location{work.location}</p>
                    <p>City{work.city}</p>
                    <p>state{work.state}</p>
                    <p>duration{work.duration}</p>
                               
                </div>
            </Col>
       
                        
                    ))}
            </Row>
    {/* </div> */}
</div>
  );
}

export default Contracts;