let friends = [];

function add() {
    let friendName = document.getElementById('nome-amigo').value;
    if (friendName != '') {
        if (friends.indexOf(friendName) == -1 ) {
            friends.push(document.getElementById('nome-amigo').value);
        } else {
            alert('Amigo já adicionado na lista!');
        }
    }
    updateIncludedFriends();
    document.getElementById('nome-amigo').value = '';
};

function draw() {
    if (friends.length > 4) {
        let friendsLeft = friends.slice();
        let i = 0;
        while (i < friends.length) {
            let friend = friends[i];
            let friendSelected = parseInt(Math.random() * friendsLeft.length);
            let friendNameSelected = friendsLeft[friendSelected];
            if (friend != friendNameSelected) {
                document.getElementById('lista-sorteio').innerHTML = document.getElementById('lista-sorteio').innerHTML + `${friend} -> ${friendNameSelected} <br>`;
                friendsLeft.splice(friendSelected, 1);
                i++
            }
        };         
    } else {
        alert('O número minimo de participantes é 4!');
    }
     
};

function restart() {
    friends = [];
    updateIncludedFriends();
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};

function updateIncludedFriends() {
    document.getElementById('lista-amigos').innerHTML = friends;
};