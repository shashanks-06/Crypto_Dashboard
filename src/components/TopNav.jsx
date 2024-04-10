import {
  Flex,
  Container,
  Heading,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuItem,
  Button,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack justifyContent="space-between" h="16" mx="auto" maxW="70rem">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize="24px" boxSize={8} color="black" />
          </MenuButton>
          <MenuList>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
            <Link to="/">
              <MenuItem>LogOut</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
