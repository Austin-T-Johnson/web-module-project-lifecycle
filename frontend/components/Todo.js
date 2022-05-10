import React from 'react'

export default class Todo extends React.Component {
  
  render() {
    return (
      <div>
     <p onClick= { () => this.props.toggleTodo(this.props.item.id)} 
        className={`item${this.props.item.completed ? ' completed' : ''}`}>{this.props.item.name} </p>
      </div>
    )
  }
}
