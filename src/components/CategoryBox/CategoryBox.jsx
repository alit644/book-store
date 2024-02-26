import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BookText } from "lucide-react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CategoryBox = ({text , id}) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <NavLink to={`/category/${id}`}>
      <Stack
      id={id}
        direction={"row"}
        bg={bg}
        mt={6}
        p={4}
        cursor={"pointer"}
        rounded={"md"}
        _hover={{ color: "#6251DD" }}
        transitionDuration={".3s"}
        border="1px"
        // eslint-disable-next-line react-hooks/rules-of-hooks
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Box>
          <BookText />
        </Box>
        <Box>
          <Text>{text}</Text>
        </Box>
      </Stack>
    </NavLink>
  );
};

export default CategoryBox;
