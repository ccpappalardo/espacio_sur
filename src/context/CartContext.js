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
         const resultProd = cart.find((prod) => prod.id === producto.id);
         addQuantityCart(resultProd, cantidad);
        }else{
            setCart([...cart,{...producto,cantidad}]);
        }
    }
    //funcion que corrobora si está en el carrito
    const estaEnCarrito= (id)=>{
        return cart.some((prod)=>prod.id===id);
    }
    //variables

    // Función para sumar cantidad si esta en el carrito
  const addQuantityCart = (prod, qty) => {
    const cantidad = prod.cantidad + qty;
    setCart([cart.filter((prodFilter) => prodFilter.id === prod.id), { ...prod, cantidad }]);
    //setCart([...cart,{ ...prod, quantity }]);
  };

    console.log(cart);
     
    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;