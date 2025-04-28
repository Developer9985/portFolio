import cppimg from "../assets/img/icons8-c++-480.png";
import javaimg from "../assets/img/icons8-java-240.png";
import javascriptimg from "../assets/img/icons8-javascript-480.png";
import expressimg from "../assets/img/icons8-express-js-256.png";
import jenkinsimg from "../assets/img/icons8-jenkins-480.png";
import mongodbimg from "../assets/img/icons8-mongodb-480.png";
import nodejsimg from "../assets/img/icons8-node-js-240.png";
import reactjsimg from "../assets/img/icons8-react-480.png";
import linuximg from "../assets/img/icons8-linux-96.png";
import reactimg from "../assets/img/icons8-react-480.png";
import githubimg from "../assets/img/icons8-github-240.png";
import gitimg from "../assets/img/icons8-git-480.png";
import canvaimg from "../assets/img/icons8-canva-144.png";
import dockerimg from "../assets/img/icons8-docker-240.png";
import devimg   from "../assets/img/icons8-development-100.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={devimg} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={cppimg} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={javaimg} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={mongodbimg} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={expressimg} alt="Image" />
                                <h5>Express.Js</h5>
                            </div>
                            <div className="item">
                                <img src={dockerimg} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={jenkinsimg} alt="Image" />
                                <h5>Jenkins</h5>
                            </div>
                            <div className="item">
                                <img src={gitimg} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={githubimg} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={canvaimg} alt="Image" />
                                <h5>Canva</h5>
                            </div>
                            <div className="item">
                                <img src={linuximg} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={javascriptimg} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
