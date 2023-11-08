import Image from "../Components/Cards/Image";
import Description from "../Components/Cards/Description";
import "../styles/detailsItem.css";
import fetchSimulation from "../infoProductos/fetchSimulation";
import productos from "../infoProductos/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCartButton from "./Cards/AddCartButton";


const DetailsItem = () => {
    const [ item, setItem ] = useState();
    let {idItem} = useParams(); 
    function filterItem (idItem, data){
        let selectedItem = data.filter(product => product.id == idItem)
        return (selectedItem ? selectedItem[0]: null)
    }


    useEffect(() => {
        if(idItem){
            fetchSimulation(productos, 2000)
            .then(resp => setItem(filterItem(idItem, resp)))
            .catch(error => console.log(error))
        } 
    
        
     }, [idItem])
     console.log(item)
    return(

        item ? (
        <div className="detailsItem">
                        <div className="containerLeft">
                            <Image 
                                image={item.image}
                            />
                        </div>  

                        <div className="containerRight">
                                <Description 
                                    title={item.title}
                                    description={item.description}
                                    stock={item.stock}
                                    price={item.price}
                                />
                                
                            <div className="buttonsDetails">
                        
                                    <AddCartButton
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
        </div>)
        : (<div>Loading</div>)
    )
}



export default DetailsItem;