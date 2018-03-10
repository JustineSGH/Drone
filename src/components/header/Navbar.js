import React, {Component} from 'react';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css'; 

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="mainNav">
                <a className="navbar-brand" href="index.html">Drône</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}
export default NavBar;