function getElement(e){
    let ele = document.querySelector(`'${e}'`)
    ele.addEventListener('mouseenter',function(){
        alert('Fuck you!')
    })
}