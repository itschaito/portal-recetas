import { useParams, Link } from 'react-router-dom'
import { Box, Typography, Button, Divider } from '@mui/material'

const recipes = [
    { id: 1, name: 'Tacos al Pastor', image: '/images/tacos.jpg', country: 'México', steps: ['Marinar la carne', 'Cocinar y servir.'] },
    { id: 2, name: 'Sushi', image: '/images/sushi.jpg', country: 'Japón', steps: ['Preparar arroz', 'Enrollar con pescado.'] },
    { id: 3, name: 'Pasta Carbonara', image: '/images/pasta.jpg', country: 'Italia', steps: ['Cocer pasta', 'Mezclar con huevo y queso.'] }
]

export default function RecipeDetail() {
    const { id } = useParams()
    const recipe = recipes.find(r => r.id === parseInt(id))

    if (!recipe) return <Typography>No se encontró la receta.</Typography>

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', maxWidth: 600, borderRadius: '10px' }} />
            <Typography variant="h6" mt={3}>Origen: {recipe.country}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Pasos:</Typography>
            <ul>
                {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
            <Button variant="outlined" component={Link} to="/recetas" sx={{ mt: 2 }}>
                ← Volver
            </Button>
        </Box>
    )
}
