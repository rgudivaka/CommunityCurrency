import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import './RecDetailsDateFilter.css'
import "react-datepicker/dist/react-datepicker.css";

export default class RecDetailsDateFilter extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleEndChange = date => {
        this.setState({
            endDate: date
        });
    };

    render(){
        return (
            <div className="chart-dates-range">
                <div className="chart-date">
                    <div className="chart-date-text">
                        From:
                    </div>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="chart-date">
                    <div className="chart-date-text">
                        To:
                    </div>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndChange}
                        className="chart-date"
                    />
                </div>
            </div>
        );
    }
}
