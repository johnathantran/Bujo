import React, { Component } from 'react'

export class contextMenus extends Component {
    render() {
        return (
            <div class="contextMenu">
                <ul class="menu-options">
                    <li class="menu-option priority">Toggle Complete</li>
                    <li class="menu-option moveup">Mark Migrated</li>
                    <li class="menu-option movedown">Mark Scheduled</li>
                    <li class="menu-option movedown">Mark Scheduled</li>
                </ul>
            </div>
        )
    }
}

export default contextMenus
