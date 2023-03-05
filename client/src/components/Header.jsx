import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Img,
  Flex,
  Link
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import '../assets/favicon.png';

export default function Header() {
  return (
    <header className="site-header">
      <Helmet>
        <title>Password Generator | Artis7eer</title>
      </Helmet>
      <Flex>
      <Img src='favicon.png' alt='logo' boxSize='40px'/><Text mt='2' className="site-title" as='b' backgroundColor='#FBFEF9'><Link as={RLink} to='/'>Password Generator</Link></Text>
      </Flex>
      <Menu className='site-navbar'>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link as={RLink} to="/">Password Generator</Link>
          </MenuItem>
          <MenuItem>
            <Link as={RLink} to="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link as={RLink} to="/privacy-policy">Privacy Policy</Link>
          </MenuItem>
          <MenuItem>
            <Link as={RLink} to="/terms-of-service">Terms Of Service</Link>
          </MenuItem>
          <MenuItem>
            <Link as={RLink} to="/contact-us">Contact Us</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
}
