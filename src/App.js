import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <a
          className="quantity_minus"
          title="Decrement"
          href="#"
          onClick={() => dispatch(decrement())}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity_input"
          value={myState}
        />
        <a
          className="quantity_plus"
          title="Increment"
          onClick={() => dispatch(increment())}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { incNumber, decNumber } from "./actions/index";
// const App = () => {
//   const myState = useSelector((state) => state.changeTheNumber);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div className="container">
//         <h1>Increment/Decrement counter</h1>
//         <h4>using React and Redux</h4>
//         <div className="quantity">
//           <a className="quantity_minus" title="Decrement" href="#">
//             <span>-</span>
//           </a>
//           <input
//             name="quantity"
//             type="text"
//             className="quantity_input"
//             value={myState}
//           />
//           <a
//             className="quantity_plus"
//             title="increment"
//             onClick={() => dispatch(incNumber())}
//           >
//             <span>+</span>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
