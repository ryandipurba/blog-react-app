import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="form">
        <h1 className="text-center">Register</h1>
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            style={{ marginRight: "20px" }}
          >
            Register
          </button>
          <Link to="/login">
            <button type="submit" class="btn btn-warning ">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
