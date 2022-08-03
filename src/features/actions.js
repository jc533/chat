import { init } from "./reducers"
import { startWebSocket } from "./reducers/userSlice";
export const setInit = (data) => (dispatch) => {
    // dispatch(init(data));
    // return dispatch(startWebSocket());
}