// src/data/recipes.js

const recipes = [
    {
        id: 1,
        name: "Tacos al Pastor",
        country: "México",
        category: "Mexicana",
        image: "/images/tacos.jpg",
        description: "Carne de cerdo marinada con especias, cocinada en un trompo y servida en tortillas de maíz con piña, cebolla y cilantro.",
        steps: ['Marinar la carne', 'Cocinar en trompo', 'Cortar y servir con tortilla y toppings.'],
    },
    {
        id: 2,
        name: "Sushi Nigiri",
        country: "Japón",
        category: "Asiática",
        image: "/images/sushi.jpg",
        description: "Arroz de sushi prensado a mano con una loncha de pescado crudo encima.",
        steps: ['Preparar arroz de sushi', 'Cortar el pescado', 'Moldear el arroz y colocar el pescado.'],
    },
    {
        id: 3,
        name: "Pasta Carbonara",
        country: "Italia",
        category: "Italiana",
        image: "/images/pasta.jpg",
        description: "Plato romano de pasta con huevo, queso pecorino, panceta (o guanciale) y pimienta negra.",
        steps: ['Cocer la pasta', 'Freír la panceta', 'Mezclar con la salsa de huevo, queso y pimienta.'],
    },
    {
        id: 4,
        name: "Pad Thai",
        country: "Tailandia",
        category: "Asiática",
        image: "/images/pad-thai.jpg", // Asume que tienes más imágenes
        description: "Fideos de arroz salteados con camarones, tofu, cacahuetes, brotes de frijol y salsa de tamarindo.",
        steps: ['Remojar los fideos', 'Saltear ingredientes', 'Mezclar con salsa.'],
    }
    // Puedes agregar más recetas aquí
];

export default recipes;