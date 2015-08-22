require('should');

var tessekMethod = require('../index');


describe('when method return buy', function(){
    it('handler should return buy', function(){

        var method = function(){
            return 'buy';
        };

        tessekMethod(method)([]).should.be.equal('buy');
    });
});
