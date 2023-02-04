import { configureStore } from "@reduxjs/toolkit"
import controlsReducer from "../features/controls/controlsSlice"
// import {createLogger} from "redux-logger"

// const logger = createLogger();

const store = configureStore ({
    reducer: {
        controls: controlsReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store