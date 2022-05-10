import React from 'react'

export default class Form extends React.Component {
   state = {
            todoText: ''
        }
    

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todoText)
        this.setState({
            todoText: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder='Add Task'
                    type="text"
                    name="todo"
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />

                <button>Add</button>
            </form>
        )
    }
}
