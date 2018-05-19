import { h, Component } from "preact";
import { FormGroup } from "preact-bind-group";
import { ComponentForm } from "./component-form";
import { orderBurritoFormModel } from "../models/order-burrito-model";
import connectStore from "../connect"
import { addOrder } from "../actions"

@connectStore({addOrder})
export default class OrderBurritoForm extends ComponentForm<any, orderBurritoFormModel> {

  sizes = ['', 'Small', 'Medium', 'Large'];
  types = ['', 'Chicken', 'Chilli', 'Vegan','Cheese'];

  state = {
    form: {
      size: '',
      type: '',
      comments: '',
      toTakeAway: false
    },
    msg: ''
  }
  componentWillMount() {
    this.setFormModel(orderBurritoFormModel);
  }

  submitForm() {
    const validate = orderBurritoFormModel.validate(this.state.form);
    console.log(this.state.form);
    if (validate.success) {
      if (this.state.msg) this.setState(state => ({ errMsg: '' }))
      this.setState(state => ({ msg: `Your petition of a ${this.state.form.size} ${this.state.form.type} burrito ${this.state.form.toTakeAway ? 'to take away' : ''} has been succesful!` }))
      this.props.addOrder(this.state.form); //Add the order to our store variables
    } else {
      this.setState(state => ({ msg: validate.errMsg }))
    }
  }

  render() {
    return (
      <div>
         <FormGroup watch={change => this.handleFormChange(change)} preload={this.state.form}>
        <div class="hero-body">
                    <h3 class="title has-text-grey">Order Burrito Form</h3>
                    <p class="subtitle has-text-grey has-text-centered">Please order your burrito here.</p>
                    <div class="box">
                    <div class="field is-horizontal">
                    <div class="field-label">
                      <label class="label">Type</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-expanded">
                        <div class="control">
                          <div class="select is-fullwidth">
                          <select data-bind="type">
                            {this.types.map(el => (
                              <option value={el}>{el}</option>
                            ))
                            }
                          </select>
                          </div>
                          <p class="help is-danger">This field is mandatory</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Size</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-expanded">
                        <div class="control">
                          <div class="select is-fullwidth">
                          <select data-bind="size">
                            {this.sizes.map(el => (
                              <option value={el}>{el}</option>
                            ))
                            }
                          </select>
                          </div>
                          <p class="help is-danger">This field is mandatory</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="field is-horizontal">
                  <label class="label">
                    To take away?
                    <input data-bind='toTakeAway' type="checkbox" style={"margin-left: 1em"} />
                  </label>                 
                  </div>
                  <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Comments:</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <textarea data-bind="comments" class="textarea" placeholder="e.g send your cutest delivery boy"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                    <button onClick={_ => this.submitForm()} class="button is-block is-info is-large is-fullwidth">Order Burrito</button>  
                    <p class="help is-link has-text-weight-semibold"> {this.state.msg} </p>
                    </div>
                </div>
        </FormGroup>
      </div>
    )
  }
}
