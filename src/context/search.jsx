import { createContext, memo, useState } from "react";

export const SerachContext = createContext(null)

// eslint-disable-next-line react/prop-types
const SearchProvider = ({children}) => {
  const [search, setSearch] = useState([])
  const [searchValue, setSearchValue] = useState('')

  return <SerachContext.Provider value={{search, setSearch , searchValue,setSearchValue}}>{children}</SerachContext.Provider>
}

export default memo(SearchProvider);


