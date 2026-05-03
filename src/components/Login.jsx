import { useState } from 'react';
import './Sections.css';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook into your auth flow here
  };

  return (
    <div className="lg-page">
      <section className="lg-section">
        <div className="lg-card">
          <h1 className="lg-title">Sign In</h1>
          <p className="lg-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="lg-form">
            <div className="lg-field">
              <label htmlFor="lg-email">E-mail</label>
              <input
                id="lg-email"
                type="email"
                value={email}
                maxLength={255}
                placeholder="user@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="lg-field">
              <label htmlFor="lg-password">Password</label>
              <div className="lg-password-wrap">
                <input
                  id="lg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  maxLength={100}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="lg-eye"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <div className="lg-row">
              <label className="lg-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <button
                type="button"
                className="lg-link"
                onClick={() => onNavigate && onNavigate('forgot-password')}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="lg-submit">LOGIN</button>
          </form>

          <div className="lg-socials">
            <button type="button" className="lg-social lg-fb" aria-label="Facebook">f</button>
            <button type="button" className="lg-social lg-tw" aria-label="Twitter">t</button>
            <button type="button" className="lg-social lg-in" aria-label="LinkedIn">in</button>
          </div>

          <p className="lg-footer">
            Don't have an account?{' '}
            <button
              type="button"
              className="lg-link"
              onClick={() => onNavigate && onNavigate('register')}
            >
              Create free account
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}
