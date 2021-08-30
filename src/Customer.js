import React, { Component } from "react";

class Customer extends Component {
    render(){
        return(
            <>
            <tr>
                <td>1</td>
                <td>Naveen Kumar</td>
                <td>2890</td>
                <td>naveen@guvi.com</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>

            <tr>
                <td>2</td>
                <td>kishor Kanna</td>
                <td>2842</td>
                <td>kishore@guvi.com</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>

            <tr>
                <td>3</td>
                <td>Vedha Kumar</td>
                <td>2827</td>
                <td>vedha@guvi.com</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>

            <tr>
                <td>4</td>
                <td>Samuel Jackson</td>
                <td>2893</td>
                <td>sam@guvi.com</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>
            </>
        );
    }
}

export default Customer;