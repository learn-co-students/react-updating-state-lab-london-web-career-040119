import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state =
      {
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

  handleBitrateClick = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12}
    })
  }

  handleResulotionClick = () => {
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

  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.handleResulotionClick}>
          Resolution
        </button>
      </React.Fragment>
    )
  }
}
