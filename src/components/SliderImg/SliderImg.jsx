import { Box, Center, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSilder() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderItem = [
    {
      imgSrc: "/public/Banner.png",
      txt: " لا تخيفني الكلمات ... بل تخيفني النوايا .. !فالكلمات أرد عليها بالكلمات .. أما النوايا فكيف أرد عليها !؟",
    },
    {
      imgSrc: "/public/hero4.jpg",
      txt: "فالجنة هي الفوز الذي يجعل كل الخسارات السابقة تافهة",
    },
  ];
  const showItem = sliderItem.map((item, i) => (
    <Box key={i} className="bg-shadow" position={"relative"}>
      <div className="linear-overlay"></div>
      <Image
        // loading="lazy"
        rounded={"lg"}
        w={"100%"}
        h={{ base: "14rem", md: "18rem" }}
        src={item.imgSrc}
      />
      <Text
        dir="rtl"
        textShadow={"2px 3px #1d1b1b"}
        w={{ base: "80%", md: "60%" }}
        fontSize={{ base: 20, md: 30 }}
        fontWeight={"bold"}
        className="txt"
      >
        <Center>{item.txt}</Center>
      </Text>
    </Box>
  ));
  return (
    <Box className="slider-container">
      <Slider {...settings}>{showItem}</Slider>
    </Box>
  );
}

export default ImgSilder;
