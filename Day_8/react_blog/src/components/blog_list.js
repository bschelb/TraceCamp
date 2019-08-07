import React, { useContext } from "react";

import { BlogContext } from "./blog_context";

const BlogList = () => {
  const [ list, setList ] = useContext(BlogContext);
  return (
    <div>
     {list.map(
       (post) => <div key = {post.title}> {post.title} {post.body} </div>
       )}
    </div>
  )
}

export default BlogList;