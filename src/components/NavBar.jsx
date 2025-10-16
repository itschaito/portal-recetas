import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Libro de Recetas</Typography>
                <div>
                    <Button color="inherit" component={Link} to="/">Inicio</Button>
                    <Button color="inherit" component={Link} to="/recetas">Recetas</Button>
                    <Button color="inherit" component={Link} to="/acerca">Acerca</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
