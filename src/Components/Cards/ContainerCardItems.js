import CardItem from "./Cards";
import fetchSimulation from "../../infoProductos/fetchSimulation";
import productos from "../../infoProductos/productos";
import { useState, useEffect } from "react";
import "../../styles/containerCardsItems.css";
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    let {idCategory} = useParams();


    useEffect(() => {
        if(idCategory === undefined){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else{
            fetchSimulation(productos.filter(filter => filter.type === idCategory), 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    }, [idCategory])
        
    return (
        <div className="containerCardsItems">
            {
                datos.map( product => (
                    <CardItem
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    stock={product.stock}
                    price={product.price}
                    />
                ))
            }
        </div>
    )
}


export default ContainerCardItems;
