import React, { useState, useEffect } from "react";
import {
    listUser
} from "../../server";

import './Dashboard.css';
import { Link } from 'react-router-dom';
import "../Home/Aminition/Home.css";
import dateFormat from 'dateformat';
export function Dashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setUsers(await listUser());
        };
        fetchAPI();
    }, []);
    // console.log(users);
    const getListUser = users.map((c) => {
        return (
            <li class="table-row" key={c.id}>
                <div class="col col-1" data-label="Job Id">{c.id}</div>
                <div class="col col-1" data-label="Customer Name">{c.name}</div>
                <div class="col col-2" data-label="Amount">{c.email}</div>
                <div class="col col-2" data-label="Payment Status">{dateFormat(c.created_at,"dd/mm/yyyy")}</div>
                <div class="col col-2" data-label="Payment Status">{dateFormat(c.updated_at,"dd/mm/yyyy")}</div>
                <div class="col col-1 custom-group-icon" data-label="Payment Status">
                    <a href="">
                    <i class="fa fa-pencil-square-o" aria-hidden="true" title="Update"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-eye" aria-hidden="true" title="View"></i>
                    </a>
                    <a href="">
                    <i class="fa fa-eraser" aria-hidden="true" title="Delete"></i>
                    </a>
                </div>
            </li>
        );
    });
    return (
        <div className="dashboard-content">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover"><a href="/">Home</a></li>
                                    <li className="nav-hover"><Link to="/dashboard">Dashboard</Link></li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="#">Register</a>
                                        </div>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>

            </div>
            <div className="dashboard-block">
                <div class="container">

                    <h2>List Users</h2>
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col col-1">ID</div>
                            <div class="col col-1">Name</div>
                            <div class="col col-2">Email</div>
                            <div class="col col-2">Created date</div>
                            <div class="col col-2">Updated date</div>
                            <div class="col col-1">Action</div>
                        </li>
                        {getListUser}
                    </ul>
                </div>
            </div>
        </div>

    )
}
