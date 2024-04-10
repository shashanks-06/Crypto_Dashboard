import {
  Flex,
  Input,
  HStack,
  Stack,
  Button,
  Text,
  Icon,
  Card,
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { GrMail } from "react-icons/gr";

const SupportCard = () => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={GrMail} color="p.purple" boxSize={6} />
        <Text
          as="h1"
          textStyle="h1"
          fontWeight="medium
        "
        >
          Contact US
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card borderRadius="1rem" p="6" flexGrow={1}>
        <Stack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
            spacing={6}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your Name..." />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input placeholder="Enter your Surname..." />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="name@mail.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your Message..." />
          </FormControl>
          <Checkbox>
            <Text fontSize="xs" fontWeight="medium">
              I agree with{" "}
              <Box as="span" color="p.purple">
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="sm">Send a Message</Button>
            <Button fontSize="sm" colorScheme="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
