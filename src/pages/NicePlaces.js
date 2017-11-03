import React from 'react';
import fetchHelper, {errorChecker} from '../facades/fetchHelpers';
const URL = require("../../package.json").serverURL;

export default class NicePlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = { placeInfo: "empty", whatToRender: this.props.match.params.whatToRender }
    }
    componentWillMount() {
        this.getAllPlacesUnauthorized();
    }

    getAllPlacesUnauthorized = (cb) => {
        const options = {method: "GET", headers: {"Content-Type": "application/json"} }
        fetch(URL + "api/niceplace/all", options)
          .then((res) => {
            return res.json();
          }).then((data) => {
            
            this.setState({ data1: data[0].lName });
          }).catch(err => {
            console.log(JSON.stringify(err));
          })
      }


    render() {
        return (
            <div>
                <h2>All Nice Places</h2>
                <div className="nicePlaces">
                    <div>Image</div>
                    <div>Place Name</div>
                    <div>Rating</div>
                    <div>Address</div>
                    <div>GPS Location</div>
                    <div>Description</div>
                </div>
                {this.state.data1 && (
                    <div className="alert alert-danger errmsg-left" role="alert">
                        {this.state.data1}
                    </div>
                )}


            </div>
        );
    }


}