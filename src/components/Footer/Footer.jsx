import './Footer.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_pt1">
                <div className="Footer_pt1_1">
                    <h2>CameraMan <CameraAltIcon className='Logo' /></h2>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra.
                        Justo eget nada terra videa magna derita valies darta
                        donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                    <div className="Footer_pt1_1_Icons">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="Footer_pt1_2">
                    <p>Useful Links</p>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Camer Men</Link></li>
                        <li><Link to='/'>Jobs</Link></li>
                        <li><Link to='/'>Events</Link></li>
                    </ul>
                </div>
                <div className="Footer_pt1_3">
                    <p>Explore</p>
                    <ul>
                        <li><Link>Events</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link to='/ContactUs'>Contact</Link></li>
                    </ul>
                </div>
                <div className="Footer_pt1_4">
                    <p>Contact Us</p>
                    <ul>
                        <li>A108 Adam Street</li>
                        <li>New York, NY 535022</li>
                        <li>United States</li>
                    </ul>
                    <span><b>Email:</b> info@example.com</span>
                    <span><b>Phone:</b> 01030602579</span>

                </div>
            </div>
        </div>
    )
}