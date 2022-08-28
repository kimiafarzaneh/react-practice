import React from 'react';


export default class TodoItem extends React.Component {

    render() {
        const onNameClicked=()=>{
            const id= this.props.todo.id
        this.props.toggleDone(id)
           
        }
        return (
            <div className="todo-item" onClick={onNameClicked}>
                <p>
                    <span className="name" >
                        {this.props.todo.name}
                    </span>

                    <span className="priority" style={{marginLeft: 6}}>
                    {this.props.todo.priority}
                    </span>

                    <span className="status" style={{marginLeft: 6}}>
                    {this.props.todo.done ? "done":''}
                    </span>
                </p>
            </div>
        )
    }
}
