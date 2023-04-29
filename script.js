const list = document.getElementById('list')

const lines = [
	{
		label: 'Dog',
		id: "1"
	},
	{
		label: 'Mouse',
		id: "2"
	},
	{
		label: 'Cat',
		id: "3"
	}
]

function createModal() {
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.innerHTML = 'Estou aqui!!!';

	return modal
}


lines.map(item => {
	const li = document.createElement('li');
	li.classList.add('li');
	li.setAttribute('id', item.id);
	li.innerHTML = item.label;

	const modal = createModal();
	
	function openModal(e) {
		li.classList.contains('is-visible')
		? li.classList.remove('is-visible')
		: li.classList.add('is-visible')

		// Pegar o ID do "pai" de quem está sendo criado.
		console.log(e.srcElement.parentNode.id)

	};

	const btn = document.createElement('button');
	btn.innerHTML = 'Click me'
	btn.addEventListener('click', openModal)

	li.append(btn)
	li.append(modal)

	return list.append(li)
})