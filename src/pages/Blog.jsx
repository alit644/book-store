import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const Blog = () => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box>
      <Container maxW="container.xlg" my={8}>
        <Box h={"calc(100vh - 192px)"}>
          <Stack bg={bg} p={4}>
            <Alert status="error">
              <AlertIcon />
              هذه الصفحة غير متوفرة حاليا , سيتم أنشائها قريبا
            </Alert>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
