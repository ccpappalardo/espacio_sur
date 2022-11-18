import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { db } from '../services/firebaseConfig';

const Form = () => {
    //Campos del formulario - estado para cada uno
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [email1, setEmail1] = useState('');
    const [orderId, setOrderId] = useState('');
    //crear un estado de loading

    const { cart, totalPrecio, deleteAll} = useContext(CartContext);
    const totalCarrito = totalPrecio();
 
    console.log(cart);

    //Handle para los estados
    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleAdress = (e) => setAdress(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleEmail1 = (e) => setEmail1(e.target.value);

    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log({ name, lastName });
        const objOrden = {
            buyer: {
                name,
                lastName,
                phone,
                adress,
                email,
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'ordenes');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
        // .finally(()=>{
        //cambio el estado a false
        // })
        //jJm3DW99HuP4uJHH8r0m;
    };


    if(orderId){
        return (
            <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
        );
    }
 
   
    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleLastName}
                    value={lastName}
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    name="direccion"
                    onChange={handleAdress}
                    value={adress}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    name="telefono"
                    onChange={handlePhone}
                    value={phone}
                />
                <input
                    type="text"
                    placeholder="Correo Electrónico"
                    name="email"
                    onChange={handleEmail}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Confirmar Correo Electrónico"
                    name="email1"
                    onChange={handleEmail1}
                    value={email1}
                />



                <h2>Total: {totalPrecio()}$</h2>
                { email===email1? (
                <button>Enviar</button>) : ("Los correos electrónicos ingresados son diferentes")
                }
            </form>
        </div>
    );
    
};


export default Form;
 