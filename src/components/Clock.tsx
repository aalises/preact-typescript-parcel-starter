import { h, Component } from "preact";
import * as countdown from "countdown";
import { getLastAlbum } from "../utils/services";
import { defaultDate } from "../utils/utils";

interface ClockState {
    time: string,
    lastReleaseDate: Date
}

export default class Clock extends Component<any, ClockState> {

    state = {
        time: "",
        lastReleaseDate: defaultDate
    }

    componentDidMount(){
        getLastAlbum()
            .then(data => this.setState({lastReleaseDate: data},this.setTime))
            .catch(err => console.log("Error:",err) || this.setState({lastReleaseDate: defaultDate}));
        setInterval(() => this.setTime(),1000);
    }

    setTime(){ this.setState({time: countdown(this.state.lastReleaseDate).toString()}); }

    render() {
      return <h4>{this.state.time}</h4>
    }
  }
