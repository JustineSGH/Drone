import React, {Component} from 'react';
import './Body.css';

import ChartPH from '../charts/ChartPH.js';
import ChartTemperature from '../charts/ChartTemperature';
import ChartTurbidite from '../charts/ChartTurbidite';
import ChartConductivite from '../charts/ChartConductivité';
import MapContainer from '../map/MapContainer';
import Clock from 'react-live-clock';
import Moment from 'react-moment';

class Body extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-secondary o-hidden h-100">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-clock-o"></i>
                                    </div>
                                    <Clock format={'dddd, Mo MMMM YYYY'} timezone={'FR/Europe/Paris'}/>
                                    <hr/>
                                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR/Europe/Paris'} className="clock"/>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-info o-hidden h-100">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-clock-o"></i>
                                    </div>
                                    Mesures
                                </div>
                                <div className="card-body">
                                    <button type="button" class="btn btn btn-outline-success">Démarrer</button>
                                    <button type="button" class="btn btn btn-outline-danger">Arrêter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-info o-hidden h-100">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-globe"></i>
                                    </div>
                                    Mesures GPS
                                </div>
                                <div className="card-body">
                                    <button type="button" class="btn btn btn-outline-success">Démarrer</button>
                                    <button type="button" class="btn btn btn-outline-danger">Arrêter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-info o-hidden h-100">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-hourglass"></i>
                                    </div>
                                    Effectuer prélèvement voix 1
                                </div>
                                <div className="card-body">
                                    <button type="button" class="btn btn btn-outline-success">Démarrer</button>
                                    <button type="button" class="btn btn btn-outline-danger">Effacer mémoire</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-info o-hidden h-100">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-hourglass"></i>
                                    </div>
                                    Effectuer prélèvement voix 2
                                </div>
                                <div className="card-body">
                                    <button type="button" class="btn btn btn-outline-success">Démarrer</button>
                                    <button type="button" class="btn btn btn-outline-danger">Effacer mémoire</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <i className="fa fa-bell-o"></i>Activités</div>
                                <div className="list-group list-group-flush small">
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <div className="media">
                                            <div className="media-body">
                                                <strong>Justine S. </strong>à effectué une mesure de pH
                                                <div className="text-muted smaller">Aujourd'hui à 16h45</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <div className="media">
                                            <div className="media-body">
                                                <strong>Justine S.</strong>à affectué une mesure de l'oxygène
                                                <div className="text-muted smaller">Hier à 8h30</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <div className="media">
                                            <div className="media-body">
                                                <strong>Justine S.</strong>à affectué une mesure GPS 
                                                <div className="text-muted smaller">Mercredi à 19h00</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
                                </div>
                                <div className="card-footer small text-muted">Dernière mise à jour le 20 mars 2018 à 11h59</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fa fa-area-chart"></i> Turbidité
                                </div>
                                <div className="card-body">
                                    <ChartTurbidite />
                                </div>
                                <div className="card-footer small text-muted">Dernière mesure le Vendredi 9 mars à 10h30</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fa fa-area-chart"></i> Turbidité
                                </div>
                                <div className="card-body">
                                    <ChartConductivite />
                                </div>
                                <div className="card-footer small text-muted">Dernière mesure le Vendredi 9 mars à 10h30</div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-secondary o-hidden h-100">
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
                            <div className="card text-white bg-danger o-hidden h-100">
                                <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-list"></i>
                                </div>
                                <div className="mr-5">Informations trames</div>
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
                            <div className="card text-white bg-secondary o-hidden h-100">
                                <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-table"></i>
                                </div>
                                <div className="mr-5">Infomations buffer</div>
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
                                <div className="mr-5">Infomations système</div>
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