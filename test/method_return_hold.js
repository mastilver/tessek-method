require('should');

var tessekMethod = require('../index');


describe('when method return hold', function(){
    it('handler should return hold', function(){

        var method = function(){
            return 'hold';
        };

        tessekMethod(method)([]).should.be.equal('hold');
    });
});


describe('when method return undefined', function(){
    it('handler should return hold', function(){

        var method = function(){
        };

        tessekMethod(method)([]).should.be.equal('hold');
    });
});
