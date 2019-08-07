import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Form';
import Form from './components/Form';
import { BlogProvider } from "./components/blog_context";
import BlogList from "./components/blog_list";
import Pages from "./components/Pages";

function App() {
  return (
    <BlogProvider>
    <div className="App">
     <Pages />
    </div>
    </BlogProvider>
  );
}

export default App;
