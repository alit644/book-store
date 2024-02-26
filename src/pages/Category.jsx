import { Container, Text } from "@chakra-ui/react";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import { useGetCategoryByNameQuery } from "../app/features/categories/categories";
import CategorySkeleton from "../components/CategoryBox/CategorySkeleton";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const nav = useNavigate()
  const { isLoading, data , isError} = useGetCategoryByNameQuery();
  if (isLoading) return <CategorySkeleton h={'40px'}/>;
  if(isError) return nav('/')
  const showCategory =
    data.data.length !== 0
      ? data.data.map((item, i) => (
          <CategoryBox key={i} id={item.id} text={item.attributes.title} />
        ))
      : null;

  return (
    <>
      <Helmet>
        <title>Category</title>
      </Helmet>
    <Container maxW="container.xlg" my={8}>
      <Text fontSize={"x-large"}>أقسام الكتب</Text>
      {showCategory}
    </Container>
    </>
  );
};

export default Category;
