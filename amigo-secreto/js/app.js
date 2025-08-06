let friends = [];

function add() {
    if (document.getElementById('nome-amigo').value != '') {
        friends.push(document.getElementById('nome-amigo').value);
    }
    updateIncludedFriends();
    document.getElementById('nome-amigo').value = '';
};

function draw() {
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