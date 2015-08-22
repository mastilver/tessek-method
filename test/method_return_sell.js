require('should');

var tessekMethod = require('../index');


describe('when method return sell', function(){
    it('handler should return sell', function(){

        var method = function(){
            return 'sell';
        };

        tessekMethod(method)([]).should.be.equal('sell');
    });
});
