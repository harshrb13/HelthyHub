import React, { useEffect, useState } from 'react'
import fitnessBanner from '../../assets/fitness/fitness-banner.jpg'
import { motion } from 'framer-motion'
import './fitness.css'
import gridImg1 from '../../assets/fitness/grid-1.jpg'
import gridImg2 from '../../assets/fitness/grid-2.jpg'
import gridImg3 from '../../assets/fitness/grid-3.jpg'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { exercises } from '../../redux/actions/exercisesAction'
import ReactPaginate from 'react-paginate';
import Spinner from 'react-bootstrap/Spinner';
import { IoIosArrowForward } from "react-icons/io";

const bannerMotion = {
  intital: {
    y: -50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      staggerChildren: .5,
    }
  }
}

function Fitness() {
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(exercises(page))
  }, [page])

  const { items, loading ,error} = useSelector(state => state.exercise)

  const handleClickEvent = (data) => {
  setPage(data.nextSelectedPage)
  }
  return (

    <section>
      <motion.div className="banner"
        variants={bannerMotion} animate="animate"
        initial="intital"
      >
        <motion.img src={fitnessBanner}
          variants={bannerMotion}
          alt="" />
        <div className="fitness-heading"
        >
          <motion.h2 variants={bannerMotion}>
            Fitness & Exercise
          </motion.h2>
          <p></p>
          <motion.span variants={bannerMotion}>"Find Balance, Find Strength: Unleash Your True Potential with Us"</motion.span>
        </div>
      </motion.div>

      <motion.div className="fitness-title" initial={{y:40 , opacity:0}} animate={{y:0,opacity:1}}
      transition={{duration:.5}}
      >
        <div className="fit-title-container">
          <h3>Fitness</h3>
          <h4>While fitness is a central part of your lifelong wellness journey, fitness should not have a one-size-fits-all approach.</h4>
          <span></span>
          <p>Staying active with regular exercise is part of a healthy lifestyle, and our health and fitness articles are here to support you and motivate you.</p>
          <p>Read a vast array of articles from certified fitness trainers, coaches and health experts as they share everything from how to get motivated, to the best fitness workouts and exercises for your specific goals, guided fitness tutorials and much more. The YouAligned Fitness section is your center for workout and fitness motivation!</p>
        </div>
      </motion.div>

      <div className="latest-fit-grid-sec">
        <h3>Latest in Fitness</h3>
        <div className="latest-fit-grid row">

          <div className="latest-fit-side-left col-lg-8 px-lg-3" >
            <div className='overflow-hidden'>
              <img src={gridImg1} alt="" style={{ width: "100%" }} />
            </div>
            <h4 className='p-sm-5 p-3'>
              Sore Muscles? Do These 7 Stretches (Plus All the Science-Backed Benefits to Motivate You)
            </h4>
          </div>

          <div className="latest-fit-side-right col-lg-4 px-2">
            <div className="row">
              <div className='col-sm-6 col-lg-12 px-lg-0 px-2'>
                <div className='overflow-hidden'>
                  <img src={gridImg2} alt="" style={{ width: "100%" }} />
                </div>
                <h4 className='mx-lg-5 py-3'>
                  What Exactly Is Wall Pilates? Plus 5 Wall Pilates Exercises to Try at Home
                </h4>
              </div>
              <div className='col-sm-6 col-lg-12 px-lg-0 px-2'>
                <div className='overflow-hidden'>
                  <img src={gridImg3} alt="" style={{ width: "100%" }} />
                </div>
                <h4 className='mx-lg-5 py-3'>
                  These Major Benefits of Pilates Will Motivate You Big Time
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='fitness-section'>
        <h2>Latest Exericise</h2>
        <p className='pline'></p>
        <div className="fitness-cardSec">
          <div className="fitness-card px-5">
            {
              loading ?
                <div className='d-flex justify-content-center align-items-center exe-loader'>
                  <Spinner />
                </div> :
                error?<p className='text-center'>{error}</p>:
                <div className="row">
                  {
                    items.map((item, index) => {
                      return <div className="col-lg-3 d-flex justify-content-center align-item-center" key={index}>
                        <Card className='my-4 exe-card' style={{ width: '17rem' }}>
                          <Card.Img variant="top" src={item.gifUrl} />
                          <Card.Body>
                            <Card.Title className='exe-card-title'>{item.name}</Card.Title>
                            <Card.Subtitle className='my-1 exe-card-subtitle'>Bodypart :
                              <span>
                                {item.bodyPart}
                              </span>
                            </Card.Subtitle>
                            <Card.Subtitle className='my-1 exe-card-subtitle'>Equipment :
                              <span>
                                {item.equipment}
                              </span>
                            </Card.Subtitle>
                            <button className='btn exe-btn'><IoIosArrowForward /></button>
                          </Card.Body>
                        </Card>
                      </div>
                    })
                  }
                </div>
            }

          </div>
          <div className="pagination-sec p-5">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onClick={handleClickEvent}
              pageCount={15}
              previousLabel="<"
              containerClassName='pagination justify-content-center'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              activeClassName='active'
              breakClassName='page-item'
              breakLinkClassName='page-link'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fitness