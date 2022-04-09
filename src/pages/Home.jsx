import React from "react";
import MainSlider from "../components/Home/mainSlider/mainSlider";
import {projects as Projects}  from "../components/Home/RecentProjects/projects";
import { about as About} from "../components/Home/About/about";
import Experience from "../components/Home/Experience/experience";
import { contact as Contact } from "../components/Home/Contact/contact";

const Home = () => {
    return(
        <>
        <MainSlider />
        <About/>
        <Experience/>
        <Projects />
        <Contact/>
        </>
    );
}

export default Home;