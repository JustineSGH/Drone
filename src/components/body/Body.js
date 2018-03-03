import React, {Component} from 'react';
import './Body.css';

import ChartPH from '../charts/ChartPH.js';
import ChartTemperature from '../charts/ChartTemperature';
import MapContainer from '../map/MapContainer';

class Body extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <a href="#">Tableau de bord</a>
                        </li>
                        <li className="breadcrumb-item active">Mon Tableau de bord</li>
                    </ol>
                    <div className="card mb-3">
                        <div className="card-header">
                        <i className="fa fa-area-chart"></i> Acidité de l'eau et oxygène</div>
                        <div className="card-body">
                            <ChartPH/>
                        </div>
                        <div className="card-footer small text-muted">Dernière mesure le Vendredi 9 mars à 10h30</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card mb-3">
                                <div className="card-header">
                                <i className="fa fa-bar-chart"></i> Température</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-8 my-auto">
                                            <ChartTemperature/>
                                        </div>
                                        <div className="col-sm-4 text-center my-auto">
                                            <div className="h4 mb-0 text-danger">11.0 °C</div>
                                            <div className="small text-muted">Maximale</div>
                                            <hr/>
                                            <div className="h4 mb-0 text-success">6.7 °C</div>
                                            <div className="small text-muted">Température moyenne</div>
                                            <hr/>
                                            <div className="h4 mb-0 text-primary">-0.5 °C</div>
                                            <div className="small text-muted">Minimale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer small text-muted">Dernière mesure le 25 mars 2018 à 12h00</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-header">
                                <i className="fa fa-bell-o"></i> Feed Example</div>
                                <div className="list-group list-group-flush small">
                                <a className="list-group-item list-group-item-action" href="#">
                                    <div className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                                    <div className="media-body">
                                        <strong>David Miller</strong>posted a new article to
                                        <strong>David Miller Website</strong>.
                                        <div className="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                                    </div>
                                    </div>
                                </a>
                                <a className="list-group-item list-group-item-action" href="#">
                                    <div className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                                    <div className="media-body">
                                        <strong>Samantha King</strong>sent you a new message!
                                        <div className="text-muted smaller">Today at 4:37 PM - 1hr ago</div>
                                    </div>
                                    </div>
                                </a>
                                <a className="list-group-item list-group-item-action" href="#">
                                    <div className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                                    <div className="media-body">
                                        <strong>Jeffery Wellings</strong>added a new photo to the album
                                        <strong>Beach</strong>.
                                        <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                                    </div>
                                    </div>
                                </a>
                                <a className="list-group-item list-group-item-action" href="#">
                                    <div className="media">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                                    <div className="media-body">
                                        <i className="fa fa-code-fork"></i>
                                        <strong>Monica Dennis</strong>forked the
                                        <strong>startbootstrap-sb-admin</strong>repository on
                                        <strong>GitHub</strong>.
                                        <div className="text-muted smaller">Today at 3:54 PM - 2hrs ago</div>
                                    </div>
                                    </div>
                                </a>
                                <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-primary o-hidden h-100">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-info-circle"></i>
                                    </div>
                                    <div className="mr-5">Informations capteurs</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">Plus de détails</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-warning o-hidden h-100">
                                <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-list"></i>
                                </div>
                                <div className="mr-5">Information trames</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">Plus de détails</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-success o-hidden h-100">
                                <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-table"></i>
                                </div>
                                <div className="mr-5">Infomation buffer</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">Plus de détails</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-danger o-hidden h-100">
                                <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-exclamation-circle"></i>
                                </div>
                                <div className="mr-5">Infomation système</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">Plus de détails</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-3">
                                <div className="card-header">
                                <i className="fa fa-globe"></i>GPS</div>
                                <div className="card-body-map">
                                    <MapContainer></MapContainer>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </a>    
            </div>
        );
    }
}
export default Body;