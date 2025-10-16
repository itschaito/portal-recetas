import { Typography, Box, Link as MuiLink, Container, Divider } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function About() {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
            <Box 
                textAlign="center" 
                sx={{ 
                    p: 4, 
                    borderRadius: '12px', 
                    boxShadow: 3, 
                    backgroundColor: 'background.paper' 
                }}
            >
                <LocalLibraryIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Nuestra Misión
                </Typography>
                
                <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mt: 2 }}>
                    Somos la plataforma dedicada a elevar la experiencia culinaria de cada usuario, desde el cocinero novato hasta el chef experimentado.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
                    En **Libro de Recetas**, creemos que la cocina es un arte global sin fronteras. Nuestro objetivo principal es **mejorar la experiencia del chef** digital, proporcionando un catálogo de recetas internacionales que son fáciles de buscar, filtrar y entender, eliminando la complejidad y dejando solo el placer de crear.
                </Typography>

                <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
                    Cada receta es cuidadosamente curada para asegurar claridad y precisión. Nuestro diseño, impulsado por React y Material UI, garantiza que la búsqueda y el seguimiento de los pasos sean una experiencia fluida, ya sea que estés planeando una cena o descubriendo un nuevo sabor del mundo.
                </Typography>

                <Divider sx={{ my: 4 }} />
                
                <Typography variant="body2" color="text.disabled">
                    Este portal fue desarrollado como un proyecto práctico de aprendizaje utilizando tecnologías modernas.
                </Typography>
                <Typography sx={{ mt: 1 }}>
                    Desarrollado por <MuiLink href="#" underline="hover" color="primary">[Tu Nombre]</MuiLink>
                </Typography>

            </Box>
        </Container>
    );
}