import React, {Component} from 'react';

class Child extends Component {
    render() {
        // eslint-disable-next-line
        return (
            <div ref="test">
                <a href="http://www.baidu.com" ref="update">点击我</a>
            </div>
        );
    }
}

export default Child;