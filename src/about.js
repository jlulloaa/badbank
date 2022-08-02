import {Card} from './context';
import {Link} from 'react-router-dom';
const thisYear = new Date().getFullYear();

const title = <a href="https://github.com/jlulloaa/badbank" target="_blank" rel="noreferrer">
    <button className="btn btn-warning">
    Bad Bank on GitHub
    </button>
    </a>;

const about = <> 
    Bad Bank is a web application developed with <a href="https://reactjs.org" target="_blank" rel="noreferrer" >
        <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="https://reactjs.org"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" height="16"></img> React
        </span> 
    </a> and styled with <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
        <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="https://getbootstrap.com/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" height="16"></img> Bootstrap
        </span>
    </a>, through <a href="https://bootswatch.com" target="_blank" rel="noreferrer">
        <span className="badge bg-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="hhttps://bootswatch.com"><img src="https://camo.githubusercontent.com/51da0973891f15de1404fe9e17951136a420dafec4f9bbfa883e6283623c9317/68747470733a2f2f626f6f747377617463682e636f6d2f5f6173736574732f696d672f6c6f676f2d6461726b2e737667" height="16"></img>  Bootswatch
        </span>
    </a> theme's <a href="https://bootswatch.com/spacelab" target="_blank" rel="noreferrer">
        <span className="badge rounded-pill bg-light" data-bs-toggle="tooltip" data-bs-placement="left" title="https://bootswatch.com/spacelab">
        Spacelab
        </span>
    </a>. 
    </>;

const body = <>
    <a href="https://jlulloaa.github.io" target="_blank" rel="noreferrer"><button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to see my other projects" > &copy; {thisYear} Jose L. Ulloa <img src="./logo192.png" height="16"></img></button></a>
    </>

function About() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="ABOUT"
            title={title}
            text={about}
            body = {body}
         />
    );
}

export default About;

