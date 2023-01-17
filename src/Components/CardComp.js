import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button ,Spinner, Nav} from 'react-bootstrap';
import { black } from 'tailwindcss/colors';
import Enlarged from './Enlarged';
import { Link } from 'react-router-dom';
export default function CardComp() {
    const [photos, setPhotos] = useState([]);
    const[show,setShow]=useState(false)
    useEffect(() => {
        axios.get('https://picsum.photos/v2/list')
        .then((res) => {setPhotos(res.data);})
        .catch((err) => { console.log(err) });
    }, [])

  


    return (


        <Container >


<Row>
    
{photos.length  ?
                (photos.map((photo) => (                     
                    <Col md={3} className="mt-1 mb-1" key={photo.id}> <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img variant="top" style={{height:"200px"}}src={photo.download_url} />
                    <Card.Body>
                        <Card.Title>{photo.author}</Card.Title>
                        <a href={photo.url} className='btn btn-dark m-3' >View Details</a>
                      
                       <Button as={Link} to={`/Enlarged/${photo.id}`}  className='btn btn-dark '>Enlarge</Button>
                    </Card.Body>
                </Card></Col>

                ))):<Spinner animation="border" style={{margin:"400px auto"}}/>}

            </Row>
            

        </Container>




    )
}
