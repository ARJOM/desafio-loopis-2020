// Verificando informações iniciais

if (getObjectLocalStorage('users') === null){
    setObjectLocalStorage('users', []);
}


// Crud de pessoas

function create(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name==="" || email===""){
        alert('informe valores válidos')
    } else {
        const user = {name, email};
        
        let users = getObjectLocalStorage('users');
        users.push(user);
        setObjectLocalStorage('users', users);

        alert('usuário criado com sucesso')
    }
}


function list(){
    let users = getObjectLocalStorage('users');
    let result = '';
    const root = document.getElementById('list');
    users.forEach(user => {
        result += `<li>${user.name} - ${user.email} </li>`;
    });
    root.innerHTML = result;
}


// Manipulação de local storage

function setObjectLocalStorage(key,value){
	localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
	var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}