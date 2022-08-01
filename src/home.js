import {useCtx, Card} from './context';
import {Link} from 'react-router-dom';
// Rather than using buttons to log in and sign up, use links to these pages and style them as buttons
{/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}

function Home() {
    const ctx = useCtx();

    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="HOME"
            title="Welcome to Bad Bank"
            text="Add two buttons below the logo: Login and Create account. If not possible (or too complex, click in the logo to log in your account"
            body={(<div><img src="./bank 2.png" className="img-fluid" alt="Responsive Site"/>
            <Link data-tip data-for="loginTip" to="/login" className="btn btn-success disabled">Login</Link>
            <Link data-tip data-for="createAccTip" to="/createAccount" className="btn btn-warning">Sign up</Link>
            </div>)}
         />
        // <div>
        //     <h3> Hello, {JSON.stringify(ctx.users[0].name)}
        //     <br/>
        //     Home Component </h3>

        // </div>
    );
}

export default Home;