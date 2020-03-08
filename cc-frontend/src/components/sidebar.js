import React from 'react';
import InfoBox from './infoBox';

export default class SideBar extends React.Component {

    render() {
        return (
            <div>
                <InfoBox name="Receptacle 1" />
                <InfoBox name="Receptacle 2" />
                <InfoBox name="Receptacle 3" />
            </div>
        )
    }
}