import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";
import profile from "../assets/profile.jpeg";

const About =()=>{

    return(
        <section id="about" className="py-20">

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

    
        <div className="flex justify-center text-4xl font-playfair font-semibold ">
        <p>About <span className="text-red">ME</span></p>
        </div>
        <div className="flex justify-center mt-5 ">
            <LineGradient width="w-1/6"/>
        </div>
        </motion.div>

        <div className="relative pl-80 left-20 z-0 mt-40 before:absolute before:top-[-30px] before:left-60 before:rounded-t-[250px] before:w-80 before:max-w-[250px] md:before:max-w-[250px] sm:right-40 before:h-full before:border-2 before:border-blue before:z-[-1] "
        >
            <img 
            className="hover:filter hover:saturate-200 transition duration-500 max-w-[250px] md:max-w-[250px] rounded-t-[400px] w-80 "
            src={profile} 
            alt="" />
            </div>

            <p className="font-opensans font-semibold text-2xl text-center py-12" >Let me begin with my <span className="text-red"> introduction </span></p>
            <p className="font-sans font-normal text-lg leading-7 text-justify">Hello, I am  Ayushi Upreti. Presently I am a sophomore at Noida Institute of Engineering and Technology, Greater Noida.I have interest in building things from raw. I have had my hands on React projects as well as MERN stack projects. I love to explore the world of tech.</p>

            <p className="font-opensans text-xl font-semibold pt-8">My interests aside from coding -</p>
            <ul className="list-disc font-sans font-normal text-lg pl-5 pt-4">
                <li>Reading</li>
                <li>Shopping</li>
                <li>Travelling</li>
            </ul>
    </section>
    )
}

export default About;