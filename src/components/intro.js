import React from 'react';
import BG from './../assets/intro4.jpeg';
import profile from './../assets/SINGHA.jpg';

const ProfilePage = ({ scrollToSection, contactRef }) => {
    return (
        <div className="profile-page">
            <div className="wrapper">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: `url(${BG})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '80vh', // Adjusted to 80vh
                        filter: 'brightness(0.9)',
                    }}
                >
                    <div className="mx-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                        <div className="content-center flex flex-col items-center justify-center text-center h-full">
                            <div className=" mb-4 relative ">
                                <a href="#">
                                    <img src={`${profile}`} alt="Himadri Kumar Singha" className="rounded-full w-32 h-32 md:w-40 md:h-40 ring-4" />
                                </a>
                            </div>
                            <h1 className="text-4xl font-bold text-[#fff]">Himadri Kumar Singha</h1>
                            <p className="category text-white text-lg font-semibold mt-2 uppercase">DevOps Engineer</p>
                            <div className="flex mt-4">
                                <a
                                    className="mt-2 mr-2 bg-cyan-600 p-2 px-4 cursor-pointer text-white"
                                    onClick={() => scrollToSection(contactRef)}
                                    data-aos="zoom-in"
                                >
                                    Hire Me
                                </a>
                                <a className="mt-2 bg-cyan-600 p-2 px-4 cursor-pointer text-white" href="https://drive.google.com/file/d/1Sv3bXKpIzDZkJdFwzqGakiOqJfTfJyjN/view?usp=drive_link
" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="section -mt-8">
                        <div className="container mx-auto">
                            <div className="flex justify-center space-x-4">
                                <a className="btn btn-default btn-round btn-lg text-xl btn-icon bg-cyan-600 p-2 w-14 h-14 rounded-full text-white text-center flex items-center justify-center" href="https://www.facebook.com/shreddedsingha?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" title="Follow me on Facebook">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon text-xl bg-cyan-600 p-2 w-14 h-14 rounded-full text-white text-center flex items-center justify-center" href="https://www.instagram.com/shreddedsingha/profilecard/?igsh=OHNxYWs1ZTdrbmt0/" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon text-xl bg-cyan-600 p-2 w-14 h-14 rounded-full text-white text-center flex items-center justify-center" href="https://www.linkedin.com/in/himadri-singha-b07152301/" target="_blank" rel="noopener noreferrer" title="Follow me on LinkedIn">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon text-xl bg-cyan-600 p-2 w-14 h-14 rounded-full text-white text-center flex items-center justify-center" href="https://github.com/HimadriSingha/" target="_blank" rel="noopener noreferrer" title="Follow me on GitHub">
                                    <i class="fa-brands fa-square-github"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon text-xl bg-cyan-600 p-2 w-14 h-14 rounded-full text-white text-center flex items-center justify-center" href="mailto:himadrisingha2001@gmail.com?subject=Feedback&body=Hii mayank! I liked your portfolio" target="_blank" rel="noopener noreferrer" title="Send me an email">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
