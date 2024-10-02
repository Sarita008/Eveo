import React from 'react';
import '../../assets/CSS/Home/Refund.css'; // Import the CSS file

const Refund = () => {
  return (
    <div className="refund-container">
      <h1>Refund Policy</h1>

      <h2>Eligibility for Refund:</h2>
      <ul>
        <li>You must request a refund within 7 days of purchasing a paid service.</li>
        <li>
          Refunds will only be issued for Services that fail to perform as described or have been proven defective.
        </li>
        <li>
          Subscription-based Services, such as premium memberships, are generally non-refundable after usage, except in 
          cases where technical issues prevent access to the paid features.
        </li>
      </ul>

      <h2>Process for Refunds:</h2>
      <p>
        To request a refund, you must email our customer support team at 
        <a href="mailto:support@eveoai.com"> support@eveoai.com</a>, providing your purchase details and a clear description 
        of the issue.
      </p>
      <p>
        Approved refunds will be credited to your original payment method within 14 business days of approval.
      </p>

      <h2>Non-Refundable Items:</h2>
      <ul>
        <li>
          Fees related to consulting, AI-powered services, or custom services are non-refundable unless otherwise specified.
        </li>
        <li>Discounts, promotions, or gift subscriptions are non-refundable.</li>
      </ul>
    </div>
  );
};

export default Refund;
