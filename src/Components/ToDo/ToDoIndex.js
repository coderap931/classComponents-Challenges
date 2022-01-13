import React, {Component} from 'react';

export default class ToDoIndex extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            newTask: "",
            taskId: 1,
        };
        this.addTask = this.addTask.bind(this);
        this.removeCompletedTask = this.removeCompletedTask.bind(this);
    }

    addTask(event) {
        event.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask],
            newTask: "",
        })
    }

    changeAddTaskHandler(event) {
        this.setState({newTask: event.target.value});
    }

    changeTaskIdHandler(event) {
        this.setState({taskId: event.target.value});
    }

    removeCompletedTask(event) {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.splice(this.state.taskId, 1),
        }) 
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Current Tasks:</h2>
                <ul className="currentTasks">
                    {this.state.tasks.map((task) => {
                        return (<li>{task}</li>);
                    })}
                </ul>
                <h2>Add a new Task</h2>
                <form onSubmit={this.addTask}>
                    <input type="text" value={this.state.newTask} onChange={(event) => this.changeAddTaskHandler(event)}/>
                    <button type="submit">Add Task</button>
                </form>
                <h2>Remove a completed Task</h2>
                <form onSubmit={this.removeCompletedTask}>
                    <input type="number" value={this.state.taskId} onChange={(event) => this.changeTaskIdHandler(event)}/>
                    <button type="submit">Remove Task</button>
                </form>
            </div>
        )
    }
}