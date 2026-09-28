import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-header">
          <h2>Create your account</h2>
          <p>Join Connectly and start connecting with your friends.</p>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

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
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
            />

            <label className="form-check-label" htmlFor="terms">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
}