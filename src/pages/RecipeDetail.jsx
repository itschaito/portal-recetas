import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Divider } from '@mui/material';
import allRecipes from '../data/recipes'; // Importación de los datos centralizados

export default function RecipeDetail() {
    const { id } = useParams();
    // Buscar la receta usando el ID (asegurando que sea un número entero)
    const recipe = allRecipes.find(r => r.id === parseInt(id));

    if (!recipe) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h5" color="text.secondary">
                    No se encontró la receta solicitada.
                </Typography>
                <Button variant="contained" component={Link} to="/recetas" sx={{ mt: 2 }}>
                    Volver a Recetas
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
            <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
            
            <Box sx={{ mb: 3 }}>
                <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: '10px' }} 
                />
            </Box>

            <Typography variant="body1" color="text.primary" sx={{ mb: 3, fontStyle: 'italic' }}>
                {recipe.description} 
            </Typography>

            <Typography variant="h6" mt={3}>
                Detalles:
            </Typography>
            <Typography variant="body1" color="text.secondary">
                País de origen: **{recipe.country}**
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Categoría: **{recipe.category}**
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>Pasos de preparación:</Typography>
            <Box component="ol" sx={{ pl: 3 }}>
                {/* Asegúrate de que steps exista antes de mapear */}
                {recipe.steps && recipe.steps.map((s, idx) => (
                    <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                        {s}
                    </Typography>
                ))}
            </Box>
            
            <Button variant="outlined" component={Link} to="/recetas" sx={{ mt: 4 }}>
                ← Volver al Listado
            </Button>
        </Box>
    );
}