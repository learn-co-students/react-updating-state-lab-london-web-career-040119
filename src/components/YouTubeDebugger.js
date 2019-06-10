import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
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

    updateBitrate = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          })
    }

    updateResolution = () => {
        this.setState(prevState => ({
            ...prevState,
            settings: {
                ...prevState.settings,
                video: {
                    ...prevState.settings.video, 
                    resolution: '720p'
                }
            }
        }))
    }

   

    render() {
        return (
            <div>
                <button onClick={this.updateBitrate} className="bitrate">Change Bitrate</button>
                <button onClick={this.updateResolution} className="resolution">Change Resolution</button>
            </div>
        )
    }
}