// src/components/RecipeCard.jsx (Modificado)
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'

// La prop onOpenModal es una nueva función que recibiremos de Recipes.jsx
export default function RecipeCard({ recipe, onOpenModal }) {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="180"
                image={recipe.image}
                alt={recipe.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {recipe.country} — {recipe.category}
                </Typography>
            </CardContent>
            <CardActions>
                {/* ¡IMPORTANTE! Cambiamos el Link por una llamada a la función
                  que abre el modal y le pasamos la receta.
                */}
                <Button 
                    size="small" 
                    onClick={() => onOpenModal(recipe)} // Llama a la función
                >
                    Ver Receta
                </Button>
            </CardActions>
        </Card>
    )
}