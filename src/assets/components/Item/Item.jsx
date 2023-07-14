import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img}/>
        <h3>{nombre} </h3>
        <p>${precio}</p>
        <Link className="btnProducto" to={`/item/${id}`}>Detalles</Link>
    </div>
  )
}

export default Item