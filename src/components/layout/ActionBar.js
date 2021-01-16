import React, { Component } from 'react'

export class ActionBar extends Component {
    render() {
        return (
            <div className="center">
                <button className="actionBtn">Toggle Complete</button>
                <button className="actionBtn">Migrate</button>
                <button className="actionBtn">Schedule</button>
                <button className="actionBtn">Delete Task</button>
            </div>
        )
    }
}

export default ActionBar
