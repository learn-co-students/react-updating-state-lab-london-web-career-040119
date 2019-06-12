// Code YouTubeDebugger Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state = {
          errors: [],
          user: null,
          settings: {
             bitrate: 8,
             video: {
               resolution: '1080p'
            }
          }
        }


    }

    handleChangeBitrate = () => {
        //let currentState = this.state.settings
        //currentState['bitrate'] = 12
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                  ...this.state.settings.video,
                  resolution: '720p'
                }
              }
            })
    }

  

    render(){
        return (
            <div>
              <button className="bitrate" onClick={this.handleChangeBitrate}>
                Change bitrate
              </button>
              <button className="resolution" onClick={this.handleChangeResolution}>
                Change resolution
              </button>
            </div>
          );

    }



}

export default YouTubeDebugger