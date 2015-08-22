'use strict';

var positionEnum = {
    buy: 'buy',
    sell: 'sell',
    hold: 'hold',
};


module.exports = function (method) {


    return function(candles){
        var position = method(candles);

        var positionExist = position in positionEnum;

        if(!positionExist){
            position = positionEnum.hold;
        }

        return position;
    };
};

module.exports.position = positionEnum;
