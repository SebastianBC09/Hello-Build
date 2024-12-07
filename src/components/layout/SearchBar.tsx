import { FC } from "react";
import { Search } from "@mui/icons-material";
import { InputBase, InputBaseProps } from "@mui/material";
import { useStore } from '../../store/useStore';

const SearchBar: FC = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange: InputBaseProps['onChange'] = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Search />
      <InputBase
        placeholder="Search repositories..."
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={handleChange}
        sx={{
          paddingLeft: 2,
          width: "12ch",
          transition: "width 0.3s ease",
          "&:focus": {
            width: "20ch",
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
