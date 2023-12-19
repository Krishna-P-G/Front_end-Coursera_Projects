import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Anime Madness",
    description:
      "An infinitely Scrollable Anime Vault which contains thousands of anime, built with NEXTJS and framer-motion",
    getImageSrc: () => require("../images/photo1.jpg"),
    gitHubUrl:"https://github.com/Krishna-P-G/Anime-Madness"
  },
  {
    title: "Flashy Languages",
    description:
      "A game of flashcards that allows us to learn different languages, implemented using Python Tkinter",
    getImageSrc: () => require("../images/photo2.jpg"),
    gitHubUrl:"https://github.com/Krishna-P-G/Flashy-Languages"
  },
  {
    title: "Cloud Discovery",
    description:
      "A Content discovery app built using React, RestAPI, MySQL. Users can upload photos, view others photos and like posts.",
    getImageSrc: () => require("../images/photo3.jpg"),
    gitHubUrl:"https://github.com/Krishna-P-G/Content-discovery-app"
  },
  {
    title: "Amazon Price Tracky",
    description:
      "A simple python application built using Python BeautifulSoup and smtp protocol, to directly alert users if their favourite amazon product is available at their desired price.",
    getImageSrc: () => require("../images/photo4.jpg"),
    gitHubUrl:"https://github.com/Krishna-P-G/Coursera_Calculator"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#f9f9f9"
      isDarkBackground
      p={20}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Heading as="h1" size="4xl" color="#2D2E32">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            gitHubUrl={project.gitHubUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
