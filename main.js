var Numbers = []
Equation=Numbers.join('')

document.addEventListener("DOMContentLoaded", function(event){
})
document.addEventListener('click' , function(e) {
        console.log(e.srcElement)
        console.log(e.target.innerHTML)
        console.log(e.target.className);
        // if (Numbers.length -1 == '*' || '-' || '+' || '/' ){
        //     Numbers.splice(Numbers.length -1,1)
        // }
        if(e.target.className == 'clear'){
    Numbers=[];
    Equation= [];
    readout.innerHTML=null;
}

        if(e.target.className == 'button'  &&  Numbers.length ==  0){
            console.log('first')
            document.getElementById('readout')
            readout.innerHTML=null
            document.getElementById('readout').append(e.target.innerHTML)
            Numbers.push(e.target.innerHTML)
            e.target.style.background ='orange'
    setTimeout(resetBackG, 50 )
    function resetBackG(){
    e.target.style.background = 'white'
}
        }
    else if(e.target.className == 'button' ){
        console.log('made it')
    document.getElementById('readout').append(e.target.innerHTML)
    Numbers.push(e.target.innerHTML )
    e.target.style.background ='orange'
    setTimeout(resetBackG, 50 )
    function resetBackG(){
    e.target.style.background = 'white'
}
}
else if (e.target.id == 'subtract' && Numbers.length < 1){
    console.log('subby')
    document.getElementById('readout').append(e.target.innerHTML)
    Numbers.push(e.target.innerHTML)
}
else if(e.target.className == 'action' && Numbers.length  && (Numbers.last()) !== ('-'||'+'||'*'||'/')){
    console.log('ordinator')
e.target.style.background ='orange'
    setTimeout(resetBackG, 50 )
    function resetBackG(){
    e.target.style.background = 'grey'
}
Numbers.push(e.target.innerHTML)
readout.innerHTML= null
}
else if(e.target.className == 'equals' && Numbers.length && (Numbers.last()) !== ('-'||'+'||'*'||'/')){
Equation=Numbers.join('')
    console.log(Equation)
    console.log(eval(Equation))
    readout.innerHTML=null
    readout.innerHTML=eval(Equation)
    Equation=null
    console.log(Numbers)
    console.log(Equation)
    Numbers=[]
}
});



if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
