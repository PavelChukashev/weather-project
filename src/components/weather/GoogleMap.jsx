import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

function GoogleMap() {
  return (
    <div className='map-container'>
        <Map
            className='google-map'
            google={google}
            style={{width: '40vw', height: '40vh'}}
        />
    </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMqJ9TMB7zE7h9iSs4zFXrBDQYu77-FEs'
}) (GoogleMap)