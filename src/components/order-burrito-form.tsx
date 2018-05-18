import { h, Component } from "preact";
import { FormGroup } from "preact-bind-group";
import { ComponentForm } from "./component-form";
import { orderBurritoFormModel } from "../models/order-burrito-model";

export default class OrderBurritoForm extends ComponentForm<any, orderBurritoFormModel> {

  sizes = ['', 'small', 'medium', 'large'];
  types = ['', 'chicken', 'chili', 'vegan'];

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
    if (validate.success) {
      if (this.state.msg) this.setState(state => ({ errMsg: '' }))
      this.setState(state => ({ msg: `Your petition of a ${this.state.form.size} ${this.state.form.type} burrito ${this.state.form.toTakeAway && `to take away`} has been succesful!` }))
    } else {
      this.setState(state => ({ msg: validate.errMsg }))
    }
  }

  render() {
    return (
      <div>
        Order your Burrito here!
         <FormGroup watch={change => this.handleFormChange(change)} preload={this.state.form}>
          <span>
            <p> Select Size: </p>
            <select data-bind="size">
              {this.sizes.map(el => (
                <option value={el}>{el}</option>
              ))
              }
            </select>
          </span>
          <span>
            <p> Select Type: </p>
            <select data-bind="type">
              {this.types.map(el => (
                <option value={el}>{el}</option>
              ))
              }
            </select>
          </span>
          <div>
            <input type="checkbox" data-bind="toTakeAway" /> To take away
              </div>
          <div>
            Comments: <textarea data-bind="comments"> </textarea>
          </div>
          <div>
            <button onClick={_ => this.submitForm()}> Submit </button>
          </div>
        </FormGroup>
        {this.state.msg}
      </div>
    )
  }
}
