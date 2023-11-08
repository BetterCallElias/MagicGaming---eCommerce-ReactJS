import Image from "../Cards/Image";
import "../../styles/cards.css"
import Description from "./Description";
import ButtonDetalles from "./ButtonDetails";
import AddCartButton from "./AddCartButton";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    console.log(props)
    
    return (
        <div className="cardItems">
            <Image
            image={props.image}/>
            <Description
            title = {props.title}
            quantity = {props.stock}
            price = {props.price}/>
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles />
                </Link>
                
                <AddCartButton />
            </div>
        </div>
    )
}

export default CardItem;