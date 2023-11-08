import Image from "../Components/Cards/Image";
import Description from "../Components/Cards/Description";
import "../styles/detailsItem.css";
import fetchSimulation from "../infoProductos/fetchSimulation";
import productos from "../infoProductos/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCartButton from "./Cards/AddCartButton";


const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    let {idItem} = useParams();


    useEffect(() => {
        if(idItem === undefined){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else{
            fetchSimulation(productos.filter(filter => filter.type === idItem), 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.image}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title={items.title}
                                    parrafo={items.description}
                                    cantidad={items.stock}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
                        
                                    <AddCartButton
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;