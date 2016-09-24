demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#ffff00';
         console.log('state7');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
