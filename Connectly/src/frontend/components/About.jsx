import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-5">

      {/* =======================
          PAGE HEADER
      ======================== */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          About Connectly
        </h1>

        <p
          className="text-muted mt-3"
          style={{ fontSize: "18px" }}
        >
          Connecting people, one conversation at a time.
        </p>
      </div>


      {/* =======================
          WHAT IS CONNECTLY
      ======================== */}
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            What is Connectly?
          </h2>

          <p style={{ lineHeight: "1.8" }}>
            Connectly is a real-time messaging platform designed to
            make it simple for people to communicate with their
            friends, family, and communities.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            Users can have personal conversations and participate
            in group chats, with messages delivered in real time
            using modern web technologies.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/Connectly logo.png"
            alt="Connectly Logo"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "contain",
            }}
          />
        </div>

      </div>


      {/* =======================
          FEATURES
      ======================== */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          What Connectly Offers
        </h2>
      </div>

      <div className="row g-4 justify-content-center mb-5">

        {/* Personal Messaging */}
        <div className="col-md-4">
          <div className="card h-100 text-center p-3 shadow-sm">
            <div className="card-body">

              <h2>💬</h2>

              <h5 className="fw-bold mt-3">
                Personal Messaging
              </h5>

              <p className="text-muted">
                Have private conversations with your friends and
                stay connected through real-time messaging.
              </p>

            </div>
          </div>
        </div>


        {/* Group Chats */}
        <div className="col-md-4">
          <div className="card h-100 text-center p-3 shadow-sm">
            <div className="card-body">

              <h2>👥</h2>

              <h5 className="fw-bold mt-3">
                Group Chats
              </h5>

              <p className="text-muted">
                Create groups, bring people together, and share
                messages with everyone in the conversation.
              </p>

            </div>
          </div>
        </div>

      </div>


      {/* =======================
          ABOUT ME
      ======================== */}
      <div
        className="row align-items-center mb-5 p-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "15px",
        }}
      >

        {/* Profile */}
        <div className="col-md-4 text-center mb-4 mb-md-0">

          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "#e9ecef",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
            }}
          >
            👨‍💻
          </div>

          <h3 className="fw-bold mt-3">
            Sree Shanth
          </h3>

          <p className="text-muted">
            Developer & Creator of Connectly
          </p>

        </div>


        {/* About Me */}
        <div className="col-md-8">

          <h2 className="fw-bold mb-3">
            About Me
          </h2>

          <p style={{ lineHeight: "1.8" }}>
            Hi, I'm <strong>Sree Shanth</strong>, an engineering
            student and developer interested in building practical
            software and solving real-world problems through
            technology.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            I built Connectly to explore how real-time communication
            systems work and to develop a complete messaging
            application using the MERN stack and Socket.IO.
          </p>

        </div>

      </div>


      {/* =======================
          TECH STACK
      ======================== */}
      <div className="text-center mb-5">

        <h2 className="fw-bold mb-4">
          Built With
        </h2>

        <div
          className="d-flex justify-content-center flex-wrap gap-3"
        >

          <span className="badge bg-dark p-3">
            React
          </span>

          <span className="badge bg-success p-3">
            Node.js
          </span>

          <span className="badge bg-secondary p-3">
            Express.js
          </span>

          <span className="badge bg-primary p-3">
            MongoDB
          </span>

          <span className="badge bg-warning text-dark p-3">
            JavaScript
          </span>

          <span className="badge bg-info text-dark p-3">
            Socket.IO
          </span>

        </div>

      </div>


      {/* =======================
          MISSION
      ======================== */}
      <div
        className="text-center p-5 mb-5"
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
        }}
      >

        <h2 className="fw-bold mb-3">
          Our Mission
        </h2>

        <p
          className="text-muted mx-auto"
          style={{
            maxWidth: "700px",
            lineHeight: "1.8",
          }}
        >
          The goal of Connectly is simple: make online communication
          easy and accessible. Connectly brings personal and group
          messaging together in one place while providing a smooth
          real-time communication experience.
        </p>

      </div>


      {/* =======================
          CTA
      ======================== */}
      <div className="text-center">

        <h3 className="fw-bold">
          Ready to connect?
        </h3>

        <p className="text-muted">
          Start your conversations with Connectly.
        </p>

        <Link
          to="/register"
          className="btn btn-primary px-4 py-2"
        >
          Get Started
        </Link>

      </div>

    </div>
  );
}