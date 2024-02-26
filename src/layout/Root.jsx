import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import ImgSilder from "../components/SliderImg/SliderImg";
import Slider from "../components/SliderApp/SliderApp";
import ShowCart from "../components/cart/ShowCart";
import { Helmet } from "react-helmet";


const Root = () => {

  const bg = useColorModeValue("#F1F1F1");
  const bgHero = useColorModeValue("white");
  // const hadelContextMenu = (e) => {
  //   e.preventDefault();
  // }
  return (
    <>
      <Helmet>
        <title>Home</title>
          <link rel="icon" href="/public/books.png" type="image/x-icon" />

      </Helmet>
      {/* onContextMenu={hadelContextMenu} */}
      <Box bg={bg} >
        <Box py={10} mb={6} bg={bgHero}>
          <Container maxW="container.xlg">
            <ImgSilder />
          </Container>
        </Box>
        <Container maxW="container.xlg">
          <Stack gap={2} direction={"row-reverse"}>
            <Slider />
            <Box w={"100%"}>
              <ShowCart />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Root;
