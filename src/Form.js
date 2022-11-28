import React, {Component} from "react";

export default class Form extends Component{
    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                        <input id="title" type="text" className="validate" />
                        <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="content" type="text" className="validate"/>
                        <label htmlFor="content">Content</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="date" type="date" className="validate"/>
                        <label htmlFor="date">Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="categorie" type="text" className="validate"/>
                        <label htmlFor="categorie">Category</label>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}