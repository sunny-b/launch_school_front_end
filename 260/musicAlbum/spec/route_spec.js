var request = require('request');
var root = 'http://localhost:3000/'
var albums;

describe('HTTP Server Routes', function() {
	describe('/albums.json', function() {
		it('returns array of albums', function(done) {
			request(root + 'albums.json',function(e, res, body) {
				albums = JSON.parse(body);
				expect(albums[0].artist).toBeDefined();
				done();
			});
		});
	});

	describe('/albums/<album>.json', function() {
		it('returns an array of tracks', function(done) {
			request(root + 'albums/' + albums[0].title + '.json', function(e, res, body) {
				var tracks = JSON.parse(body);
				expect(tracks[0].title).toBeDefined();
				done();
			});
		});
	});
});