var expect = require("chai").expect;
var request = require("request");
var should = require('chai').should();

var url = "http://localhost:8080/api/projects";


describe("Card API", function () {

  it("returns status 200 to check if api works", function (done) {
    request(url, function (error, res, body) {
      body = JSON.parse(body)

      expect(res.statusCode).to.equal(200);
      body.should.be.an('object');
      body.should.have.property('data');
      body.data.should.be.a('array');
      //console.log(res);
      done();
    });
  });

});
describe('POST /api/projects', () => {
  const newProject = {
    "path": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    "title": "Java Programming Language",
    "subTitle": "Learn about Java programming language",
    "description": "Java is a widely-used programming language known for its platform independence, object-oriented approach, and robustness. It is extensively used in web development, enterprise applications, mobile app development, and more."
  };

  it('should add a new project', (done) => {
    request.post(url, function (error, res, body) {
      body = JSON.parse(body)
      //console.log(res);
      expect(res.statusCode).to.equal(200);
        body.should.be.a('object');
        body.should.have.property('data');
        body.data.should.be.a('object');
        
        done();
      });
  });
});