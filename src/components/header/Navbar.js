import React, {Component} from 'react';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css'; 

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a className="navbar-brand" href="index.html">Drône</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                        <a className="nav-link" href="index.html">
                            <i className="fa fa-fw fa-dashboard"></i>
                            <span className="nav-link-text">Tableau de bord</span>
                        </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-fw fa-bell"></i>
                                <span className="d-lg-none">Alerts
                                    <span className="badge badge-pill badge-warning">6 New</span>
                                </span>
                                <span className="indicator text-warning d-none d-lg-block">
                                    <i className="fa fa-fw fa-circle"></i>
                                </span>
                            </a>
                        <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">New Alerts:</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                            <span className="text-success">
                                <strong>
                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                            <span className="text-danger">
                                <strong>
                                <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                            <span className="text-success">
                                <strong>
                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item small" href="#">View all alerts</a>
                        </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;