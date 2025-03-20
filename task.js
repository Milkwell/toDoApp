const lists = {
    1: {
        listName: "School Tasks",
        tasks: [
            {
                text: 'Math',
                completed: false,
                id: 1
            },
            {
                text: 'English',
                completed: false,
                id: 2
            },
            {
                text: 'Coding',
                completed: false,
                id: 3
            },
        ]
    },
    2: {
        listName: "Shopping List",
        tasks: [
            {
                text: 'Apples',
                completed: false,
                id: 4
            },
            {
                text: 'Oranges',
                completed: false,
                id: 5
            },
            {
                text: 'Bannanas',
                completed: false,
                id: 6,
            }
        ]
    }
}

let currentList = lists[1];

function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = `<ul id="todo-list">`;
    // iterate through the lists to get their names
    currentList.tasks.forEach((list) => {
      listsHtml += `<li class="ml-4 mr-4 mt-2 outline outline-black flex justify-between task-body" id="${Math.random()}task">
                         <div class="m-2">
                            <input 
                            type="checkbox"
                            id="${Math.random()}check"
                            onclick="check(${this.id, list.text})"/>
                            <label class="list-group-item">${list.text}</label>
                        </div>
                        <div>
                            <button class="m-2 text-gray-400 delete-task" onclick="removeTasks(${list.id})">X</button>
                        </li>`;
    });//not a function?????????????????????????????????????????????????????????????????????????????????
    listsHtml += '</ul>';
    document.getElementById('todo-body').innerHTML = listsHtml;
   }

   function addList () {
    //get the list text from the list input box
    const text = document.getElementById('new-task').value;
    if(text) {
      currentList.tasks.push({
        text: text
      })
      render();
    }
   }

   function removeList () {}

   function addTasks() {
    const text = document.getElementById('new-task').value;
    console.log(currentList.tasks)
    if(text) {
      currentList.tasks.push({
        text: text,
        completed: false,
        id: Math.random() + Math.random()
      })
      render();
    }
   }//add function for enter key

   function check(id){
    let box = document.getElementById(id);
    console.log(box);
   }

   function removeTasks(id){
        let temparry = currentList.tasks;
        let index;
        for (let i = 0; i < temparry.length; i++) {
            const element = temparry[i];
            if (element.id == id) {
                index = i;
                console.log(index + "index");
                console.log(element.text);
            }
            else{
                index = null;
            }
            
        }
        let x = temparry.splice(index, 1);
        console.log(x[0]);
        currentList = temparry;
        // render();
    }

   function removeAllCompletedTasks () {}

   function deleteList () {}

   function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
   }//is this function needed?