function songDecoder(song){
song = song.replace(/WUB/gmi,' ')
song = song.replace(/\s\s+/g, ' ');
song = song.trim()
return song
}