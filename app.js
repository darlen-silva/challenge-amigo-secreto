//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const friends = [];

function renderFriend(arr) {
	list = ""
	for (let index = 0; index < arr.length; index++) {
		list = list.concat(`<li>${arr[index]}</li>`);
	}
	return list;
}

function adicionarAmigo() {
	let friend = document.querySelector('input').value.trim();

	if (friend.length > 0 && !friends.includes(friend)) {
		friends.push(friend);

		let myFriends = document.getElementById("listaAmigos");
		myFriends.innerHTML = renderFriend(friends);
		document.querySelector('input').value = '';
	} else {
		if (friend.length == 0) {
			alert("Insira um(a) amigo(a)!!");
		} else {
			alert("Amigo já está na lista")
		}
	}
}

function sortearAmigo() {
	let randomFriend = Math.floor(Math.random() * friends.length);
	const winnerFriend = document.getElementById("resultado");
	winnerFriend.innerHTML = `O amigo escolhido foi: ${friends[randomFriend]}`;
	console.log(friends[randomFriend]);
}


