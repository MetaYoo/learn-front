// @ts-ignore
import React from 'react';

class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    handleClick(e) {
        this.setState(
            {liked: !this.state.liked}
        );
    }

    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                hello {this.props.name}-{this.props.age}
                <p onClick={this.handleClick.bind(this)}>
                    You {text} this. Click to toggle.
                </p>
            </div>
        )
    }
}

export default HelloMessage;