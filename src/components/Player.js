import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: this.props.videoId
      });
    };
  }

  componentWillReceiveProps(nextProps){
    const { videoId } = nextProps;
    if(videoId !== this.props.videoId){
      this.player.loadVideoById( videoId );
    }
  }

  render(){
    return (
      <div>
        <div id="player"></div>
      </div>
    );
  }
};

export default Player;
