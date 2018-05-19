import { h, Component } from "preact";
import OrderBurritoForm from "./order-burrito-form";
import TableOrders from "./table-orders";
import { Provider } from "redux-zero/preact";
import appStore from "../store";

export default _ => (
<Provider store={appStore}>
    <div class="hero-body" style={"padding-top: 1.3em"}>
        <h2 class="title is-2 has-text-grey has-text-centered">Simple Burrito Restaurant (Preact + TS + Redux Zero)</h2>
        <p class="subtitle has-text-grey has-text-centered">Example for the Starter Pack.</p>
    <div class="columns">
    <div class="column is-half">
        <OrderBurritoForm />
    </div>
    <div class="column is-half">
        <TableOrders />
    </div>
    </div>
</div>
</Provider>
)

