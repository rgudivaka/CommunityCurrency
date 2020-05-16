import React from 'react';
import './NotificationForm.css';
export default class NotificationForm extends React.Component{
  render() {
    return(
      <div id="Notification">
        <h2 id="title">Notification Setting</h2>
        <form>
          <p>Get Notification?</p>
          <label id="InputNum">Phone Number:</label>
          <input type="text"/>
          <input type="radio"/>
          <label id="YesRadio">Yes</label>
          <input type="radio"/>
          <label>No</label><br/>
          <label id="InputEmail">Email:</label>
          <input type="text"/>
          <input type="radio"/>
          <label id="YesRadio">Yes</label>
          <input type="radio"/>
          <label>No</label><br/>
          <input id="saveBtn" type="submit" value="save"/>
        </form>
      </div>
    );
  }
}
