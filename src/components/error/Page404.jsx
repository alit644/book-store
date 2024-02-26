import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box h={"100vh"} textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, #6151dd9f, #6251DD)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        مع الأسف غير موجودة
      </Text>
      <Text color={"gray.500"} mb={6}>
        يبدو أن الصفحة التي تبحث عنها غير موجودة{" "}
      </Text>

      <NavLink to={'/'}>
        <Button
          colorScheme="#6251DD"
          bgGradient="linear(to-r, #6251DD, #6151dd9f,)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </NavLink>
    </Box>
  );
}
