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
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDI3ZDQ3ZDY2YWNhNjc1ZDU3YzJjMWY4ZDNmMTdjOGVhYzFlNDU4ZjA5NTFlNjg3YzAzMjY3Yjk0MzgxNDgyYmIzM2QyMDdkZjdiMTcyYzkiLCJpYXQiOjE2MzYwMDg2MjAuODc0OTQ3LCJuYmYiOjE2MzYwMDg2MjAuODc0OTYsImV4cCI6MTY2NzU0NDYyMC44NjQ1MSwic3ViIjoiMTUiLCJzY29wZXMiOltdfQ.QaXYQucG2sutn_asck3pYhInt7Ha_a003i-abbRb7LBeT8NHI_izKMZwXfKnn9c7cv2F8e_lm2MzIY0GxAh0JhK25HpHkiY0uGYRgW6LF9H2HJh3l8yPT5A40uypQlDgPMtRtsVkLKwi9YzSDqOab7VFlcFZUHyT9TaIZ9CuejHayHtb4mXD8iMoOZhVc2VmGERa7ciA0ohiSevLm7w-wqsPhm7P8Kv6OQ26O7FfMdjwLpgHpS7VKwZ1iV_dYElnkgn_pNZ_OeH6U0E52m5J7_4F-3jCvuevY6MFgro3-8S3yGT7wiPWR5EqL4vSIbJgxchH3n6JAh8J42j1QY8IzX0OCEqzfxXB8nPKvl_VUq6ySwrMLCbpUZLUDR_KB8N9OPrpuQbuswB_Pac2BQ5RUEEMw1tkQdlU_-pBMnKQ0SL6__p4ukJoe2y5ghe6pzBFwLNsV_YyfPnyUa7e9A-3awDD2ZHXvM39DVtNO_G3m6_HaoYbdEbp7poKPF7yYsz7RbiPwGUdklppWMvbCdczTVIPCPaaYpDKo4-c9c0jLm5cHjU_EWWCS5xEW1jLzACIKYdICU3abF-hBApEk2NlNj4Zm6mi6XVUkgkvXhY7AFfnwb47LaK2UPqAmQNfYghWSpub7afU7asCHvDihXz8M8fq0Q_P_UOZax_c4lCeZYA"
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
                    <Link to={`/edit/${c.id}`}>
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
