import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profile3 from "../assets/profile3.png";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing=({setSelectedPage})=>{
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");

    return(
        <section id="home" className="md:flex justify-between md:items-center md:h-full gap-16 py-10">

        {/* image section */}
        <div className="md:order-2 flex justify-between basis-2/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                <div className="relative z-0 ml-20 w-[450px]">

                    <img src={profile3} className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" alt="profile"/>
                </div>
            ) : (  <img
                alt="profile"
                className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
                src={profile3}
              /> )}
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
                    <p className="text-xl font-sans text-center md:text-start pt-4">Hello, I am</p>
                    <p className="text-5xl font-playfair z-10 text-center md:text-start">
                        Ayushi {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[80px] before:z-[-1]">Upreti</span>
                    </p>
                    <p className="text-2xl font-sans py-8">Web Developer</p>
                    {/* <p className="mt-10 mb-7  text-sm text-center md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt ducimus nam praesentium dolor enim autem voluptates quibusdam, corporis ut!</p> */}

                    {/* <SocialMediaIcons/> */}
                </motion.div>

              </div>

        </section>
    )
}

export default Landing;