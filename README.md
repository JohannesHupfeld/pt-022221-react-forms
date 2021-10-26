# React: Forms

### Props

#### Q: What are props?

Information (read-only) sent into a child component from a parent component like an HTML attribute:

```jsx
    // name and location are props
    <MyComponent name={'Laura'} location={'MN'} />

```

**Components should never change their own props.**


### State

#### Q: What is state?

Information managed from within a component.

DO NOT modify state directly.
This will not re-render a component.
State is immutable. What are some benefits of this?

https://reactjs.org/docs/state-and-lifecycle.html


Class Component

```jsx
import React, { Component } from 'react'

export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        }

    }

    //...

    someMethod(){
        const newItemsArray = ["item 1"]
        this.setState({items: newItemsArray})
        //OR
        this.setState(prevState => ({
            items: [...prevState.items, newItemsArray[0]]
        }))
    }

}

```

**NOTE:** class components `setState` accepts a second OPTIONAL argument: a function which is a callback once the state is set (b/c it is set asynchronously). To get a similar effect with react hooks, you use useEffect, which accepts a function as an argument which runs upon initial render and every time state changes:


### Controlled Forms

#### Q: What do we use in React to handle data that changes as user interacts with our app?

We want to keep our React State as our "single source of truth", so we will keep our input fields controlled.

Input fields that have their value managed by state are called "controlled components".

```
export default class MyForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            note: ""
        }

    }

    handleChange = e => {
      this.setState({
        note: e.target.value
      })
    }

    handleSubmit(){
        // send data wherever
        this.setState({
          note: ""
        })
    }

    render(){
      return(
        <form onSubmit={handleSubmit}>
          <input type="text" value={this.state.note} onChange={handleChange} />
          <input type="submit" />
        </form>
      )
    }
}
```