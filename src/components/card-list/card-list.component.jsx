// import { render } from "@testing-library/react";
import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    
    render() {
        console.log(this.props);
        const { monsters } = this.props; //props is given to us by react. If we log this.props, we will get all the props passed in the parent component
        
        return(
            <div className="card-list">
                {monsters.map((monster) => { //for each monster
                    return (
                        <Card monster={monster}/>
                    )
                })}
            </div>
        );
    }
}

export default CardList;