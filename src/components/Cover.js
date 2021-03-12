import React from 'react';
import "./Cover.css";
import CoverVideo  from "../media/CoverVideo.mp4";

export const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={CoverVideo} autoPlay loop muted />
            
            <p>Web | Mobile | UX/UI Design</p>
        </div>
    );
};
export default Cover;
