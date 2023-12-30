import React from "react";
import "./Home.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";
import SectionProject from "../../SectionProject/SelectionProject";
import SectionTools from "../../SectionTools/SectionTools";
import SectionFormation from "../../SectionFormation/SectionFormation";
import SectionContacts from "../../SectionContacts/SectionContacts";

function Home(){
    return(
        <div>
            <Navbar />
            <Main />
            <SectionProject />
            <SectionTools />
            <SectionFormation />
            <SectionContacts />
            <Footer />
        </div>
    )
}

export default Home;