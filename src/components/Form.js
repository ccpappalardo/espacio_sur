import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../context/CartContext'; 
import { db } from '../services/firebaseConfig'; 
 
const Form = () => { 
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [email1, setEmail1] = useState('');
    const [orderId, setOrderId] = useState('');
    
    const { cart, totalPrecio, deleteAll} = useContext(CartContext);
    const totalCarrito = totalPrecio();
  
    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleAdress = (e) => setAdress(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleEmail1 = (e) => setEmail1(e.target.value);
 
  const errorCamposVacios = () => {
    toast.error('Error - Falta completar campos en el formulario', {
        position: "bottom-center",
        theme: "dark",
    });
  };

  const errorCorreos= () => {
    toast.error('Error - Los email deben coincidir', {
        position: "bottom-center",
        theme: "dark",
    });
  }; 

  const validarCampos=()=>{
    let validado=true;
    if (name === "" || lastName === "" || phone === "" || adress === "" || email === "" || email1 === "") {
        errorCamposVacios();
        validado=false;
        } else if (email !== email1) {
        errorCorreos();
        validado=false;
        }                  
        return validado;
    }
    
    const enviarDatos = (e) => {
        e.preventDefault(); 

        if(validarCampos()){       
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
                 <h1>Gracias por tu compra tu n??mero de Orden es:  {orderId}</h1>
                 <span>Record?? que podr??s consultarla en - <Link className="active" to="/orders/"><b>Mis Ordenes </b></Link></span>
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
                 <p className="titulo">Nos contactaremos por correo electr??nico para continuar la compra</p>

                 <div className="container">
                    <div className="rowcarrito">
                        <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
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
                                <td><label><b>Direcci??n:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Direcci??n"
                                    name="direccion"
                                    onChange={handleAdress}
                                    value={adress}
                                /></td>
                            </tr>    
                            <tr>
                                <td><label><b>Tel??fono:</b> </label></td>
                                <td><input
                                    type="text"
                                    placeholder="Introduce tu Tel??fono"
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
            <ToastContainer />
        </div>
    );
    
};


export default Form;
 