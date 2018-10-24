import React, {Component} from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
// capitalize custom components to differentiate them from regular HTML elements
class Table extends Component {
    render() {
        // access data passed from parent
        // const {characterData} = this.props;
        const { characterData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader/>
                <TableBody characterData = {characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

// Simple Component
// const TableHeader = () => {
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//             </tr>
//         </thead>
//     );    
// }
// const TableBody = () => { 
//     return (
//         <tbody>
//             <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//             </tr>
//             <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//             </tr>
//             <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//             </tr>
//             <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//             </tr>
//         </tbody>
//     );
// }
export default Table;