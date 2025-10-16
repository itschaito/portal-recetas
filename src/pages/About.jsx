import { Typography, Box, Link as MuiLink } from '@mui/material'

export default function About() {
    return (
        <Box textAlign="center">
            <Typography variant="h4" gutterBottom>Sobre el Portal</Typography>
            <Typography variant="body1" color="text.secondary">
                Este proyecto fue desarrollado como práctica de React y Material UI.
                Su objetivo es mostrar un catálogo visual de recetas internacionales.
            </Typography>
            <Typography sx={{ mt: 2 }}>
                Desarrollado por <MuiLink href="#" underline="hover">[Tu Nombre]</MuiLink>
            </Typography>
        </Box>
    )
}
