// How about using react-bootstrap??
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"> 
                    <img src="./bank 2.png" height="32px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/"> Home</Link>
                        <Link className="nav-link" to="/createAccount"> Create Account</Link>
                        <Link className="nav-link" to="/login"> Login</Link>
                        <Link className="nav-link" to="/deposit"> Deposit</Link>
                        <Link className="nav-link" to="/withdraw"> Withdraw</Link>
                        <Link className="nav-link" to="/balance"> Balance</Link>
                        <Link className="nav-link" to="/allData"> All data</Link>
                        <Link className="nav-link" to="/products"> Products</Link>
                        <Link className="nav-link" to="/about"> About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

/* ------------------------------------------------------------------------ */
// If using just standard bootstrap:
// function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/"> Home</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/createAccount"> Create Account</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/login"> Login</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/deposit"> Deposit</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/withdraw"> Withdraw</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/balance"> Balance</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/allData"> All data</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/products"> Products</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/about"> About</Link>
//             </li>
//         </ul>
//         </div>
//         </nav>
//     );
// }

/* ------------------------------------------------------------------------ */

export default NavBar;
