import { FC } from "react";
import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";

const SearchBar: FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Search />
      <InputBase
        placeholder="Buscar…"
        inputProps={{ "aria-label": "search" }}
        value
        onChange
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
