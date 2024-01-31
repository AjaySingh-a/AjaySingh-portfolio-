import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import mern from "../assets/mern (2).png";
import weather from "../assets/weather-app.png";
import news from "../assets/news-app.jpeg";
import textutils from  "../assets/textutils2.jpeg";
import tindog from "../assets/tindog.jpeg";
import crypto from "../assets/crypto.jpeg";
import zara from "../assets/zara.png";
import crypto2 from "../assets/Home.png";
import C2C from "../assets/main page.png";

const Project=()=>{

    const portfolios=[

        {
            src:crypto,
            title:"CryptoDigest",
            Description:"Cryptodigest is an app that offers a wealth of information on every cryptocurrency currently available. It allowes users to make informed decisions about their investments",
            link:"https://github.com/AyushiUpreti/CryptoDigest.git"
            
        },
        {
            
            src:weather,
            title:"Weather App",
            Description:"An app made using react and OpenWeatherMap which on searching displays the current weather of that particular place.",
            link:"https://github.com/AyushiUpreti/weather"
            
        },
        {
           
            src:news,
            title:"NewsPower",
            Description:"An app made using react and NewsApi which fetches the latest news and displays them into different fields.",
            link:"https://github.com/AyushiUpreti/NewsPower"
        },
        {
            
            src:textutils,
            title:"TextUtils",
            Description:"A simple react App which executes different operations on a text.",
            link:"https://github.com/AyushiUpreti/TextUtils"
        },
        {
           
            src:tindog,
            title:"TinDog",
            Description:"A simple website made using html, css and bootstrap.",
            link:"https://github.com/AyushiUpreti/TinDog"
        }
    ];

    const UI=[
        {
            src2:zara,
            title2:"Zara Redesign",
            Description2:"I have addressed the issues with the Zara app that previously made shopping difficult for users. By implementing an interactive UI and seamless navigation, the redesigned app now provides an improved experience for users.",
            link2:"https://www.figma.com/proto/w6skT1PHzS98zQ5NuOYNkV/ZARA-redesign?type=design&node-id=4-61&t=523MxnFSM02Nifmw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A10&mode=design"
        },
        {
            src2:crypto2,
            title2:"CryptoDigest",
            Description2:"The ultimate app for all cryptocurrency enthusiasts! This app offers users a wealth of information on the major digital currencies, with special focus on delivering a seamless user journey through this UI/UX design.",
            link2:"https://www.behance.net/gallery/183283241/CryptoDigest"
        },
        {
            src2:C2C,
            title2:"Connect to Calm",
            Description2:"The primary objective of the app is to quickly connect users with mental health professionals during difficult times within just 2 minutes. The app's user-friendly interface helps users find assistance easily.",
            link2:"https://www.behance.net/gallery/183714361/Connect2Calm"
        },

    ]

    return(
        <section id="projects" className="pt-20 pb-40 w-full">
             <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                 hidden:{opacity:0 , y:-50},
                 visible:{opacity:1, y:0}
             }} 
             >
            <p className="font-playfair font-semibold text-4xl text-center">
                My <span className="text-red">PROJECTS</span>
            </p>
            <div className="flex justify-center mt-5 mb-20">
                <LineGradient width="w-1/5"/>
            </div>
            <p className="font-playfair font-semibold text-3xl text-center pb-10">
             Web Projects
            </p>
            
            </motion.div> 
           

            {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
            

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    transition={{duration:0.4}}
                    variants={{
                        hidden:{opacity:0 , y:-50},
                        visible:{opacity:1, y:0}
                    }} 
                >

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map((value,index)=>(
                    <div key={index} className="shadow-md shadow-pink-600 rounded-lg duration-200 hover:scale-105">
                        <img src={value.src} alt="weatherapp" className="rounded-md "/>
                        <button className="w-full mt-6 text-2xl">{value.title}</button>
                        <p className="md:text-left mx-5 mb-5 mt-5">{value.Description}</p>
                        <div className="flex items-center justify-center my-5 ">
                        <a href={value.link} target="_blank" rel="noreferrer">
                        <button className="px-5 py-3 shadow shadow-pink-600 rounded-lg bg-pink-600 duration-200 hover:scale-105">View Project</button>
                        </a>
                        </div>
                    </div>

                    ))}
                    </div>

                    <p className="font-playfair font-semibold text-3xl text-center pt-20 pb-10">
                      UI/UX Projects
                     </p>
                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {UI.map((value,index)=>(
                    <div key={index} className="shadow-md shadow-pink-600 rounded-lg duration-200 hover:scale-105">
                        <img src={value.src2} alt="weatherapp" className="rounded-md "/>
                        <button className="w-full mt-6 text-2xl">{value.title2}</button>
                        <p className="md:text-left mx-5 mb-5 mt-5">{value.Description2}</p>
                        <div className="flex items-center justify-center my-5 ">
                        <a href={value.link2} target="_blank" rel="noreferrer">
                        <button className="px-5 py-3 shadow shadow-pink-600 rounded-lg bg-pink-600 duration-200 hover:scale-105">View Project</button>
                        </a>
                        </div>
                    </div>

                    ))}
                    </div>
                    </motion.div>
            {/* </div> */}
                   
        </section>
    )
}

export default Project;