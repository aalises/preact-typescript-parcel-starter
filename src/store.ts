import * as createStore from "redux-zero";
import { orderBurritoFormModel } from "./models/order-burrito-model";

const appStore = (createStore as any)({
  orders: []
});

export default appStore
