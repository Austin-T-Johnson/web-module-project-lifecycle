import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
    state = {
        todos: []
    }


    componentDidMount() {
        axios.get(URL)
            .then(res => {
                console.log(res.data.data)
                const todos = res.data.data;
                this.setState({
                    todos
                })
            })
            .catch(err => console.error(err, "EROOR"))
    }

    toggleTodo = (todosId) => {
        axios.patch(`http://localhost:9000/api/todos/${todosId}`)
            .then(res => {
                console.log("ID", res)
                this.setState({
                    ...this.state,
                    todos: this.state.todos.map(item => {
                        if (todosId === item.id) {
                            return {
                                ...item,
                                completed: !item.completed
                            }
                        }
                        return item;
                    })
                })
            })

    }

    addTodo = (e, item) => {
        axios.post(URL, {
            name: item
        })
            .then(res => {
                this.setState({
                    ...this.state, 
                    todos: [...this.state.todos, res.data.data]
                })
            })
            .catch(err => console.error(err, "EROOR"))
    }

    hideCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.completed)
        })
    }

  



    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Todo List:</h1>
                </div>
                <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
                <Form addTodo={this.addTodo} />
                <button onClick={this.hideCompleted}>Clear Completed Tasks</button>
               



            </div>

        )
    }
}
