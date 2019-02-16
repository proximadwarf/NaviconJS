var _0x794d = ["\x41", "\x48", "\x49", "\x43", "\x44", "\x45", "\x46", "\x47\x65\x74\x44\x61\x74\x61", "\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x70\x61\x72\x73\x65"];
var Study = new (function () {
    var _0xeee8x2 = [{ id: 1, name: _0x794d[0], type: 1 },
    { id: 2, name: null, type: 2 },
    { id: 7, name: _0x794d[0], type: 3 },
    { id: 8, type: 1 },
    { id: 9, name: _0x794d[1], type: 1 },
    { id: 10, name: _0x794d[2], type: 2 },
    { id: 3, name: _0x794d[3], type: 1 },
    { id: 4, name: _0x794d[4], type: 2 },
    { id: 11, name: _0x794d[5], type: 1 },
    { id: 6, name: _0x794d[6], type: 1 }];
    this[_0x794d[7]] = function (_0xeee8x3) {
        if (typeof _0xeee8x3 === _0x794d[8]) {
            setTimeout(function () { var _0xeee8x4 = JSON[_0x794d[10]](JSON[_0x794d[9]](_0xeee8x2)); _0xeee8x3(_0xeee8x4) }, 100)
        }
    }
})()


var count = 0;

//функция, принимающая массив из Study
function showData(data) {
    console.log("Вывод " + count);
    count += 1;
    for (var i = 0; i < data.length; i++) {
        console.log(JSON.stringify(data))
    }

};

//Выведение всего массива
Study.GetData(function (data) {
    showData(data);
});

//Сортирование всех элементов по свойству id по возрастанию.
Study.GetData(function (data) {    
    data.sort(function sortfunc(a, b) {
        return a.id - b.id;

    });
    showData(data);
});

//Сортирование всех элементов по свойству type по возрастанию и свойству id по убыванию.
Study.GetData(function (data) {
    data.sort(function (a, b) {
        if (a.type == b.type) {
            return a.id - b.id;
        }
        else {
            return a.type - b.type;
        }
    });
    showData(data);
});

//Вывод элементов с type = 2.
Study.GetData(function (data) {
    var arr = [];
    var j = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == 2) {
            arr[j] = data[i];
            j++;
        }
    }
    showData(arr)
});
//Вывод элементов, у которых заполнено имя
Study.GetData(function (data) {
    var arr = [];
    var j = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].name != null) {
            arr[j] = data[i];
            j++;
        }
    }
    showData(arr);
});

//Добавление в коллекцию элемента с недостающим идентификатором. 
//Сортировка коллекции в порядке убывания идентификаторов.
Study.GetData(function (data) {
	var arr = [];
	arr = data.sort(function(a, b) {
  		return a.id - b.id;
  		
	});

	for (var i = 0 ; i < arr.length; i++) {
			if (i != (arr[i].id - 1) ) {
                arr.splice(i, 0, { id: i + 1, name: "MyElem", type: null });
                break;
				
			}
		}

	showData(arr);
});

//Вырезание из коллекции элементов с 3 по 5
Study.GetData(function (data) {
    data.splice(2, 3);
    showData(data);
});
