import React from 'react'
import { Link } from 'react-router-dom';

// typing animation module
import Typewriter from 'typewriter-effect';

// tech stack icon
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

// download icon
import { IoCloudDownload } from "react-icons/io5";

// project section icon
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";



function Home() {
    return (
        <>

            <div className='container bg-light rounded my-4 p-5' id='Home'>
                <div className="row">
                    <div className='col-md-8' data-aos="fade-up" data-aos-duration='2500'>

                        <h2 style={{ fontFamily: 'Sedan SC, serif' }}><Typewriter options={{ autoStart: true, loop: true, delay: 100, strings: ["Hi I'm Kumaran"] }} /></h2>
                        <p className='text-secondary'>A Passionate Front-end React Developer.</p>
                    </div>
                    <div className='col-md-4 shadow rounded bg-warning mt-3 mt-md-0' data-aos="fade-up" data-aos-duration='2000'>
                        <h2 className='text-center py-md-4 py-2' style={{ fontFamily: 'Jaro, sansSerif', fontOpticalSizing: 'auto' }}>Front-End Developer</h2>
                    </div>
                </div>
            </div>


            {/* About */}
            <div className="container bg-light p-5 mb-5" id='About'>
                <div>
                    <div className="row justify-content-between">
                        <h2 className='col-12 col-md-6' style={{ fontFamily: 'Sedan SC, serif' }} data-aos="fade-up" data-aos-duration='1500'>Do you Wanna Know Who I am ?</h2>


                        <div className='col-12 col-md-6 text-md-end my-3 my-md-0' >

                            {/* resume download link */}
                            <a className='btn btn-dark px-sm-3 p-0 py-2' href="Your resume link eg: ./resume.pdf" download="Resume.pdf" data-aos="fade-up" data-aos-duration='2000'>Download CV <IoCloudDownload className='mx-md-2' size='1.5rem' color='white' /></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration='2000'>

                        <h4 className='mt-4' style={{ fontFamily: 'Sedan SC, serif' }}>A dedicated Front-end Developer</h4>
                        <p className='text-secondary col-lg-6'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap.
                            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing
                            cutting-edge development tools and techniques.</p>
                        <p className='d-flex'>Tech Stack <span className='px-4'>|</span> <FaHtml5 className='mx-3' size='1.8rem' color='red' />
                            <FaCss3Alt size='1.8rem' color='blue' /><IoLogoJavascript className='mx-4' size='1.8rem' color='gold' /><FaReact size='1.8rem' color='skyblue' /><FaBootstrap className='mx-4' size='1.8rem' color='blueViolet' /></p>
                        <p className='m-0 mb-1'>If you need My Resume you can Download above...</p>

                    </div>
                </div>
            </div>



            {/* skill section */}
            <div className="container bg-light my-5" id='Skills'>
                <div className="text-center" data-aos="fade-up" data-aos-duration='1500'>
                    <h2 className="pt-5" style={{ fontFamily: 'Sedan SC, serif' }}>Skills</h2>
                    <hr className='mx-auto' size='4' color='black' width='70%' />
                </div>
                <p className="text-center text-secondary" data-aos="fade-up" data-aos-duration='1500'>Skills that I have with deep Knowledge in that...</p>
                <div className="row  p-5 pb-0" >

                    <div className="col-md-3" data-aos="fade-up" data-aos-duration='1500'>
                        <div className="card mb-5 border-0 shadow">
                            <img className='card-img-top w-50' src="../assets/Html_card_img.jpeg" alt="" data-aos="fade-up" data-aos-duration='2500' />
                            <div className="card-body pt-4 mb-4" data-aos="fade-up" data-aos-duration='2500'>
                                <h2 className="card-title px-2" style={{ fontFamily: 'Sedan SC, serif' }}>HTML</h2>
                                <p className="card-text px-2 text-secondary" >I have deep knowledge in HTML with well skilled person to create a website on that.</p>
                                <button className="btn btn-white mx-2 text-success shadow border-0" style={{ fontFamily: 'Sedan SC, serif' }}>EXPERT</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3" data-aos="fade-up" data-aos-duration='1500'>
                        <div className="card mb-5 border-0 shadow">
                            <img className='card-img-top w-50' src="../assets/Css_card_img.jpeg" alt="" data-aos="fade-up" data-aos-duration='2500' />
                            <div className="card-body pt-4 mb-4" data-aos="fade-up" data-aos-duration='2500'>
                                <h2 className="card-title px-2" style={{ fontFamily: 'Sedan SC, serif' }}>CSS</h2>
                                <p className="card-text px-2 text-secondary" >In CSS I knew end-to-end part, to minimize the CSS code I have learned Bootstrap.</p>
                                <button className="btn btn-white mx-2 text-success shadow border-0" style={{ fontFamily: 'Sedan SC, serif' }}>EXPERT</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3" data-aos="fade-up" data-aos-duration='1500'>
                        <div className="card mb-5 border-0 shadow">
                            <img className='card-img-top w-50' src="../assets/JavaScript_card_img.png" alt="" data-aos="fade-up" data-aos-duration='2500' />
                            <div className="card-body py-4 mb-4" data-aos="fade-up" data-aos-duration='2500'>
                                <h2 className="card-title px-2" style={{ fontFamily: 'Sedan SC, serif' }}>JavaScript</h2>
                                <p className="card-text px-2 text-secondary" >JavaScript is most powerful scripting language to make a website dynamically.</p>
                                <button className="btn btn-white mx-2 text-success shadow border-0" style={{ fontFamily: 'Sedan SC, serif' }}>INTERMEDIATE</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3" data-aos="fade-up" data-aos-duration='1500'>
                        <div className="card mb-5 border-0 pb-1 shadow">
                            <img className='card-img-top w-75' src="../assets/React_card_img.png" alt="" data-aos="fade-up" data-aos-duration='2500' />
                            <div className="card-body pt-4 mb-4" data-aos="fade-up" data-aos-duration='2500'>
                                <h2 className="card-title px-2" style={{ fontFamily: 'Sedan SC, serif' }}>React js</h2>
                                <p className="card-text px-2 text-secondary" >React is a JavaScript library to make a website like a App and it is easy to Learn.</p>
                                <button className="btn btn-white mx-2 text-success shadow border-0" style={{ fontFamily: 'Sedan SC, serif' }}>INTERMEDIATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* project */}
            <div className="container bg-light" id='Projects'>
                <h2 className='text-center pt-5 mx-3 ' style={{ fontFamily: 'Sedan SC, serif' }} data-aos="zoom-in" data-aos-duration='2000'>Each Project is a Unique Piece of Development</h2>
                <p className="text-center text-secondary" data-aos="zoom-in" data-aos-duration='2000'>I have guts to build a responsive project using trend technology...</p>


                <div className="row justify-content-center m-3 py-4 ">

                    <div className="col-md-3 bg-white">
                        <img className='p-3' width='100%' src="./assets/GymProject.png" alt="" data-aos="fade-up" data-aos-duration='2500' />
                    </div>
                    <div className="col-md-3 bg-white">
                        <div className="mt-3 px-4" data-aos="fade-up" data-aos-duration='2500'>
                            <h3 style={{ fontFamily: 'Sedan SC, serif' }}>Gym website</h3>
                            <p className='text-secondary' style={{ fontFamily: 'Kolker Brush, cursive' }}>It is a freelancing gym websiteit, The main motive is my client asked this website. It is fully responsive. </p>
                            <div>
                                <span className='h6'>#React js</span> <span className='h6 px-3'>#Bootstrap</span>

                            </div>


                            <div className="row my-4">

                                {/* Project github and demo link here */}
                                <Link className='btn btn-warning border-0 col p-0 py-2 mx-2' to=" your github link eg: https://github " target='blank'>Code <FaGithub className='mx-1' size='1.1rem' /></Link>
                                <Link className="btn btn-warning border-0 col px-2 mx-2" to=' your demo link here eg: https:// demo ' target='blank'>Live Demo <FaExternalLinkAlt className='mx-1 p-1 border-0' size='1.4rem' /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container bg-light mb-5">
                <div className="row justify-content-center m-3 py-4">
                    <div className="col-md-3 bg-white">
                        <div className="mt-3 px-3" data-aos="fade-up" data-aos-duration='2500'>
                            <h3 style={{ fontFamily: 'Sedan SC, serif' }}>Freelancing website</h3>
                            <p className='text-secondary' style={{ fontFamily: 'Kolker Brush, cursive' }}>It is a freelancing website. I done this website for my final intern project, we use Firebase for Authentication purpose and Realtime Database.</p>
                            <div>
                                <span className='h6'>#React js</span> <span className='h6 px-3'>#Bootstrap</span>
                                <span className='h6'>#Firebase</span>
                            </div>
                            <div className="row my-4">

                                {/* Project github and demo link here */}
                                <Link className='btn btn-warning border-0 col p-0 py-2 mx-2' to=" your github link eg: https://github " target='blank'>Code <FaGithub className='mx-1' size='1.1rem' /></Link>
                                <Link className='btn btn-warning border-0 col px-2 mx-2' to=" your demo link here eg: https:// demo " target='blank'>Live Demo <FaExternalLinkAlt className='mx-1 p-1' size='1.4rem' /></Link>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3 bg-white">
                        <img className='p-3' width='100%' src="./assets/FreelancingProject.png" alt="" data-aos="fade-up" data-aos-duration='2500' />
                    </div>

                </div>
            </div>





            {/* Education */}
            <div className="container bg-light p-5 mb-5" id='Education'>
                <h4 className="text-md-center mb-5" style={{ fontFamily: 'Sedan SC, serif' }} data-aos="fade-up" data-aos-duration='1500'> <img src="../assets/books.png" width='35px' className='mx-3 mx-md-5' alt="" />Education <img src="../assets/books.png" width='35px' className='mx-3 mx-md-5' alt="" /></h4>

                <div className='mb-5 shadow rounded p-4 bg-white'>
                    <div className="row pb-3" data-aos="fade-up" data-aos-duration='2000'>
                        <h3 className='col text-success'><img src="../assets/student.png" className='mx-2 mx-md-3' width='40px' alt="" />10<small>th</small></h3>
                        <p className='col text-end'>2016 - 2017</p>
                    </div>
                    <div className="px-md-4" data-aos="fade-up" data-aos-duration='2500'>
                        <h5>KRM.HR.SEC.SCHOOL</h5>
                        <p>I have done my 10th standard with a good percentage</p>
                        <p className='btn btn-white shadow border-light-subtle  px-4 mt-4'>PERCENTAGE - 61 %</p>
                    </div>

                </div>

                <div className='mb-5 shadow rounded p-4 bg-white'>
                    <div className="row pb-3" data-aos="fade-up" data-aos-duration='2000'>
                        <h3 className='col text-success'><img src="../assets/student.png" className='mx-2 mx-md-3' width='40px' alt="" />12<small>th</small></h3>
                        <p className='col text-end'>2019 - 2020</p>
                    </div>
                    <div className="px-md-4" data-aos="fade-up" data-aos-duration='2500'>
                        <h5> KRM.HR.SEC.SCHOOL</h5>
                        <p>In my 12th, I have done computer Science and Maths group and got a good percentage.</p>
                        <p className='btn btn-white shadow border-light-subtle px-4 mt-4'>PERCENTAGE - 66 % </p>
                    </div>
                </div>

                <div className='mb-5 shadow rounded p-4 bg-white'>
                    <div className="row pb-3" data-aos="fade-up" data-aos-duration='2000'>
                        <h3 className='col text-success'><img src="../assets/graduation-hat.png" className='mx-2 mx-md-3' width='40px' alt="" />Clg</h3>
                        <p className='col text-end'>2021 - 2024</p>
                    </div>

                    <div className="px-md-4" data-aos="fade-up" data-aos-duration='2500'>
                        <h5>Agni college of Technology</h5>
                        <p>I have done my BE computer Science and Engineering with 8.1 CGPA in Anna University.</p>
                        <p className='btn btn-white shadow border-light-subtle px-5 mt-4'>CGPA - 8.1</p>
                    </div>
                </div>
            </div>






            {/* Contact */}
            <div className="container bg-light p-5" id='Contact'>
                <div className="row justify-content-center">
                    <div className="col-md-8 rounded shadow p-5 bg-white">

                        <div className="contact-form">
                            <h4 className="mb-3 text-md-center" style={{ fontFamily: 'Sedan SC, serif' }} data-aos="fade-up" data-aos-duration='1500'>
                                <img src="../assets/chat.png" className='mx-md-3' width='30px' alt="" /> GET IN TOUCH
                            </h4>

                            {/* your email id enter here */}
                            <form action="mailto: Aswin@gmail.com" method='post' enctype="text/plain">

                                <div className="form-group mb-4" data-aos="fade-up" data-aos-duration='2500'>
                                    <label for="name" className='pb-2 px-1'>Name</label>
                                    <input className="form-control border-0 bg-light" type='text' id='name' name='Name  ' autoComplete='off' placeholder='Enter your Name' required />
                                </div>

                                <div className="form-group mb-5" data-aos="fade-up" data-aos-duration='2500'>
                                    <label for="number" className='pb-2 px-1'>Phone Number</label>
                                    <input type="number" className="form-control border-0 bg-light" id='number' name='Phone Number  ' autoComplete='off' placeholder='Enter your Number' required />
                                </div>

                                <div className="form-group mb-3" data-aos="fade-up" data-aos-duration='2500'>
                                    <label for="message" className='pb-2 px-1'>Message</label>
                                    <textarea className="form-control border-0 bg-light" name='Message  ' rows="5" required></textarea>
                                </div>

                                <button type='submit' className='btn btn-warning' data-aos="fade-up" data-aos-duration='2000'>Submit</button>

                            </form>
                        </div>

                    </div>


                </div>
            </div>



            {/* footer */}
            <div className="container-fluid bg-dark text-light mt-5">
                <footer className="pt-5 px-5">
                    <div className="row mb-5">
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration='1500'>
                            <h3 className='pt-3' style={{ fontFamily: 'Sedan SC, serif' }}>Portfolio <img src="../assets/portfolio.gif" className='mx-3' width='40px' alt="" /></h3>
                            <span>Home <br /></span>
                            <span>Skills <br /></span>
                            <span>Projects <br /></span>
                            <span>Education</span>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration='1500'>
                            <h3 className='py-3' style={{ fontFamily: 'Sedan SC, serif' }}>Address</h3>
                            <p>No 15/E Marutham street Perungudi chennai, <span> <br />TamilNadu, India.</span></p>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration='1500'>
                            <h3 className='py-3 mx-1' style={{ fontFamily: 'Sedan SC, serif' }}>Contact Me</h3>
                            <span><img src="../assets/gmail.png" className='mx-2 mb-1' width='20px' alt="" />muthu19032003@gmail.com <br /></span>
                            <span><img src="../assets/phone.png" className='mx-2' width='20px' alt="" /> 9840247340</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top ">
                        <p>&copy; {new Date().getFullYear()} Portfolio, All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <Link to='https://www.instagram.com/__kumaran.n__/?hl=en' target='blank'><img src="../assets/instagram.png" width="40px" alt="" /></Link>
                            <Link to='https://github.com/Muthukumaran45' target='blank'><img className="mx-3" src="../assets/github.png" width="40px" alt="" /></Link>
                            <Link to='https://www.linkedin.com/in/muthu-kumaran-n-9b346b260/' target='blank'><img className="mx-1" src="../assets/linkedIn.png" width="40px" alt="" /></Link>
                        </ul>
                    </div>
                </footer>

            </div>

        </>
    )
}

export default Home;
