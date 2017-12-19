"use strict"

class Song{
	constructor(path){
		this.path = path;
		this.audio = new Audio(this.path);
	}

	play(vol){
		this.audio.volume = vol;
		this.audio.play();
	}

	pause(){
		this.audio.pause();
	}

	stop(){
		this.audio.pause();
		this.audio.currentTime = 0;	
	}

};

class JukeBox{
	constructor(){
		this.musicList = [];					
		this.musicIndex = 0;
		this.volume = 0.5;
		this.Shuffle = false;
	}

	addMusic(song){
		this.musicList.push(song);
	}

	play(){
		this.musicList[this.musicIndex].play(this.volume);
	}

	pause(){
		this.musicList[this.musicIndex].pause();
	}

	stop(){
		this.musicList[this.musicIndex].stop();
	}

	gotoSong(){
		this.stop();
		this.musicIndex = document.getElementById("Music").selectedIndex;
		this.play();
	}

	forward(){
		this.stop();
	    if (this.Shuffle === true){
	    	this.musicIndex = Math.floor((Math.random() * this.musicList.length))
	    	console.log(this.musicIndex);
	    } else {
				this.musicIndex++;
			if (this.musicIndex >= this.musicList.length){
				this.musicIndex = 0;
			};
		}
		this.play();		
	}

	rewind(){
		this.stop();	
		if (this.musicIndex > 0){
			this.musicIndex--;	
		}
		this.play();
	}

	volUp(){
		let x = this.volume;
		if (x < 1){
			x = Math.round((x + 0.05) * 100) / 100;
			this.musicList[this.musicIndex].audio.volume = x ;
			this.volume = x;
		}
	};

	volDn(){
		let x = this.volume;
		if (x > 0){
			x = Math.round((x - 0.05) * 100) / 100;
			this.musicList[this.musicIndex].audio.volume = x;
			this.volume = x;
		}
	};
}	
