import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "../../shared/SearchInput";

const navItem = [
  {
    name: "الرئيسية",
    path: "/",
  },
  {
    name: "أقسام الكتب",
    path: "/category",
  },
  {
    name: "المدونة",
    path: "/blog",
  },
];

export default function NavBarr() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box as={'nav'} position={'sticky'} top={0} zIndex={22} bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Image w={12} h={10} src="/public/books.png" alt="logo-book" />
          </Link>

          <HStack
            spacing="24px"
            as={"Nav"}
            display={{ base: "none", md: "flex" }}
          >
            {navItem.map((item, i) => (
              <NavLink key={i} to={item.path}>
                <Button>{item.name}</Button>
              </NavLink>
            ))}
          </HStack>

          <SearchInput width={"40%"} display={{ base: "none", md: "flex" }} />

          <Flex alignItems={"center"} gap={2}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>
        {/* mobil screen */}
        {isOpen ? (
          <Stack gap={4}>
            <Box >
              {navItem.map((item, i) => (
                <NavLink key={i} to={item.path}>
                  <Button mx={1}>{item.name}</Button>
                </NavLink> 
              ))}
            </Box>
            <Box>
              <SearchInput
                width={"90%"}
                display={{ base: "flex", md: "none" }}
              />
            </Box>
          </Stack>
        ) : null}
      </Box>
    </>
  );
}
