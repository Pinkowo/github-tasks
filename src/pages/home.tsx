import React from "react";

export interface IHomePageProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = () => {

    function handleOAuth(): void {
        const link = "https://github.com/login/oauth/authorize?client_id=" + process.env.Client_ID + "&amp;scope=public_repo&amp;redirect_uri=https://task-time-github.web.app/auth/get";
        location.href = link;
    }

    return (
        <div>
            <p>hello world</p>
            <a onClick={handleOAuth}>Let's do it</a>
        </div>
    );
}

export default HomePage;