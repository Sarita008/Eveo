import React from 'react';
import '../../assets/CSS/Home/EmailSection.css';

const EmailSection = () => {

  // Function to initialize Razorpay
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        const options = {
          key: 'rzp_test_BqwXmtR5v1PWNh', // Enter the Test API Key here
          amount: 50000, // 50000 paise = INR 500, amount in paise (1 INR = 100 paise)
          currency: 'INR',
          name: 'Eveo',
          description: 'Test Transaction',
          image: 'https://your-logo-url.com/logo.png', // You can add your company logo here
          handler: (response) => {
            // This function handles the payment success scenario
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            // Here, you can send the payment response to your backend for verification and further processing.
          },
          prefill: {
            email: 'useremail@example.com', // You can prefill the email here if you have it from the input field.
          },
          theme: {
            color: '#528FF0',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        alert('Payment initialization failed. Please try again later.');
      }
    };
    document.body.appendChild(script);
  };

  // Handle Join Us button click
  const handleJoinClick = () => {
    loadRazorpay();
  };

  return (
    <div id="emailMe" className="email-box">
      <div className="email-container">
        <h1>“Ready to Get Started Join Eveo Today”</h1>
        <div className="email-input">
          <input type="email" placeholder="Enter your Email" />
          <button type="submit" onClick={handleJoinClick}>Join us</button>
        </div>
        <div className="top-right-circle"></div>
        <div className="bottom-right-circle"></div>
      </div>
    </div>
  );
};

export default EmailSection;
