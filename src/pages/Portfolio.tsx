//import spaceShipVideo from "../assets/space-ship.m4v";
import spaceShipVideo from "../assets/nave.mov";
import managerInventoryVideo from "../assets/manager-inventory.m4v";
import chatNodeJSVideo from "../assets/chat-nodejs.m4v";
import carouselVideo from "../assets/react-slider.m4v";
import { Chip } from "../components/SkillTag";
import styled from "styled-components";
import "./Portfolio.css";
import { useState } from "react";

const IPhoneFrame = styled.div({
  flex: 0.6,
  minWidth: "300px",
  maxWidth: "100%",
  position: "relative",
  overflow: "hidden",
  background: "#000",
  borderRadius: "50px",
  padding: "15px 15px 80px 15px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  border: "3px solid #1f1f1f",
  minHeight: "520px",
  display: "flex",
  alignItems: "center",
  "@media (max-width: 768px)": {
    minWidth: "0",
    width: "100%",
    maxWidth: "100%",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "25px",
    background: "#000",
    borderRadius: "0 0 20px 20px",
    zIndex: 3,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "25px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50px",
    height: "50px",
    background: "radial-gradient(circle at 30% 30%, #3a3a3a, #1a1a1a 60%)",
    border: "2px solid #555",
    borderRadius: "50%",
    boxShadow:
      "inset 0 -3px 8px rgba(0,0,0,0.8), inset 0 3px 8px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.1)",
    zIndex: 4,
  },
  "& video": {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    display: "block",
    borderRadius: "35px",
    position: "relative",
    zIndex: 1,
  },
});

const SpeakerDot = styled.div({
  position: "absolute",
  top: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "6px",
  height: "6px",
  background: "radial-gradient(circle at 40% 40%, #5a5a5a, #2a2a2a)",
  borderRadius: "50%",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.1)",
  zIndex: 5,
});

const SpeakerLine = styled.div({
  position: "absolute",
  top: "42px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "40px",
  height: "4px",
  background: "linear-gradient(180deg, #5a5a5a 0%, #2a2a2a 100%)",
  borderRadius: "2px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.1)",
  zIndex: 5,
});

const ITabletFrame = styled.div({
  flex: 2,
  minWidth: "400px",
  maxWidth: "100%",
  position: "relative",
  overflow: "hidden",
  background: "#000",
  borderRadius: "30px",
  padding: "20px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  border: "3px solid #1f1f1f",
  minHeight: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  "@media (max-width: 768px)": {
    minWidth: "0",
    width: "calc(100vw - 2rem)",
    maxWidth: "100%",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "10px",
    height: "10px",
    background: "#4a4a4a",
    borderRadius: "50%",
    zIndex: 4,
  },
  "& video": {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    display: "block",
    borderRadius: "20px",
    position: "relative",
    zIndex: 1,
  },
});

const VideoSkeleton = styled.div<{ $tablet?: boolean }>(({ $tablet }) => ({
  width: "100%",
  height: $tablet ? "400px" : "450px",
  borderRadius: $tablet ? "20px" : "35px",
  background: "linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
  position: "relative",
  zIndex: 1,
}));

const PCSetup = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.2rem",
  flex: 2,
});

const Monitor = styled.div({
  position: "relative",
  width: "100%",
  maxWidth: "850px",
  background: "#1a1a1a",
  borderRadius: "20px 20px 0 0",
  padding: "20px",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
  border: "3px solid #2a2a2a",
  "@media (max-width: 768px)": {
    maxWidth: "90%",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "140px",
    height: "30px",
    background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
    borderRadius: "0 0 10px 10px",
  },
});

const MonitorStand = styled.div({
  width: "180px",
  height: "10px",
  background: "linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%)",
  borderRadius: "5px",
  marginTop: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
});

const PCKeyboard = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)",
  gap: "4px",
  padding: "15px",
  background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
  borderRadius: "10px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
  width: "100%",
  maxWidth: "780px",
  transform: "perspective(1000px) rotateX(25deg)",
  transformOrigin: "center top",
  "@media (max-width: 768px)": {
    maxWidth: "90%",
    gap: "2px",
    padding: "10px",
  },
});

const PCKey = styled.div<{ $span?: number }>(({ $span }) => ({
  background: "linear-gradient(145deg, #3a3a3a, #2a2a2a)",
  borderRadius: "4px",
  padding: "8px 4px",
  textAlign: "center",
  fontWeight: 500,
  fontSize: "0.7rem",
  color: "#ccc",
  boxShadow:
    "0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.2)",
  gridColumn: $span ? `span ${$span}` : "span 1",
  transform: "translateZ(2px)",
}));

export default function Portfolio() {
  const [videosLoaded, setVideosLoaded] = useState({
    spaceship: false,
    inventory: false,
    carousel: false,
    chat: false,
  });
  return (
    <div className="portfolio-background">
      <div className="portfolio">
        <div className="portfolio-layout tablet-layout">
          <PCSetup>
            <Monitor>
              {!videosLoaded.inventory && <VideoSkeleton $tablet />}
              <video
                autoPlay
                loop
                muted
                onLoadedData={() =>
                  setVideosLoaded((prev) => ({ ...prev, inventory: true }))
                }
                style={{
                  display: videosLoaded.inventory ? "block" : "none",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <source src={managerInventoryVideo} type="video/mp4" />
              </video>
            </Monitor>
            <MonitorStand />
            <PCKeyboard>
              {[
                "Esc",
                "F1",
                "F2",
                "F3",
                "F4",
                "F5",
                "F6",
                "F7",
                "F8",
                "F9",
                "F10",
                "F11",
                "F12",
                "Prt",
                "Del",
              ].map((k) => (
                <PCKey key={k}>{k}</PCKey>
              ))}
              {[
                "`",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "-",
                "=",
              ].map((k) => (
                <PCKey key={k}>{k}</PCKey>
              ))}
              <PCKey $span={2}>Back</PCKey>
              <PCKey $span={2}>Tab</PCKey>
              {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"].map(
                (k) => (
                  <PCKey key={k}>{k}</PCKey>
                ),
              )}
              <PCKey $span={1}>\</PCKey>
              <PCKey $span={2}>Caps</PCKey>
              {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map(
                (k) => (
                  <PCKey key={k}>{k}</PCKey>
                ),
              )}
              <PCKey $span={2}>Enter</PCKey>
              <PCKey $span={3}>Shift</PCKey>
              {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => (
                <PCKey key={k}>{k}</PCKey>
              ))}
              <PCKey $span={2}>Shift</PCKey>
              <PCKey>Ctrl</PCKey>
              <PCKey>Win</PCKey>
              <PCKey>Alt</PCKey>
              <PCKey $span={7}>Space</PCKey>
              <PCKey>Alt</PCKey>
              <PCKey>Fn</PCKey>
              <PCKey>Ctrl</PCKey>
            </PCKeyboard>
          </PCSetup>
          <div className="video-description">
            <h2>Manager's Inventory</h2>
            <p>
              Built using React and Redux to manage inventory data efficiently.
              It allows users to add, edit, and delete entries through a
              centralized state management system.
            </p>
            <div className="skills">
              {["React", "Redux", "JavaScript", "HTML/CSS"].map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="portfolio-layout">
          <IPhoneFrame>
            <SpeakerDot />
            <SpeakerLine />
            {!videosLoaded.spaceship && <VideoSkeleton />}
            <video
              autoPlay
              loop
              muted
              onLoadedData={() =>
                setVideosLoaded((prev) => ({ ...prev, spaceship: true }))
              }
              style={{ display: videosLoaded.spaceship ? "block" : "none" }}
            >
              <source src={spaceShipVideo} type="video/mp4" />
            </video>
          </IPhoneFrame>
          <div className="video-description">
            <h2>Spaceship Video Game</h2>
            <p>
              This video game was built in vanilla JavaScript. The game features
              real-time player controls, dynamic movement, and interactive
              gameplay mechanics.
            </p>
            <div className="skills">
              {["JavaScript", "HTML Canvas", "CSS"].map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="portfolio-layout tablet-layout-reverse">
          <div className="video-description">
            <h2>Carousel - Slider</h2>
            <p>
              This Carousel image slider is built using React to provide a
              smooth and interactive way to display images. It supports seamless
              navigation between slides, responsive layout behavior, and a
              user-friendly interface.
            </p>
            <div className="skills">
              {["React", "JavaScript", "HTML/CSS"].map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
          <ITabletFrame>
            {!videosLoaded.carousel && <VideoSkeleton $tablet />}
            <video
              autoPlay
              loop
              muted
              onLoadedData={() =>
                setVideosLoaded((prev) => ({ ...prev, carousel: true }))
              }
              style={{ display: videosLoaded.carousel ? "block" : "none" }}
            >
              <source src={carouselVideo} type="video/mp4" />
            </video>
          </ITabletFrame>
        </div>
        <br />
        <br />
        <div className="portfolio-layout tablet-layout">
          <ITabletFrame>
            {!videosLoaded.chat && <VideoSkeleton $tablet />}
            <video
              autoPlay
              loop
              muted
              onLoadedData={() =>
                setVideosLoaded((prev) => ({ ...prev, chat: true }))
              }
              style={{ display: videosLoaded.chat ? "block" : "none" }}
            >
              <source src={chatNodeJSVideo} type="video/mp4" />
            </video>
          </ITabletFrame>
          <div className="video-description">
            <h2>Chat App with NodeJS</h2>
            <p>
              This real-time chat application is built with Node.js and
              Socket.IO to support instant communication between multiple users.
            </p>
            <div className="skills">
              {["JavaScript", "NodeJS", "Socket.io", "HTML/CSS"].map(
                (skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
