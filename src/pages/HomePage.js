import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LoginButton from "../components/LoginButton";


function HomePage() {
    return(
        <>
        <h2>Keep track of your expenses with this REACT app</h2>
            <LoginButton/>
        </>
    );
}

export default HomePage;