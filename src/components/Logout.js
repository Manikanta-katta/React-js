
import React from "react";
import './Logout.css';
import { useAuth } from "../firebase";

const Logout = ({ handlelogout }) => {
    const currentUser = useAuth();
    return (
        <section className="Logout">
            <nav>
                <h2 id="ma">Welcome :{currentUser?.email}</h2>
                <button id="Lo" onClick={handlelogout} >Logout</button>
            </nav>
        </section>
    )
}
export default Logout;