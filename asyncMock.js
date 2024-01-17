const productos = [{
        id: 1,
        name: 'Cartera',
        price: '$59.900',
        category: 'Accesorios',
        stock: 25,
        img:'https://falabella.scene7.com/is/image/Falabella/7446008_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Cartera City Zenawien Mujer Aldo'
    },
    {
        id: 2,
        name: 'Botas',
        price: '$53.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_120739245_2784506_1?wid=800&hei=800&qlt=70' ,
        description: 'Botas Mujer Tacón Cuadrado - Café'
    },
    {
        id: 3,
        name: 'Pareo',
        price: '$ 22.990',
        category: 'Accesorios',
        stock: 10,
        img:'https://falabella.scene7.com/is/image/Falabella/882624915_1?wid=1004&hei=1000&crop=248,0,1004,1500&qlt=70' ,
        description: 'Pareo + Bolso De Playa Mujer Basement'
    },
    {
        id: 4,
        name: 'Billetera',
        price: '$ 23.990',
        category: 'Accesorios',
        stock: 10,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_123068585_3534928_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Billetera de mujer Sidney multicolor Nautica'
    },
    {
        id: 5,
        name: 'Sandalia',
        price: '$27.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_125157864_4199742_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Sandalia Taco Rosado Fiesta QIU299 Weide'
    },
    {
        id: 6,
        name: 'Short',
        price: '$13.990',
        category: 'Accesorios',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_120783082_2800079_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Short Deportivo Mujer Pantalone'
    },
]

export const getProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}
export const getProductosBycategory = (category)=>{
    return new Promise((res, rej)=>
    setTimeout(()=>{
        res(productos.filter(prod=>prod.category===category))
    }, 2000)
    )
}

export const getProductosById=(id)=>{
    return new Promise((res, rej)=>
    setTimeout(() => {
        res(productos.find(prod=>prod.id.toString()===id))
    }, 1000)
    )
}