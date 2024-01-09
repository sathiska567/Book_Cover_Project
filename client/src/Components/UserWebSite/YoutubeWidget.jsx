import React from 'react'
import youtubeStyles from "./YoutubeWidget.module.css";
import { Helmet } from "react-helmet";

const YoutubeWidget = () => {
  return (
    <div>
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          defer
        ></script>
      </Helmet>
      <div
        className="elfsight-app-7f18c780-c6fc-493e-91fa-5ab4a4138cb3"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default YoutubeWidget
