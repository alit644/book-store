/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";
import { BookText } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetCategoryByNameQuery } from "../../app/features/categories/categories";
import CategorySkeleton from "../CategoryBox/CategorySkeleton";

export default function Slider() {
  return (
    <Box
      h={"100vh"}
      position={"sticky"}
      top={20}
      dir="ltr"
      display={{ base: "none", md: "block" }}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("#F1F1F1", "gray.900")}
    >
      <SidebarContent />
      <Drawer placement="left" returnFocusOnClose={false} size="full">
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box p="4">{/* Content */}</Box>
    </Box>
  );
}

const SidebarContent = ({ ...rest }) => {
  const bgcolor = useColorModeValue("white", "gray.900")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const { isLoading, data } = useGetCategoryByNameQuery();
  if (isLoading) return <CategorySkeleton h={"20px"}  w={'200px'}/>;
  const showCategory =
    data.data.length !== 0
      ? data.data.map((link) => (
          <Stack
          id={link.id}
            direction={"row"}
            key={link.id}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <NavItem id={link.id}>{link.attributes.title}</NavItem>
            <Box ml={2}>
              <BookText color="#6251DD" />
            </Box>
          </Stack>
        ))
      : null;
  return (
    <Box
      overflowY={"auto"}
      dir="rtl"
      bg={bgcolor}
      border="1px"
      borderColor={borderColor}
      w={{ base: "full", md: 60 }}
      h="full"
      {...rest}
    >
      <Flex h="14" alignItems="center" mx="3" justifyContent="space-between">
        <Text fontSize="x-large" fontWeight="400">
          أقسام الكتب
        </Text>
      </Flex>

      {showCategory}
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
const NavItem = ({ children,id ,...rest }) => {
  return (
    <Box
      as={Link}
      to={`/category/${id}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="2"
        mx="3"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#E2E8F0",
          color: "black",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};
