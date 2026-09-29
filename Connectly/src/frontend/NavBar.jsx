import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary shadow-sm">
      <div
        className="container-fluid"
        style={{
          padding: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="/Connectly logo.png"
            alt="Connectly Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Welcome text */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <h5
            style={{
              fontWeight: "700",
              margin: "0",
              fontSize: "20px",
            }}
          >
            Welcome to Connectly
          </h5>

          <p
            style={{
              margin: "5px 0 0",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Connect with your friends with Connectly
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#6c757d",
              color: "white",
              fontWeight: "500",
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#f3a6b8",
              color: "black",
              fontWeight: "500",
            }}
          >
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}