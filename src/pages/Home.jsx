import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h3" gutterBottom>Recetas del Mundo</Typography>
            <Typography variant="h6" color="text.secondary">
                Explora sabores internacionales y aprende a cocinar platos de distintas culturas.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/recetas"
                sx={{ mt: 3 }}
            >
                Ver Recetas
            </Button>
        </Box>
    )
}
