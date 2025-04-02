import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="mt-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="text-center font-playfair font-semibold mb-5 text-4xl">
                    <p><span className="text-red">CONTACT</span> ME</p>
                </div>
                <div className="flex justify-center pb-5">
                    <LineGradient width="w-1/6" />
                </div>
                <p className="text-center font-opensans text-xl pb-20">Let's get in touch</p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:space-x-16">
                    {/* Form Section */}
                    <form
                        action="https://getform.io/f/e4f06687-0a94-45dc-af8a-2515caefadab"
                        method="POST"
                        className="flex flex-col md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <h3 className="text-white text-2xl font-semibold mb-6">Send a Message</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                        ></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300">
                            Let's Talk
                        </button>
                    </form>

                    {/* Social Media and CV Section */}
                    <div className="mt-10 md:mt-0 md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-white text-2xl font-semibold mb-6">Connect with Me</h3>
                            <div className="flex space-x-6 mb-6">
                                <a href="https://www.linkedin.com/in/ajay-singh-5b35b2239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/AjaySingh-a" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://x.com/Ajays_16?t=TiLDfbNA9Va-s6PWVhUtoA&s=09" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-start">
                        <a
                            href="/Ajay_Singh_profile.pdf" // Path relative to the public folder
                            download="Ajay_Singh_profile.pdf" // Optional: Specify the downloaded file name
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300 inline-block"
>
    Download CV
</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
