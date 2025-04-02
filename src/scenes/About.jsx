import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";
import profile from "../assets/about.jpg";

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
                
        <div className="flex justify-center pt-16">
            <img 
            className="hover:filter hover:saturate-150 transition duration-500 max-w-[250px] md:max-w-[250px] rounded-t-[400px] w-80 "
            src={profile} 
            alt="" />
        </div>
            {/* </div> */}

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

            <p className="font-opensans font-semibold text-2xl text-center py-12" >Let me begin with my <span className="text-red"> introduction </span></p>
            <p className="font-sans font-normal text-lg leading-7 text-left">Hello! I am  Ajay Singh, a final year engineering student. I have interest in building things from raw. I have had my hands on React projects, and Full stack projects. My eagerness to learn has allowed me to explore the world of tech with great enthusiasm. Join me on this journey of design and technology where we create user-centric experiences that leave a lasting impression. </p>

            </motion.div>
           
    </section>
    )
}

export default About;