import {Card} from './context';
const thisYear = new Date().getFullYear();

const about = "Bad Bank is a web application developed with React and styled with Bootstrap, through Bootswatch theme's Spacelab.";

function About() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="ABOUT"
            title={(<a href="https://github.com/jlulloaa/badbank" target="_blank" rel="noreferrer">Bad Bank</a>)}
            text={about}
            body =  {(<a href="https://jlulloaa.github.io" target="_blank" rel="noreferrer">&copy; {thisYear} Jose L. Ulloa </a>)}
         />
    );
}

export default About;