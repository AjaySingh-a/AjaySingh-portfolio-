import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import weather from "../assets/expenses.png";
import news from "../assets/original.png";
import textutils from  "../assets/4.PNG";
import tindog from "../assets/tindog.jpeg";
import crypto from "../assets/cryptoforge.png";
import capsool from "../assets/capsool.png";

const Project=()=>{

    const portfolios=[

        {  
            src:capsool,
            title:"Capsool",
            Description:"Capsool is an on-demand medicine delivery platform that connects customers with nearby pharmacies through a real-time bidding system. Customers place orders, and multiple pharmacies compete by bidding to offer the best price and fastest delivery. The app ensures affordable pricing, real-time updates, and seamless order tracking, making medicine procurement faster, transparent, and more competitive. ",
            link:"https://github.com/AjaySingh-a/Capsool-PharmacyApp.git"
        },
        {  
            src:crypto,
            title:"CryptoForge",
            Description:"CryptoForge is an app that offers a wealth of information on every cryptocurrency currently available. It allowes users to make informed decisions about their investments",
            link: "https://crypto-forge-umber.vercel.app/"
            
        },
        {
            
            src:weather,
            title:"Personal Finance Management System",
            Description:"An app made using react and OpenWeatherMap which on searching displays the current weather of that particular place.",
            link:""
            
        },
        {
           
            src:news,
            title:"Fake news detection",
            Description:"An app made using react and NewsApi which fetches the latest news and displays them into different fields.",
            link:""
        },
        {
            
            src:textutils,
            title:"Learning Management System",
            Description:"A simple react App which executes different operations on a text.",
            link:""
        },
        {
           
            src:tindog,
            title:"TinDog",
            Description:"A simple website made using html, css and bootstrap.",
            link:"https://github.com/AjaySingh-a/TinDog.git"
            
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
                        <p className="md:text-left mx-5 mb-5 mt-5">{value.Description}</p>
                        <div className="flex items-center justify-center my-5 ">
                        <a href={value.link} target="_blank" rel="noreferrer">
                        <button className="px-5 py-3 shadow shadow-pink-600 rounded-lg bg-pink-600 duration-200 hover:scale-105">View Project</button>
                        </a>
                        </div>
                    </div>

                    ))}
                    </div>

                   
                    </motion.div>
                   
        </section>
    )
}

export default Project;