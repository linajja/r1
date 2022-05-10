function CarPrice(props){
    return(
    <div> {props.price1 > 200 ? <h3>{props.price1}</h3>:<h4>{props.price1}</h4>}</div>
    )

}

export default CarPrice;