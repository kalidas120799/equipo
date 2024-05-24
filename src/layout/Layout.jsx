import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import menus from './menus';

const Layout = () => {

    const pathname = window?.location?.pathname

    return (
        <div>
            <div className="header-div">
                <div className="header-icon-div"><NavLink to={"/"}><i className="fa fa-bars menu-icon" aria-hidden="true"></i></NavLink></div>
                <div className="header-content">
                    <div className="row">
                        <div className="col grouped-button-div">
                            <div className="grouped-button header-btn-container d-flex">
                                <div class="input-group input-group-sm header-btn-group">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"><i className="fa fa-search"
                                        aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    <span class="clear-icon"><i class="fas fa-times"></i></span>
                                </div>
                                <div className='d-flex advanced-search-btn'>
                                    <div className="badge-button me-0 px-3"><span><i className="fa fa-search badge-icon"
                                        aria-hidden="true"></i></span><span>Advanced Search</span></div>
                                    <div className="badge-button me-0 px-3"><span><i className="fa fa-plus badge-icon"
                                        aria-hidden="true"></i></span><span>Patient</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-end">
                            <div className='primary-color brand-name'>EQUIPO</div>
                            <div className="circle-button"><i className="fa fa-bell" aria-hidden="true"></i><div className='notify-badge'>1</div></div>
                            <div className="circle-button"><i className="fa fa-cog" aria-hidden="true"></i></div>
                            <div className="circle-button"><i className="fa fa-sticky-note" aria-hidden="true"></i></div>
                            <div className="circle-button"><i className="fa fa-bullhorn" aria-hidden="true"></i></div>
                            <div style={{ paddingTop: "4px" }}>
                                <span><i className="fa fa-user-circle" style={{ fontSize: "20px" }} aria-hidden="true"></i></span>
                                <span> <i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-div'>
                <div className="side-menu-div">
                    {
                        menus.map((menu, index) => (
                            <div className={`menu-item ${menu.path === pathname ? 'active-menu-item' : ''}`} title={menu.label} key={index}>
                                <NavLink to={menu.path}>
                                    {
                                        !menu.img ? <i className={`${menu.icon} ${menu.class} ${menu.path === pathname ? 'active-icon' : ''}`} aria-hidden="true"></i> :
                                            <img src={menu.img} height={10} width={10} alt={menu.label} />
                                    }

                                </NavLink>
                            </div>
                        ))
                    }
                </div>
                <><Outlet /></>
            </div>
            <div className='floating-btn'><i class="fa fa-table" aria-hidden="true"></i></div>
            <div className='footer-div'>
                <span style={{ fontSize: "15px", marginLeft: "50px" }}>2022 Equipo | Build V</span>
            </div>
        </div>
    )
}

export default Layout