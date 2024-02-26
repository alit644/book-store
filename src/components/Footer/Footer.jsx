import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={'row'}
        spacing={4}
        justify={'center'}
        align={{ base: "center", md: "center" }}
      >
        <Text mx={'auto'} fontSize={{base:'small', md:'medium'}} px={4}>
          الكتب المنشورة هي من اعضاء الموقع والموقع لا يتحمل أي مسؤلية ,
          وإذا رأيت كتاب ينتهك الحقوق اتصل بنا
        </Text>
      </Container>
    </Box>
  );
}
