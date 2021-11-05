import React, { useState, useEffect } from "react";
import {
    listUser
} from "../../server";

import './Dashboard.css';
import { Link } from 'react-router-dom';
import "../Home/Aminition/Home.css";
import dateFormat from 'dateformat';
import Axios from "axios";
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
                    'Authorization': 'Bearer ' +
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzY2NjBjYTM4NzUzYWFmNWM4Y2JkNDhhZjUwMTNlOWNhMjVlN2RhODExODQzZjgyMTIxZDRkNjZhOGU1ZTU3OTQ4ODJkYzYyMmUxYTI2NjciLCJpYXQiOjE2MzYxMDYxNDcsIm5iZiI6MTYzNjEwNjE0NywiZXhwIjoxNjY3NjQyMTQ3LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.L5Na64AyU4mYEJQuYa2C3TL8UvqrWkZibn3I6eCae8lSLUitehdpEko9KVm7rDtfAQvafIl5EflVg4fwc3ExmK5HYkdreF-toy-RhitoIyCBkQKF59cX6Vm93EIGMrt1xGwy-3IDaMlPtdZFt_gEYPKF0Ea7kp119QyMYw5efv9HgokWJ5n6YmclsCn7EGF3v6x_cWClFCkx9p7jzHxxVK_WJiz7yuq4mA72v0AqFiZl7TM841iqSnt6RW9LcUfokg24sCD5Yksvyji-zME_Rf7ebdr9EEPJDuScgduMqKjtXy40ZoMKeZblk5uJ195wyUg_zxV9R-4YAt7IKeDYYtDjH0U_5lLdZ_q8UMPtwGBkZxvdvFpXCy5_f92_1ugvdal-ihEN9IM7neiI8c83FAFaQQoR6SSKgfzCZ4yMKBhWM5XjvMhw-5BtyGoOY17-GTyZK6omRunzKLAiIs9dG_d4TUZb9bYXUoP1RH_YzqfI2DyHMXV7AkGETCY6GyVfrquX9frkFM-JFTNhu6nRu7-hmv3RXbsl63GKf7jKITj6PY6XspPN3JP76iJ_brJPtDpviyqZjxDpBG9QaKT8zdTPmr-UUEj_FUWUxdv12UYW-RUSn0FHhtxsyenzm4H0abGfhW1IZUtBKN39IMF--fpHDcPSomln5-4-jjQv6GI"
                        // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzNhODQ5NGM3NTBhMjY2MDBmODYzZDdlZjZjMjMxZTFkZjg4ZTc3ZjE4Njk4ZDgzZGZhOWRjNmZjYmQyNmNiOWYzMWJjYjU1Zjg3ODgzY2UiLCJpYXQiOjE2MzU4NTI5NjYuMTUwOTg5LCJuYmYiOjE2MzU4NTI5NjYuMTUwOTk2LCJleHAiOjE2NjczODg5NjYuMTQxMjY4LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.oQTl4ZCNpUTCGyefyyzj3s6pigYkENfdRr0Jvu3fxosBtgba_H1T95NL9oWvnDScEN03E_YZQvGjJ-Iig23uTvT_0d88l0WQYN4n8Ls8vJCvqbSjMdHRyaUt21nWKZmy7ObWjJIh2FkAFlvvf1JtVEmUsKa6bVTDdaYelg1-uAzvBc9dkch-boC51AN6KepNmLJ_u96EPna8S59P0q-I_eN0PUoap28TW0tHuC2ooWtJ66IJrJzfkShFGW9MWguP3EU9Vqo8VVwsEBDIvXgt5c7F-6JhFXHfQyDllRKe8NLmRsbyUuBNC9kLQXj5i11N1-3OYh6YNGGN-Cz8gsPlYJoPJ2FqJqyjlkLJizJKY_paZqXWO3FoKl9Aq_yKx-gYdTDuIUowGngBZ0OWPpZ8nY-suq06VjUCW6ZoRaP6suQ5A0YA56q5edo6LZmSGZuzSqauxrCPVC1h6-qOgFdhHiSL9dLo7AV-DuxRjN03PpYnaTaILnDYRAcwO4mhWIEDy3clarlRFNbp3gUum8w-gWA79Occ2pDO1n55XQV_Xb-b9QbFsBOtlbYp70VunNw71mACIanN0Zb1zrbAnji2KETscJ2OvpH2n3sAw6OJz6xu58iHDXHHktzUHAQDPEPI-UN5LTvxVBo4gBYsSHjYZCijfJqkhbBPhBndqkLn5_M"
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/">Home</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/discover/tv">TV</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/treding">Treding</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/search">Search</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/profile">Profile</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/logout">Logout</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/dashboard">Dashboard</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/register">Register</a>
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
            <Footer></Footer>
        </div>

    )
}
