import React from "react";
import { Box, Heading, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { FaUser, FaBuilding, FaPhone } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMeSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#F9F9F9"
      spacing={8}
      id="contactme-section"
    >
      <VStack w="1024px" p={32} alignItems="center" >
        <Heading as="h1" size="4xl" color="#2D2E32">
          Contact me
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
