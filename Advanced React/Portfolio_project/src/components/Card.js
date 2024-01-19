import React from "react";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBreakpointValue } from "@chakra-ui/react";
import "./Card.css";

const Card = ({ title, description, imageSrc, gitHubUrl, iconSrcs }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {isMobile ? (
        <VStack
          spacing={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="xl"
          p={8}
          w={{ base: "20rem", md: "50rem" }}
          h={{ base: "auto", md: "20rem" }}
          bg="white"
          className="card_each"
        >
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="md"
            minW="50%"
            maxW="55%"
          />
          <VStack align="center" spacing={2} w="50%">
            <Heading alignSelf="center" as="h3" fontSize="1rem" color="#2D3E32">
              {title}
            </Heading>
            <Text width="15rem" color="gray.600">{description}</Text>
            <HStack
              spacing={8}
              paddingTop={{ md: "10", base: "30" }}
              className="icon-hover"
              alignSelf={{ base: "center" }}
              paddingLeft={{ md: "5", base: "0" }}
              marginRight={{ md: "0", base: "40" }}
            >
              {iconSrcs.map((src, index) => (
                <Image
                  className="icon"
                  key={index}
                  src={src}
                  alt={`Tech Icon ${index}`}
                  boxSize={10}
                />
              ))}
            </HStack>
            <HStack
              className="see_more"
              marginTop="1.5rem"
              alignSelf="flex-end"
            >
              <Heading as="h3" fontSize="xl" color="#2D3E32">
                See more
              </Heading>
              <a href={gitHubUrl}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="2x"
                  color="#2D3E32"
                />
              </a>
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <HStack
          display="flex"
          align="flex-start"
          spacing={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="xl"
          p={8}
          w={{ md: "50rem", base: "20rem" }}
          h={{ md: "20rem", base: "20rem" }}
          bg="white"
          className="card_each"
        >
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="md"
            minW="50%"
            maxW="55%"
          />
          <VStack align="center" spacing={2} w="50%">
            <Heading as="h3" fontSize={{md:"4xl", base:"0.5rem"}} color="#2D3E32">
              {title}
            </Heading>
            <Text color="gray.600">{description}</Text>
            <HStack
              spacing={8}
              paddingTop={{ md: "10", base: "30" }}
              className="icon-hover"
              alignSelf={{ base: "center" }}
              paddingLeft={{ md: "5", base: "0" }}
              marginRight={{ md: "0", base: "60" }}
            >
              {iconSrcs.map((src, index) => (
                <Image
                  className="icon"
                  key={index}
                  src={src}
                  alt={`Tech Icon ${index}`}
                  boxSize={10}
                />
              ))}
            </HStack>
            <HStack
              className="see_more"
              marginTop="1.5rem"
              alignSelf="flex-end"
            >
              <Heading as="h3" fontSize="xl" color="#2D3E32">
                See more
              </Heading>
              <a href={gitHubUrl}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="2x"
                  color="#2D3E32"
                />
              </a>
            </HStack>
          </VStack>
        </HStack>
      )}
    </Box>
  );
};

export default Card;
