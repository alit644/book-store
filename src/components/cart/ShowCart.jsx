/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, useColorModeValue } from "@chakra-ui/react";
import CartBox from "./CartBox";
import { useGetbooksQuery } from "../../app/features/categories/categories";
import CategorySkeleton from "../CategoryBox/CategorySkeleton";
import { useContext } from "react";
import { SerachContext } from "../../context/search";

const ShowCart = () => {
  const bg = useColorModeValue("#F1F1F1", "gray.900");
  const searchContext = useContext(SerachContext);
  const searchvalue = searchContext.searchValue;
  const filterSearchData = searchContext.search;

  const { isLoading, data } = useGetbooksQuery();
  if (isLoading)
    return (
      <CategorySkeleton
        w={"130px"}
        h={"182px"}
        direction={"row"}
        flexWrap={"wrap"}
      />
    );


  const filterData =
    searchvalue.length > 0
      ? searchvalue === ""
        ? data.data
        : filterSearchData.data
      : data.data;

  const showBooks =
    data.data  && filterData !== undefined ? (
      filterData.map((item, i) => <CartBox id={item.id} key={i} {...item} />)
    ) : (
      <h4>لا يوجد بيانات حاليا</h4>
    );

  return (
    <Grid
      bg={bg}
      p={2}
      gap={3}
      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
    >
      {showBooks}
    </Grid>
  );
};

export default ShowCart;
