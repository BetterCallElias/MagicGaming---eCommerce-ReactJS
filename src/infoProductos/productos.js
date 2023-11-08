const productos = [

    {
        id: 1,
        title: "Placa de Video nVidia RTX 4090",
        description: "NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, productividad sin precedentes y nuevas formas de crear. Está impulsada por la arquitectura NVIDIA Ada Lovelace y viene con 24 GB de memoria G6X para brindar la mejor experiencia para jugadores y creadores.",
        stock: 10,
        type: "cpusygpus",
        image: "https://i.blogs.es/59bfa7/nvidiageforcertx4090-ap/1366_2000.jpeg",
        price: 2885400,
    },

    {
        id: 2,
        title: "Placa de Video nVidia GPU RTX 4080",
        description: "NVIDIA® GeForce RTX™ 4080 ofrece el ultra rendimiento y las funciones que demandan los jugadores y creadores entusiastas. Haz que tus juegos y proyectos creativos cobren vida con el ray tracing y los gráficos basados ​​en IA. Está impulsada por la arquitectura ultra eficiente NVIDIA Ada Lovelace y 16 GB de memoria G6X superrápida.",
        stock: 20,
        type: "cpusygpus",
        image: "https://i.blogs.es/92cc42/geforcertx4080-ap/1366_2000.jpeg",
        price: 1899000,
    },

    {
        id: 3,
        title: "Placa de Video nVidia GPU RTX 4070",
        description: "Prepárate para jugar y crear de forma estelar con NVIDIA® GeForce RTX™ 4070 Ti y RTX 4070. Se diseñó con la arquitectura NVIDIA Ada Lovelace ultraeficiente. Experimenta el ray tracing rápido, el rendimiento acelerado por IA con DLSS 3, nuevas formas de crear y mucho más.",
        stock: 30,
        type: "cpusygpus",
        image: "https://i.blogs.es/0da044/geforcertx4070-ap/1366_2000.jpeg",
        price: 1300000,
    },

    {
        id: 4,
        title: "Placa de Video nVidia GPU RTX 4060",
        description: "Juega, Transmite, Crea. La GeForce RTX 4060 Ti te permite ejecutar las últimas aplicaciones de juegos con la arquitectura ultraeficiente NVIDIA Ada Lovelace. Experimenta juegos inmersivos acelerados por IA con ray tracing y DLSS 3, Impulsando tu proceso creativo y productividad con NVIDIA Studio.",
        stock: 40,
        type: "cpusygpus",
        image: "https://http2.mlstatic.com/D_NQ_NP_697024-MLA71329704410_082023-O.webp",
        price: 670000,
    },

    {
        id: 5,
        title: "Procesador Intel Core i9-14900K",
        description: "Ocho núcleos de alto rendimiento y dieciséis hilos a 3,2 GHz-5,8 GHz, modo normal y turbo. Hasta 6 GHz con la tecnología Intel Thermal Velocity Boost. Dieciséis núcleos de alta eficiencia a 2,4 GHz-4,4 GHz, modo normal y turbo. Puede manejar 32 hilos de forma simultánea.",
        stock: 20,
        type: "cpusygpus",
        image: "https://c1.neweggimages.com/productimage/nb640/19-118-462-01.jpg",
        price: 1420000,
    },

    {
        id: 6,
        title: "Procesador AMD Ryzen™ 9 7900",
        description: "Juega y crea con una velocidad bestial y la mejor eficiencia energética. Estamos ante un procesador que viene totalmente desbloqueado, se puede overclockear y trabaja siempre en silencio y refrigerado con el ventilador AMD Wraith Prism con iluminación LED RGB que incluye de fábrica.",
        stock: 20,
        type: "cpusygpus",
        image: "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-7900-cvideo-ccooler-am5-0.jpg",
        price: 520000,
    },

    {
        id: 7,
        title: "Memoria Kingston FURY Beast 32 GB DDR5",
        description: "La memoria Kingston FURY™ Beast DDR5 la memoria trae la tecnología más novedosa y avanzada para las plataformas de juego de nueva generación. Empujando todavía más allá los límites de velocidad, capacidad y fiabilidad, DDR5 llega con multitud de novedades y mejoras, como el ECC (código de corrección de errores) interno (ODECC) para mantener la estabilidad a velocidades extremas, dobles subcanales de 32 bits para incrementar la eficacia, y un circuito integrado de gestión de alimentación dentro del modulo (PMIC) para inyectar energía cuando más se la necesita.",
        stock: 100,
        type: "componentes",
        image: "https://www.muycomputer.com/wp-content/uploads/2021/10/Kingston-FURY-Beast-DDR5-e1635406043175.jpg",
        price: 130000,
    },

    {
        id: 8,
        title: "Disco Solido 1tb M.2 Kingston Nvme Pcie 4.0",
        description: "Líder en el mercado de tecnologías, Kingston ofrece una gran variedad de dispositivos de almacenamiento. Su calidad y especialización en discos de estado sólido (SSD), de memoria y de USB cifrados la convierten una de las opciones más elegidas en el mercado internacional.",
        stock: 80,
        type: "componentes",
        image: "https://www.qloud.com.ar/SITES/IMG/noxie-store-08-2022/274_14-10-2022-02-10-24-solido-kingston-1tb-nvme-3.jpg",
        price: 70000,
    },

    {
        id: 9,
        title: "Silla de escritorio Imback IBK-G0001 gamer",
        description: "La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla Imback, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!",
        stock: 30,
        type: "accesesorios",
        image: "https://www.laeditorial.com.ar/28754-large_default/silla-gamer-premium-home-azul-139-00439.jpg",
        price: 90000,
    },

    {
        id: 10,
        title: "Auriculares HyperX Cloud II Wireless",
        description: "Sumérgete en el mundo de los videojuegos con los auriculares gamer inalámbricos HyperX Cloud II Wireless en color rojo. Diseñados para brindarte una experiencia de audio inmersiva, estos auriculares over-ear cuentan con una unidad de diafragma de 53 mm que te ofrece un sonido nítido y potente. Además, su diseño cómodo y ajustable te permite disfrutar de largas sesiones de juego sin molestias.",
        stock: 50,
        type: "accesorios",
        image: "https://www.mastecnologia.com.ar/images/productos/18996.png",
        price: 122000,
    },

    {
        id: 11,
        title: "Mouse Logitech G502 Hero Gaming",
        description: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
        stock: 80,
        type: "accesorios",
        image: "https://outtec.com.ar/wp-content/uploads/2020/09/g502_1.png",
        price: 50000,
    },

    {
        id: 12,
        title: "Teclado gamer HyperX Alloy Origins",
        description: "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.        ",
        stock: 80,
        type: "accesorios",
        image: "https://axa.com.ar/webaxa/26628-medium_default/teclado-mecanico-mini-hyperx-alloy-origins-65.jpg",
        price: 80000,
    },
]

export default productos;