import * as createStore from "redux-zero";

const appStore = (createStore as any)({
  orders: []
});

export default appStore
