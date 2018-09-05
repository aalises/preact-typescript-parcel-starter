import { h, Component } from "preact";
import { getRandMessage } from "../utils/utils";
import Clock from "./Clock";
import Footer from "./Footer";

interface mainState {
  message: string[]
}

export default class Main extends Component<any, mainState> {

  state = {
      message : ["",""]
  }

  componentDidMount(){
      this.setState({message: getRandMessage()});
  }

  render() {
    return (
      <div>
        <span>
          <h4>{this.state.message[0]}</h4>
          <Clock /> 
          <h4>{this.state.message[1]}</h4>
        </span>
        <Footer author="aalises" emoji="🤘"  />
      </div>
    )
  }
}