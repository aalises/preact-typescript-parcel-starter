import { h, Component } from "preact";
import connectStore from "../connect";
import { deleteLastOrder } from "../actions"

@connectStore({deleteLastOrder})
export default class TableOrders extends Component<any, any> {

  render() {
    return (
        <div class="hero-body">
        <h3 class="title has-text-grey has-text-centered">Order Overview</h3>
        <p class="subtitle has-text-grey has-text-centered">All your orders will appear here.</p>
        <div class="box has-text-right">
        {this.props.orders.length === 0 && <p id="no-order-message" class="help is-danger has-text-left"> There are no orders yet, come on, aren't you hungry? </p>}
        <table class="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Size</th>
            <th>To take away?</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
            {this.props.orders.map(el =>{
                return (
                    <tr>       
                        <td>{el.type}</td>
                        <td>{el.size}</td>
                        <td>{el.toTakeAway ? 'Yes' : 'No'}</td>
                        <td>{el.comments}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      <button onClick={_ => this.props.deleteLastOrder()} id="delete-order-button" class="button is-danger is-hover is-small"> Delete last order </button>
      </div>
      </div>
    )
  }
}
