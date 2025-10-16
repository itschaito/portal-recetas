import { Box, Typography, Container, Divider } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Footer() {
    return (
        <Box 
            component="footer"
            sx={{
                // Fondo un poco más oscuro o un color sutil del tema
                backgroundColor: (theme) => theme.palette.grey[50], 
                mt: 5, // Margen superior para separarlo del contenido
                py: 4, // Padding vertical
                borderTop: '1px solid',
                borderColor: (theme) => theme.palette.grey[200], // Borde sutil
                width: '100%',
            }}
        >
            <Container maxWidth="lg">
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        textAlign: 'center' 
                    }}
                >
                    {/* Sección de Logo y Título */}
                    <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                         <RestaurantMenuIcon color="primary" sx={{ mr: 1 }} />
                        <Typography 
                            variant="h6" 
                            color="primary.main" 
                            sx={{ fontWeight: 600 }}
                        >
                            Libro de Recetas
                        </Typography>
                    </Box>

                    {/* Línea Divisoria */}
                    <Divider sx={{ width: '50%', my: 2 }} />

                    {/* Texto de Copyright y Tecnología */}
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Portal de Recetas del Mundo.
                    </Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5 }}>
                        Diseñado con React y Material UI. Desarrollado por Chai
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}