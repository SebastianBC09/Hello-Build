import { FC, useState } from "react";
import { Search } from "@mui/icons-material";
import { InputBase, InputBaseProps } from "@mui/material";
interface SearchBar{
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBar> = ({onSearch, placeholder}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange: InputBaseProps['onChange'] = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onSearch(newValue);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Search />
      <InputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={onChange}
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
