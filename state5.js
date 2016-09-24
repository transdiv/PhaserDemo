demo.state5  = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#cc0066';
         console.log('state5');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
