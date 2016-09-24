demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#cc9900';
         console.log('state4');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
