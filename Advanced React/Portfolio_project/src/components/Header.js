import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
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
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

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
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
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
          </nav>
          <nav>
            <HStack spacing={12} fontFamily="Poppins, sans-serif" fontSize="lg" fontWeight="600">
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
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
