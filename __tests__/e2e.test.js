const superagent = require('superagent');
const http = require('http');
const status = require('http-status');
const app = require('../src/app');

const port = process.env.PORT || 3000;

describe('E2E test', () => {

    let server;

    beforeAll(() => {
        server = http.createServer(app);
        server.listen(port);
    });

    afterAll(() => {
        server.close();
    });

    it('should return correct response', (done) => {
        superagent
            .get('http://localhost:3000')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.status).toEqual(status.OK);
                expect(res.text).toEqual(JSON.stringify({ msg: 'Hello' }));
                done();
            });
    });

});