import { useContext, useState } from "react";
import { DataContext } from "../components/DataContext";
import { Icon } from '@iconify/react/dist/iconify.js';
import PageStructure from '../components/PageStructure';
import { Link } from 'react-router-dom';



function TechStack() {

const { data } = useContext(DataContext);

const [currentTech, setCurrentTech] = useState(null)


function techClicked(tech) {
      if (currentTech === tech) {
          setCurrentTech(null)} 
          else {
          setCurrentTech(tech)
          }
}

// setTechActive(prevTech => !prevTech);

  const filteredItems = data.filter(item => item.tech_stack && item.tech_stack.includes(currentTech));

  const listItems = filteredItems.map(item => (
    <li key={item.id}><Link to={`/individualprojectdescription/${item.id}`}>{item.title}</Link></li>
  ));


  return (
    <PageStructure>

    <main className="tech-stack-main">
      
      <div className='tech techstack-container'>
        <h1>My Tech Stack</h1>
        <h3> Technologies I've been working with recently</h3>

        <div className='technologies-container'> 
          <button className='technology' aria-label="View all my HTML projects" onClick={() =>   techClicked("HTML")}><Icon icon="devicon:html5-wordmark" width="60" height="60" /></button >
          <button className='technology' aria-label="View all my CSS projects" onClick={() =>  techClicked("CSS")}><Icon icon="devicon:css3-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my JavaScript projects" onClick={() =>   techClicked("JavaScript")}><Icon icon="devicon:javascript" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my React projects" onClick={() =>  techClicked("React")}><Icon icon="devicon:react-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my D3.js projects" onClick={() =>  techClicked("D3.js")}><Icon icon="devicon:d3js" width="60" height="60" /></button>
          <button className='technology mathjax' aria-label="View all my Mathjax projects" onClick={() =>  techClicked("MathJax")}><Icon icon="file-icons:mathjax" width="60" height="60" /></button>
          <button className='technology mathjax' aria-label="View all my Github projects" onClick={() =>  techClicked("Github")}><Icon icon="akar-icons:github-fill" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my Figma Projects" onClick={() =>  techClicked("Figma")}><Icon icon="devicon:figma" width="60" height="60" /></button>

        </div>

        {currentTech ? 
        <div className='technologies-matchlist-container'> 
          <p>These are my projects in which {currentTech} was used:</p>
          <ul className='technologies-matchlist'>  {listItems} </ul>

        </div>
        :
        ""}
      </div>

    </main>
    </PageStructure> 
  );
}

export default TechStack;