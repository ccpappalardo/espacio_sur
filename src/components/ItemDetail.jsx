import React from 'react'

const ItemDetail = ({producto}) => {
    
  let desc=(producto.price-(producto.price * producto.descuento) / 100);
    let estiloDescuento=(producto.modalidad==="presencial")? "descuentoPresencial" : "descuentoOnline";
  
    return ( 
      <div className="item">
            <div >
              <img src={producto.img} width="220px" alt={producto.title} />
              </div>
              <article className="info">
                  <h2>{producto.title}</h2>
                  {
                      producto.descuento!=="0"?<h4 className={`${estiloDescuento}`}>{producto.descuento}% off</h4> : ''
                  }
                    {
                      producto.modalidad==="presencial"?
                      <h4 className="modalidadPresencial"># {producto.modalidad}</h4>
                      : <h4 className="modalidadOnline"># {producto.modalidad}</h4>
                  }
                  <h3>Cupos: {producto.cupo}</h3>
                  <div className="info-price">
                      <h3>${desc}.-</h3>
                      {
                          producto.descuento!=="0"? <h5>${producto.price}.-</h5> :''
                      }
                  </div>
              </article>
              <div className="info">{producto.descripcion}</div>
      </div>
    )
}

export default ItemDetail