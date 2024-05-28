var input = document.getElementById('input')
var btn = document.getElementById('btn')
var content = document.getElementById('userTasks')
var h4 = document.getElementById('list-empty')
var listTitle = document.getElementById('task-title')
var tasks = document.getElementsByClassName('tasks')

var data = []

function Draw() {
    if (data.length > 0) {
        content.innerHTML = '<h3 class="centerTitle here-ur-task">here your tasks</h3>';
    }
    else {
        content.innerHTML = ''
    }
    data.forEach((item) => {
        content.innerHTML += `
        <div class = "tasks">
            <p class = "taskParagraph"> ${item.value} </P>
            <i class="fa fa-trash" aria-hidden="true" onClick = deleteItem(${item.id})></i> 
            <hr>
            <p id = "date"> added in ${
            new Date().toLocaleString()   
            }  
        </div>`
    })
}


Draw()

btn.addEventListener('click', Add)

function Add() {
    if (input.value == '') {
        alert('input valid value')
    }
    else {
        h4.style.display = 'none'
        if (data.length == 0) {
            var lastId = 0
        }
        else {
            var lastId = data[data.length-1].id
        }
        data.push({id: lastId + 1, value: input.value})
        Draw()
    }
    input.value = ''
}


function deleteItem(id) {
    var index = data.map((item)=> {
        return item.id
    }).indexOf(id)
    data.splice(index, 1)
    if (data.length == 0) {
        h4.style.display = 'block'
    }
    Draw()
}
