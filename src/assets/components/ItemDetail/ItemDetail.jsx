import "./ItemDetail.css";

const ItemDetail = ({ nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <div className="imgContenedor">
        <img src={img}/>
        </div>
        <h2>{nombre}</h2>
        <h3>${precio}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur vero officia dolores beatae culpa nesciunt veniam odit ad ratione minima accusamus quasi laudantium minus esse fugiat, et veritatis. Iste.</p>
    </div>
  )
}

export default ItemDetail