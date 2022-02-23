import React, {useState, useEffect} from 'react';
import { useLocations } from "../api/useData";
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import LocationModal from "./LocationModal";
import "../Styles/Locations.css";

const Locations = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const locations = useLocations(pageNumber);
    const [locationsList, setLocationsList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [residents, setResidents] = useState(0);
    const [modalData, setModalData] = useState({name:"", type: "", dimension: "", totalResidents: 0});
    const [totalPages, setTotalPages] = useState([]);
    


    useEffect(()=>{
        if(locations !== "Loading..."){
            setLocationsList(locations.results)
            setTotalPages(Array(locations.info.pages).fill().map((_,index)=>index+1));
        }
    },[locations]);
    

    const setData = ({name, type, dimension, residents}) => {
        setModalShow(true);
        setModalData({name, type, dimension, totalResidents : residents.length })
    }


    const changePage = (item) =>{
        setPageNumber(item)
    };

    const changePageLast = (number) => {
        setPageNumber(number)
    }
    const changePageFirst = (number) => {
        setPageNumber(number)
    }
    const changePageNext = () => {
        if(pageNumber <= 6){
            setPageNumber(pageNumber + 1)
        }
    }
    const changePagePrev = () => {
        if(pageNumber >= 2){
            setPageNumber(pageNumber - 1)
        }
    }


    return(
        <div className='container d-flex flex-column align-items-center'>
            <div className="characters mb-3">
                {locationsList === [] ? <p>Loading...</p> : 
                
                locationsList.map(item=>{
                    return(
                        <Card className="location" style={{ width: '18rem' }} key={item.id} onClick={() => setData(item)}>
                            <Card.Body>
                                <Card.Title>Name: {item.name}</Card.Title>
                                <Card.Text>
                                Type: {item.type}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <LocationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                name={modalData.name}
                type={modalData.type}
                dimension={modalData.dimension}
                residents={modalData.totalResidents}
            />
            <Pagination>
                <Pagination.First onClick={()=>changePageFirst(1)}/>
                <Pagination.Prev onClick={()=>changePagePrev()}/>
                {
                    totalPages.map(item=>{
                        return(
                            <Pagination.Item key={item} id={item} text={item} active={pageNumber === item? true:false} onClick={()=>changePage(item)}>
                                {item}
                            </Pagination.Item>
                        )
                    })
                }
                <Pagination.Next onClick={()=>changePageNext()}/>
                <Pagination.Last onClick={()=>changePageLast(7)}/>
            </Pagination>
        </div>
    )
}

export default Locations;