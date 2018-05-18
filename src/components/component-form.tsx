import { h, Component } from "preact";

interface FormManagement<M> {
  form: M,
  msg: string
}

export abstract class ComponentForm<props, model> extends Component<props, FormManagement<model>> {

  protected setFormModel(model: any) {
    this.setState({ form: new model })
  }

  protected handleFormChange(change) {
    this.setState(({ form, ...state }) => ({
      form: { ...form, ...change },
      ...state
    }));
  }

  abstract submitForm(...args): void;
}
