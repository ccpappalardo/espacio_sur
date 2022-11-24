import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    const [mensaje,setMensaje]=useState('');
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

    const validarDatos=()=>{
        let validado=false;
        
        if(name!==''){
            validado=true;
            setMensaje("Debe completar el campo nombre");
        }
        if(lastName!==''){
            validado=true;
            setMensaje("Debe completar el campo apellido");
        }
        if(adress!==''){
            validado=true;
            setMensaje("Debe completar el campo dirección");
        }
        if(phone!==''){
            validado=true;
            setMensaje("Debe completar el campo teléfono");
        }
        if(email!=='' || email1!==''){
            validado=true;
            setMensaje("Debe completar el campo email");
        }
        if(email==email1){
            validado=true;
            setMensaje("Los correos deben ser iguales");
        }
        return validado;
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log({ name, lastName });
        if(validarDatos()){
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
        } 
    };

    
    if(orderId){
        return (
            <div className="contenedorLoader">
                 <h1>Gracias por tu compra tu número de seguimiento es:  {orderId}</h1>
                 <span>Recordá que podrás consultarla en - <Link to="/orders/">Mis Pedidos.</Link></span>
            </div>
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
                
            <form action="" onSubmit={enviarDatos} className="titulo">
            
                 <h2 className="titulo">C h e c k o u t</h2>   
                 <p className="titulo">Nos contactaremos por correo electrónico para continuar la compra</p>

                 <div className="container">
                    <div className="rowcarrito">
                        <table className="table w-100 text-center cart-table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><label><b>Nombre:</b> </label></td>
                                <td><input
                                        type="text"
                                        placeholder="Introduce tu Nombre"
                                        name="nombre"
                                        onChange={handleName}
                                        value={name}
                                    />
                                </td>
                            </tr>    
                            <tr>
                                <td><label><b>Apellido:</b></label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Apellido"
                                    name="apellido"
                                    onChange={handleLastName}
                                    value={lastName}
                                    /></td>
                            </tr>    
                            <tr>
                                <td><label><b>Dirección:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Dirección"
                                    name="direccion"
                                    onChange={handleAdress}
                                    value={adress}
                                /></td>
                            </tr>    
                            <tr>
                                <td><label><b>Teléfono:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Teléfono"
                                    name="telefono"
                                    onChange={handlePhone}
                                    value={phone}
                                /></td>
                            </tr>    
                            <tr>
                                <td><label><b>Email:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Email"
                                    name="email"
                                    onChange={handleEmail}
                                    value={email}
                                /></td>
                            </tr>  
                            <tr>
                                <td><label><b>Confirmar Email:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Confirma tu Email"
                                    name="email1"
                                    onChange={handleEmail1}
                                    value={email1}
                                /></td>
                            </tr>  
                        </tbody>
                        </table>
                        <button className='btnPrimary'>Enviar</button> 
                    </div> 
                </div>
            </form>
        </div>
    );
    
};


export default Form;
 