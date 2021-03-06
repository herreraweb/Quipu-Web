import React from 'react';
import "./Cover.css";
import CoverVideo  from "../media/CoverVideo.mp4";

export const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={CoverVideo} autoPlay loop muted />
            <h1>Quipu</h1>
            <p>Web | Mobile | Developer</p>
        </div>
    );
};
export default Cover;
