import React, {Component} from 'react'

class Content extends Component {

    thisIsAMapFunction(eachItem) {
        return (
            <div>
                <p>
                    {eachItem.username}
                    {eachItem.title}
                    {eachItem.content}</p>
                <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                <hr/>
            </div>
        )
    }

    render() {
        var forEachItem = this.props.info.map(
                (eachItem) =>
                    this.thisIsAMapFunction(eachItem));

        return (
            <div>
                <h2> {forEachItem}</h2>
            </div>
        );
    }
}

export default Content;