let user = (function(name,age){
    let obj = {};

    obj.getName = function(){
        alert(name);
    }
    obj.getAge = function(){
        alert(age);
    }
    obj.setName = function(newName){
        name = prompt('Write new Name','');
    }
    obj.setAge = function(newAge){
        age = +prompt('Write new Age','');
    }
    return obj;
}());

user.setName();
user.setAge();
user.getName();
user.getAge();
user.setName();
user.setAge();
user.getName();
user.getAge();
