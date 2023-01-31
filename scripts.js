const parentdiv = document.querySelector('#parent')

function Add(){

    var tasklist = [0]

    if(tasklist.length == 2)return;
    tasklist.push(1)

    var input = document.querySelector('#text')
    var convert = String(input.value)

    var task = document.createElement('div')
    var del = document.createElement('button')
    var edit = document.createElement('button')
    //Não precisa do QuerySelector nem do SetAttribute, por algum motivo dá erro

    function default1(n){
         n.style.height = '45px'
    n.style.width = '33px'
    n.style.borderRadius = '3px'
    n.style.backgroundColor = 'white'
    n.style.position = 'absolute'
    n.style.marginTop = '-45px'
    n.style.marginLeft = '145px'
    n.style.color = '#0077ff'
    n.style.border = '1px solid #0077ff'
    n.style.cursor = 'pointer'
    n.style.transition = '0.3s'
    }

    default1(del)
    default1(edit)

    edit.style.marginLeft = '109px'
   
    task.style.marginLeft = '21px'
    task.style.backgroundColor = '#d8d8d87e'
    task.style.marginTop = '20px'
    task.style.height = '30px'
    task.style.width = '276px'
    task.style.textAlign = 'center'
    task.style.fontSize = '12px'

    task.innerText = `${convert}`
    del.innerText = '✕'
    edit.innerText = '✎'

    parentdiv.appendChild(task)
    parentdiv.appendChild(del)
    parentdiv.appendChild(edit)

    task.setAttribute('id', 'findtask')
    var findtask = document.querySelector('#findtask')

    del.setAttribute('id', 'finddel')
    var finddel = document.querySelector('#finddel') 

    edit.setAttribute('id', 'findedit')
    var findedit = document.querySelector('#findedit') 

    del.addEventListener('click', function(){
        findtask.remove()
        findedit.remove()
        finddel.remove()
        return
    })
    console.log(tasklist.length)
    console.log(tasklist)
}

