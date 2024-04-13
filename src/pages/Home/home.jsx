import { useEffect, useState } from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Events } from "../../components/Events/Events";
import { Footer } from "../../components/Footer/Footer";
import { Intro } from "../../components/Intro/Intro";
import { Nav } from "../../components/Nav/Nav";
import { Portfoilio } from "../../components/Portfolio/Portfolio";
import { Service } from "../../components/Service/Service";
import { Contact } from './../../components/ContactUs/ContactUs';
import Loading from "../../components/Loading/Loading";
export function Home() {

    const [Loader, setLoader] = useState(true);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoader(false);
        }, 400);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return <>
        {Loader ? <Loading /> : <>
            <Nav BackGround={true} />
            <Intro />
            <AboutUs />
            <Service />
            <Portfoilio />
            <Events />
            <Contact />
            <Footer />
        </>}

    </>
}