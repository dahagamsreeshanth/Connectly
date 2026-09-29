 import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        backgroundColor: "rgba(223, 223, 223, 0.86)",
        paddingTop: "40px",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h3>
            Connect to the world, with Connectly
          </h3>
        </div>

        {/* Footer Links */}
        <div className="row justify-content-center">

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h4>Quick Links</h4>

            <p>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </p>

            <p>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </p>

            <p>
              <Link to="/register" style={linkStyle}>
                Register
              </Link>
            </p>

            <p>
              <Link to="/about" style={linkStyle}>
                About Us
              </Link>
            </p>
          </div>

          {/* Features */}
          <div className="col-md-3 mb-4">
            <h4>Features</h4>

            <p>Real-time Messaging</p>
            <p>Group Chats</p>
          </div>

        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #bbb",
            marginTop: "20px",
            padding: "25px 0",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 Connectly. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

const linkStyle = {
  color: "blue",
  textDecoration: "none",
};