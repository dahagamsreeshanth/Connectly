import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to continue connecting with your friends.</p>
        </div>
        
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <div className="password-label">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
            />

            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">Create an account</Link>
        </p>

      </div>
    </div>
  );
}