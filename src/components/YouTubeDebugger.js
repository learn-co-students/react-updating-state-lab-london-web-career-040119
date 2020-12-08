import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }


    changeBitrate = () => { 
        this.setState({ 
            settings: { ...this.state.settings,
                bitrate:  this.state.settings.bitrate + 12
            } 
        })
    }

    changeResolution = () => {
        this.setState({ 
            settings: {...this.state.settings, 
                video: { ...this.state.settings.video,
                    resolution: "720p"
                }
            }
         })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.changeBitrate}>bitrate</button>
                </div>
                <div>
                    <button onClick={this.changeResolution}>resolution
                </button>
                </div>
            </div>
            
        );
    }
}

export default YouTubeDebugger;