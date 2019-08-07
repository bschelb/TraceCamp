import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return <h1>Home</h1>
}

function About() {
    return <h1>About</h1>
}

function Contact() {
    return <h1>Contact</h1>
}

function Pages() {
    return(
    <BrowserRouter>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </BrowserRouter>
    );
}
export default Pages;