function make_album(artist, title, tracks) {
    var album = {
        'artist': artist,
        'title': title
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album('Led Zeppelin', 'Led Zeppelin IV'));
console.log(make_album('Pink Floyd', 'Dark Side of the Moon'));
console.log(make_album('The Beatles', 'Abbey Road'));
console.log(make_album('Miles Davis', 'Kind of Blue', 5));
