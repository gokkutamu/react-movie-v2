import React, { useState, useEffect } from "react";
import {
    listUser
} from "../../server";

import './Dashboard.css';
import { Link } from 'react-router-dom';
import "../Home/Aminition/Home.css";
import dateFormat from 'dateformat';
import Axios from "axios";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
export function Dashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setUsers(await listUser());
        };
        fetchAPI();
    }, []);

    const deleteUser = (id) => {
        async function fetchDeleteUser(id) {
            const repo = await Axios.get(`http://localhost/Passport/Passport/public/api/auth/destroy/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem("myData")
                },
                body: JSON.stringify({ id: id })
            })
            return repo.data;
        }
        fetchDeleteUser(id)
            .then(result => {
                const filterData = users.filter(item => item.id !== id)
                setUsers(filterData)
            })
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
                    <Link to={`/edit/${c.id}`}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true" title="Update"></i>
                    </Link>
                    <Link to={`/profile/${c.id}`}>
                        <i className="fa fa-eye" aria-hidden="true" title="View"></i>
                    </Link>
                    <button className="btnDel" onClick={e => { deleteUser(c.id) }}>
                        <i className="fa fa-eraser" aria-hidden="true" title="Delete"></i>
                    </button>
                </div>
            </li>
        );
    });
    return (
        <div className="dashboard-content">
            <div className="header">
               <Header/>
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
            <Footer/>
        </div>

    )
}
