import React from 'react';
import '../../assets/CSS/About/WhyChooseUs.css';

const WhyChooseUs = () => {
  const points = [
    {
      number: '01',
      title: 'Personalization',
      description: 'Our AI tailors its recommendations to your unique style, preferences, and needs.'
    },
    {
      number: '02',
      title: 'Convenience',
      description: 'Get fashion advice and outfit ideas anytime, anywhere, on your smartphone or computer.'
    },
    {
      number: '03',
      title: 'Fashion Expertise',
      description: 'Benefit from the collective knowledge of fashion experts and the latest industry trends.'
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'We guarantee top-quality recommendations backed by data-driven insights.'
    },
    {
      number: '05',
      title: 'Easy to Use',
      description: 'Our platform is designed with user-friendly interfaces for a seamless experience.'
    }
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="why-choose-us-content">
        {points.map((point, index) => (
          <div className="why-choose-us-point" key={index}>
            <span className="point-number">{point.number}</span>
            <div className="point-text">
              <h3 className="point-title">{point.title}:</h3>
              <p className="point-description">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
