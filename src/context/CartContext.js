import { createContext, useState } from "react";

export const CartContext=createContext();

const CartProvider=(props)=>{
    //Array de productos -- nunca pasar los setter
    const [cart, setCart]=useState([]);

    //funciones
    const addToCart=(producto,cantidad)=>{
        //console.log({...producto,cantidad});
        if(estaEnCarrito(producto.id)){
         alert("Ya está en el carrito");
         sumarCantidad(producto, cantidad);
        }else{
            setCart([...cart,{...producto,cantidad}]);
        }
    }
    //funcion que corrobora si está en el carrito
    const estaEnCarrito= (id)=>{
        return cart.some((prod)=>prod.id===id);
    }
   //variables

  //funcion para sumar la cantidad de un mismo producto
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


  //funcion que suma la cantidad
  const totalPrecio= ()=>{
    return 1000;
  }

  
    //funcion para vaciar el carrito
    const deleteAll = () => {
        setCart([]);
    };

    //funcion para eliminar un solo producto
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    console.log(cart);
     
    return(
        <CartContext.Provider value={{cart, addToCart, deleteOne, deleteAll, totalPrecio, totalUnidades}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;