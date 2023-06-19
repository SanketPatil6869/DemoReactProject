// export function Home(props) {
//     return (
//         <div>
//             <h4>Welcome {props.name}, to our app</h4>
//             <h5>your age is {props.age} old</h5>
//         </div>
//     );
// }

import { Component } from "react";


export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome {this.props.name}</h2>
                <p>you are{this.props.age} year old</p>
            </div>
        );
    }
}