//1------------------------------------------------------------------------------------------------
var users = [
    { id: 1, name: 'Khanh', gender: 1 },
    { id: 2, name: 'Hanh', gender: 2 },
    { id: 3, name: 'Linh', gender: 2 },
    { id: 4, name: 'Kien', gender: 1 },
]
var target1 = document.querySelector('#target1');
for (let i = 0; i < users.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `${users[i].id} _ ${users[i].name} _ ${users[i].gender === 1 ? 'male' : 'female'}`;
    target1.appendChild(li);
}

//2------------------------------------------------------------------------------------------------
let chuoiGoc = document.querySelector('#text');
let btnConvert = document.querySelector('#btn');
let result = document.querySelector('#result');
btnConvert.addEventListener('click', () => {
    let chuoiSauKhiXuLy = chuoiGoc.value.replace(/[^\w\s]/g, '').trim().toLowerCase();
    console.log(chuoiSauKhiXuLy);
    let arrOuput = [];
    let arr = chuoiSauKhiXuLy.split(' ').filter(function (a) {
        return a !== '';
    });
    console.log(arr);
    arrOuput.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        arrOuput.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    result.value = arrOuput.join('');
});

//3------------------------------------------------------------------------------------------------
let btnAdd = document.querySelector('#btnAdd');
let target2 = document.querySelector('#target2');
btnAdd.addEventListener('click', () => {
    let id = document.querySelector('#id');
    let nameElement = document.querySelector('#name');
    let gender = document.querySelector('#gender');
    let info = {
        id: id.value,
        name: nameElement.value,
        gender: gender.value,
    }
    let liElement = document.createElement('li');
    liElement.innerHTML = `${info.id} - ${info.name} - ${info.gender}`;
    target2.appendChild(liElement);

});
//4------------------------------------------------------------------------------------------------
let classRoom = [
    'nguyễn tiến duẩn',
    'Hoàng Xuân Hiếu',
    'Hồ Sỹ Hưng',
    'Nguyễn Đức Thuận',
    'đoàn Minh Tùng',
    'Hồ Sỹ Hùng',
    'Lê Trung Hiếu',
    'đoàn vua dep trai vua hoc gioi Hữu Quý']
//4.1   
for (let x of classRoom) {
    let firstName = x.slice(0, x.indexOf(" "));
    let secondName = x.slice(x.lastIndexOf(" ") + 1);
    console.log(firstName, secondName);
}

//4.2
let nameSv = 'Trần Duy Khánh';
let indexRandom = parseInt(Math.random() * (classRoom.length + 1));
classRoom.splice(indexRandom, 0, nameSv);
console.log(classRoom);

4.3
let nameDelete = "Trần Duy Khánh";
var indexNameDelete = 0;
for(let x of classRoom) {
    if(x === nameDelete){
        indexNameDelete = classRoom.indexOf(x);
        classRoom.splice(indexNameDelete,1);
    }

}
console.log(classRoom);

//4.4
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function findName(findName) {
    var arrOutput = classRoom.filter(function (name) {
        var lengthName = name.slice(name.lastIndexOf(' ') + 1).length;
        var nameInClass = removeDiacritics(name).trim().toLowerCase();
        var findNameNew = removeDiacritics(findName).trim().toLowerCase();
        return nameInClass.includes(findNameNew) && lengthName == findName.trim().length;
    });
    console.log(arrOutput);
}
findName('tu')











