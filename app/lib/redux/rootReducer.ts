import { combineReducers } from "redux"
import headerReducer from "./headerSlice"
import heroReducer from "./HeroSlice"

const rootReducer = combineReducers({
  header: headerReducer,
  hero: heroReducer,
})

export default rootReducer
