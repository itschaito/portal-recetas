import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h3" color="error">404</Typography>
            <Typography variant="h5" gutterBottom>Página no encontrada</Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Volver al inicio
            </Button>
        </Box>
    )
}
