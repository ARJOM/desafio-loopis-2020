// Verificando informações iniciais

if (getObjectLocalStorage('users') === null){
    setObjectLocalStorage('users', []);
}


// Crud de pessoas

function create(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!isRegistred(email)){

        if (name==="" || email===""){
            alert('informe valores válidos')
        } else {
            const user = {name, email};
            
            let users = getObjectLocalStorage('users');
            users.push(user);
            setObjectLocalStorage('users', users);

            alert('usuário criado com sucesso')
        }
    } else {
        alert('Email já registrado')
    }
}


function list(){
    let users = getObjectLocalStorage('users');
    let result = '';
    const root = document.getElementById('list');
    users.forEach(user => {
        result += `<li>${user.name} - ${user.email} <a href="/html/update.html" onclick=\"+detail('${user.email}')\">Editar</a> - <span onclick=\"+remove('${user.email}')\">Remover</span></li>`;
    });
    root.innerHTML = result;
}


function remove(email){
    let users = getObjectLocalStorage('users');
    users.forEach(user => {
        if (user.email===email){
            users.splice(users.indexOf(user), 1);
            setObjectLocalStorage('users', users);
            location.reload();
        }
    });
}

function detail(email){
    setObjectLocalStorage('user', email);
}

function loadData(){
    const email = getObjectLocalStorage('user');
    let users = getObjectLocalStorage('users');
    users.forEach(user => {
        console.log(email);
        if (user.email===email){
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
        }
    });
}

function update(){
    const email = getObjectLocalStorage('user');
    let newName = document.getElementById("name").value;
    let newEmail = document.getElementById("email").value;

    if (newEmail===email || !isRegistred(email)){
        if (newName==="" || newEmail===""){
            alert('informe valores válidos')
        } else {
            const user = {name: newName, email: newEmail};
            console.log(user)
            let users = getObjectLocalStorage('users');
            
            users.forEach(u => {
                if (u.email===email){
                    users.splice(users.indexOf(u), 1);
                    setObjectLocalStorage('users', users);
                }
            });

            users.push(user);
            setObjectLocalStorage('users', users);

            alert('usuário atualizado com sucesso com sucesso')
        }
    } else {
        alert('Email já registrado')
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

// Funções auxiliares

function isRegistred(email){
    const users = getObjectLocalStorage('users');
    users.forEach(user => {
        if (user.email===email){
            return true;
        }
    });
    return false;
}
