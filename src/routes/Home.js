import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/Hero/About";
 
const Home = () => {
    return (
        <section id="home">
            <Hero/>
            <About/>
        </section>
    );
};

export default Home