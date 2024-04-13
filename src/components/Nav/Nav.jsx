import { Link, useLocation } from 'react-router-dom';
import './Nav.scss'
import { TfiVideoCamera } from "react-icons/tfi";
import { useEffect, useState } from 'react';
export function Nav({ BackGround }) {
    const Location = useLocation();
    const [Scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset !== 0);
        };

        if (BackGround) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setScrolled(true);
        }
    }, [BackGround]);

    return (
        <nav className={!Scrolled ? 'MainNavScroll' : ''}>
            <div className={Scrolled ? "left leftScrolled" : "left leftNotScrolled"}>
                <TfiVideoCamera className='Logo' />
                <span className='fs-6'>Frame By Frame</span>
            </div>
            <div className={Scrolled ? "center centerScrolled" : "center centerNotScrolled"}>
                <Link className={Location.pathname === '/' ? 'ActiveLink' : ""} to="/">Home</Link>
                <Link className={Location.pathname === '/Events' ? 'ActiveLink' : ""} to='/Events'>Events</Link>
                <Link className={Location.pathname === '/CameraMen' ? 'ActiveLink' : ""} to='/CameraMen'>Photographers</Link>
                <Link className={Location.pathname === '/ContactUs' ? 'ActiveLink' : ""} to='/ContactUs'>Contact us</Link>
            </div>
            <div className={Scrolled ? "right rightScrolled" : "right rightNotScrolled"}>
                <Link className='btn' to="/Login">Login</Link>
                <Link className='btn' to='/SignUp'>Sign Up</Link>
            </div>
            <div className={Scrolled ? "sideBarButton sideBarButtonScrolled" : "sideBarButton sideBarNotButtonScrolled"}>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Flash Focus</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Events'>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/CameraMen'>Camera Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                        <div className="ButtonSlide">
                            <Link className='btn' to="/Login">Login</Link>
                            <Link className='btn' to='/Signup'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}