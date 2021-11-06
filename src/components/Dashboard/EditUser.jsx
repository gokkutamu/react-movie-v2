import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Account/Login/Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
    userById

} from "../../server";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function EditUser({ match }) {
    let params = match.params;
    const split =  (params) => {
        var test1 = params.slice(11,13);
        return test1; 
    }
    const [arrayUserByID, setUserById] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setUserById(await userById(split(params.id)));
        };
        fetchAPI();
    }, []);

    // Validatete form
    let history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        console.log(name,email,password);
        axios.post(`http://localhost/Passport/public/api/auth/updateUser/${split(params.id)}`, { name, email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGVjNWQzYWM2ZDNhZDBiNTA0OTM2OWU3YjAwNDNkNjBkYWRkNmI2ODA1ODdkMTNmNTIzMDgwMzI5YmJiOTY1ZjhmNWY0NjRmNThmNTg5NzMiLCJpYXQiOjE2MzYwOTU5OTUsIm5iZiI6MTYzNjA5NTk5NSwiZXhwIjoxNjY3NjMxOTk1LCJzdWIiOiIzMyIsInNjb3BlcyI6W119.UaaFuLvDNb3iUFRAitzUKKpEZK2utjpl5Nf1337lQHWvSS9c8WLitkVntNcRppZIyT_VnGvJQ7pTDgUIDTVg6jel20_XRKfDd8_Kmencx6UtJ1-Uh0OTsKkTM0vIiYsxij2XaNctIPsbn_bLjjCTEuByJQbSFsa6p7b5Y7d81IoEWDMOK6t8Hw-mGStJGZ5WsMPePwhJ46EYznkhzAGsodueyL8ip6jA6I6C75Wh5Z6m22A63fkrl-OyNpEWhVyI3E1Vfg7o88QVgbpHi4z3GAD7bBR16MTjWPzg-k8KxPinxU2GvCjDMzXF3-hSNLkx2NGkBlHhN32dComalMhIQD-ln1zXAEVtAp4ngqFkqx2X_A4uNxcUgiB9im_VjTLjFvixQ0L5NyyBXOLNwPbbEL1_TqY5ApwNbKBaiE7-YLFM5_Pvso70e4C4jJpmf8_gcjtBGsiHBu6WsVP6z1XCcHzzTiZXrV_idcPqOnPlPFipnUWJKtAU7oQF3pleQZX0ZD0UHN2XE4h6oSqHnu9wefOgk6u6qderJcDRSQ1azWtNW063HVBwJQfH11MZ6YeJM-0L4ZLN3843kgTvQpvfvAf0voULYHxcbNsS9qur01nV53Drh00dxC6v3R_DB-vhmtKOrKuizyWvHc7kP8yuae4SXS7PMi8NGKBP3ie-KtY"
                }
            })
            .then(res => {
                if (res.status == 200) {
                    history.push('/dashboard');
                }
            })
            .catch(error => {
                alert("Email Already Exist");
            });
    }
    return (

        <div className="main-container">
            <div className="header">
               <Header/>

            </div>
            <div className="Login">
                <h2 className="name-login">Edit User</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label >Name: &nbsp;</Form.Label>
                        <Form.Label> &nbsp; {arrayUserByID.name}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label >Email: &nbsp;</Form.Label>
                        <Form.Label> &nbsp; {arrayUserByID.email}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" >
                        Edit
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div>

    );
}
