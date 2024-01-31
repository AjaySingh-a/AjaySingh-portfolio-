import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js (1).png";
import react from "../assets/react (2).png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind (2).png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import mongo from "../assets/mongo (2).png";
import python from '../assets/python.svg.png';
import cpp from "../assets/cpp.svg.png";

// import { FaBootstrap } from "react-icons/fa";


const Skills =()=>{


    const techno=[
        {
            
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            
            src:css,
            title:"CSS",
            style:"shadow-sky-600"
        },
        {
            
            src:js,
            title:"JS",
            style:"shadow-yellow"
        },
        {
           
            src:react,
            title:"React",
            style:"shadow-sky-400"
        },
        {
         
            src:node,
            title:"nodeJs",
            style:"shadow-green-500"
        },
        {
          
            src:tailwind,
            title:"Tailwind CSS",
            style:"shadow-sky-300"
        },
        {
            
            src:bootstrap,
            title:"Bootstrap",
            style:"shadow-purple-500"
        },
        {
           
            src:git,
            title:"Git/Github",
            style:"shadow-white"
        },

        {
            src:mongo,
            title:"MongoDB",
            style:"shadow-green-400"
        },
        {
            src:cpp,
            title:"C++",
            style:"shadow-blue"
        },
        {
            src:python,
            title:"Python",
            style:"shadow-yellow"
        },
    ];


    return(
        <section id="skills" className="pt-10 pb-24 w-full ">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0 , y:-50},
                    visible:{opacity:1,y:0}
            }}
            >
            <p className="font-playfair font-semibold text-4xl mb-5 mt-10 text-center">My <span className="text-red">SKILLS</span></p>
            <div className="flex justify-center pb-12"> 
            <LineGradient width="w-1/6"/>
            </div>
            </motion.div>

            
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0 , y:-50},
                    visible:{opacity:1,y:0}
            }}
            >

            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 text-center py-8 px-12 sm:px-0">

                {techno.map((value,index)=>(
                    <div key={index} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${value.style}`}>

                    <img src={value.src} alt="techs" className="w-20 mx-auto" />
                    <p className="mt-4">{value.title}</p>
                </div>
                ))}
            </div>
            </motion.div>
            
        </section>
    )
}

export default Skills;