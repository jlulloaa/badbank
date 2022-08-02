import { useRef } from "react";
import ReactTooltip from "react-tooltip";

// How about using react-bootstrap??
import {Container, Nav, Navbar} from 'react-bootstrap';
// In order to style the navigation bar, is better to use NavLink instead of Link (see https://v5.reactrouter.com/web/api/NavLink)
import {NavLink} from 'react-router-dom';

// The 'exact' keyword in the Link to Home ensures that only returns the route if the path is an exact match to the current URL. This is particularly important in the Home path because is only defined by "/", which is also present in all the other paths. See https://staceycarrillo.medium.com/highlight-the-active-navigation-bar-link-using-navlink-in-react-d44f5d8bf997 for details 

// To highlight the active path use NavLink instead of Link as indicated in https://v5.reactrouter.com/web/api/NavLink

// After many attemps, finally learned how to collapse the navbar after clicking in an element (apparently, in the newest versions of react/react-router, there is a bug that causes the flag collapseOnSelect not to work as it should be). For the solution, see here: https://codesandbox.io/s/collapse-bootstrap-nav-with-bootstrap-js-cdz8gi?file=/src/Nav.js:104-318 and the thread associated: https://forum.freecodecamp.org/t/closing-bootstrap-navbar-on-click-of-link/499339 Also added a brief pause to make it more UI friendly :) 

function NavBar() {

    const navButton = useRef(null);
    const linksContainerRef = useRef(null);
 
    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }

    const tooltipFormat = {
        place: "top",
        type: "dark",
        effect: "float",
        offset: {'top': 10, 'left': 10},
        border: true,
        bkgrndColor: "green",
        txtColor: "white",
        delayHide: 10
    }

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"> 
                    <img src="./bank 2.png" height="32px" alt="Bank Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="ms-auto">
                        {/* <NavLink data-tip data-for="homeTip" onClick={collapseNav} exact="true" className="nav-link" to="/" > Home</NavLink> */}
                        <NavLink data-tip data-for="createAccTip" onClick={collapseNav}  className="nav-link" to="/createAccount"> Create Account</NavLink>
                        {/* <NavLink data-tip data-for="loginTip" onClick={collapseNav} className="nav-link" to="/login"> Login</NavLink> */}
                        <NavLink data-tip data-for="depositTip" onClick={collapseNav} className="nav-link" to="/deposit"> Deposit</NavLink>
                        <NavLink data-tip data-for="withdrawTip" onClick={collapseNav} className="nav-link" to="/withdraw"> Withdraw</NavLink>
                        {/* <NavLink data-tip data-for="balanceTip" onClick={collapseNav} className="nav-link" to="/balance"> Balance</NavLink> */}
                        <NavLink data-tip data-for="allDataTip" onClick={collapseNav} className="nav-link" to="/allData"> All data</NavLink>
                        {/* <NavLink data-tip data-for="productsTip" onClick={collapseNav} className="nav-link" to="/products"> Products</NavLink> */}
                        <NavLink data-tip data-for="aboutTip" onClick={collapseNav} className="nav-link" to="/about"> About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ReactTooltip id="homeTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Main page
            </ReactTooltip>
            <ReactTooltip id="createAccTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Create a new account
            </ReactTooltip>
            <ReactTooltip id="loginTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Access your existing account
            </ReactTooltip>
            <ReactTooltip id="depositTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Add funds by depositing in your account
            </ReactTooltip>
            <ReactTooltip id="withdrawTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Withdraw fund from your account
            </ReactTooltip>
            <ReactTooltip id="balanceTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Check your current balance
            </ReactTooltip>
            <ReactTooltip id="allDataTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Review historic transactions
            </ReactTooltip>
            <ReactTooltip id="productsTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Check our products
            </ReactTooltip>
            <ReactTooltip id="aboutTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor} delayHide={tooltipFormat.delayHide}>
                The small print and information about this application
            </ReactTooltip>
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
