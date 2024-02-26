import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const BookQuotes = ({text , nodata}) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box>
      <Text mb={4} fontSize={"x-large"}>
        اقتباسات من هذا الكتاب
      </Text>
      <Stack
        my={6}
        bg={bg}
        p={4}
        border="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        
      >
        {text}
        {nodata}
      </Stack>
    </Box>
  );
};

export default BookQuotes;
