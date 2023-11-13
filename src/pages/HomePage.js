import React from 'react';

function HomePage() {
    return(
        <>
        <h2>Welcome</h2>
            <article className = 'Home'> 
            <p>This is my personal website. It uses the following technologies and languages: 
                <ul>
                    <li>HTML: The basic language used in web development.</li>
                    <li>CSS: The language we use for the website's aesthetic design.</li>
                    <li>Javascript: Another language used to make our website dynamic and interactive.</li>
                    <li>Express: A backend technology used to handle server requests.</li>
                    <li>Node.js: A runtime environment for our website to run in.</li>
                    <li>REACT: A framework used to build websites in terms of components. It dynamically updates the DOM tree to simulate multiple HTML pages.</li>
                    <li>MongoDB: A document-oriented database program used to store and display user input data.</li>
                    <li>Mongoose: A tool we use to connect our Node server and the MongoDB server.</li>
                    <li>Heroku</li>
                    <li>Github Pages</li>
                </ul>
            </p>
            </article>
        </>
    );
}

export default HomePage;