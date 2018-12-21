//Wweb GL test
onload = function(){
    
    //canvasエレメントを取得
    var c = document.getElementById('canvas');
    c.width = 1000;
    c.height = 500;
    
    //webglコンテキストを取得
    var gl = c.getContext('webgl') || c.getcontext('experimental-webgl');
    
    //canvasを黒でクリア(初期化)する
    gl = c.clearColor(0.0, 0.0, 0.0, 0.1);
    gl = c,clear(gl.COLOR_BUFFER_BIT);
};
