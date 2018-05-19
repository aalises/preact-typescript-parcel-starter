import { h, Component } from "preact";
import { Connect } from "redux-zero/preact";

export default function(actions = {}): any {
  return Child => props => (
    <Connect mapToProps={state => ({ ...state })} actions={actions}>
      {mappedProps => <Child {...mappedProps} {...props} />}
    </Connect>
  )
}
