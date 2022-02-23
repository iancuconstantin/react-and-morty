import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import CharacterModal from "./CharacterModal";
import { useCharacters } from "../api/useData";
import "../Styles/Characters.css";
const Characters = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const characters = useCharacters(pageNumber);
    const [charactersList, setCharactersList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const [origin, setOrigin] = useState("");
    const [location, setLocation] = useState("");

    
    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
        return;
        setPageNumber((pageNumber)=>pageNumber + 1);
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll)
    },[])


    useEffect(()=>{
        if(characters !== "Loading..."){
            setCharactersList([...charactersList, ...characters.results])
        }
    },[characters]);

    const setData = (item) => {
        setModalShow(true);
        setImg(item.image);
        setName(item.name);
        setGender(item.gender);
        setSpecies(item.species);
        setStatus(item.status);
        setOrigin(item.origin.name);
        setLocation(item.location.name);
    }

    return(
        <div className='container d-flex flex-column align-items-center'>
            <div className="characters mb-3">
                {charactersList === [] ? <p>Loading...</p> : 
                
                charactersList.map(item=>{
                    return(
                        <Card className="character" style={{ width: '18rem' }} key={item.id} onClick={() => setData(item)}>
                            <Card.Img variant="top" src={item.image} style={{ height: '300px', width: '227,82px' }} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Species: {item.species}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <CharacterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                img = {img}
                name = {name}
                gender = {gender}
                species = {species}
                status = {status}
                origin = {origin}
                location = {location}
            />
        </div>
    )
}

export default Characters;