import "./home.css"
import slideImage1 from '../../assets/home/slide-1.jpg'
import slideImage2 from '../../assets/home/slide-2.jpeg'
import slideImage3 from '../../assets/home/slide-3.jpg'
import slideImage4 from '../../assets/home/slide-4.jpg'
import cardImage1 from "../../assets/home/card-1.jpg"
import cardImage2 from "../../assets/home/card-2.jpg"
import cardImage3 from "../../assets/home/card-3.jpg"
import aboutImage from "../../assets/home/about.png";


import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from "react"
function home() {

    const [activeOne, setActiveOne] = useState(false)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFour, setActiveFour] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Change images every 4 secondsse
            setActiveOne(false)
            setActiveTwo(false)
            setActiveThree(false)
            setActiveFour(false)
        }, 7000);
        if (activeIndex == 0) {
            setActiveOne(true)
        }
        if (activeIndex == 1) {
            setActiveTwo(true)
        }
        if (activeIndex == 2) {
            setActiveThree(true)
        }
        if (activeIndex == 3) {
            setActiveFour(true)
        }
        return () => {
            clearInterval(interval)
        }

    }, [activeOne, activeTwo, activeThree, activeFour])

    return (
        <>
            <section className="carousel-section" id="home">
                <div id="carouselExampleFade" className="carousel carousel-fade" data-bs-ride={false} data-bs-interval={false} data-bs-pause={false}>
                    <div className="carousel-inner">

                        <AnimatePresence>
                            {activeOne && <motion.div
                                className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1.5
                                }}
                            >
                                <img src={slideImage1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    {activeOne && <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6 }}
                                    >
                                        <span>Empowering</span> you to live your healthiest life..
                                    </motion.h1>}
                                    {activeOne && <motion.p className="text-bold"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6, delay: .3 }}
                                    >
                                        “Good health is not something we can buy. However, it can be an
                                        extremely valuable savings account.” – <span>Anne Wilson Schaef</span>
                                    </motion.p>}
                                </div>
                            </motion.div>}
                        </AnimatePresence>

                        <AnimatePresence>
                            {activeTwo && <motion.div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1.5
                                }}
                            >
                                <img src={slideImage2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    {activeTwo && <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6 }}
                                    ><span>Live Well:</span> Your Guide to a Healthier, Happier You,</motion.h1>}
                                    {activeTwo && <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6, delay: .3 }}
                                    >
                                        " Health is the greatest gift, contentment the greatest wealth,
                                        faithfulness the best relationship.” – <span>Buddha</span>.
                                    </motion.p>}
                                </div>
                            </motion.div>}
                        </AnimatePresence>

                        <AnimatePresence>
                            {activeThree && <motion.div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1.5
                                }}
                            >
                                <img src={slideImage3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    {activeThree && <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6 }}
                                    >
                                        <span>The Recipe for Wellbeing: </span>Healthy Food Tips for Every Plate
                                    </motion.h1>}
                                    {activeThree && <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6, delay: .3 }}
                                    >
                                        “The doctor of the future will no longer treat the human frame
                                        with drugs, but rather will cure and prevent disease with
                                        nutrition.” –<span> Thomas Edison, inventor and businessman</span>
                                    </motion.p>}
                                </div>
                            </motion.div>}
                        </AnimatePresence>

                        <AnimatePresence>
                            {activeFour && <motion.div className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1.5
                                }}
                            >
                                <img src={slideImage4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    {activeFour && <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6 }}
                                    >
                                        <span>Move Your Body, Move Your Life: </span>Fitness Tips for a Healthy You
                                    </motion.h1>}
                                    {activeFour && <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{
                                            y: 0, opacity: 1
                                        }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: .6, delay: .3 }}
                                    >
                                        “The real workout starts when you want to stop.” –<span> Ronnie
                                            Coleman</span>
                                    </motion.p>}
                                </div>
                            </motion.div>}
                        </AnimatePresence>


                    </div>
                </div>
            </section>
            <section id="services" className="service-sec">
                <div className="heading text-center my-5   ">
                    <span className=" border-bottom border-4 border-info px-5  h1 ">
                        SERVICES
                    </span>
                </div>

                <div className="row card-container mb-5">
                    <div className="col-lg-4 col-md-6 p-lg-0 pt-5">
                        <motion.div
                            className="card card-s mx-auto border-0 shadow"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.img src={cardImage1} className="card-img-top" alt="..."
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: .3 }}
                                viewport={{ once: true }}
                            />
                            <div className="card-body">
                                <motion.h5 className="card-title border-bottom pb-2  border-3 border-info"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Healthy Eating
                                </motion.h5>
                                <motion.p className="card-text "
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.4, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Explore nutritious recipes, meal planning tips, and dietary
                                    guidelines to help you make healthier food choices. Learn about
                                    the benefits of various foods and how they can support your
                                    {/* overall health and vitality. Discover practical strategies for
                incorporating more fruits, vegetables, whole grains, and lean
                proteins into your diet. */}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>


                    <div className="col-lg-4 col-md-6 p-lg-0 pt-5">
                        <motion.div
                            className="card card-s mx-auto  border-0 shadow"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.img src={cardImage2} className="card-img-top" alt="..."
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: .3 }}
                                viewport={{ once: true }}
                            />
                            <div className="card-body">
                                <motion.h5 className="card-title border-bottom pb-2  border-3 border-info"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Fitness and Exercise
                                </motion.h5>
                                <motion.p className="card-text"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.4, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Get inspired with workout routines, exercise plans, and fitness
                                    challenges designed to help you stay active and energized. Learn
                                    about different types of exercise, from cardio and strength.
                                    {/* training to yoga and Pilates, and find what works best for you. */}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-lg-0 pt-5">
                        <motion.div
                            className="card card-s mx-auto  border-0 shadow"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.img src={cardImage3} className="card-img-top " alt="..."
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: .3 }}
                                viewport={{ once: true }}
                            />
                            <div className="card-body">
                                <motion.h5 className="card-title border-bottom pb-2  border-3 border-info"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Mental Health & Wellness
                                </motion.h5>
                                <motion.p className="card-text"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.4, duration: .3 }}
                                    viewport={{ once: true }}
                                >
                                    Gain insights into maintaining good mental health, coping with
                                    challenges, and fostering resilience in times of adversity.
                                    Access resources on mindfulness, meditation, and other
                                    {/* techniques to promote emotional balance and inner peace. Learn
                about common mental health concerns such as anxiety, depression,
                and stress, and find resources for seeking help and support. */}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>



                </div>
            </section>
            <section id="about" className="about-sec">
                <div className="bg-light pb-5" >
                    {/* <MovingDot /> */}
                    <div className="heading text-center pt-5   ">
                        <span className=" border-bottom border-4 border-info px-5  h1 ">
                            ABOUT US
                        </span>
                    </div>
                    <div className="container-fluid row">
                        <div className="col-5 d-none d-lg-block">
                            <motion.img src={aboutImage} height={"425px"} alt=""
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <div className="col-12 col-lg-7">
                            <motion.div className="card mt-5 shadow border-0   mx-4"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: "0vw", opacity: 1 }}
                                transition={{ delay: .5, duration: .3 }}
                                viewport={{ once: true }}
                            >
                                {/* <h5 className="card-header">Our Passion</h5> */}
                                <div className="card-body">
                                    <motion.h5 className="card-title border-bottom border-info border-3 pb-2 mb-3"
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: "0vw", opacity: 1 }}
                                        transition={{ delay: 1, duration: .3 }}
                                        viewport={{ once: true }}
                                    >
                                        Our Passion <i className="fa-solid fa-square-check"></i>
                                    </motion.h5>
                                    <motion.p className="card-text"
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: "0vw", opacity: 1 }}
                                        transition={{ delay: 1.3, duration: .3 }}
                                        viewport={{ once: true }}

                                    >
                                        At Happy and Healthy Hub, we believe that health is not just the
                                        absence of illness but a state of complete physical, mental, and
                                        social well-being. We are committed to empowering individuals to
                                        take control of their health and make positive lifestyle changes
                                        that will enhance their quality of life.
                                    </motion.p>
                                </div>
                            </motion.div>

                            <motion.div className="card mt-5 shadow border-0  mx-4"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: "0vw", opacity: 1 }}
                                transition={{ delay: .8, duration: .3 }}
                                viewport={{ once: true }}

                            >
                                {/* <h5 className="card-header ">Our Mission</h5> */}
                                <div className="card-body">
                                    <motion.h5 className="card-title border-bottom border-info border-3 pb-2 mb-3"
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: "0vw", opacity: 1 }}
                                        transition={{ delay: 1, duration: .3 }}
                                        viewport={{ once: true }}
                                    >
                                        Our Mission <i className="fa-solid fa-bullseye"></i>
                                    </motion.h5>
                                    <motion.p className="card-text"
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: "0vw", opacity: 1 }}
                                        transition={{ delay: 1.3, duration: .3 }}
                                        viewport={{ once: true }}
                                    >
                                        Our mission is simple: to provide you with the knowledge, tools,
                                        and support you need to thrive in all aspects of your life.
                                        Whether you're looking to improve your diet, boost your fitness
                                        level, manage stress, or enhance your mental health, we're here
                                        to guide you every step of the way.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default home