import React, { Component } from 'react'
import ExternalLink from './ExternalLink'
import SpotifyTrack from './SpotifyTrack'
import SpotifyLogo from './SpotifyLogo'
import TracksList from './TracksList'
import TrackCount from './TrackCount'

class SpotifyAlbum extends Component {
  render() {
    const { name } = this.props
    const tracks = this.props.tracks.items
    const url = this.props.external_urls.spotify
    const trackCount = this.props.tracks.total

    return (
      <div className="spotify-album content">
        <h3 className="spotify-album-name subtitle mb-0 mt-2">
          <ExternalLink
            url={url}
            className="spotify-link"
          >
            <SpotifyLogo className="mr-1" />
            {name}
            <TrackCount count={trackCount} />
          </ExternalLink>
        </h3>
        <TracksList
          tracks={tracks}
          trackCount={trackCount}
          className="spotify-album-tracks-list mt-1 width-full"
        />
      </div>
    )
  }
}

export default SpotifyAlbum
