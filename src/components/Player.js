import React, { Component } from 'react';
import './Player.css';
import PlayerListItem from './PlayerListItem.jsx';

export default class Player extends Component{
    
    // TODO: Load files externally
    getSongs() {
        return [
          {
            title: 'Live While We\'re Young',
            artist: 'One Direction',
            url: 'Song1.m4a',
          },
          {
            title: 'Freaky Friday Feat',
            artist: 'Chris Brown',
            url: 'Song4.m4a',
          },
          {
            title: 'Roar!',
            artist: 'Caty Perry',
            url: 'Song2.m4a',
          },
          {
            title: 'Maroon 5 - Sugar',
            artist: 'Maroon 5',
            url: 'Song3.m4a',
          },
        ];
    }

    pauseAllAudio(){
        this.getSongs().map( (item, index) => this.refs[`child${index}`].pauseAll() );
    }

    render(){
        const songs = this.getSongs().map( (song, index)  => <div key={`div${index}`}><PlayerListItem ref={`child${index}`} { ...song } pauseAll={this.pauseAllAudio.bind(this)} /><br/></div>);
        return (
            <div className="songlists">
                { songs }                
            </div>
        )
    }
}