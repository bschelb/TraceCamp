import React, { useContext } from "react";

import { BlogContext } from "./components/blog_context";

const BlogList = () => {
  const [ list, setList ] = useContext(BlogContext);
  return (
    <div>
     Test
    </div>
  )
}


export default BlogList;