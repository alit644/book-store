import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import { Axios } from "../Api";
import { SerachContext } from "../context/search";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ width, display }) => {
  // const [search, setSearch] = useState("");
  const [filterdSearch, setFilterdSearch] = useState([]);

  const searchContext = useContext(SerachContext);
  const searchValue = searchContext.searchValue;
  const setSearchValue = searchContext.setSearchValue;
  searchContext.setSearch(filterdSearch);

  const searchInput = async () => {
    try {
      const { data } = await Axios.get(
        `products?populate=*&filters[title][$contains]=${searchValue}`
      );
      setFilterdSearch(data);
    } catch (error) {
      console.log(error);
    }
  };
  // تأخير عميلة البحث
  useEffect(() => {
    const delay = setTimeout(() => {
      searchValue.length > 0 && searchInput();
    }, 900);
    return () => clearTimeout(delay);
  }, [searchValue]);

  // handler changes 
  const handelChange = useCallback((e) => {
    setSearchValue(e.target.value)
  })

  return (
    <Stack w={width} display={display} m={{ base: "20px", md: "0" }}>
      <InputGroup borderRadius={"12px"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="search"
          placeholder="ابحث عن اسم الكتاب "
          onChange={handelChange }
        />
      </InputGroup>
    </Stack>
  );
};

export default memo(SearchInput);
