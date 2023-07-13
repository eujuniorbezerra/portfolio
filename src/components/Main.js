import React from 'react'
import MyComponent from './Type';
import git from '../images/git colored.svg';
import react from '../images/react colored.svg';
import javascript from '../images/javascript colored.svg';
import bootstrap from '../images/bootstrap colored.svg';
import html5 from '../images/html5 colored.svg';
import css3 from '../images/css3 colored.svg';
import github from '../images/github.svg';
import website from '../images/website.png';
import todolist from '../images/to-do-list.png';
import gigabyte from '../images/gigabyte.png';
import potiguar from '../images/potiguar.png';
import flutterapp from '../images/flutter-app.png';

const Main = () => {

  return (
    <>
        <div className="container-fluid">
            <div className="container-sm d-flex align-items-center flex-column">
                <div>
                    <p className="fs-6 fw-bold"> /* Bem-vindo ao meu Portfólio. */</p>
                </div>

                <div>
                    <MyComponent></MyComponent>
                </div>

                <div className="text">
                    <p className="fs-5 fw-semibold text-center">// Genuinamente aficionado por cada linha de código. Gosto de aprender novas tecnologias, além é claro, de implementar e melhorar meus conhecimentos e aptidões presentes. //</p>
                </div>
            </div>
        </div>

        <div className="container-fluid d-flex justify-content-center main">
            <div className="container-sm d-flex justify-content-center main">
                <div className="container-sm d-flex justify-content-evenly align-items-center main">
                    <img src={git} title="Git"></img>
                    <img src={react} title="React"></img>
                    <img src={javascript} title="JavaScript"></img>
                    <img src={bootstrap} title="Bootstrap"></img>
                    <img src={html5} title="HTML5"></img>
                    <img src={css3} title="CSS3"></img>
                </div>
            </div>
        </div>

        <div className="container-fluid d-flex justify-content-center projects">
            <div className="container-sm d-flex justify-content-center projects">
                <p className="text-center fs-5 fw-bold m-5" id="projetos">Projetos</p>
                <div className="container-sm d-flex justify-content-center projects">
                    <div className="projects">
                        <div className="todolist items">
                            <a href="https://to-do-list-sepia-two.vercel.app/" target="_blank" rel="noopener noreferrer"><p className="container-sm fw-semibold">Lista de tarefas</p></a>
                            <p className="container-sm"> /* Lista de tarefas feita em React.js, Bootstrap e CSS3. Onde pude aplicar conhecimentos em Hook e OnClick. */</p>
                            <p className="container-sm fw-bold">React.js / Bootstrap / CSS3</p>
                            <a href="https://github.com/eujuniorbezerra/to-do-list" target="_blank" rel="noopener noreferrer"><img className="project links A" src={github} title="Código no Github"></img></a>
                            <a href="https://to-do-list-sepia-two.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="project links A" src={website} title="Visualizar página"></img></a>
                        </div>
                    </div>

                    <div className="todolist">
                        <a href="https://to-do-list-sepia-two.vercel.app/"><img src={todolist}></img></a>
                    </div>

                    <div className="gigabyte">
                        <a href="https://gigabyte.vercel.app/"><img src={gigabyte}></img></a>
                    </div>

                    <div className="projects">
                        <div className=" gigabyte items">
                            <a href="https://gigabyte.vercel.app/" target="_blank" rel="noopener noreferrer"><p className="container-sm fw-semibold">E-Comerce Gigabyte</p></a>
                            <p className="container-sm"> /* Página de E-Comerce feita em JavaScript, HTML5 e CSS3. Aqui pude aplicar conhecimentos em Layout, Flexbox, Estilização, JavaScript e Responsividade. */</p>
                            <p className="container-sm fw-bold">JavaScript / HTML5 / CSS3</p>
                            <a href="https://github.com/eujuniorbezerra/gigabyte" target="_blank" rel="noopener noreferrer"><img className="project links B" src={github} title="Código no Github"></img></a>
                            <a href="https://gigabyte.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="project links B" src={website} title="Visualizar página"></img></a>
                        </div>
                    </div>

                    <div className="projects">
                        <div className="potiguar items">
                            <a href="https://potiguar.vercel.app/" target="_blank" rel="noopener noreferrer"><p className="container-sm fw-semibold">E-Comerce Potiguar</p></a>
                            <p className="container-sm"> /* Página de E-Comerce feita em JavaScript, HTML5 e CSS3. Onde também pude aplicar conhecimentos em Layout, Flexbox, Estilização, JavaScript e Responsividade. */</p>
                            <p className="container-sm fw-bold">JavaScript / HTML5 / CSS3</p>
                            <a href="https://github.com/eujuniorbezerra/potiguar" target="_blank" rel="noopener noreferrer"><img className="project links C" src={github} title="Código no Github"></img></a>
                            <a href="https://potiguar.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="project links C" src={website} title="Visualizar página"></img></a>
                        </div>
                    </div>

                    <div className="potiguar">
                        <a href="https://potiguar.vercel.app/"><img src={potiguar}></img></a>
                    </div> 

                    <div className="flutter-app">
                        <a href="https://potiguar.vercel.app/"><img src={flutterapp}></img></a>
                    </div>

                    <div className="projects">
                        <div className="flutter-app items">
                            <a><p className="container-sm fw-semibold">Flutter Login and Sign App</p></a>
                            <p className="container-sm"> /* Aplicativo de cadastro e login feito em Flutter. Onde pude aplicar meus conhecimentos no Framework. */</p>
                            <p className="container-sm fw-bold">Flutter / Dart</p>
                            <a href="https://github.com/eujuniorbezerra/sign-and-login-app" target="_blank" rel="noopener noreferrer" title="Código no Github"><img className="project links D" src={github}></img></a>
                            <a><img className="d-none project links D" src={website}></img></a>
                        </div>
                    </div>                    
                </div>

                <div>
                    
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Main