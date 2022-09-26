import React, { } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export function Header() {
    let history = useHistory();
    if (sessionStorage.getItem('myData') === null || sessionStorage.getItem('myData') === '') {
        var list = document.getElementById("logout-user");
        if (list != null) {
            list.innerHTML = "";
        }
    }
    function logout123(event) {
        event.preventDefault();
        axios.get('http://localhost/Passport/public/api/auth/logout', {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': "Bearer " + sessionStorage.getItem('myData')
            }
        })
            .then(res => {
                if (res.status == 200) {
                    // history.push('/');
                    sessionStorage.setItem('myData', '');
                    if (sessionStorage.getItem('myData') === '') {
                        var list = document.getElementById("logout-user");
                        if (list != null) {
                            list.innerHTML = "";
                        }
                    }
                }
            })
            .catch(error => {
                console.log(error.status);
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav>
                        <ul className="menu">
                            <li className="nav-hover"><a href="/">Home</a></li>
                            <li className="nav-hover"><a href="/trending">Trending</a></li>
                            <li className="nav-hover"><a href="/search">Search</a></li>
                            <li className="nav-hover"><a href="/discover/tv">TV Show</a></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </div>
    )
}
