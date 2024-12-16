import React from "react";
import { useStyles } from "./styles";
import {
  Navigation,
  /*Pagination,*/
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import Hemanth from "../../../../Assets/Hemanth_sairsm.jpg";
import Jaishankar from "../../../../Assets/Jai_shankar_reddy.jpg";
import Krishna from "../../../../Assets/Krishna.jpg";
import Laxman from "../../../../Assets/Laxman_eadala.jpg";
import Pavan from "../../../../Assets/Pavan_Kumar.jpg";
import Vinod from "../../../../Assets/Vinod_kumar.jpg";
// import Zeenath from "../../../../../Assets/Zeenath_kousar.jpg";

const Instructors = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.instructorhead}>Meet your Instructors</h3>
      <Box className={classes.instructormain}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, /*Pagination, */ A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          // Add autoplay with a delay of 2500 milliseconds
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className={classes.instructorslides}>
            <Box className={classes.instructorbox}>
              <img
                src={Hemanth}
                alt="Hemanth_sairsm"
                className={classes.instructorsimg}
              />
              <p className={classes.instructorsname}>Hemanth sai ram</p>
              <p>Senior Software Engineer</p>
              <p>Tech Lead,5+ Years</p>
              <p>Teaching: Full Stack Develpment</p>
            </Box>
            <Box className={classes.instructorbox}>
              <img
                src={Jaishankar}
                alt="Hemanth_sairsm"
                className={classes.instructorsimg}
              />
              <p className={classes.instructorsname}>Jay shankar reddy</p>
              <p>Software Engineer</p>
              <p>Virtusa,5+ Years</p>
              <p>Teaching: Full Stack Develpment</p>
            </Box>
            <Box className={classes.instructorbox}>
              <img
                src={Krishna}
                alt="Hemanth_sairsm"
                className={classes.instructorsimg}
              />
              <p className={classes.instructorsname}>Krishna Manas</p>
              <p>Machine Learning and Artificial Intelligence Engineer</p>
              <p>Tech Lead,3+ years</p>
              <p>Teaching: Data Science</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide className={classes.instructorslides}>
            <Box className={classes.instructorbox}>
              <img
                src={Laxman}
                alt="Hemanth_sairsm"
                className={classes.instructorsimg}
              />
              <p className={classes.instructorsname}>Laxman Eadala</p>
              <p>Senior Software Engineer</p>
              <p> Reliance,6+ Years</p>
              <p>Teaching: Full Stack Develpment</p>
            </Box>
            <Box className={classes.instructorbox}>
              <img src={Pavan} alt="pavan" className={classes.instructorsimg} />
              <p className={classes.instructorsname}>Pavan Kumar</p>
              <p>Software Engineer</p>
              <p>Vajra.ai,5 Years</p>
              <p>Teaching: Full Stack Develpment</p>
            </Box>
            <Box className={classes.instructorbox}>
              <img src={Vinod} alt="vinod" className={classes.instructorsimg} />
              <p className={classes.instructorsname}>Vinod_kumar</p>
              <p>Senior Software Engineer</p>
              <p>Tech Lead,5+ Years</p>
              <p>Teaching: Full Stack Develpment</p>
            </Box>
          </SwiperSlide>
          {/* <SwiperSlide className={classes.instructorslides}></SwiperSlide> */}
          {/* <SwiperSlide className={classes.instructorslides}></SwiperSlide> */}
        </Swiper>
      </Box>
    </div>
  );
};

export default Instructors;
