const lists = {
    1: {
        name: "School Tasks",
        tasks: [
            {
                text: 'Math',
                completed: false
            },
            {
                text: 'English',
                completed: false
            },
            {
                text: 'Coding',
                completed: false
            },
        ]
    },
    2: {
        name: "Shopping List",
        tasks: [
            {
                text: 'Apples',
                completed: false
            },
            {
                text: 'Oranges',
                completed: false
            },
            {
                text: 'Bannanas',
                completed: false
            }
        ]
    }
}

const currentList = lists[1];

function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = '<ul class="list-group">';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      listsHtml += `<li class="pl-2 pr-2 ml-4 mr-4 mb-2 mt-2 bg-gray-300">${list.name}</li>`;
    });
   
    listsHtml += '</ul>';
    // print out the lists
   
    document.getElementById('lists').innerHTML = listsHtml;
    // print out the name of the current list
   
    document.getElementById('current-list-name').innerText = currentList.name;
    // iterate over the todos in the current list
   
    let tasksHtml = '<div class="ml-4 mr-4 mt-2 outline outline-black flex justify-between task-body"';
    currentList.tasks.forEach((list) => {
      tasksHtml += `<label class="list-group-item">${task.text}</label>`;
    });
    // print out the todos
    document.getElementById('current-list-tasks').innerHTML = tasksHtml;
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
    if(text) {
      currentList.tasks.push({
        text: text,
        completed: false
      })
      console.log(currentList.task);
      render();
    }
    console.log(`nothin' added`);
   }//add function for enter key

   function checkbox(id){
    let box = documen.getElementById()
   }

   function removeTasks () {}

   function removeAllCompletedTasks () {}

   function deleteList () {}

   function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
   }