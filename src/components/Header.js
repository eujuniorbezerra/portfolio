import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import whatsapp from '../images/whatsapp.svg';
import email from '../images/email.svg';

const Header = () => {

  return (
    <div className="container-fluid d-flex position-fixed justify-content-center w-100 h-auto">
        <nav className="container-sm d-flex justify-content-between align-items-center w-100 h-auto">
            <div className="container-sm d-flex justify-content-start align-items-center w-100 h-auto">
                <h1 className="title fs-3">Júnior Bezerra</h1>
            </div>

            <div className="container-sm d-flex justify-content-end align-middle w-100 h-auto">
                <div className="container-sm d-flex justify-content-around align-items-center">
                    <a href="#home"><h2 className="option fs-5">Home</h2></a>
                    <a href="#projetos"><h2 className="option fs-5">Projetos</h2></a>
                    <a href="#projetos"><h2 className="option fs-5">Currículo</h2></a>
                </div>
                <div className="container-sm d-flex justify-content-around w-100 h-auto">
                    <a href="https://github.com/eujuniorbezerra"><img className="github" src={github} title="Github"></img></a>
                    <a href="https://www.linkedin.com/in/eujuniorbezerra/"><img className="linkedin" src={linkedin} title="Linkedin"></img></a>
                    <a href="https://api.whatsapp.com/send?phone=5594984431586"><img className="whatsapp" src={whatsapp} title="WhatsApp"></img></a>
                    <a href="mailto:contatojuniorbezerra@gmail.com"><img className="email" src={email} title="Email"></img></a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header