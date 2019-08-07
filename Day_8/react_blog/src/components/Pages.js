import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Form from "../components/Form"
import BlogList from "../components/blog_list";

function Home() {
    return <h1>"Hi! Click on the link above to access the blog list and blog creation page."</h1>
}

function Pages() {
    return(
    <BrowserRouter>
        <div>
            <nav>
                <div>
                <Link to="/">Home</Link>
                </div>
                <Link to="/form_list">Blog Form & List</Link>
            </nav>
        </div>
        <div>
        <Route path="/" exact component={Home} />
        <div class='container'>
        <Route path="/form_list" component={BlogList}/>
        </div>
        <Route path="/form_list" component={Form} />
        </div>
    </BrowserRouter>
    );
}
export default Pages;