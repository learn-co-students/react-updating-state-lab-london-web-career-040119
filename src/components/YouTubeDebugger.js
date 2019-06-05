import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };
      
      changeBitrateHandler = () => {
        this.setState({
          settings: { ...this.state.settings, bitrate: 12}
        })
      }
      


      changeResolutioneHandler = () =>{
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              resolution: '720p'
            }
          }
        })
      }

    render(){
        let changeBitrate = this.changeBitrateHandler.bind(this)
        let changeResolution = this.changeResolutioneHandler.bind(this)
          return( <div>
        <button className="bitrate" onClick={changeBitrate}>
          Update bitrate
        </button>
        <button className="resolution" onClick={changeResolution}>
          Update resolution
        </button>
      </div>
    );
    }
}
