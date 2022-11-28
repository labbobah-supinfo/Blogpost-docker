import React, {Component} from 'react';
import Item from './Item';

export default class App extends Component {
    renderArticle(){
        return this.props.item.map((item, i) => (
            <Item key={i+1} item={item} />
        ));
    }

    render(){
        return(
            <div>
                <div className="row">
                    <ul>
                        {this.renderArticle()}
                    </ul>
                </div>
            </div>
        );
    }
}