import * as React from 'react';
import List from './Lists';
class Todolist extends React.Component {
    // 2. here wee are define constructor bcoz inside this we use super method we use
    //we use base cls constructor and we dfine state obj
    constructor() {
        super();//super method
        this.state = {//state is a reserved keyword
            term: '',//we r taking empty array
            items: []//what ever we typed in term those will store in items here.
        }
    }
    //3. we are writting code for on chnge handler which were declared in input feild.
    onChangeHandler = (e) => {//using arrow function we r setting the state. then react will re render again
        this.setState({//when set state was updated then every tym new val will be updated.

            term: e.target.value
        })
    }

    onDeleteHandler = index => {
        const deleteTask = [this.state.items];
        deleteTask.splice(index, 1);// it means 
        this.setState({
            items: deleteTask
        });
    };
    onFormHandler = (e) => {
        e.preventDefault();//we can block default behaviour for this page
        this.setState({ //here we r having

            term: '',
            items: [this.state.items, this.state.term]//it will unpack val and print it
        });
    }
    //1. render part just defining input and button
    render() {

        return (
            <div>
                <form>
                    <div>
                        <input type='text' value={this.state.term} placeholder='Enter text' onChange={this.onChangeHandler} />
                        <button onClick={this.onFormHandler}>Add</button>
                    </div>
                </form>


                <List deleteTask={this.onDeleteHandler} items={this.state.items} />
            </div>
        )
    }

}
export default Todolist;