export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue exploring SISTECH CAFE
        </p>

        <form className="login-form" autoComplete="off">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <p className="signup-text">
          Dont have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}
