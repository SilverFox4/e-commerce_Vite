import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CarritoContext } from "../../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);

  }
  return (
    <div className="contenedorItem">
      <div className="imgContenedor">
        <img src={img} />
      </div>
      <h2>{nombre}</h2>
      <h3>${precio}</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur vero officia dolores beatae culpa nesciunt veniam odit ad ratione minima accusamus quasi laudantium minus esse fugiat, et veritatis. Iste.</p>
      {

      }
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) :
          (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail