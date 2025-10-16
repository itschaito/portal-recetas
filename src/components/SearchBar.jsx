// src/components/SearchBar.jsx
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
    const handleSearchChange = (event) => {
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <Box sx={{ mb: 3 }}>
            <TextField
                fullWidth
                label="Buscar por nombre de receta"
                variant="outlined"
                onChange={handleSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}