import React, { useReducer } from "react";
import '../../assets/CSS/Home/Innovation.css';
import patna from "../../assets/Images/logo_IC IIT Patna 1.png";
import most from "../../assets/Images/MOST.png";
import iiml from "../../assets/Images/IIML.png";
import openai from "../../assets/Images/OPEN AI.png";
import gtu from '../../assets/Images/GTU.png';
import nvidia from "../../assets/Images/nvidia.png";
import meta from "../../assets/Images/meta.png";
import microsoftstartup from "../../assets/Images/Microsoft startup.png";
import zoho from "../../assets/Images/zoho.png";

// Define initial state
const initialState = {
  positions: [],
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_POSITIONS":
      return {
        ...state,
        positions: action.payload,
      };
    case "RANDOMIZE_POSITIONS":
      return {
        ...state,
        positions: action.payload,
      };
    default:
      return state;
  }
};

const Innovation = () => {
  const radius = 300; // Updated radius of the main circle
  const iconSize = 40; // Size of each icon (width and height)

  const icons = [patna, most, iiml, openai, gtu, nvidia, meta, microsoftstartup, zoho];
  const totalIcons = icons.length;
  const gap = 40; 

  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to calculate initial positions
  const calculatePositions = () => {
    const newPositions = icons.map((_, index) => {
      const angle = (index / totalIcons) * 2 * Math.PI;
      const x = radius * Math.cos(angle) + radius - iconSize / 2;
      const y = radius * Math.sin(angle) + radius - iconSize / 2;
      return { x, y };
    });
    dispatch({ type: "SET_INITIAL_POSITIONS", payload: newPositions });
  };

  // Function to randomly shuffle the positions
  const randomizePositions = () => {
    const randomPositions = icons.map(() => {
      const randomAngle = Math.random() * 2 * Math.PI;
      const x = radius * Math.cos(randomAngle) + radius - iconSize / 2;
      const y = radius * Math.sin(randomAngle) + radius - iconSize / 2;
      return { x, y };
    });
    dispatch({ type: "RANDOMIZE_POSITIONS", payload: randomPositions });
  };

  // Initialize positions when the component mounts
  React.useEffect(() => {
    calculatePositions(); // Calculate initial positions
    const interval = setInterval(randomizePositions, 2000); // Randomize every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="innovation-section">
      <div className="innovation-header">
        <div className="header-inno">
          <h2>Nurturing Innovation</h2>
          <h3>Where Supporters Foster Our Brand's Growth.</h3>
        </div>
        <div className="para-innov">
          <p>"We're honored to have the support of industry leaders and well-known brands who believe in our mission."</p>
        </div>
      </div>

      <div className="container">
        <div className="circle">
          {state.positions.map((pos, index) => (
            <img
              key={index}
              className="icon"
              src={icons[index]}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
              }}
              alt={`Icon ${index}`} // Add alt text for better accessibility
            />
          ))}
          {/* Adding concentric circles */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="concentric-circle"
              style={{ 
                width: `${radius * 2 - i * gap}px`, 
                height: `${radius * 2 - i * gap}px` 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Innovation;
