demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#30ff70';
         console.log('state2');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
