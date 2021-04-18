function problema3(){
    let abc=["A","B","C","D","E","F","G","H","I","J","K","L","M","N", "Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var p3_input=document.querySelector('#p3-input').value;
    var p3_array = p3_input.split(',');

    for(var i = 0; i < p3_array.length; i++){
        let cu=''
        for(var j =0; j < p3_array[i].length; j++){
            if(cu.indexOf(p3_array[i].charAt(j))==-1){
            cu+=p3_array[i][j];
            }
        }
        return cu;
    }
    return p3_array;
}
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado===8)return true;
    var patron=/[A-Z\,]/g;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}