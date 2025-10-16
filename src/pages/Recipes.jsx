import { Grid, Typography } from '@mui/material'
import RecipeCard from '../components/RecipeCard'

const recipes = [
    {
        id: 1,
        name: "Tacos al Pastor",
        country: "México",
        category: "Plato fuerte",
        image: "/images/tacos.jpg"
    },
    {
        id: 2,
        name: "Sushi",
        country: "Japón",
        category: "Plato principal",
        image: "/images/sushi.jpg"
    },
    {
        id: 3,
        name: "Pasta Carbonara",
        country: "Italia",
        category: "Plato fuerte",
        image: "/images/pasta.jpg"
    }
]

export default function Recipes() {
    return (
        <>
            <Typography variant="h4" gutterBottom>Recetas Disponibles</Typography>
            <Grid container spacing={3}>
                {recipes.map(recipe => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
