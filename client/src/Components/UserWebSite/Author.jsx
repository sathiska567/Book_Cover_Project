import React from 'react'
import authorStyles from "./Author.module.css";
const Author = () => {
    return (
      <div className={authorStyles.authorContainer}>
        <div className={authorStyles.authorDescription}>

        </div>
        <div className={authorStyles.authorImage}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "center",
              background: "white",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
            src="/public/d.jpg"
            alt="request"
          />
        </div>
      </div>
    );
}
export default Author
