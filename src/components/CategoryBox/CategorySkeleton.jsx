import { Skeleton, Stack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const CategorySkeleton = ({h , w , direction , flexWrap}) => {
  return (
    <div>
      <Stack direction={direction} flexWrap={flexWrap} mt={6} p={4} >
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} height={h} w={w}/>
        ))}
      </Stack>
    </div>
  );
};

export default CategorySkeleton;
