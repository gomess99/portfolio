import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";

function Home(){
    return(
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;