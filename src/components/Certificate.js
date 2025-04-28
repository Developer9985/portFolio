import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cipher from "../assets/img/cipher.png";
import nodejs from "../assets/img/nodejs.png";
import nptel from "../assets/img/nptel.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificate = () => {
  const certificates = [
    {
      title: "C++ Programming",
      description: "C++ Programming with Cipher Schools",
      imgUrl: cipher,
    },
    {
      title: "Node.js Development",
      description: "Node.js and Express.js",
      imgUrl: nodejs,
    },
    {
      title: "Cloud Computing",
      description: "Cloud Computing with NPTEL",
      imgUrl: nptel,
    }
  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Here are some of my achievements and certifications that showcase my skills and expertise.</p>
                <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Technical</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Professional certifications and achievements will be displayed here.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Additional certifications and achievements will be displayed here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}