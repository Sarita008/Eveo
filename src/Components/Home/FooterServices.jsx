import React from 'react';
import '../../assets/CSS/Home/FooterServices.css'; // Import the CSS file

const FooterServices = () => {
  return (
    <div className="agreement-container">
      <h1>User Agreement</h1>
      <p>By using the Services offered by EveoAI, you agree to the following:</p>

      <h3>Compliance with Laws</h3>
      <p>
        You will use the Services in accordance with applicable local and international laws.
      </p>

      <h3>User Content</h3>
      <p>
        Any content you submit (including images, feedback, or questions) must not infringe on third-party rights or violate any laws. 
        You agree that EveoAI can use such content to improve our Services.
      </p>

      <h3>No Misuse</h3>
      <p>
        You will not engage in any activity that compromises the security, integrity, or proper functioning of the Services.
      </p>

      <h3>Liability</h3>
      <p>
        You agree that your use of the Services is at your own risk. EveoAI is not responsible for any damages, losses, or costs 
        associated with your use of the Services.
      </p>

      <h3>Changes to Services</h3>
      <p>
        EveoAI may modify or discontinue any portion of the Services without prior notice.
      </p>

      <h3>Governing Law</h3>
      <p>
        This agreement is governed by the laws of India and any disputes will be subject to the courts in Surat, Gujarat.
      </p>
    </div>
  );
};

export default FooterServices;
