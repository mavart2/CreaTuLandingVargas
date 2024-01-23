const productos = [{
        id: 1,
        name: 'Cartera',
        price: '59.900',
        category: 'Accesorios',
        stock: 25,
        img:'https://falabella.scene7.com/is/image/Falabella/7446008_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Cartera City Zenawien Mujer Aldo'
    },
    {
        id: 2,
        name: 'Botas',
        price: '53.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_120739245_2784506_1?wid=800&hei=800&qlt=70' ,
        description: 'Botas Mujer Tacón Cuadrado - Café'
    },
    {
        id: 3,
        name: 'Pareo',
        price: ' 22.990',
        category: 'Vestuario',
        stock: 10,
        img:'https://falabella.scene7.com/is/image/Falabella/882624915_1?wid=1004&hei=1000&crop=248,0,1004,1500&qlt=70' ,
        description: 'Pareo + Bolso De Playa Mujer Basement'
    },
    {
        id: 4,
        name: 'Billetera',
        price: ' 23.990',
        category: 'Accesorios',
        stock: 10,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_123068585_3534928_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Billetera de mujer Sidney multicolor Nautica'
    },
    {
        id: 5,
        name: 'Sandalia',
        price: '27.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_125157864_4199742_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Sandalia Taco Rosado Fiesta QIU299 Weide'
    },
    {
        id: 6,
        name: 'Short',
        price: '13.990',
        category: 'Vestuario',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_120783082_2800079_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Short Deportivo Mujer Pantalone'
    },
    {
        id: 7,
        name: 'Sandalia',
        price: '38.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/16725769_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Sandalia Mujer Cuero Azul 16 Hrs'
    },
    {
        id: 8,
        name: 'Cinturon',
        price: '6.990',
        category: 'Accesorios',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/882855189_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Cinturón Mujer Sybilla Rosado In'
    },
    {
        id: 9,
        name: 'Zapatilla',
        price: '77.990',
        category: 'Calzado',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_118347664_2068250_1?wid=1500&hei=1500&qlt=70' ,
        description: 'Zapatilla Mujer Aero Blaze W Rosado Salomon'
    },
    {
        id: 10,
        name: 'Aros',
        price: '114.400',
        category: 'Accesorios',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/gsc_124345087_3827006_1?wid=1500&hei=1500&qlt=70' ,
        description: 'AROS ESPIRALES ORO LAMINADO 18k'
    },
    {
        id: 11,
        name: 'Blusa',
        price: '7.990',
        category: 'Vestuario',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/882903020_1?wid=1004&hei=1000&crop=248,0,1004,1500&qlt=70' ,
        description: 'Blusa Manga Corta Mujer Doo Australia'
    },
    {
        id: 12,
        name: 'Pantalón',
        price: '19.990',
        category: 'Vestuario',
        stock: 20,
        img:'https://falabella.scene7.com/is/image/Falabella/882954543_2?wid=1004&hei=1000&crop=248,0,1004,1500&qlt=70' ,
        description: 'Pantalón Tiro Alto Mujer Basement'
    },
]

export const getProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}
export const getProductosBycategory = (category)=>{
    return new Promise((res, rej)=>
    setTimeout(()=>{
        res(productos.filter(prod=>prod.category===category))
    }, 500)
    )
}

export const getProductosById=(id)=>{
    return new Promise((res, rej)=>
    setTimeout(() => {
        res(productos.find(prod=>prod.id.toString()===id))
    }, 500)
    )
}