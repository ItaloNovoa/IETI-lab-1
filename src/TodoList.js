import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    } 
    
  
    render() {        

        const items = this.props.items;
        const listItems = items.map((list,i) =>
        <li id={i}><Todo
          res={list}
          />
        </li>
      );
      
        return (  
            <ul>{listItems}</ul>
        );
    }
}
