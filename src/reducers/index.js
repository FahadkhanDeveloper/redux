import { combineReducers } from "redux";
import changeTheNumber from "./changeTheNumber";

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;

// import changeTheNumber from "./changeTheNumber";

// import { combineReducers } from "redux"; //reducer is object

// const rootReducer = combineReducers({
//   changeTheNumber,
// });
// export default rootReducer;
