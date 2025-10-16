import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box sx={{
            textAlign: 'center',
            py: 2,
            backgroundColor: '#f5f5f5',
            borderTop: '1px solid #ddd'
        }}>
            <Typography variant="body2" color="text.secondary">
                © 2025 Portal de Recetas del Mundo — Hecho con React y MUI
            </Typography>
        </Box>
    )
}
