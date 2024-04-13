import React, { Suspense, useState } from 'react';
import './Profile.scss';
import { TfiVideoCamera } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import ProfilePhoto from '../../Image/testimonials-2.jpg';
import { FaLocationPin } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { TfiZoomIn } from "react-icons/tfi";
import Swal from 'sweetalert2';
import { MdEdit } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import Loading from '../Loading/Loading';
import Evetns from './EventsFile';

const ImageUpdate = React.lazy(() => import("../Previews/ImageUpdate/ImageUpdate"));
const SkillsUpdate = React.lazy(() => import("../Previews/AddSkill/AddSkills"));
const UpdateSkills = React.lazy(() => import("../Previews/UpdateSkill/UpdateSkill"));
const UpdateBudGet = React.lazy(() => import("./../Previews/BudGet/BudGet"));
const UpdateCameraType = React.lazy(() => import("./../Previews/TypeOfCamera/TypeOfCamera"));
const UpdatePersonalinfromation = React.lazy(() => import("./../Previews/UpdatePersonalinfromation/UpdatePersonalinfromation"));
const UpdateEventsInformation = React.lazy(() => import('../Previews/EventsUpdates/EventsUpdate'));
const AddEventInformation = React.lazy(() => import("../Previews/EventsAdding/EventsAdd"));


export default function Profile({ children, Personal, Moving, Edit }) {
    const [UpdateProfileImage, setUpdateProfileImage] = useState(false);
    const [AddSkills, setAddSkills] = useState(false);
    const [SkillUpdate, setSkillUpdate] = useState(false);
    const [BudGetUpdate, setBudGetUpdate] = useState(false);
    const [CameraType, setCameraType] = useState(false);
    const [UpdatePersonal, setUpdatePersonal] = useState(false);
    const [UpdateEvents, setUpdateEvents] = useState(false);
    const [AddEvent, setAddEvent] = useState(false)

    let Skills = `
    -Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates? 
    -Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates?
    -Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates?
    -Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates?
    `
    const ShowImageDetails = (Image, Title, date, Desc) => {
        Swal.fire({
            showConfirmButton: false,
            backdrop: 'rgb(62 155 219 / 39%)',
            html: `
                    <div class="Inside_Sweet row w-100">
                          <img src="${Image}" alt="Image" class="col-md-6">
                          <div class="Inside_Sweet_description col-md-5">
                                <h1 class='h4'>${Title}</h1>
                                <p><b>Event Date: </b>${date}</p>
                                <p class="w-100">
                                   ${Desc}
                                </p>
                           </div>
                    </div>
             `,
            showCloseButton: false,
            customClass: "Sweeting"
        });
    }

    const UpdateImage = () => {
        setUpdateProfileImage(UpdateProfileImage === true ? false : true);
    }
    const AddSkill = () => {
        setAddSkills(AddSkills === true ? false : true);
    }
    const UpdateSkill = () => {
        setSkillUpdate(SkillUpdate === true ? false : true);
    }

    const ShowUpdateBudget = () => {
        setBudGetUpdate(BudGetUpdate === true ? false : true);
    }

    const ShowUpdateCameraType = () => {
        setCameraType(CameraType === true ? false : true);
    }

    const ShowPersonalInfromation = () => {
        setUpdatePersonal(UpdatePersonal === true ? false : true);
    }
    const ShowEventsUpdate = () => {
        setUpdateEvents(UpdateEvents === true ? false : true);
    }
    const ShowEventsAdding = () => {
        setAddEvent(AddEvent === true ? false : true);
    }
    return <>

        {UpdateProfileImage &&
            <Suspense fallback={<Loading />}>
                <ImageUpdate UpdateImage={UpdateImage} OldImage={ProfilePhoto} />
            </Suspense>
        }

        {AddSkills &&
            <Suspense fallback={<Loading />}>
                <SkillsUpdate AddSkill={AddSkill} />
            </Suspense>
        }

        {SkillUpdate &&
            <Suspense fallback={<Loading />}>
                <UpdateSkills UpdateSkill={UpdateSkill} Skills={Skills} />
            </Suspense>
        }

        {BudGetUpdate &&
            <Suspense fallback={<Loading />}>
                <UpdateBudGet UpdateBudget={ShowUpdateBudget} />
            </Suspense>
        }
        {CameraType &&
            <Suspense fallback={<Loading />}>
                <UpdateCameraType UpdateCameraType={ShowUpdateCameraType} />
            </Suspense>
        }

        {UpdatePersonal &&
            <Suspense fallback={<Loading />}>
                <UpdatePersonalinfromation UpdatePersonalinfromationFunction={ShowPersonalInfromation} />
            </Suspense>
        }

        {UpdateEvents &&
            <Suspense fallback={<Loading />}>
                <UpdateEventsInformation UpdateEventsShow={ShowEventsUpdate} />
            </Suspense>
        }
        {AddEvent &&
            <Suspense fallback={<Loading />}>
                <AddEventInformation AddEventsShow={ShowEventsAdding} />
            </Suspense>
        }
        {Personal && <section className='Profile_Title row w-100 p-3 justify-content-between'>
            <div className="Profile_Title_logo d-flex flex-column justify-content-center align-items-center col-md-4">
                <TfiVideoCamera />
                <span>FLash Focus</span>
            </div>
            <div className="Profile_Title_Details h-100 row justify-content-end align-items-center col-md-7">
                <div className="row col-md-8 column-gap-3 justify-content-center align-items-center ">
                    <Link to='/CameraMen' className='btn'>Photographers</Link>
                    <button to='/CameraMen' className='btn'>Send Message</button>
                </div>
            </div>
        </section>}

        <section className='Main_Profile row align-content-start' style={Moving && { position: "relative", top: "80px" }}>
            <div className="Main_Profile_Pt1 col-lg-4 col-md-5 row  p-4">
                <div className="Main_Profile_Pt1_Image w-100 d-flex flex-column justify-content-center align-items-center">
                    <img src={ProfilePhoto} alt="..." loading='lazy' />
                    {Edit && <span className='Edit Pos' onClick={UpdateImage}><MdEdit /></span>}
                </div>
                <hr className='mt-4 mb-0' />
                <div className="Main_Profile_Pt1_Work col-md-12 mt-3 position-relative">
                    <h1 className='h5'>Skills</h1>
                    <div className='mt-4 mb-3 w-100'>
                        {Skills.split("-").map((ele, index) => <span className='d-block' key={index}>{ele}</span>)}
                    </div>
                    {Edit && <div className="position-absolute d-flex align-items-center top-0 end-0 column-gap-1">
                        <span className='Edit' onClick={UpdateSkill}><MdEdit /></span>
                        <span className='Edit m-0 fs-4' onClick={AddSkill}><MdOutlineAdd /></span>
                    </div>}
                </div>
                <hr className='m-0' />
                <div className="Main_Profile_Pt1_Work col-md-12 mt-3 position-relative">
                    <h1 className='h5'>BudGet</h1>
                    <ul>
                        <li>25$ per hour</li>
                    </ul>
                    {Edit && <span className='Edit position-absolute end-0 top-0' onClick={ShowUpdateBudget}><MdEdit /></span>}
                </div>
                <hr className='m-0' />
                <div className="Main_Profile_Pt1_Work col-md-12 mt-3 position-relative">
                    <h1 className='h5'>Camera Type</h1>
                    <ul>
                        <li>Camera type</li>
                    </ul>
                    {Edit && <span className='Edit position-absolute end-0 top-0' onClick={ShowUpdateCameraType}><MdEdit /></span>}
                </div>
            </div>
            <div className="Main_Profile_Pt2 col-lg-8 col-md-7 p-4 position-relative">
                <article className='position-relative'>
                    <h1 className='h2 w-100'>Anne Maria </h1>
                    {Edit && <span className='Edit position-absolute' onClick={ShowPersonalInfromation}><MdEdit /></span>}
                    <ul className='list-unstyled'>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, tenetur corporis. Accusantium delectus
                            eveniet architecto eius! Exercitationem rerum ipsum atque laborum eaque? Cum libero ratione aliquam!
                            Voluptates, ex doloremque! Illo sit maiores maxime harum earum nulla, a aspernatur qui similique
                            reiciendis, magni ipsam consectetur? Fugit deleniti earum voluptas incidunt error. Dolor perspiciatis
                            nam aliquid facere nobis debitis reprehenderit itaque neque velit quaerat perferendis aspernatur at,
                            quas, iusto, odio distinctio illo illum vero error id eaque voluptatum corrupti totam. Recusandae
                            incidunt, vel, porro architecto eaque est officia cum iusto, amet nobis accusantium earum assumenda.
                            Itaque ipsum, aperiam voluptas, fugit molestias doloremque facilis totam magni repellat nemo sint
                            nesciunt dolor quidem aliquid porro neque culpa exercitationem accusamus. Pariatur aspernatur dolor
                            provident consequuntur rem debitis, soluta nobis, quibusdam fugit praesentium dolorem, quia esse?
                        </li>
                    </ul>
                    <span className='fw-bold opacity-75'>PhotoGrapher</span>
                    <h2 className='h6 d-flex align-items-center opacity-75 column-gap-2 mt-2'>
                        <FaLocationPin />8 Matar Street, Elnozha , Cairo
                    </h2>
                    <p className='fs-4 mb-0'>Rating</p>
                    <div className='d-flex column-gap-2 align-items-center'>
                        <span className='fs-5'>4</span>
                        <div>
                            <FaStar className='Gold' />
                            <FaStar className='Gold' />
                            <FaStar className='Gold' />
                            <FaStar className='Gold' />
                            <FaStar className='opacity-25' />
                        </div>
                    </div>
                    <p className='fs-4 mb-0 d-flex align-items-center column-gap-2'><IoPersonSharp /> About</p>
                    <p className='fs-5 mb-0 fw-bold opacity-50 mt-2'>Contact information</p>
                    <ul className='list-unstyled'>
                        <li className='mt-2'><b>Phone: </b>01030602579</li>
                        <li className='mt-1'><b >Email Address: </b>Anne@gmail.com</li>
                        <li className='mt-2'><b>Birthday Date: </b>5 Feb 2002</li>
                    </ul>
                    <hr />
                    <div className="position-relative d-flex column-gap-3 align-items-center">
                        <h2 className='h5'><FaFolderOpen /> Portfolio</h2>
                        {Edit &&
                            <div className="position-absolute d-flex align-items-center end-0 column-gap-2">
                                <span className='Edit' onClick={ShowEventsUpdate}><MdEdit /></span>
                                <span className='Edit m-0 fs-4' onClick={ShowEventsAdding}><MdOutlineAdd /></span>
                            </div>
                        }
                    </div>
                </article>
                <div className="Portfolio_Setions row gap-1 position-relative">
                    {Evetns.map((ele) => <div className="PortImage mt-2" key={ele.id}>
                        <img src={ele.ImageEvent} alt="..." loading='lazy' />
                        <div className="PortImage__content">
                            <TfiZoomIn onClick={() => ShowImageDetails(ele.ImageEvent, ele.Title, ele.Date, ele.desc)} />
                        </div>
                    </div>)}
                </div>
                {children}
            </div>
        </section >
    </>
}
