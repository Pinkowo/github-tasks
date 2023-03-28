import React from "react";

export interface IHomePageProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    function handleOAuth(): void {
        let requestURL: string;
        requestURL = 'https://github.com/login/oauth/authorize?client_id=4bc539acc8eaee55081f&amp;scope=public_repo&amp;redirect_uri=http://localhost:3000/';

        const getOAuth = async (url: string) => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                console.log(`Title: ${data}`);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        getOAuth(requestURL);
    }
    return (
        <div>
            <p>hello world</p>
            <button
                onClick={handleOAuth}
            >get oauth</button>
        </div>
    );
}

export default HomePage;