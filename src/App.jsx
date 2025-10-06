import "./App.css";
import { SlLogin } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";

function App() {
  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted className="bg-video">
        <source src="/background-video-login-page .mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Login Card */}
      <div className="login-card-wrap">
        <div className="login-card-container">
          <img
            src="/logo-sirius-white.png"
            alt="Sirius Logo"
            className="login-logo"
          />
          <div className="login-card">
            {/* Logo Sirius */}

            <h2>Login to Sirius</h2>
            <h4>Secure access to your Sirius account</h4>

            <form className="form-login">
              <div className="input-wrapper">
                <span className="icon">
                  <LuUserRound />
                </span>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-wrapper">
                <span className="icon">
                  <TbLockPassword />
                </span>
                <input type="password" placeholder="Password" />
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      
        {/* SiriusLight text */}
        <div className="siriuslight-text">siriuslight.id</div>
    </div>
  );
}

export default App;
