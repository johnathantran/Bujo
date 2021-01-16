import React from 'react'

function About() {
    return (
        // React.Fragment doesn't show in DOM, it's a ghost element\
        // just used as a wrapper in JSX
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a 
                React crash course.
            </p>
        </React.Fragment>
    )
}

export default About;