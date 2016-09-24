demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#40DD80';
        console.log('state1')
        
        addChangeStateEventlisteners();
    },
    update: function(){}
};

