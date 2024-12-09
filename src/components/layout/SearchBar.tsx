import { FC } from "react";
import { Search } from "@mui/icons-material";
import { InputBase, InputBaseProps, Paper } from "@mui/material";
import { useStore } from '../../store/useStore';

const SearchBar: FC = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange: InputBaseProps['onChange'] = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 2,
        py: 0.5,
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2
      }}
    >
      <Search sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
      <InputBase
        placeholder="Search repositories..."
        value={searchQuery}
        onChange={handleChange}
        sx={{
          ml: 2,
          color: '#fff',
          '& input::placeholder': {
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: 1
          },
          width: "12ch",
          transition: "width 0.3s ease",
          "&:focus-within": {
            width: "20ch",
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;
