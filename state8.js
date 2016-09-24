demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#ffcc99';
         console.log('state8');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
