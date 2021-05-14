import * as React from 'react';
class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((items, index) => (
                        <li key={index} onClick={this.props.deleteTask.bind(this, index)}>
                            {items}
                        </li>
                    ))}
                </ul>
            </div >
        )

    }
}
export default List;