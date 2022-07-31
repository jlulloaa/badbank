import {Card} from './context';
const author = {
    name: 'Jose L. Ulloa',
    url: 'https://jlulloaa.github.io',
}

function About() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="Bad Bank Web Application"
            title="About"
            text="Bad Bank is a web application developed with React and styled with Bootstrap, through the Bootswatch theme Spacelab"
            body =  {(<a href="https://jlulloaa.github.io" target="_blank">&copy; Jose L. Ulloa, 2022</a>)}
         />
    );
}

export default About;