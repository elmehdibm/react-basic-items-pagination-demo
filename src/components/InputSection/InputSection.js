import React, { Component } from 'react'
import "./styles.scss";

export default class InputSection extends Component {
    constructor(props){
        super(props);
        const {height, verticalSpacing, horizontalSpacing, itemsPerRow, itemsNumber} = this.props.inputLibrary;
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeVerticalS = this.onChangeVerticalS.bind(this);
        this.onChangeHorizontalS = this.onChangeHorizontalS.bind(this);
        this.onChangeItemsPerRow = this.onChangeItemsPerRow.bind(this);
        this.onChangeItemsNumber = this.onChangeItemsNumber.bind(this);

        this.state = {
            "height": height,// height of each Item
            "verticalSpacing": verticalSpacing, // The space of Items Vertically
            "horizontalSpacing": horizontalSpacing, // The space of Items Horizontally
            "itemsPerRow": itemsPerRow, // Number of Items in each row of the page
            "itemsNumber": itemsNumber // Number of Items in each page
        }
    }

    componentWillReceiveProps(nextProps){
        const {height, verticalSpacing, horizontalSpacing, itemsPerRow, itemsNumber} = nextProps.inputLibrary;
        this.setState({
            "height": height,// height of each Item
            "verticalSpacing": verticalSpacing, // The space of Items Vertically
            "horizontalSpacing": horizontalSpacing, // The space of Items Horizontally
            "itemsPerRow": itemsPerRow, // Number of Items in each row of the page
            "itemsNumber": itemsNumber // Number of Items in each page
        });
    }

    onChangeHeight (event) {
        this.setState({"height": event.target.value});
    };

    onChangeVerticalS (event) {
        this.setState({"verticalSpacing": event.target.value});
    };

    onChangeHorizontalS (event) {
        this.setState({"horizontalSpacing": event.target.value});
    };

    onChangeItemsPerRow (event) {
        this.setState({"itemsPerRow": event.target.value});
    };

    onChangeItemsNumber (event) {
        this.setState({"itemsNumber": event.target.value});
    };

    render() {
        const {renderView} = this.props;
        const {height, verticalSpacing, horizontalSpacing, itemsPerRow, itemsNumber} = this.state;

        return (
            <div
                className="input_section_container"
            >
                <div className="title">
                    React Basic Items Pagination
                    <div className="title-ext">
                        (Demo)
                    </div>
                </div>

                <div className="inputs_holder">
                    <div className="label-holder">
                        <div className="label-holder__txt">
                            Item Height
                            </div>
                    </div>
                    <div className="input-holder">
                        <input type="text"
                            value={height} onChange={this.onChangeHeight} className="input-holder__txt" />
                    </div>
                    <div className="label-holder">
                        <div className="label-holder__txt">
                            Vertical Spacing
                            </div>
                    </div>
                    <div className="input-holder">
                        <input type="text"
                            value={verticalSpacing} onChange={this.onChangeVerticalS}  className="input-holder__txt" />
                    </div>
                    <div className="label-holder">
                        <div className="label-holder__txt">
                            Horizontal Spacing
                            </div>
                    </div>
                    <div className="input-holder">
                        <input type="text"
                          value={horizontalSpacing} onChange={this.onChangeHorizontalS}   className="input-holder__txt" />
                    </div>

                    <div className="label-holder">
                        <div className="label-holder__txt">
                            Number of items per row
                            </div>
                    </div>
                    <div className="input-holder">
                        <input type="text"
                          value={itemsPerRow} onChange={this.onChangeItemsPerRow}   className="input-holder__txt" />
                    </div>
                    <div className="label-holder">
                        <div className="label-holder__txt">
                            Total number of items
                            </div>
                    </div>
                    <div className="input-holder">
                        <input type="text"
                          value={itemsNumber} onChange={this.onChangeItemsNumber}   className="input-holder__txt" />
                    </div>
                </div>

                <div className="actions_hoder">

                    <div className="render-container">
                        <button onClick={() => {
                            renderView(this.state);
                        }} className="button-style">
                            Render
                    </button>
                    </div>

                    <div className="refresh-container">
                        <button onClick={
                            ()=> {
                                this.setState({
                                    "height":200,// height of each Item
                                    "verticalSpacing":5, // The space of Items Vertically
                                    "horizontalSpacing":5, // The space of Items Horizontally
                                    "itemsPerRow":2, // Number of Items in each row of the page
                                    "itemsNumber":4 // Number of Items in each page
                                });
                            }
                        } className="button-style">
                            Reset State
                    </button>
                    </div>

                </div>

                <div className="infos_holder">


                    <div>
                        <a className="about" href="https://github.com/elmehdibm/react-basic-items-pagination">
                            Link to Code
                        </a>
                    </div>

                    <div className="credits">
                        <a style={{"color": "white"}} href="https://github.com/elmehdibm">
                            By El Mehdi Boumhicha
                        </a>
                    </div>
                    
                </div>

            </div>
        )
    }
}
