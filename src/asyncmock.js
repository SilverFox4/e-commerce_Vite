const misProductos = [
    {id: "1", nombre: "Msi GTX 1050 TI 4GT OC", precio: "500", img: "../img/Msi GTX 1050 TI 4GT OC.png",idCat:"10"},
    {id: "2", nombre: "Gigabyte GT 1030 (GDDR5)", precio: "500", img: "../img/Gigabyte GT 1030 (GDDR5).png",idCat:"10"},
    {id: "3", nombre: "EVGA GeForce GTX 1660 SUPER SC ULTRA GAMING", precio: "500", img: "../img/EVGA GeForce GTX 1660 SUPER SC ULTRA GAMING.png",idCat:"16"},
    {id: "4", nombre: "Gigabyte GeForce GTX 1660 SUPER OC 6G", precio: "500", img: "../img/Gigabyte GeForce GTX 1660 SUPER OC 6G.png",idCat:"16"},
    {id: "5", nombre: "MSI GeForce GTX 1650 D6 VENTUS XS OCV1", precio: "500", img: "../img/MSI GeForce GTX 1650 D6 VENTUS XS OCV1.png",idCat:"16"},
    {id: "6", nombre: "MSI GeForce RTX 3050 Ventus 2X 8G", precio: "500", img: "../img/MSI GeForce RTX 3050 Ventus 2X 8G.png",idCat:"30"},
    {id: "6", nombre: "Gigabyte GeForce RTX 3060 GAMING OC 8G", precio: "500", img: "../img/Gigabyte GeForce RTX 3060 GAMING OC 8G.png",idCat:"30"},
    {id: "6", nombre: "Gigabyte GeForce RTX 3060 VISION OC 12G", precio: "500", img: "../img/Gigabyte GeForce RTX 3060 VISION OC 12G.png",idCat:"30"}
]

export const getProductos = () => {
        return new Promise((res)=> {
            setTimeout(() => {
                res(misProductos)
            }, 200);
        })
}

export const getUnProducto = (id) => {
    return new Promise ( resolve => { 
        setTimeout(()=> {
            const producto = misProductos.find(prod => prod.id === id)
            resolve(producto);
        }, 200)
        })
        
}

//Función que retorna categoría:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( ()=> {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 200)
    })
}