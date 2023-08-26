// import React, { useState } from 'react';

// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const options = ['Seçenek 1', 'Seçenek 2', 'Seçenek 3', 'Seçenek 4'];

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//     };

//     return (
//         <div style={styles.dropdown}>
//             <button onClick={toggleDropdown}>Seçenekler {isOpen ? '▲' : '▼'}</button>
//             {isOpen && (
//                 <ul style={styles.optionsList}>
//                     {options.map((option, index) => (
//                         <li
//                             key={index}
//                             style={styles.option}
//                             onClick={() => handleOptionSelect(option)}
//                         >
//                             {option}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             {selectedOption && <p>Seçilen: {selectedOption}</p>}
//         </div>
//     );
// };

// const styles = {
//     dropdown: {
//         position: 'relative',
//         display: 'inline-block',
//     },
//     optionsList: {
//         position: 'absolute',
//         top: '100%',
//         left: 0,
//         backgroundColor: '#f0f0f0',
//         padding: '5px',
//         listStyle: 'none',
//         margin: 0,
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     option: {
//         cursor: 'pointer',
//         padding: '5px',
//     },
// };

// export default Dropdown;

// import React, { useState } from 'react';

// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const options = ['Noutbuklar', 'Smartfonlar', 'Kameralar', 'Aksesuarlar'];

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//     };

//     return (
//         <div className='dropdown'>
//             <button  className='dropdown-btn' onClick={toggleDropdown}>
//                 {selectedOption || 'Kateqoriyalar'} {isOpen ? '▲' : '▼'}
//             </button>
//             {isOpen && (
//                 <ul className='options-list'>
//                     {options.map((option, index) => (
//                         <li className='option'
//                             key={index}
//                             // onClick={() => handleOptionSelect(option)}
//                         >
//                             {option}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             {/* {selectedOption && (
//                 <p style={styles.selectedOption}>Seçilen: {selectedOption}</p>
//             )} */}
//         </div>
//     );
// };

// // const styles = {
// //     // dropdown: {
// //     //     position: 'relative',
// //     //     display: 'inline-block',
// //     //     fontFamily: 'Arial, sans-serif',
// //     //     marginLeft:'5px',
// //     // },
// //     // dropdownButton: {
// //     //     backgroundColor: '#fff',
// //     //     border: '1px solid #ccc',
// //     //     borderRadius: '40px 0 0 40px ',
// //     //     height: '48px',
// //     //     padding: '12px 20px',
// //     //     cursor: 'pointer',
// //     // },
// //     // optionsList: {
// //     //     position: 'absolute',
// //     //     top: '100%',
// //     //     left: 0,
// //     //     backgroundColor: '#fff',
// //     //     padding: '5px',
// //     //     listStyle: 'none',
// //     //     margin: 0,
// //     //     borderRadius: '4px',
// //     //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// //     // },
// //     // option: {
// //     //     cursor: 'pointer',
// //     //     padding: '5px',
// //     //     borderBottom: '1px solid #ccc',
// //     //     color:'#15161D',
// //     // },
// //     selectedOption: {
// //         marginTop: '10px',
// //         fontSize: '14px',
// //         color: '#666',
// //     },
// // };

// export default Dropdown;

// import { Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import Tabs from './Tabs';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="dropdown-content">
       <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle-btn" onClick={toggleDropdown}>
        <div className='btn-name'>
        Kateqoriyalar 
        </div>
      </button>
      <ul className="dropdown-menu">
          <Link className='li' to="/all-products">Bütün məhsullar</Link>
          <Link className='li' to="/computers">Notbuklar</Link>
          <Link className='li' to="/phones">Smartfonlar</Link>
          <Link className='li' to="/cameras">Fotoaparatlar</Link>
          <Link className='li' to="/accessories">Aksesuarlar</Link>
          {/* <Tabs /> */}
      </ul>
    
    </div>
    // </div>
    
  );
};

export default Dropdown;

// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle-btn" onClick={toggleDropdown}>
//         Toggle Dropdown
//       </button>
//       <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
//         <li>Option 1</li>
//         <li>Option 2</li>
//         <li>Option 3</li>
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;