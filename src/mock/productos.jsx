export const products = [
    {
        id: 1,
        title: 'Club de Lectura',
        descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse praesentium doloremque soluta? Ratione amet corrupti illo odio libero, iure vero laborum, corporis impedit, velit neque consectetur natus cupiditate voluptatum doloremque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse praesentium doloremque soluta? Ratione amet corrupti illo odio libero, iure vero laborum, corporis impedit, velit neque consectetur natus cupiditate voluptatum doloremque',
        price: 4500,
        cupo: 10, 
        modalidad:'online',
        descuento: '10',
        img: 'https://media.istockphoto.com/photos/stack-of-colorful-hardback-books-open-book-on-blue-background-picture-id506432952?k=20&m=506432952&s=612x612&w=0&h=_-rVu2adxbHvi4rRX_o9H-pafTBvxDM7gldjYPAiwx4=',
    },
    {
        id: 2,
        title: 'Fotografía Inicial',
        descripcion:'Esse praesentium doloremque soluta? Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse voluptate facilis quisquam reiciendis voluptatem possimus id ut autem aperiam magnam dolore vitae iure, deleniti architecto quia dolor illo consectetur. ',        
        price: 4500,
        cupo: 8, 
        modalidad:'presencial',
        descuento: '0',
        img: 'https://media.istockphoto.com/photos/lets-start-a-baby-hair-challenge-picture-id1280349927?k=20&m=1280349927&s=612x612&w=0&h=egmCIeZcetZrrD4LqydO8qXitQFCFnhpOPdJz772OdY=',
    },
    {
        id: 3,
        title: 'Proyectar la imágen propia',
        descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse praesentium doloremque soluta? Ratione amet corrupti illo odio libero, iure vero laborum, corporis impedit, velit neque consectetur natus cupiditate voluptatum doloremque',
        price: 3000,
        cupo: 7, 
        modalidad:'presencial',
        descuento: '10',
        img: 'https://media.istockphoto.com/photos/people-blurry-in-motion-in-yellow-tunnel-down-hallway-picture-id157531192?k=20&m=157531192&s=612x612&w=0&h=zN5MQAP4_W-e_DM1QhwLWqMLAHVQvYztBySwt9JfJ4c=',
    },
    {
        id: 4,
        title: '[Ex]istir es [Re]sistir',        
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maiores. Autem, laborum aperiam, accusantium error optio molestiae, alias vitae ullam doloremque perferendis exercitationem beatae culpa quod mollitia dolore enim. Beatae?',
        price: 3000,
        cupo: 12, 
        modalidad:'online',
        descuento: '25',
        img:'https://media.istockphoto.com/photos/hands-holding-a-smartphone-and-pointing-at-it-picture-id1358389574?k=20&m=1358389574&s=612x612&w=0&h=XPSMWNXOQoXwKP6cAXW7iR2H__38RrvOw7XD3oUXAIQ=',
    },

    
];

//Funcion que devuelve un array de productos filtrados por categoría/modalidad

export const getProducts = (modalidadName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.modalidad === modalidadName
        );
        const ref = modalidadName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};


//Funcion que devuelve un producto en particular -- se pasa el producto id por parámetro

export const getProduct = (productId) => {
    return new Promise((res, rej) => {
        const product = products.find(
            (prod) => prod.id === +productId
        );
        
        setTimeout(() => {
            res(product);
        }, 500);
    });
};