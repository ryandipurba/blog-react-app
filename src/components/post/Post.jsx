import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <>
      <div className="col-sm-4 post">
        <div class="card" style={{ width: "18rem" }} className="mx-auto">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <Link to="/post/abc">
              <h5 class="card-title">Card title</h5>
            </Link>
            <div className="post-categorys">
              <span className="post-category">
                <Link className="" to="/posts?cat=music">
                  Home
                </Link>
              </span>
              <span className="post-category">
                <Link className="" to="/posts?cat=life">
                  Life
                </Link>
              </span>
            </div>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
