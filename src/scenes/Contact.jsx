import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact=()=>{
    return(

        <section id="contact" className="mt-20 ">

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
            <div className="flex justify-center font-playfair font-semibold mb-5 text-4xl">
            <p> <span className="text-red">CONTACT</span> ME</p>
            </div>
            <div className="flex justify-center pb-5">
                <LineGradient width="w-1/6"/>
            </div>
            <p className="flex justify-center font-opensans text-xl pb-20">Lets get in touch</p>
            </motion.div>

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

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/e4f06687-0a94-45dc-af8a-2515caefadab"  method="POST" className="flex flex-col md:w-1/2" >
                    <input
                     type="text"
                     name="name"
                     placeholder="Enter your name"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

                    <input
                     type="text"
                     name="email"
                     placeholder="Enter your mail"
                     className="my-8 p-2 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none" />

                    <textarea 
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                    </textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's Talk
                    </button>
                </form>
            </div>
            </motion.div>
        </section>

    )
}

export default Contact;