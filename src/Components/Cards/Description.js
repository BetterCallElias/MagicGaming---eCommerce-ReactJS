const Description = (props) => {
    return (
        <div className ="cardDescription">
            <h2 className="title">
                {props.title}
            </h2>

            <div className="description">
                <span className="descriptionTitle">Descripción:</span>
                <p className="textoDescripcion"></p>
                    {props.description}
            </div>

            <p className="quantity">
                Cantidad: {props.stock} unidades disponibles

            </p>

            <p className="price">
                ${props.price}
            </p>


        </div>
    )
}

export default Description;