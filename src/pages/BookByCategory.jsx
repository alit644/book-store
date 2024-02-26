import {
  Alert,
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../Api";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const BookByCategory = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bg2 = useColorModeValue("#F1F1F1", "gray.800");
  const nav = useNavigate();
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["BookByCategory"],
    queryFn: async () => {
      const { data } = await Axios.get(`categories/${id}?populate=*`);
      return data;
    },
  });
  if (isError) return nav("/not-found");
  if (isLoading)
    return (
      <Text
        p={6}
        color={"white"}
        m={10}
        w={"90%"}
        rounded={"lg"}
        bg={"gray.500"}
      >
        Loading ...
      </Text>
    );
  const { title, products } =
    data.data.length !== 0 ? data.data.attributes : null;
  const showData =
    products.data.length !== 0 ? (
      products.data.map((item) => (
        <NavLink key={item.id} to={`/book/${item.id}`}>
          <Box cursor={"pointer"} p={4} rounded={"lg"} bg={bg2}>
            {item.attributes.title}
          </Box>
        </NavLink>
      ))
    ) : (
      <Alert status="info">عزيزي القارئ في هذا القسم لا يتوفر أي كتب</Alert>
    );
  return (
    <Box h={"calc(100vh - 170px)"}>
      <Container maxW="container.xlg">
        <Text mb={6} fontSize={"large"} my={8}>
          {title}
        </Text>
        <Stack p={2} bg={bg} direction={"row"} flexWrap={"wrap"}>
          {showData}
        </Stack>
      </Container>
    </Box>
  );
};

export default BookByCategory;
