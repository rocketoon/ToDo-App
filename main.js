// Находим форму на странице
const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList')

// Отслеживаем событие отправки формы
form.addEventListener('submit', function(event){
	event.preventDefault();

const taskInput = document.querySelector('#addNewTask');

const taskText = taskInput.value


const taskHTML = `
					<li class="list-group-item d-flex justify-content-between">
						<span class="task-title">${taskText}</span>
						<button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
					</li>
				`
tasksList.insertAdjacentHTML('afterbegin', taskHTML);


taskInput.value = "";

});


tasksList.addEventListener('click', function(event){
	if (event.target.getAttribute("data-action") === "delete-task" ) {
		event.target.parentElement.remove();
	}
});