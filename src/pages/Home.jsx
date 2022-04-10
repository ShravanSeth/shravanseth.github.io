import React from "react";
import MainSlider from "../components/Home/mainSlider/mainSlider";
import {projects as Projects}  from "../components/Home/RecentProjects/projects";
import { about as About} from "../components/Home/About/about";
import Experience from "../components/Home/Experience/experience";

const Home = () => {
    return(
        <>
        <MainSlider />
        <About/>
        <Experience/>
        <Projects />
        </>
    );
}

export default Home;