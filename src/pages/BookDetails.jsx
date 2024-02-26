/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BookQuotes from "../components/BookDetails/BookQuotes";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../Api";
import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import { memo } from "react";

const BookDetails = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const { id } = useParams();
  const bg2 = useColorModeValue("#F1F1F1", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bg = useColorModeValue("white", "gray.900");
  const nav = useNavigate();
  const { isPending, data, isError } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const { data } = await Axios.get(`products/${id}?populate=*`);
      return data;
    },
  });
  if (isError) return nav("/not-found");
  if (isPending)
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

  const {
    title,
    authorName,
    language,
    numberOfPages,
    DateCreated,
    rating,
    publisher,
    description,
  } = data.data.length !== 0 ? data.data.attributes : null;

  const category =
    data.data.length !== 0
      ? data.data.attributes.category.data.attributes.title
      : null;

  //! imgae url
  const imgUrl = data.data.attributes.thumbail.data.attributes.url;

  //! quotations
  const quotations =
    data.data.length !== 0 ? data.data.attributes.quotations.data : null;
  const showQuotations = quotations.map((item, i) => (
    <Box key={i} bg={bg2} p={6} rounded={"lg"}>
      <Quote color="#6569DD" />
      {item}
      <Stack direction={"row"} justifyContent={"end"}>
        <Quote color="#6569DD" />
      </Stack>
    </Box>
  ));
const bosh =  data.data.attributes.quotations.data.length === 0 ? <h6>لا يوجد اقتباسات من هذا الكتاب</h6> : null

  const BookInfoData = [
    {
      name: "المؤلف",
      value: authorName,
    },
    {
      name: "الناشر",
      value: publisher,
    },
    {
      name: "القسم ",
      value: category,
    },
    {
      name: "اللغة",
      value: language,
    },
    {
      name: "الصفحات",
      value: numberOfPages,
    },
    {
      name: "تاريخ الإنشاء",
      value: DateCreated,
    },
    {
      name: "التقييم",
      value: `5/${rating}`,
    },
  ];

  const showInfo = BookInfoData.map((item, i) => (
    <Stack mb={3} key={i} direction={"row"}>
      <Text w={32}>{item.name}</Text>
      <Text>: {item.value}</Text>
    </Stack>
  ));
  return (
    <Container maxW="container.xlg" my={8}>
      <Text mb={7} fontSize={"x-large"}>
        {title} PDF
      </Text>

      {/* معلومات الكتاب */}
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start" }}
        bg={bg}
        p={4}
        border="1px"
        borderColor={bgColor}
      >
        <Box w={{ base: "90%", md: "30%" }} className="img-box">
          <Image
            mx={{ base: "auto", md: "0" }}
            src={`${imgUrl}`}
            h={280}
            w={180}
          />
        </Box>

        <Box flex={1} className="book-info">
          <Text mb={6} fontSize={"large"}>
            {title}
          </Text>
          {showInfo}
        </Box>
      </Stack>

      {/* وصف الكتاب */}
      <Stack my={6} bg={bg} p={4} border="1px" borderColor={borderColor}>
        <Text mb={4} fontSize={"x-large"}>
          وصف الكتاب
        </Text>
        <Text fontSize={"medium"}>{description}</Text>
      </Stack>
      <BookQuotes text={showQuotations} nodata={bosh}/>
    </Container>
  );
};

export default memo(BookDetails);
