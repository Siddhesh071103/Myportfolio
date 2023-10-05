import React from 'react'
import { motion, } from 'framer-motion';

import{
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText
} from '../styles/Global.styled';

import{
    SkillsCardContainer, SkillsCard
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';
import { fadeInLeftVarient, fadeInRightVarient} from '../utils/Varients';

const MySkills = () => {
  return (
    <PaddingContainer
        id='Skills'
        top='10%'
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <FlexContainer 
            responsiveFlex 
            responsiveDirection="column-reverse"
            FullWidthChild
        >
            <SkillsCardContainer
                as={motion.di}
                variants={fadeInLeftVarient}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                   <SkillsCard
                    as={motion.a}
                    whileHover={{scale: 1.2}}
                   >
                        <IconContainer size="5rem" color='blue'>
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                   </SkillsCard>
                ))}
            </SkillsCardContainer>

            <motion.div
                variants={fadeInRightVarient}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    MY SKILLS
                </Heading>
                <Heading as="h2" size="h2" top="0.5rem">
                    What can <BlueText>I do?</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    As a Developer, I have beginner level experience in front-end development.
                    I am proficient in Javascript, React, HTML and CSS. My strong experience in 
                    building responsive and dynamic user interfaces using React has allowed me 
                    to create engaging and interactive web applications
                </ParaText>

                <ParaText>
                    I have experience in using React for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adapt to the changing needs of a business. 
                </ParaText>
            </motion.div>
        </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills