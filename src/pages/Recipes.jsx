// src/pages/Recipes.jsx (Modificado: Modal sin imagen, enfocado en lista)
import * as React from 'react';
import { Grid, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import FilterMenu from '../components/FilterMenu';
import allRecipes from '../data/recipes'; // Usa el archivo de datos centralizado

export default function Recipes() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [categoryFilter, setCategoryFilter] = React.useState('Todas');
    
    const [open, setOpen] = React.useState(false);
    const [selectedRecipe, setSelectedRecipe] = React.useState(null);

    const handleOpenModal = (recipe) => {
        setSelectedRecipe(recipe);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedRecipe(null); 
    };

    // Lógica de filtrado y búsqueda (Sin cambios aquí)
    const filteredRecipes = allRecipes.filter(recipe => {
        const categoryMatch = categoryFilter === 'Todas' || recipe.category === categoryFilter;
        const searchMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    // 💡 COMPONENTE DEL CONTENIDO DEL MODAL (¡MODIFICADO!)
    const RecipeModalContent = ({ recipe }) => (
        <DialogContent dividers>
            
            {/* 1. Sección de Ingredientes */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Ingredientes:
            </Typography>
            {/* Asumimos que 'recipe.ingredients' es un array de strings */}
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                {recipe.ingredients && recipe.ingredients.length > 0 ? (
                    recipe.ingredients.map((ing, idx) => (
                        <Typography component="li" key={idx} variant="body1" sx={{ mb: 0.5 }}>
                            {ing}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Lista de ingredientes no disponible.
                    </Typography>
                )}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* 2. Sección de Pasos */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Pasos de preparación:
            </Typography>
            <Box component="ol" sx={{ pl: 3 }}>
                {recipe.steps && recipe.steps.length > 0 ? (
                    recipe.steps.map((s, idx) => (
                        <Typography component="li" key={idx} variant="body1" sx={{ mb: 1 }}>
                            {s}
                        </Typography>
                    ))
                ) : (
                     <Typography variant="body2" color="text.secondary">
                        Pasos de preparación no disponibles.
                    </Typography>
                )}
            </Box>
        </DialogContent>
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h4" gutterBottom>Recetas Disponibles</Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                    <FilterMenu onFilterChange={setCategoryFilter} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <SearchBar onSearch={setSearchTerm} /> 
                </Grid>
            </Grid>

            {/* Cuadrícula de Recetas */}
            <Grid container spacing={3}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                            <RecipeCard recipe={recipe} onOpenModal={handleOpenModal} /> 
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center" color="text.secondary">
                            No se encontraron recetas que coincidan con los filtros.
                        </Typography>
                    </Grid>
                )}
            </Grid>

            {/* MODAL / DIALOG */}
            <Dialog 
                open={open} 
                onClose={handleCloseModal} 
                maxWidth="sm" 
                fullWidth
                aria-labelledby="recipe-modal-title"
            >
                {selectedRecipe && (
                    <>
                        <DialogTitle id="recipe-modal-title">
                            <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                {selectedRecipe.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {selectedRecipe.country} • {selectedRecipe.category}
                            </Typography>
                        </DialogTitle>
                        
                        <RecipeModalContent recipe={selectedRecipe} />

                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary" autoFocus>
                                Cerrar
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
}