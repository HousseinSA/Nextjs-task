import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import headerReducer from "./headerSlice"
import heroReducer from "./HeroSlice"

const headerPersistConfig = {
  key: "header",
  storage,
}

const rootReducer = combineReducers({
  header: persistReducer(headerPersistConfig, headerReducer),
  hero: heroReducer,
})

export default rootReducer
