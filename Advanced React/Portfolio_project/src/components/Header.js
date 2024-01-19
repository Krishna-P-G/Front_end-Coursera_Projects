import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import "./header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: krishnamel39@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Krishna-P-G",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/krishna-p-g-8a4402247/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/sharvesh_k76996",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingDown && visible) {
      setVisible(false);
    } else if (!isScrollingDown && !visible) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const headerStyle = {
    transform: `translateY(${visible ? "0" : "-200px"})`,
    transition: "transform 0.3s ease-in-out",
  };

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (isMenuOpen)
    {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      backgroundColor="#18181b"
      style={headerStyle}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
      <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={{ base: 4, md: 8 }}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header_elements"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
          <IconButton
            icon={<FontAwesomeIcon icon={faBars} />}
            onClick={handleMenuToggle}
            display={{ base: "block", md: "none" }}
          />
        <Drawer isOpen={isMenuOpen} placement="right" onClose={handleMenuToggle}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <HStack
                spacing={8}
                flexDirection="column"
                fontFamily="Poppins, sans-serif"
                fontSize="lg"
                fontWeight="600"
                display={{ base: "flex", md: "block" }}
              >
                <a href="/#landing-section" className="header_elements" onClick={handleClick("landing")}>
                  Home
                </a>
                <a href="/#projects-section" className="header_elements" onClick={handleClick("projects")}>
                  Projects
                </a>
                <a href="/#contactme-section" className="header_elements" onClick={handleClick("contactme")}>
                  Contact me
                </a>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <HStack
            spacing={{ base: 4, md: 12 }}
            fontFamily="Poppins, sans-serif"
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="600"
            display={{ base: "none", md: "flex" }}
          >
            <a href="/#landing-section" className="header_elements" onClick={handleClick("landing")}>
              Home
            </a>
            <a href="/#projects-section" className="header_elements" onClick={handleClick("projects")}>
              Projects
            </a>
            <a href="/#contactme-section" className="header_elements" onClick={handleClick("contactme")}>
              Contact me
            </a>
          </HStack>
          </HStack>
      </Box>
    </Box>
  );
};

export default Header;