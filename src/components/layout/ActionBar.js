import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class ActionBar extends Component {
    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
            date: new Date(),
            showing: false
        }
    }

    onChangeDate(date,id) {
        this.setState({
            date: date
        })
        console.log(date);
        //this.props.markScheduled(this,id,date)
    }

    render() {
        // destructuring
        const id = this.props.selectID;
        const { showing, date } = this.state;
        
        return (         
            <div className="center">
                <button className="actionBtn" onClick={this.props.markComplete.bind(this,id)}>Toggle Complete</button>
                <button className="actionBtn" onClick={this.props.markMigrated.bind(this,id)}>Mark Migrated</button>
                <button className="actionBtn" onClick={this.props.delTodo.bind(this,id)}>Delete Task</button>
                <button className="actionBtn" onClick={()=> this.setState({ showing: !showing})}>Mark Scheduled</button>
                { showing 
                    ? <div>             
                        <DatePicker
                        selected={date}
                        onSelect={this.props.markScheduled.bind(this,id)}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    : null
                }
            </div>       
        )
    }
}

export default ActionBar
