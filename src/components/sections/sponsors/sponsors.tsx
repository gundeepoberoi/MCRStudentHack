import React from 'react';
import './sponsors.css';


export default function Sponsors() {
    return (
      <section id="sponsors" className="mt-48 mb-24 w-full z-10">
        <div className="flex flex-wrap w-full text-white rounded-lg overflow-hidden">
          <div className="sun"></div>
          <div className="planet" style={{animationDelay: '0s'}}></div>
          <div className="planet" style={{animationDelay: '-4s'}}></div>
          <div className="planet-1" style={{animationDelay: '-8s'}}></div>
          <div className="planet-1" style={{animationDelay: '-12s'}}></div>
          <div className="planet-2" style={{animationDelay: '-16s'}}></div>
        </div>
      </section>
    );
  }