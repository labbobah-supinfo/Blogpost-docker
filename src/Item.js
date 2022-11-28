import React, {useState} from 'react';

function Item(props) {

    const[isReadMore, setIsReadMore] = useState(true);
    
    const toogleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return(
        <li>
            <div className="col s12 m12">
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h2> {props.item.title} - {props.item.date}, {props.item.categorie} </h2>
                            <p>
                                {isReadMore ? props.item.content.slice(0,3) : props.item.content}
                                <a onClick={toogleReadMore}>
                                    {isReadMore ? " ...Read More" : "Read Less"}
                                </a>
                            </p>
                            <a class="waves-effect waves-light btn"><i class="material-icons left">create</i>Edit</a>
                            
                        </div>
                        {/* <div className="card-action">
                            <a href="#">This is a link</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Item;