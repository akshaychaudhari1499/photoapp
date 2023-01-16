import { React, useState,useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Enlarged() {
    const [EnlargedPhoto,setEnlarged] = useState('');
    const {photoid}=useParams({});
    useEffect(() => {
        axios.get(`https://picsum.photos/id/${photoid}/info`).then((res) => { setEnlarged(res.data.download_url) }).catch((err) => { console.log(err) });


    }, [])
    return (
        <>
            <Container>
                <img src={EnlargedPhoto} style={{
                    width: "100%",
                    height: '90vh', margin: '10px'
                }}   ></img>


            </Container>
        </>

    )
}

export default Enlarged