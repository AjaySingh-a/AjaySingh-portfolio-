import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import weather from "../assets/weather-app.png";
import news from "../assets/news-app.jpeg";
import textutils from  "../assets/textutils2.jpeg";
import tindog from "../assets/tindog.jpeg";

const Project=()=>{

    const portfolios=[
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
                        <p className="md:text-justify mx-5 mb-5 mt-5">{value.Description}</p>
                        <div className="flex items-center justify-center my-5 ">
                        <a href={value.link} target="_blank" rel="noreferrer">
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