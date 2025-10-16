import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
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
                <Button size="small" component={Link} to={`/recetas/${recipe.id}`}>
                    Ver Receta
                </Button>
            </CardActions>
        </Card>
    )
}
