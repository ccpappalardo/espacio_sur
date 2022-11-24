import { createContext, useState } from "react";

export const CartContext=createContext();

const CartProvider=(props)=>{
 
    const [cart, setCart]=useState([]);

  
    const addToCart=(producto,cantidad)=>{ 
        if(estaEnCarrito(producto.id)){ 
         sumarCantidad(producto, cantidad);
        }else{
            setCart([...cart,{...producto,cantidad}]);
        }
    }
     
    const estaEnCarrito= (id)=>{
        return cart.some((prod)=>prod.id===id);
    }
   

  
  
    const sumarCantidad = (itemPorAgregar, cantidad) => {

    const cartActualizado = cart.map((prodDelCarrito) => {
        if (prodDelCarrito.id === itemPorAgregar.id) {
            cantidad=prodDelCarrito.cantidad+cantidad;
            const productoActualizado = {
                ...prodDelCarrito,
                cantidad,
            };
            return productoActualizado;
        } else {
            return prodDelCarrito;
        }
    });
    setCart(cartActualizado);
};
 
  const totalUnidades = () => {
    let contadorUnidades = 0;
    const copiaCarrito = [...cart];
    copiaCarrito.forEach((curso) => {
        contadorUnidades = contadorUnidades += curso.cantidad;
    });
    return contadorUnidades;
    };

    const priceWithDiscount=(prod)=>{
        let preciocondescuento=prod.price - (prod.price*prod.descuento/100)
        return preciocondescuento;
    } 
    const totalPrecio= ()=>{
    let count = 0;
    const copia = [...cart];
    copia.forEach((prod) => {
        count = count += prod.cantidad * priceWithDiscount(prod);
    });
    return count;
    }  

    const deleteAll = () => {
        setCart([]);
    };
 
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
        
    };
      
    return(
        <CartContext.Provider value={{cart, addToCart, deleteOne, deleteAll, totalPrecio, totalUnidades, priceWithDiscount}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;