demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#336600';
         console.log('state6');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
