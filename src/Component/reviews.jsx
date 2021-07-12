import React from "react";
import * as reviewStyle from "./reviews.module.css";
import { AiFillStar } from "react-icons/ai";

import { StaticImage } from "gatsby-plugin-image";
export default function Reviews() {
  return (
    <div className={reviewStyle.review}>
      <div className={reviewStyle.reviewImage}></div>
      <StaticImage src="../images/hero.jpg" className={reviewStyle.backImg} />

      <h2>Reviews</h2>

      <div className={reviewStyle.allReview}>
        <div className={reviewStyle.starRev}>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            Their name says it all: they're super reliable. Every few years I
            need something done at our place and they make dealing with what
            could be a pain super easy. Recently we had a clogged drain in our
            laundry room and they came the next day and took care of it at a
            fair price. Hopefully I will remember to bookmark them next time as
            last time I called other places that made it difficult to even
            schedule anything.
          </p>
        </div>
        <div className={reviewStyle.starRev}>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            Their name says it all: they're super reliable. Every few years I
            need something done at our place and they make dealing with what
            could be a pain super easy. Recently we had a clogged drain in our
            laundry room and they came the next day and took care of it at a
            fair price. Hopefully I will remember to bookmark them next time as
            last time I called other places that made it difficult to even
            schedule anything.
          </p>
        </div>
        <div className={reviewStyle.starRev}>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>
            Their name says it all: they're super reliable. Every few years I
            need something done at our place and they make dealing with what
            could be a pain super easy. Recently we had a clogged drain in our
            laundry room and they came the next day and took care of it at a
            fair price. Hopefully I will remember to bookmark them next time as
            last time I called other places that made it difficult to even
            schedule anything.
          </p>
        </div>
      </div>
      <p className={reviewStyle.more}>
        More Reviews At{" "}
        <a
          href="https://www.yelp.com/biz/on-time-plumbing-mountain-view"
          target="_blank"
          rel="noreferrer"
        >
          Yelp.com
        </a>
      </p>
    </div>
  );
}
