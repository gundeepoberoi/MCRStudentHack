import React from 'react';
import './sponsors.css';


export default function Sponsors() {
    return (
      <section id="sponsors" className="mt-48 mb-24 w-full z-10 flex flex-col items-center">
        <h1 id="heading" className="text-5xl text-center">Sponsors</h1>
        <div id="divider" className="flex flex-wrap w-full text-white rounded-lg overflow-hidden">
          <div className="sun"></div>
          <div className="planet" style={{animationDelay: '0s'}}></div>
          {/* <div className="planet" style={{animationDelay: '-4s'}}></div> */}
          {/* <div className="planet-1" style={{animationDelay: '-8s'}}></div> */}
          {/* <div className="planet-1" style={{animationDelay: '-12s'}}></div> */}
          {/* <div className="planet-2" style={{animationDelay: '-16s'}}></div> */}
        </div>
      </section>
    );
  }