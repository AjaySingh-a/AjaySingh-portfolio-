import { useMediaQuery } from 'react-responsive';
import profile3 from "../assets/profile3.png";
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";


const Landing=({setSelectedPage})=>{

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });

    return(
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

        {/* image section */}
        <div className={`md:order-2 flex justify-${isDesktopOrLaptop ? "between" : "center "}  mt-16 md:mt-32`}>
                <div className="relative z-0 w-[450px]">
                    <img src={profile3} className="transition duration-500 w-full max-w-[400px] md:max-w-[600px]" alt="profile"/>
                </div>
        </div>

              {/* main section */}

              <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:1}}
                variants={{
                    hidden:{opacity:0 , x:-50},
                    visible:{opacity:1,x:0}
                }}
                >
                    <p className="text-xl font-sans text-center md:text-start">Hello, I am</p>
                    <p className="text-5xl font-playfair z-10 text-center md:text-start ">
                        Ayushi {""}
                        <span className="md:relative md:text-deep-blue md:font-semibold z-20 md:before:content-brush before:absolute before:-left-[25px] before:-top-[90px] before:z-[-1]">Upreti</span>
                    </p>
                    <div className='pt-4 font-sans text-xl text-center md:text-start'>
                    <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Web Developer/Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("UI/UX Desginer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Software Engineer")
                        .start();
                }}
            />
                       </div>

                </motion.div>
                   </div>

        </section>
    )
}

export default Landing;