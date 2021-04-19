import React from 'react';

const LogIn = () => {
    return (
         <section className="sectionLogIn">
        <h2>Sign In</h2>
        <input className="usernameLogIn" id="username" type="text" placeholder="Username" />
        <input type="password" className="passwordLogIn" id="password" placeholder="Password" />
        <button className="buttonLogIn" id="button">
            Sign In            
        </button>
    </section> 
    );
}
 
export default LogIn;