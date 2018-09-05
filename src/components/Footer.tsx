import { h } from "preact"

export default (props) => {
      return (
          <span>
            <h4>Created</h4>
            <span role="img" aria-label="rock">{props.emoji}</span>
            <h4> by </h4>
            <a href="">{props.author}</a>
            <h4>by the time the the Lord of Lighting defeated the Balrog. View the Code on</h4>
            <a href="">Github</a> 
          </span>
      )
}