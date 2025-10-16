// src/components/NavBar.jsx (Revertido a diseño limpio, sin búsqueda)
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <AppBar 
            position="sticky" 
            sx={{ 
                backgroundColor: 'white', 
                boxShadow: 4, 
                borderBottom: '1px solid #eee'
            }}
        >
            <Toolbar sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                minHeight: 64 
            }}>
                {/* 1. Título y Logo */}
                <Box 
                    component={Link} 
                    to="/" 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        textDecoration: 'none', 
                        color: 'primary.main', 
                        '&:hover': { opacity: 0.9 },
                        flexShrink: 0
                    }}
                >
                    <RestaurantMenuIcon sx={{ mr: 1, fontSize: 28 }} />
                    <Typography 
                        variant="h6" 
                        sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
                    >
                        Libro de Recetas
                    </Typography>
                </Box>

                {/* 2. Botones de Navegación */}
                <Box>
                    <Button 
                        color={isActive('/') ? 'secondary' : 'primary'}
                        variant={isActive('/') ? 'contained' : 'text'}
                        component={Link} 
                        to="/"
                        sx={{ ml: 1, fontWeight: 600 }}
                    >
                        Inicio
                    </Button>
                    <Button 
                        color={isActive('/recetas') ? 'secondary' : 'primary'}
                        variant={isActive('/recetas') ? 'contained' : 'text'}
                        component={Link} 
                        to="/recetas"
                        sx={{ ml: 1, fontWeight: 600 }}
                    >
                        Recetas
                    </Button>
                    <Button 
                        color={isActive('/acerca') ? 'secondary' : 'primary'}
                        variant={isActive('/acerca') ? 'contained' : 'text'}
                        component={Link} 
                        to="/acerca"
                        sx={{ ml: 1, fontWeight: 600 }}
                    >
                        Acerca
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}