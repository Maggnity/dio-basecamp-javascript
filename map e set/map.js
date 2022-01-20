function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value==='Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Fernando','Admin');
usuarios.set('Luana','User');
usuarios.set('Guilherme','Admin');

console.log(getAdmins(usuarios));

