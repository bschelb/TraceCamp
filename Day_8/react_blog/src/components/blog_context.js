import React, { useState } from "react";

const BlogContext = React.createContext([{}, () => {}]);

const BlogProvider = (props) => {
    const [ list, setList ] = useState({
        posts: [
          {
            title: 'test', body: 'test2',
          },
          {
            title: 'test', body: 'test2',
          },
          {
            title: 'test', body: 'test2',
          },
        ],
      });
    return(
        <BlogContext.Provider value={[ list, setList ]}>
            { props.children }
        </BlogContext.Provider>
    );
};

export default BlogProvider;