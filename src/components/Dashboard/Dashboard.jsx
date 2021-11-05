import React, { useState, useEffect } from "react";
import {
    listUser
} from "../../server";

import './Dashboard.css';
import { Link } from 'react-router-dom';
import "../Home/Aminition/Home.css";
import dateFormat from 'dateformat';
import Axios from "axios";
export function Dashboard() {
    const split =  (params) => {
        var test1 = params.slice(11,13);
        return test1; 
    }
    const itemId = (id) => {
        return getRamdomString(6)+getRamdom(10000, 99999)+id+getRamdomString(8)+getRamdom(100, 999)
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setUsers(await listUser());
        };
        fetchAPI();
    }, []);

    const deleteUser = (id) => {
        async function fetchDeleteUser(id) {
            
            const repo = await Axios.get(`http://localhost/Passport/public/api/auth/destroy/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGVjNWQzYWM2ZDNhZDBiNTA0OTM2OWU3YjAwNDNkNjBkYWRkNmI2ODA1ODdkMTNmNTIzMDgwMzI5YmJiOTY1ZjhmNWY0NjRmNThmNTg5NzMiLCJpYXQiOjE2MzYwOTU5OTUsIm5iZiI6MTYzNjA5NTk5NSwiZXhwIjoxNjY3NjMxOTk1LCJzdWIiOiIzMyIsInNjb3BlcyI6W119.UaaFuLvDNb3iUFRAitzUKKpEZK2utjpl5Nf1337lQHWvSS9c8WLitkVntNcRppZIyT_VnGvJQ7pTDgUIDTVg6jel20_XRKfDd8_Kmencx6UtJ1-Uh0OTsKkTM0vIiYsxij2XaNctIPsbn_bLjjCTEuByJQbSFsa6p7b5Y7d81IoEWDMOK6t8Hw-mGStJGZ5WsMPePwhJ46EYznkhzAGsodueyL8ip6jA6I6C75Wh5Z6m22A63fkrl-OyNpEWhVyI3E1Vfg7o88QVgbpHi4z3GAD7bBR16MTjWPzg-k8KxPinxU2GvCjDMzXF3-hSNLkx2NGkBlHhN32dComalMhIQD-ln1zXAEVtAp4ngqFkqx2X_A4uNxcUgiB9im_VjTLjFvixQ0L5NyyBXOLNwPbbEL1_TqY5ApwNbKBaiE7-YLFM5_Pvso70e4C4jJpmf8_gcjtBGsiHBu6WsVP6z1XCcHzzTiZXrV_idcPqOnPlPFipnUWJKtAU7oQF3pleQZX0ZD0UHN2XE4h6oSqHnu9wefOgk6u6qderJcDRSQ1azWtNW063HVBwJQfH11MZ6YeJM-0L4ZLN3843kgTvQpvfvAf0voULYHxcbNsS9qur01nV53Drh00dxC6v3R_DB-vhmtKOrKuizyWvHc7kP8yuae4SXS7PMi8NGKBP3ie-KtY"
                },
                body: JSON.stringify({ id: id })
            })
            return repo.data;
        }
        fetchDeleteUser(id)          
            .then(result => {
                var idOld = split(id);
                const filterData = users.filter(item => item.id != idOld);
                setUsers(filterData)
            })
    }
    const getRamdom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const getRamdomString = (length) => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    const getListUser = users.map((c) => {
        return (
            <li className="table-row" key={c.id}>
                <div className="col col-1" data-label="Job Id">{c.id}</div>
                <div className="col col-1" data-label="Customer Name">{c.name}</div>
                <div className="col col-2" data-label="Amount">{c.email}</div>
                <div className="col col-2" data-label="Payment Status">{dateFormat(c.created_at, "dd/mm/yyyy")}</div>
                <div className="col col-2" data-label="Payment Status">{dateFormat(c.updated_at, "dd/mm/yyyy")}</div>
                <div className="col col-1 custom-group-icon" data-label="Payment Status">
                    <Link to={`/edit/${getRamdomString(6)}${getRamdom(10000, 99999)}${c.id}${getRamdomString(8)}${getRamdom(100, 999)}`}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true" title="Update"></i>
                    </Link>
                    <Link to={`/profile/${c.id}`}>
                        <i className="fa fa-eye" aria-hidden="true" title="View"></i>
                    </Link>
                    <button className="btnDel" onClick={e => { deleteUser(getRamdomString(6)+getRamdom(10000, 99999)+c.id+getRamdomString(8)+getRamdom(100, 999)) }}>
                        <i className="fa fa-eraser" aria-hidden="true" title="Delete"></i>
                    </button>
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
                <div className="container">

                    <h2 className="user-title">List Users</h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">ID</div>
                            <div className="col col-1">Name</div>
                            <div className="col col-2">Email</div>
                            <div className="col col-2">Created date</div>
                            <div className="col col-2">Updated date</div>
                            <div className="col col-1">Action</div>
                        </li>
                        {getListUser}
                    </ul>
                </div>
            </div>
        </div>

    )
}
