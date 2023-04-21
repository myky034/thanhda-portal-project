import React from 'react';
import './WelcomeBox.scss';
import ReactLogo from '../../assets/images/undraw_react_re_g3ui.svg'

const WelcomeBox = () => {
  return (
    <div className="welcome-box">
      <div className="welcome-container">
        <div className="container-quotes">
          <div className="welcome-text">
            <h3 className="text-name">Welcome, username !</h3>
          </div>
          <div className="welcome-quotes">
            <div className="content-quotes">
              <p>
                “ Đèn của thân thể là con mắt. Vậy nếu mắt anh sáng, thì toàn
                thân anh sẽ sáng. “
              </p>
            </div>
            <div className="quotes-source">
              <p>- Mt 6, 22</p>
            </div>
          </div>
        </div>
        <div className="welcome-images">
          <img src={ReactLogo} alt="React Logo" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeBox
