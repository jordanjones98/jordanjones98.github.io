import { Component, OnInit } from '@angular/core';
import * as amplitudejs from 'amplitudejs'

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  songData;
  playing;
  shuffle = false;

  constructor() { }

  ngOnInit() {
    this.getSongs();
    this.getCurrentSongData();
    this.getState();
  }

  getSongs() {
    amplitudejs.init({
      "songs": [
        {
          "name": "Am I In Your Light",
          "artist": "Ben Howard",
          "album": "Unreleased",
          "url": "assets/songs/am_i_in_your_light.mp3",
          "cover_art_url": "assets/album_art/ben_howard_unreleased.png"
        },
        {
          "name": "Conrad",
          "artist": "Ben Howard",
          "album": "Live At iTunes Festival 2015",
          "url": "assets/songs/conrad.mp3",
          "cover_art_url": "assets/album_art/ben_howard_live_at_itunes_2015.png"
        },
        {
          "name": "Bird On A Wing",
          "artist": "Ben Howard",
          "album": "Unreleased",
          "url": "assets/songs/bird_on_a_wing.mp3",
          "cover_art_url": "assets/album_art/ben_howard_unreleased.png"
        },
        {
          "name": "Video Games (Lana Del Rey Cover)",
          "artist": "Ben Howard",
          "album": "Unreleased",
          "url": "assets/songs/video_games_cover.mp3",
          "cover_art_url": "assets/album_art/ben_howard_unreleased.png"
        },
        {
          "name": "The Burren",
          "artist": "Ben Howard",
          "album": "Unreleased",
          "url": "assets/songs/the_burren.mp3",
          "cover_art_url": "assets/album_art/ben_howard_unreleased.png"
        },
      ]
    });
  }

  getCurrentSongData() {
    this.songData = amplitudejs.getActiveSongMetadata();
    this.getState();
  }

  nextSong() {
    amplitudejs.next();
    this.getCurrentSongData();
  }

  previousSong() {
    amplitudejs.prev();
    this.getCurrentSongData();
  }

  playSong() {
    amplitudejs.play();
    this.getCurrentSongData();
  }

  pauseSong() {
    amplitudejs.pause();
    this.getCurrentSongData();
  }

  getState() {
    let state = amplitudejs.getPlayerState();
    if(state === "playing") {
      this.playing = true;
    } else {
      this.playing = false;
    }
  }

  toggleShuffle() {
    console.log("toggle shuffle: " + !this.shuffle);
    console.log(amplitudejs.setShuffle(!this.shuffle));
    this.shuffle = !this.shuffle;
  }
}
