import React from 'react';
import {useNavigate} from "react-router-dom";


function About() {

    const navi= useNavigate
    return (
    <div>
      <h1>About page</h1>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
    );
  }
  
  export default About;
  