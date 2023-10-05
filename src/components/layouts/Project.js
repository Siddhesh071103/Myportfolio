import React from 'react';
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from "../../styles/Global.styled";

import {
    TechStackCard, ProjectImage, ProjectImageContainer
} from "../../styles/MyProject.styled";

import { FaGithub } from 'react-icons/fa';
import { fadeInLeftVarient, fadeInRightVarient } from '../../utils/Varients';
const Project = ({ data }) => {
  return (
    <FlexContainer 
        direction={data.reverse ? 'row-reverse' : false}
    fullWidthChild
    >
        <motion.div
            variants={data.reverse ? fadeInRightVarient : fadeInLeftVarient}
            initial="hidden"
            whileInView="visible"
        >
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>

            <IconContainer size="2rem">
                <FaGithub color='white'/>
            </IconContainer>
            </FlexContainer>
            <PaddingContainer top="1rem">
                <FlexContainer onGotPointerCapture="1.5rem" gap="15px">
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">{data.project_desc}</ParaText>
            <Button>Visit Website</Button>
        </motion.div>

        <ProjectImageContainer as={motion.div} variants={data.reverse ? fadeInLeftVarient : fadeInRightVarient } initial="hidden" whileInView="visible" justify={data.reverse ? "flex-start" : "flex-end"}>
            <ProjectImage 
            src={data.project_img} 
            alt= {data.project_name}/> 
        </ProjectImageContainer>

    </FlexContainer>
  )
}

export default Project;