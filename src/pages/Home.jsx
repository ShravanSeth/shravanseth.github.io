import React from "react";
import MainSlider from "../components/Home/mainSlider/mainSlider";
import {projects as Projects}  from "../components/Home/RecentDesigns/projects";
import { about as About} from "../components/Home/About/about";
import { recentWorks as RecentWorks } from "../components/Home/RecentWorks/recentWorks";

const Home = () => {
    return(
        <>
        <MainSlider />
        <About/>
        <Projects />
        <RecentWorks/>
        </> 
    );
}

export default Home;