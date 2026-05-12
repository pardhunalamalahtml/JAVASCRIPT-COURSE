const todoList=[{
        name:'make dinner',
        dueDate:'2022-12-22',
        startTime:'07:30',
        endTime:'9:30'
        },{
        name:'wash dishes',
        dueDate:'2022-12-22',
        startTime:'4:30',
        endTime:'5:30'
        }];
      renderTodoList(); 
      function renderTodoList(){
        let todoListHTML = '';
        for(let i=0;i<todoList.length;i++){
          const todoObject=todoList[i];
          //const name=todoList.name;
          //const dueDate=todoList.dueDate;
          const {name,dueDate,startTime,endTime}=todoObject;
          const html = `
            <div class="one">${name}</div>
            <div class="one">${dueDate}</div>
            <div class="one">${startTime}</div>
            to
            <div class="one">${endTime}</div>
            <button class="delete-todo-button" onclick="
            todoList.splice(${i},1);
            renderTodoList();
            ";>Delete</button>
          `;//Generating the HTML
          todoListHTML+=html;
        }
        console.log(todoListHTML);
        document.querySelector('.js-todo-list').innerHTML=todoListHTML;
    }
      function addTodo(){
        //if('js-input-name==="NULL"')
        //{
        // alert('Please enter the name of the todo list');
        //}
        let inputElement=document.querySelector('.js-name-input');
        let name=inputElement.value;
        const dateInputElement=document.querySelector('.js-date-input');
        const dueDate=dateInputElement.value;
        const startInputElement=document.querySelector('.js-start-time-input');
        const startTime=startInputElement.value;
        const endInputElement=document.querySelector('.js-end-time-input');
        const endTime=endInputElement.value;
        if (name===""||dueDate===""||startTime===""||endTime==="")
        {
          Swal.fire({
          title: "Error",
          text: "Please fill all fields",
          icon: "warning"
        });
          return;
        }
        todoList.push({
          // name:name,
          // dueDate:dueDate,
          name,
          dueDate,
          startTime,
          endTime
        });
        alert("Todo List Added Successfully!");
        console.log(todoList);
        inputElement.value='';
        dateInputElement.value='';
        startInputElement.value='';
        endInputElement.value='';
        renderTodoList();        
      }
      //Main idea of javascript
      //save the data 
      //generate the HTML
      //make it interactive