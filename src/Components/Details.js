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
    const { id } = useParams();
    
    useEffect(() => {
        fetchSimulation(productos.filter(filter => filter.type === id), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [id])
    
    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image
                                imagen={datos.image}
                            />
                        </div>

                        <div className="containerRight">
                                <Description
                                    title= {datos.title}
                                    parrafo= {datos.description}
                                    cantidad= {datos.stock}
                                    precio= {datos.price}
                                />
                            <div>
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