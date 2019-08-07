import React, { useState } from "react";

export const BlogContext = React.createContext([{}, () => {}]);

export const BlogProvider = (props) => {
    const [ list, setList ] = useState([
          {
            title: 'title1', body: 'body1',
          },
          {
            title: 'title2', body: 'body2',
          },
          {
            title: 'title3', body: 'body3',
          },
        ]);
    return(
        <BlogContext.Provider value={[ list, setList ]}>
            { props.children }
        </BlogContext.Provider>
    );
};
