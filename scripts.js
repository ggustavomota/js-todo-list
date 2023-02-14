const parentdiv = document.querySelector('#parent')

var tasklist = [] //Lista para as tasks
var checkmsg = [] //Lista para msg

function Add(){
    
    tasklist.push(0)

    if(tasklist.length >= 6 == true && checkmsg.includes(0) == false){
        
        checkmsg.push(0) //Coloca um zero na lista e sinaliza que a msg já foi acionada uma vez

        var newelement = document.createElement('p')
        newelement.innerHTML = 'Maximum number of task reached'

        newelement.style.color = 'red'
        newelement.style.fontSize = '12px'
        parentdiv.appendChild(newelement)

        setTimeout(() =>{
            parentdiv.removeChild(newelement)
            checkmsg.pop() //Retira o zero dps de 3seg, e deixa disponível para que a mensagem aparece novamente
        }, 2000)
        
    }

    if(tasklist.length >= 6 == true)return;//Impede que haja mais de 5 tasks, controlando tudo pela lista

    var input = document.querySelector('#text')
    var convert = String(input.value)

    var task = document.createElement('div')
    var del = document.createElement('button')
    var edit = document.createElement('button')
    //Não precisa do QuerySelector nem do SetAttribute, por algum motivo dá erro

    function default1(n){
         n.style.height = '35px'
    n.style.width = '35px'
    n.style.borderRadius = '30%'
    n.style.backgroundColor = 'white'
    n.style.position = 'absolute'
    n.style.color = '#0077ff'
    n.style.border = '1px solid #0077ff'
    n.style.cursor = 'pointer'
    n.style.transition = '0.3s'
    }

    default1(del)
    del.style.marginLeft = '110px'
    del.style.marginTop = '-41px'
    
    default1(edit)
    edit.style.marginLeft = '150px'
    edit.style.marginTop = '-41px'
   
    task.style.marginLeft = '21px'
    task.style.backgroundColor = '#d8d8d87e'
    task.style.marginTop = '20px'
    task.style.height = '30px'
    task.style.width = '276px'
    task.style.textAlign = 'center'
    task.style.fontSize = '12px'
    task.style.position = 'relative'

    task.innerText = `${convert}`
    del.innerText = 'Del'
    edit.innerText = 'Edit'

    parentdiv.appendChild(task)
    parentdiv.appendChild(del)
    parentdiv.appendChild(edit)

    del.addEventListener('click', function(){
        parentdiv.removeChild(task)
        parentdiv.removeChild(del)
        parentdiv.removeChild(edit)
        tasklist.pop()
        tasklist.unshift()
    })

    edit.addEventListener('click', function(){

    })
}