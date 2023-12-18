import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hello, I'm Zhihao Zhang, a Master of Science student in Computer Science
        at Northeastern University, with a rich background in software
        engineering. My experience includes impactful roles at Intuit. and
        Shanghai Rion Software CO LTD, where I honed my skills in full-stack
        development, distributed systems, and software robustness. I'm skilled
        in languages like C++, Kotlin, Python, and familiar with frameworks such
        as React and SpringBoot. Passionate about technology, I aspire to
        leverage my technical expertise and experiences to excel in the software
        engineering domain.
        <br></br> <br></br>In my recent foray into competitive programming, I've
        quickly made significant strides, achieving top 3% in LeetCode Contests
        in less than 20 attempts and ranking in the top 5% on AtCoder with a
        rating of 1216. This showcases my rapid learning and adaptability in
        tackling complex coding challenges. <br></br> <br></br> I create and
        share educational content, focusing on programming languages, data
        structures, and algorithms. My tutorials and insights have attracted
        over 800 subscribers, showcasing my ability to effectively communicate
        complex technical concepts. As a hobby, I also produce eSports-related
        videos, which have garnered a following of 6,800 subscribers, reflecting
        my diverse interests and skills in content creation.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
