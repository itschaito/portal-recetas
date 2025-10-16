// src/components/FilterMenu.jsx
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { useState } from 'react';

// Se asumen las categorías de tu archivo recipes.js, más "Todas"
const categories = ['Todas', 'Mexicana', 'Asiática', 'Italiana', 'Postres', 'Plato fuerte', 'Plato principal'];

export default function FilterMenu({ onFilterChange }) {
    const [category, setCategory] = useState('Todas');

    const handleChange = (event) => {
        const newCategory = event.target.value;
        setCategory(newCategory);
        if (onFilterChange) {
            onFilterChange(newCategory);
        }
    };

    return (
        <Box sx={{ minWidth: 120, mb: 3 }}>
            <FormControl fullWidth>
                <InputLabel id="category-filter-label">Categoría</InputLabel>
                <Select
                    labelId="category-filter-label"
                    value={category}
                    label="Categoría"
                    onChange={handleChange}
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}