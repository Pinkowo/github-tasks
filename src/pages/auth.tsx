import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export interface IAuthPageProps { }

const AuthPage: React.FunctionComponent<IAuthPageProps> = () => {
    const [token, setToken] = useState<string>("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    useEffect(() => {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == XMLHttpRequest.DONE) {
                let data = JSON.parse(req.responseText);
                setToken(data.access_token);
            }
        }
        req.open('POST',
            'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
            true);
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.send('code=' + code +
            '&client_id=' + process.env.Client_ID +
            '&client_secret=' + process.env.Client_Secrets);
    }, []);

    return (
        <div>
            <p>{token}</p>
        </div>
    );
}

export default AuthPage;