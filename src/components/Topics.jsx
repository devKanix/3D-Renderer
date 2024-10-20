import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { topics } from "../constants";
import { textVariant } from "../utils/motion";

const TopicsCard = ({ topics }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{topics.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {topics.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <img
            src={topics.icon}
          />
    </VerticalTimelineElement>
  );
};

const Topics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-20`}>
        Prerequisites
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        For 3D rendering.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {topics.map((topics, index) => (
            <TopicsCard
              key={`topics-${index}`}
              topics={topics}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Topics;