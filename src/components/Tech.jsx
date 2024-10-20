import {BallCanvas} from "./canvas";
import {technologies} from "../constants"
import {motion} from "framer-motion"
import {styles} from "../styles";
import {textVariant} from '../utils/motion';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-20`}>
        3D Softwares
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas 
          icon={technology.icon}
        />
        </div>
      ))}
    </div>
    </>
  )
}

export default Tech;