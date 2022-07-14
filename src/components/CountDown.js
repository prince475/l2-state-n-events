import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <center>
                    <h4 className="time-text">100</h4>
                </center>
            </div>
        )
    }

}