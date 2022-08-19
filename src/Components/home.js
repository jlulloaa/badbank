import Card from './card';
import { Link } from 'react-router-dom';
import { ToolTips } from './utils';
// Rather than using buttons to log in and sign up, use links to these pages and style them as buttons

function Home() {

    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="Welcome to Bad Bank"
            text="A friendly bank with an excellent website, but poor services"
            body={(<div><img src="./bank 2.png" className="img-fluid" alt="Responsive Site"/>
            <Link data-tip data-for="existAccTip" to="/login" className="btn btn-success disabled" >Login</Link>
            <Link data-tip data-for="createAccTip" to="/createAccount" className="btn btn-warning">Sign up</Link>
            <ToolTips></ToolTips>
            </div>)}
         />
    );
}

export default Home;