class Song{
	constructor(path){
		this.path = path;
		this.audio = new Audio(this.path);
	}

	play(vol){
		this.audio.volume = vol;
		this.audio.play();
		document.getElementById("Volume").innerHTML = this.audio.volume;
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
		this.musicList[this.musicIndex].stop();
		this.musicIndex = document.getElementById("Music").selectedIndex;
		this.musicList[this.musicIndex].play(this.volume);
	}

	forward(){
		this.musicList[this.musicIndex].stop();
	    let x = document.getElementById("Shuffle");
	    if (x.checked === true){
	    	this.musicIndex = Math.floor((Math.random() * this.musicList.length))
	    	console.log(this.musicIndex);
	    } else {
				this.musicIndex++;
			if (this.musicIndex >= this.musicList.length){
				this.musicIndex = 0;
			};
		}
		this.musicList[this.musicIndex].play(this.volume);		
	}

	rewind(){
		this.musicList[this.musicIndex].stop();	
		if (this.musicIndex > 0){
			this.musicIndex--;	
		}
		this.musicList[this.musicIndex].play(this.volume);
	}

	volUp(){
		let x = this.musicList[this.musicIndex].audio.volume;
		if (x < 1){
			x = Math.round((x + 0.05) * 100) / 100;
			document.getElementById("Volume").innerHTML = x;
			this.musicList[this.musicIndex].audio.volume = x;
			this.volume = x;
		}
	};

	volDn(){
		let x = this.musicList[this.musicIndex].audio.volume;
		if (x > 0){
			x = Math.round((x - 0.05) * 100) / 100;
			document.getElementById("Volume").innerHTML = x;
			this.musicList[this.musicIndex].audio.volume = x;
			this.volume = x;
		}
	};
}	
