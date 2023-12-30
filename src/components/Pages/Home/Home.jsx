import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";
import SelectionProject from "../../SectionProject/SelectionProject";

function Home(){
    return(
        <div>
            <Navbar />
            <Main />
            <SelectionProject />
            <Footer />
        </div>
    )
}

export default Home;