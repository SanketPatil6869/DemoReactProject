import { Component } from "react";

import { useState } from "react";


// export class Scorecard extends Component {
//     constructor() {
//         super();
//         this.state = {
//             score: 0
//         }
//     }
//     increaseScore = () => {
//         this.setState({ score: this.state.score + 1 });
//     }
//     DecreaseScore = () => {
//         this.setState({ score: this.state.score - 1 });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.score}</h1>
//                 <input type="button" value="+" onClick={this.increaseScore}></input>
//                 <input type="button" value="-" onClick={this.DecreaseScore}></input>
//             </div>
//         );
//     }
// }


// export function Scorecard() {
//     const [score, setScore] = useState(0);

//     const increaseScore = () => {
//         setScore(score + 1);
//     }
//     const DecreaseScore = () => {
//         setScore(score - 1);
//     }
//     return (
//         <div>
//             <h1>{this.state.score}</h1>
//             <input type="button" value="+" onClick={increaseScore}></input>
//             <input type="button" value="-" onClick={DecreaseScore}></input>
//         </div>
//     );
// }