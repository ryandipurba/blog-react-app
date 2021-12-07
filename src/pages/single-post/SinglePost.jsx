import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="row">
      <div className="col-md-9 mt-4">
        <div className="single-post">
          <div className="single-post-wrapper">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="single-post-img"
              alt=""
              srcset=""
            />
            <h1 className="single-post-title">
              Lorem ipsum dolor
              <div className="single-post-edit">
                <i class="single-post-icon fas fa-edit"></i>
                <i class="single-post-icon fas fa-trash"></i>
              </div>
            </h1>
            <div className="single-post-info">
              <span>
                Author : &nbsp;
                <b className="single-post-author">
                  <Link className="" to="/posts?username=ryandi">
                    Ryandi
                  </Link>
                </b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className="single-post-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quisquam earum debitis aut nostrum vel enim alias iure, natus,
              amet similique. Consequatur quasi minima asperiores possimus illo
              tempora, beatae natus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum distinctio magnam maxime libero esse nihil
              molestiae in a mollitia eligendi asperiores autem, voluptas minus
              consequuntur eaque est accusamus! Quis, rem. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. At, deserunt? Earum aut
              repellat ipsum molestias, necessitatibus placeat mollitia ex quam
              repudiandae deleniti fugiat iste quia eum esse reiciendis rerum
              deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis quisquam earum debitis aut nostrum vel enim alias iure,
              natus, amet similique. Consequatur quasi minima asperiores
              possimus illo tempora, beatae natus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum distinctio magnam maxime
              libero esse nihil molestiae in a mollitia eligendi asperiores
              autem, voluptas minus consequuntur eaque est accusamus! Quis, rem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              deserunt? Earum aut repellat ipsum molestias, necessitatibus
              placeat mollitia ex quam repudiandae deleniti fugiat iste quia eum
              esse reiciendis rerum deserunt.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              vitae minima cupiditate debitis laudantium voluptatibus aut
              voluptatem, necessitatibus iusto, quos nobis eaque sint ab quaerat
              pariatur unde deleniti. Eos, inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugit odit dignissimos incidunt
              officiis necessitatibus? Necessitatibus sapiente perspiciatis
              blanditiis officiis excepturi veritatis minima repellendus
              inventore repellat, magni laudantium pariatur. Illo, quod?
            </p>
          </div>
        </div>  
      </div>
      <div className="col-md-3">
          <Sidebar/>
      </div>
    </div>
  );
}
