import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
      className="d-flex h-100 text-center text-bg-dark"
      style={{ height: "100vh" }}
    >
      <div
        className="cover-container d-flex w-100 p-3 mx-auto flex-column"
        style={{ height: "92vh" }}
      >
        {/* <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Features
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header> */}

        <main className="px-3">
          <h1>Encryption Website.</h1>
          <p className="lead">
            THis website Encrypt and Decrypt your text using some of the most popular encryption algorithms.

          </p>
        
        </main>

        
        {/* <footer className="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrapsdfvbfdsa
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer> */}
      </div>
    </div>
  );
}
