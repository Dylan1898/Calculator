var Numbers = []

document.addEventListener("DOMContentLoaded", function(event){
})

document.addEventListener('click' , function(e) {

        console.log(e.srcElement)
        console.log(e.target.innerHTML)
        console.log(e.target.className);
    if(e.target.className == 'button' ){
        console.log('made it')
    document.getElementById('readout').append(e.target.innerHTML)
    e.target.style.background ='red'
    setTimeout(resetBackG, 50 )
    function resetBackG(){
    e.target.style.background = 'white'
}
}
else if(e.target.className == 'action'){
e.target.style.background ='red'
    setTimeout(resetBackG, 50 )
    function resetBackG(){
    e.target.style.background = 'grey'
}
Numbers.push(readout.innerHTML )
Numbers.push(e.target.innerHTML)
readout.innerHTML= null
}
else( e.target.className == 'equals')
// Numbers.push(readout.innerHTML)
// Equation=Numbers.join( )
    // console.log(Equation)
});



