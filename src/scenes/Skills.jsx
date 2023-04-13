import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";

const Skills =()=>{

    const techno=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-sky-600"
        },
        {
            id:3,
            src:js,
            title:"JS",
            style:"shadow-yellow"
        },
        {
            id:4,
            src:react,
            title:"React",
            style:"shadow-sky-400"
        },
        {
            id:5,
            src:node,
            title:"nodeJs",
            style:"shadow-green-500"
        },
        {
            id:6,
            src:tailwind,
            title:"Tailwind CSS",
            style:"shadow-sky-300"
        },
        {
            id:7,
            src:bootstrap,
            title:"Bootstrap",
            style:"shadow-purple-500"
        },
        {
            id:8,
            src:git,
            title:"Git",
            style:"shadow-white"
        },
    ]


    return(
        <section id="skills" className="pt-10 pb-24">

            <motion.div
                // className="md:w-1/3"
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
                // className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0 , y:-50},
                    visible:{opacity:1,y:0}
            }}
            >

            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-10 text-center py-8 px-12 sm:px-0">

                {techno.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="techs" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
                ))}
            </div>
            </motion.div>
            
        </section>
    )
}

export default Skills;