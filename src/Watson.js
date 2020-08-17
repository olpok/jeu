import React, { Component } from 'react'

class Watson extends Component {
    state = {
        data: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            'https://jsonplaceholder.typicode.com/posts/10'
        // 'https://api.eu-de.speech-to-text.watson.cloud.ibm.com/instances/81c81ffc-0d5e-4f62-9fba-5e50d1ab64b6'
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
    }

    render() {
        const { data } = this.state

        return <p>{data.title}</p>


    }
}

export default Watson

