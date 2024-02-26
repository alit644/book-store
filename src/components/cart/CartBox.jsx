/* eslint-disable react/prop-types */
import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CartBox = ({ id, attributes }) => {
  const { title, authorName } = attributes;
  const imgUrl = attributes.thumbail.data.attributes.url;
  const showStart = Array.from({ length: 4 }).map((_, i) => (
    <StarIcon key={i} fontSize={"14px"} color={"gold"} />
  ));
  return (
    <Link to={`book/${id}`}>
      <Card id={id} >
        <CardHeader py={2} px={1}>
          <Center>
            {showStart}
            <Star size={"14px"} />
          </Center>
        </CardHeader>
        <CardBody  pb={1}>
          <Image
            mx={"auto"}
            w={"117px"}
            h={"182px"}
            src={imgUrl}
            alt={title}
          />
        </CardBody>
        <Stack direction={"column"} p={2}>
          <Center h={16} fontSize={"15px"}>{title}</Center>
          <Text mx={"auto"} color={"#6251DD"}>
            {authorName}
          </Text>
        </Stack>
      </Card>
    </Link>
  );
};

export default CartBox;
