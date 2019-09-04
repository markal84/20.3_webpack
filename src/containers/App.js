import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import todoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title = {"Test App title"} todoList={"Number of tasks added: " + todoList.length} />
            </div>
        );
    }
}

export default App;