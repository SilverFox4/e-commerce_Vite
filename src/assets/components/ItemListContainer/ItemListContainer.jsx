import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos]  =useState([]);
  const{idCategoria} = useParams();

  useEffect( () => {
   const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>
    <h2>Catálogo</h2>
    <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer