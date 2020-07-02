function secretFriend(){
    let users = getObjectLocalStorage('users');
    let choose = [];
    users.forEach(user => {
        let invalid = true;
        let userId = users.indexOf(user);
        while (invalid){
            let id = Math.floor(Math.random() * users.length);
            if (id!==userId){
                choose.push(id);
                user.friend = users[id].name;
                users[userId] = user;
                invalid = false;
            }
        }
    });
    setObjectLocalStorage('users', users);
    alert("Sorteado");
}


function sendAll(){
    let users = getObjectLocalStorage('users')
    users.forEach(user => {
        setTimeout(() => { 
            sendMail(user.email, user.friend);
        }, 1500);
    })
}