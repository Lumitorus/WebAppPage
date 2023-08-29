import React, { useState, useEffect, useCallback, Component,useRef } from "react";
import "./notFound.scss";

import TagManager from 'react-gtm-module'



import axios from "axios";

import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ReactComponent as RightIcon } from "../../Files/SVG/signup/right.svg";
import { ReactComponent as Logo } from "../../Files/SVG/signup/logo.svg";
import { ReactComponent as Logo_Frame } from "../../Files/test/logo.svg";
import Carousel_1 from "../../Files/test/1.png";
import Carousel_2 from "../../Files/test/2.png";

import i101 from "../../Files/test/101.jpg";
import i102 from "../../Files/test/102.jpg";
import i103 from "../../Files/test/103.jpg";
import i104 from "../../Files/test/104.jpg";

import  Mirror from "../../Files/SVG/home/mirror.svg";
import  Accept from "../../Files/SVG/home/accept.svg";
import  Cheme from "../../Files/SVG/home/cheme.svg";
import  Dashboard from "../../Files/SVG/home/dashboard.svg";

import Canvas from "../../Files/PNG/canvas.png";
import ReactBeforeAfter from 'react-before-after';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Reorder, useDragControls } from "framer-motion";
import { motion, AnimatePresence,Variants, useScroll } from "framer-motion"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import SearchIcon from '@mui/icons-material/Search';


export default function notFound(props) {

  const tagManagerArgs = {
    gtmId: 'GTM-N33M3WC'
}
  TagManager.initialize(tagManagerArgs);
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  const [open_title, setOpen_title] = React.useState(false);
  const handleOpen_title = () => {
    console.log("work");
    setOpen_title(true)};
  const handleClose = () => setOpen_title(false);

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 }}
  };
  const leftBar = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0},
    transition: { duration: 1.7 }
  }

  const [CarouselImgTo, setCarouselImgTo] = useState(Carousel_2);
  const [CarouselImgOn, setCarouselImgOn] = useState(Carousel_1);



  const reMapImg = () => {
    console.log("working");
    if (CarouselImgTo === Carousel_2) {
      setCarouselImgOn(CarouselImgTo)
      setCarouselImgTo(Carousel_1)
      
    }
    else {
      setCarouselImgOn(CarouselImgTo)
      setCarouselImgTo(Carousel_2)
    }
  }
  const [reMapImgCarousel100, setReMapImgCarousel100] = useState(i101);
  const [reMapImgCarousel102, setReMapImgCarousel102] = useState(i102);
  const [reMapImgCarousel103, setReMapImgCarousel103] = useState(i103);
  const [reMapImgCarousel104, setReMapImgCarousel104] = useState(i104);

  const [open_four, setOpen_four] = React.useState(false);
  const handleOpen_four = () => {
    console.log("work");
    setOpen_four(true)
  };

  const [open_six, setOpen_six] = React.useState(false);
  const [open_seven, setOpen_seven] = React.useState(false);

  const hanfleOpen_six = () => {
    setOpen_six(true);
  }
  const hanfleOpen_seven = () => {
    setOpen_seven(true);
  }

  const [one, setOne] = useState("one");
  const [two, setTwo] = useState("twos");
  const [three, setThree] = useState("threes");
  const [four, setFour] = useState("fours");

  const reMapImgFour = () => {
    console.log("working");
    
    
    if (reMapImgCarousel100 === i101) {
      setReMapImgCarousel100(i102)
      setReMapImgCarousel102(i101)
      setOne("ones")
      setTwo("two");
      setThree("threes");
      setFour("fours");

    } else {
      if (reMapImgCarousel100 === i102) {
        setReMapImgCarousel100(i103)
        setReMapImgCarousel102(i102)
        setReMapImgCarousel103(i101)
        setOne("ones")
        setTwo("twos");
        setThree("three");
        setFour("fours");
  
      } else {
        if (reMapImgCarousel100 === i103) {
          setReMapImgCarousel100(i104)
          setReMapImgCarousel102(i102)
          setReMapImgCarousel103(i103)
          setReMapImgCarousel104(i101)
          setOne("ones")
          setTwo("twos");
          setThree("threes");
          setFour("four");
        } else {
          if (reMapImgCarousel100 === i104) {
            setReMapImgCarousel100(i101)
              setReMapImgCarousel102(i102)
              setReMapImgCarousel103(i103)
              setReMapImgCarousel104(i104)
              setOne("one")
              setTwo("twos");
              setThree("threes");
              setFour("fours");
          } 
        }
      }
    }
  }

  const reMapImgCarouselOne = () => {
    setReMapImgCarousel100(i101);
    setOne("one")
    setTwo("twos");
    setThree("threes");
    setFour("fours");
    if (reMapImgCarousel102 === i101) {
      setReMapImgCarousel102(i102)
    }
    if (reMapImgCarousel103 === i101) {
      setReMapImgCarousel103(i103)
    }
    if (reMapImgCarousel104 === i101) {
      setReMapImgCarousel104(i104)
    }
    
    }
  const reMapImgCarouselTwo = () => {
    setReMapImgCarousel100(i102);
    setReMapImgCarousel102(i101);
    setOne("ones")
    setTwo("two");
    setThree("threes");
    setFour("fours");
    
    if (reMapImgCarousel103 === i101) {
      setReMapImgCarousel103(i103)
    }
    if (reMapImgCarousel104 === i101) {
      setReMapImgCarousel104(i104)
    }

    } 
  const reMapImgCarouselThree = () => {
    setReMapImgCarousel100(i103);
    setReMapImgCarousel103(i101);
    setOne("ones")
    setTwo("twos");
    setThree("three");
    setFour("fours");
    if (reMapImgCarousel102 === i101) {
      setReMapImgCarousel102(i102)
    }
    
    if (reMapImgCarousel104 === i101) {
      setReMapImgCarousel104(i104)
    }
    } 
  const reMapImgCarouselFour = () => {
    setReMapImgCarousel100(i104);
    setReMapImgCarousel104(i101);
    setOne("ones")
    setTwo("twos");
    setThree("threes");
    setFour("four");
    if (reMapImgCarousel102 === i101) {
      setReMapImgCarousel102(i102)
    }
    if (reMapImgCarousel103 === i101) {
      setReMapImgCarousel103(i103)
    }
   
    } 

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    className="container_notfound">
     

     
      <motion.div variants={{hidden: { opacity: 0, y: -20 }, visible}} className="left-sidebar">
        <Logo onClick={() => openInNewTab("https://minm.pro")}/>
      </motion.div>
      <div className="body">
      
        <div className="body-sidebar">
          <motion.span className="url-click" variants={{hidden: { opacity: 0, y: -20 }, visible}}>
          <Logo />
          <a href="#about_minm">О Mind in map</a>
          <a href="https://docs.minm.live" target="_blank" rel="noopener noreferrer">Учебник</a>
          <a href="#price">Цены</a>
          <a href="#about_us">О нас</a>
          </motion.span>
          <motion.a onClick={() => openInNewTab("https://minm.live")} variants={{hidden: { opacity: 0, x: -10 }, visible}} className="btn-enter">
            Войти
          </motion.a>
        </div>
        <div className="center">
        <div className="body-container-two">
          <label>404</label>
          <small>Страница не найдена</small>
          <motion.a onClick={() => openInNewTab("https://minm.pro")}  variants={{hidden: { opacity: 0, y: -20 }, visible}} className="btn-welcome">
            Перейти на главную
          </motion.a>
        </div>
        </div>

        <div className="footer-container">
          <Logo onClick={() => openInNewTab("https://minm.live")}/>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://minm.live/personal">Политика обработки данных</a>
            <a target="_blank" rel="noopener noreferrer" href="https://minm.live/publichnaya-oferta/">Оферта</a>
            {/* <a href="mailto:-in-map@yandex.ru">Контакты</a> */}
            <a target="_blank" rel="noopener noreferrer" href="https://docs.minm.live/">Справка</a>
          </div>
          <s />
          <small className="outro">Mind in Map 2020 — 2023 ©</small>
          
         
          
        </div>
        
      </div>
    </motion.div>
  );
}
