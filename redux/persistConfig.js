import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
  // Add any other configuration options as needed
}

export default persistConfig
