const PRODUCTS = [
    {
        name:"Hamburguesa Clásica Bembos",
        title: "Hamburguesa Clásica a la Parrilla",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/l/clasica_1_8.webp",
        category: "hamburguesa",
        type:"carne",
        price: 16.90,
        details:"¿Ya probaste la deliciosa hamburguesa a la parrilla clásica Bembos? Con su delicioso sabor ahumado y consistencia característica, este clásico Bembos lleva como ingredientes:",
        ingredients:[
            'Mayonesa',
            'Tomate',
            'Lechuga'
        ],
    },
    {
        name:"Hamburguesa Cheese",
        title: "Hamburguesa a la Parrilla Con Queso",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/cheese_8.webp",
        category: "hamburguesa",
        type:"carne",
        price: 18.90,
        details:"Deliciosa Hamburguesa con Queso. ¡Una de las favoritas! Entre sus ingredientes encontramos:",
        ingredients:[
            'Hamburguesa de Carne a la Parrilla',
            'Queso Edam',
            'Mayonesa',
            'Tomate',
            'Lechuga'
        ],
    },
    {
        name:"Hamburguesa Bembos Queso Tocino",
        title: "Hamburguesa Bembos con queso y tocino",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/q/u/queso-tocino_5.webp",
        category: "hamburguesa",
        type:"carne",
        price: 19.90,
        details:"La Hamburguesa Bembos preferida por la mayoría: Una rica combinación de Hamburguesa con Queso y Doble Tocino, uno de los clásicos por excelencia.",
        ingredients:[
            'Hamburguesa a la parrilla',
            'Doble Tocino',
            'Queso Edam',
            'Mayonesa',
            'Lechuga',
            'Tomate'
        ],
    },
    {
        name:"Hamburguesa Royal",
        title: "Hamburguesa Royal con Queso y Huevo",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/r/o/royal_7.webp",
        category: "hamburguesa",
        type:"carne",
        price: 19.90,
        details:"¿Con antojo de una royal clásica? Disfruta de nuestra deliciosa Hamburguesa Royal Bembos.",
        ingredients:[
            'Hamburguesa de Carne a la parrilla',
            'Huevo',
            'Queso Edam',
            'Mayonesa',
            'Lechuga',
            'Tomate'
        ],
        
    },
    {
        name:"Hamburguesa Churrita",
        title: "Hamburguesa Churrita",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/churrita.webp",
        category: "hamburguesa",
        type:"carne",
        price: 20.90 ,
        details:"¡Disfruta de una de la famosa Hamburguesa Churrita Bembos, la más jugosas hamburguesas de carne a la parrilla! Acompañada de mayonesa de chimichurri y el característico sabor y aroma a parrilla, es toda una experiencia probarla.",
        ingredients:[
           "Hamburguesa de carne a la parrilla",
           "Tocino",
           "Papas al hilo",
           "Mayonesa de Chimichurri"
        ],
    },
    {
        name:"Hamburguesa A lo Pobre",
        title: "Hamburguesa a Lo Pobre con Plátano y Huevo Frito",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/-/a-lo-pobre_10.webp",
        category: "hamburguesa",
        type:"carne",
        price: 20.90 ,
        details:"¡Prueba la Bembos más peruana de todas! Disfruta de tu Hamburguesa a lo Pobre preferida, hecha en parrilla y con ese sabor casero que la caracteriza.",
        ingredients:[
           "Hamburguesa de Carne",
           "Huevo Frito",
           "Plátano Frito",
           "Mayonesa",
           "Tomate",
           "Cebolla Blanca"
        ],
    },
    {
        name:"Alemana",
        title: "Alemana",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-alemana.webp",
        category: "hamburguesa",
        type:"carne",
        price: 20.90 ,
        details:"Hamburguesa a la parrilla, mayonesa Bembos, papas al hilo, pepinillo dulce y salsa Chucrut.",
        ingredients:[
           
        ],
    },
    {
        name:"Queabuso",
        title: "Hamburguesa Queabuso",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-la-sin-nombre.webp",
        category: "hamburguesa",
        type:"carne",
        price: 20.90 ,
        details:"Descubre el sabor inigualable de nuestra Hamburguesa Queabuso la cual te sorprenderá con los siguientes ingredientes:",
        ingredients:[
           "Hamburguesa de carne a la parrilla",
           "Tocino",
           "Papas al hilo",
           "Mayonesa de Chimichurri"
        ],
    },
    {
        name:"Hamburguesa Parrillera",
        title: "Hamburguesa Parrillera Con Chorizo y Chimichurri",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/parrillera_7.webp",
        category: "hamburguesa",
        type:"carne",
        price: 23.90 ,
        details:"Prueba nuestra deliciosa Hamburguesa Parrillera Bembos con Chorizo y Chimichurri, pensada para los amantes de la carne. Con el característico aroma a parrilla, incluye entre sus ingredientes:",
        ingredients:[
           "Hamburguesa de Carne",
           "Chorizo",
           "Tomate",
           "Salsa chimichurri",
           "Mostaza"
        ],
    },
    {
        name:"Hamburguesa La Carretillera",
        title: "Hamburguesa de carne con pollo deshilachado: La Carretillera",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/a/carretillera_4.webp",
        category: "hamburguesa",
        type:"carne",
        price: 23.90 ,
        details:"Deliciosa hamburguesa de carne a la parrilla con pollo deshilachado, salsa tártara y papitas al hilo.",
        ingredients:[
           
        ],
    },
    {
        name:"Hamburguesa Extrema",
        title: "Hamburguesa doble carne a la parrilla con queso Bembos Extrema",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/e/x/extrema_9.webp",
        category: "hamburguesa",
        type:"carne",
        price: 25.90 ,
        details:"Te presentamos a la más contundente de todas: La Bembos Extrema. La hamburguesa de doble carne a la parrilla que entre sus ingredientes encontramos:",
        ingredients:[
            "Doble carne a la parrila",
            "Queso Edam",
            "Tocino",
            "Tomate",
            "Lechuga",
            "Mayonesa"
        ],
    },
    {
        name:"Bembroster clasica",
        title: "Bembroster clasica",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/e/bembroster-clasica_1_1.webp",
        category: "hamburguesa",
        type:"pollo",
        price: 12.90 ,
        details:"Sandwich regular de pollo crocante, mayonesa, lechuga y tomate. Mayonesa x1, Ketchup x1, Ají Bembos x1",
        ingredients:[
           
        ],
    },
    {
        name:"Bembroster Tártara",
        title: "Sandwich de Pollo Crujiente Bembroster con Tártara",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/e/bembroster-tartara_4.webp",
        category: "hamburguesa",
        type:"pollo",
        price: 14.90 ,
        details:"Nuestro delicioso sandwich de pollo con salsa tártara Bembroster. Contiene:",
        ingredients:[
           "Pollo broaster crujiente",
           "Papas fritas",
           "Lechuga"
        ],
    },
    {
        name:"Bembroster Queso Tocino",
        title: "Sandwich de Pollo Bembroster con Queso y Tocino",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/e/bembroster-queso-tocino.webp",
        category: "hamburguesa",
        type:"pollo",
        price: 15.90 ,
        details:"Prueba nuestro delicioso y crocante sandwich de pollo Bembroster. Viene acompañada de:",
        ingredients:[
           "Queso Edam",
           "Tocino",
           "Mayonesa",
           "Lechuga y tomate"
        ],
    },
    {
        name:"Bembos Chicken Grill",
        title: "Sandwich de pollo a la parrilla",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/chicken-girll.webp",
        category: "hamburguesa",
        type:"pollo",
        price: 16.90 ,
        details:"Delicioso Sandwich de Pechuga de pollo a la parrilla. Entre sus ingredientes encontramos:",
        ingredients:[
           "Pollo marinado a la parrilla",
           "Lechuga",
           "Tomate",
           "Mayonesa"
        ],
    },
    {
        name:"Loncherita básica de pollo",
        title: "Loncherita básica de pollo",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/o/loncherita-basica-pollo.webp",
        category: "loncherita",
        type:"combo",
        price: 10.90 ,
        details:"1 Hamburguesa de pollo regular, 1 Papa Regular y 1 Frugo",
        ingredients:[
           
        ],
    },
    {
        name:"Loncherita Básica",
        title: "Loncherita Básica",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/o/loncherita-basica_1.webp",
        category: "loncherita",
        type:"combo",
        price: 10.90 ,
        details:"1 Hamburguesa básica regular, 1 Papa Regular y 1 Frugo",
        ingredients:[
           
        ],
    },
    {
        name:"Loncherita Nuggets",
        title: "Loncherita Nuggets",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/o/loncherita-nuggets_1.webp",
        category: "loncherita",
        type:"combo",
        price: 10.90 ,
        details:"Nuggets x4, 1 Papa Regular y 1 Frugo",
        ingredients:[
           
        ],
    },
    {
        name:"Papas Inka Chips",
        title: "Papas Inka Chips",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-inka-chips-nueva.webp",
        category: "complemento",
        type:"papas",
        price: 3.00 ,
        details:"Crujientes papas fritas con sabor a hamburguesa Bembos a la parrilla! Presentación de 30gr y 120 gr.",
        ingredients:[
           
        ],
    },
    {
        name:"Papas Fritas Bembos",
        title: "Papas Fritas Bembos",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas-fritas_2.webp",
        category: "complemento",
        type:"papas",
        price: 4.90 ,
        details:"¡Nuestras crujientes papas fritas! No olvides agrandarlas con las opciones debajo:",
        ingredients:[
           
        ],
    },
    {
        name:"Chicken nuggets",
        title: "Chicken nuggets",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nuggets-base.jpg",
        category: "complementos",
        type:"nuggets",
        price: 10.50 ,
        details:"Nuggets",
        ingredients:[
           
        ],
    },
    {
        name:"Cheese Fingers",
        title: "Cheese Fingers",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/cheese-fingers-base_3.jpg",
        category: "complementos",
        type:"cheese",
        price: 11.90 ,
        details:[
            "Perfectos para acompañar tu hamburguesa a la parrilla :",
            "Prueba unos ricos deditos de queso: En presentación de 4, 6 o 9 Cheese Fingers.",
            "Trozos alargados de queso mozzarella fritos para acompañar tu hamburguesa favorita."
        ],
        ingredients:[
           
        ],
    },
    {
        name:"Family Box Piqueo",
        title: "Family Box Piqueo",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-piqueo-nuevo-abril.webp",
        category: "complementos",
        type:"piqueo",
        price: 22.90 ,
        details:"Nugget x 6 +Cheese finger x 4 + papa menú",
        ingredients:[
           
        ],
    },
    {
        name:"Agua San Luis",
        title: "Agua San Luis",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/a/g/agua-san-luis.webp",
        category: "bebida",
        type:"agua",
        price: 4.90 ,
        details:"Si quieres un combo más saludable Bembos te da la opción de agregar como bebida el Agua mineral San Luis de 625 ml.",
        ingredients:[
           
        ],
    },
    {
        name:"Coca Cola Original 500 ml",
        title: "Coca Cola Sabor Original 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/coca-cola-original_3.webp",
        category: "bebida",
        type:"coca-cola",
        price: 5.90 ,
        details:"Acompaña tu combo con Coca Cola sabor original de 500 ml.",
        ingredients:[
           
        ],
    },
    {
        name:"Coca Cola Sin Azúcar 500 ml",
        title: "Coca Cola Sin Azúcar 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/coca-cola-sin-azucar_3.webp",
        category: "bebida",
        type:"coca-cola-light",
        price: 5.90 ,
        details:"Si quieres hacer tu combo más saludable Bembos te da la opción de agregar como bebida Coca Cola Sin Azúcar de 500 ml.",
        ingredients:[
           
        ],
    },
    {
        name:"Inca Kola Sabor Original 500 ml",
        title: "Inca Kola Sabor Original 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/i/n/inca-kola-original_3.webp",
        category: "bebida",
        type:"inca-kola",
        price: 5.90 ,
        details:"Inca Kola Sabor Original 500 ml",
        ingredients:[
           
        ],
    },
    {
        name:"Sprite Sabor Original 500 ml",
        title: "Sprite Sabor Original 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/s/p/sprite_4.webp",
        category: "bebida",
        type:"sprite",
        price: 5.90 ,
        details:"Sprite Sabor Original 500 ml",
        ingredients:[
           
        ],
        
    },
    {
        name:"Fanta Sabor Original 500 ml",
        title: "Fanta Sabor Original 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/f/a/fanta_3.webp",
        category: "bebida",
        type:"fanta",
        price: 5.90 ,
        details:"Acompaña tu combo con Fanta Sabor Original de 500 ml.",
        ingredients:[
           
        ],
        
    },
    {
        name:"Inca kola Sin Azúcar 500 ml",
        title: "Inca kola Sin Azúcar 500 ml",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/i/n/inca-kola-sin-azucar_3.webp",
        category: "bebida",
        type:"fanta",
        price: 5.90 ,
        details:"Inca kola Sin Azúcar 500 ml",
        ingredients:[
           
        ],
        
    },
    {
        name:"Helado Mini Princesa",
        title: "Helado Mini Princesa",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/i/n/inca-kola-sin-azucar_3.webp",
        category: "helado",
        type:"princesa",
        price: 5.90 ,
        details:"Helado Mini Princesa",
        ingredients:[
           
        ],
        
    },
    {
        name:"Helado Mini Princesa",
        title: "Helado Mini Princesa",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/m/i/mini-princesa_3.webp",
        category: "helado",
        type:"princesa",
        price: 4.90 ,
        details:"Helado Mini Princesa",
        ingredients:[
           
        ],
        
    },
    {
        name:"Choco Mani",
        title: "Choco Mani",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/choco-mani-nuevo-mayo-800x80.webp",
        category: "helado",
        type:"princesa",
        price: 13.90 ,
        details:"Helado de vainilla con maní, cobertura de chocolate y fudge.",
        ingredients:[
           
        ],
        
    },
    {
        name:"Helado Princesa",
        title: "Helado Princesa",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-princesa-nuevo-abril.webp",
        category: "helado",
        type:"princesa",
        price: 13.90 ,
        details:"Helado de vainilla con trozos de chocolate princesa y fudge.",
        ingredients:[
           
        ],
        
    },
    {
        name:"Compartir Futbolero",
        title: "Compartir Futbolero",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-compartir-futbolero.webp",
        category: "combo",
        type:"hamburguesa",
        price: 59.90 ,
        details:"3 A lo Pobre regulares, 3 Clásicas regulares, 1 papa familiar",
        ingredients:[
           
        ],
        
    },
    {
        name:"Combo A lo pobre",
        title: "Combo A lo pobre",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-combo-a-lo-pobre-oct.webp",
        category: "combo",
        type:"hamburguesa",
        price: 14.90 ,
        details:"1 A lo pobre mediana + 1 Inca Kola",
        ingredients:[
           
        ],
        
    },
    {
        name:"Dúo Extrema",
        title: "Dúo Extrema",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-duo-extrema.webp",
        category: "combo",
        type:"hamburguesa",
        price: 29.80 ,
        details:"2 Extrema regulares + 2 papas regulares",
        ingredients:[
           
        ],
        
    },
    {
        name:"Martes y Jueves",
        title: "Martes y Jueves",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-martes-jueves.jpg",
        category: "combo",
        type:"hamburguesa",
        price: 32.90 ,
        details:"1 Clásica regular, 1 Cheese regular, Nuggetsx6, 2 papas regulares.",
        ingredients:[
           
        ],
        
    },
    {
        name:"Dúo Clásico Con Antojito",
        title: "Dúo Clásico Con Antojito",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-clasica-mini-princesa.webp",
        category: "combo",
        type:"hamburguesa",
        price: 26.90 ,
        details:"2 Clásicas regulares, 2 papas regulares, 2 helados Mini Princesa de vainilla",
        ingredients:[
           
        ],
        
    },
    {
        name:"Extremadamente Cheesy",
        title: "Extremadamente Cheesy",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-extremadamente-cheesy-bb.webp",
        category: "combo",
        type:"hamburguesa",
        price: 57.90 ,
        details:"2 Extremas regulares, 2 Cheese regulares, 4 papas regulares",
        ingredients:[
           
        ],
        
    },
    {
        name:"Combo Criollazo",
        title: "Combo Criollazo",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-combo-churrita-botella-2.webp",
        category: "combo",
        type:"hamburguesa",
        price: 27.90 ,
        details:"Churrita mediana, papa mediana y gaseosa personal.",
        ingredients:[
           
        ],
        
    },
    {
        name:"Dupla Power",
        title: "Dupla Power: Clásica Mediana + A lo pobre Mediana + Papas + Gaseosa",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/d/u/dupla-power.webp",
        category: "combo",
        type:"hamburguesa",
        price: 35.90 ,
        details:"Todo lo bueno es mejor dos veces! Prueba tus combos de hamburguesas Bembos preferidas en combo con la Dupla Power.",
        ingredients:[
           "Hamburguesa Clásica Bembos a la Parrilla Mediana",
           "Hamburguesa a lo Pobre Bembos Mediana",
           "2 Papas Regulares",
           "2 Gaseosas de 500ml"
        ],
        
    },
    {
        name:"Dupla perfecta",
        title: "Dupla perfecta: Hamburguesa royal y hamburguesa con queso",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/d/u/dupla-perfecto.webp",
        category: "combo",
        type:"hamburguesa",
        price: 28.90 ,
        details:"Disfruta de una hamburguesa a la parrilla con queso mediana y una hamburguesa a la parrilla royal regular, acompañadas de dos papas fritas medianas.",
        ingredients:[
          
        ],
        
    },
    {
        name:"Trio Power",
        title: "Trio power: 2 hamburguesas clásicas y 1 a lo pobre + papas",
        img: "https://d31npzejelj8v1.cloudfront.net/media/catalog/product/t/r/trio-power_3.webp",
        category: "combo",
        type:"hamburguesa",
        price: 28.90 ,
        details:"El combo perfecto para compartir, date el gusto con:",
        ingredients:[
          "2 hamburguesas a la parrilla clásicas con tomate y lechuga",
          "Una hamburguesa a lo pobre (con huevo y plátano frito)",
          "3 papas fritas medianas"
        ],
        
    },
];

export default PRODUCTS