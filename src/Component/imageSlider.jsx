import React from "react";

import BackgroundSlider from "gatsby-image-background-slider";
import { useStaticQuery, graphql } from "gatsby";
import * as image from "./image.module.css";
const ImageSlider = ({ children }) => (
  <>
    <div className={image.parent}>
      <div>
        <BackgroundSlider
          initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
          transition={4} // transition duration between images
          duration={8}
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile(
                filter: { sourceInstanceName: { eq: "backgrounds" } }
              ) {
                nodes {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 4000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
        />
      </div>
    </div>
  </>
);

export default ImageSlider;
