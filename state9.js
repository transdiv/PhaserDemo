demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
         game.stage.backgroundColor = '#339966';
         console.log('state9');
         addChangeStateEventlisteners();
    },
    update: function(){}
};
