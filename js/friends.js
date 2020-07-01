// Verificando informações iniciais

if (getObjectLocalStorage('users') === null){
    setObjectLocalStorage('users', []);
}


// Crud de pessoas
function create(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if (name=="" || email==""){
        alert('informe valores válidos')
    } else {
        const user = {name, email};
        
        let users = getObjectLocalStorage('users');
        users.push(user);
        setObjectLocalStorage('users', users);

        alert('usuário criado com sucesso')
    }
}


// Manipulação de local storage

function setObjectLocalStorage(key,value){
	localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
	var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}