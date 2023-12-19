import React from "react";
import { Avatar, Heading, VStack, Flex, Box, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landing.css";
import pfp from "../images/pfp.jpg"

const greeting = "Full-Stack React &nbsp; Developer";
const bio1 =
  "Hi, I'm Krishna. A passionate Full-Stack React Developer <br>based in Tamil Nadu, India. I have also done various <br> small projects using python.";

const tech_stack = [
  {
    icon: faHtml5,
  },
  {
    icon: faCss3Alt,
  },
  {
    icon: faReact,
  },
  {
    icon: faJs,
  },
  {
    icon: faJava,
  },
  {
    icon: faPython,
  },
];
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#f9f9f9"
    id="landing-section"
  >
    <VStack spacing={4} alignItems="center" color="black">
      <Flex justifyContent="space-between" width="100%">
        <Box textAlign="left">
          <Heading
            as="h1"
            size="4xl"
            color="#2D2E32"
            marginX="120"
            marginY="5"
            paddingY="5"
            dangerouslySetInnerHTML={{ __html: greeting }}
          ></Heading>

          <Heading
            as="h2"
            size="md"
            fontWeight="500"
            fontFamily="Mulish, sans-serif"
            color="#555555"
            marginX="124"
            marginY="5"
            dangerouslySetInnerHTML={{ __html: bio1 }}
          ></Heading>
        </Box>
        <Avatar
          boxSize="300px"
          src={pfp}
          marginRight="150px"
          marginTop="30"
        />
      </Flex>
      <Flex justifyContent="space-between" width="57%">
        <Heading as="h3" size="2xl" color="#2D2E32" paddingTop="100">
          Tech Stack
        </Heading>
        <div className="line" />
        <HStack spacing={8} paddingTop="105" className="icon-hover">
          {tech_stack.map((tech, index) => (
            <FontAwesomeIcon key={index} icon={tech.icon} size="3x" className="icon" />
          ))}
        </HStack>
      </Flex>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
