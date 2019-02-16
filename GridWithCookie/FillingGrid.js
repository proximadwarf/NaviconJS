//Сортировка, через сохранение каждого элемента массива
function fillSlow() {
	var idOne = getCookie("idOne");
	var nameOne = getCookie("nameOne");
	var typeOne = getCookie("typeOne");
	var isCookie = getCookie("isCookie");
	var dataOfGrid;
	if (isCookie == null) {
		Study.GetData(function (data) {
			dataOfGrid = data;
			for (var i = 0; i < dataOfGrid.length; i++) {
				setCookie("data[" + i + "].id", dataOfGrid[i].id);
				setCookie("data[" + i + "].name", dataOfGrid[i].name);
				setCookie("data[" + i + "].type ", dataOfGrid[i].type);
			}
			setCookie("isCookie", dataOfGrid.length);
			$("#jsGrid").jsGrid({
				width: "100%",
				height: "400px",

				inserting: true,
				editing: true,
				sorting: true,
				paging: true,

				data: dataOfGrid,

				fields: [

					{ name: "id", type: "number", width: 150 },
					{ name: "name", type: "text", width: 150 },
					{ name: "type", type: "number", width: 150 }

				]
			});
		});



	}
	else {
		dataOfGrid = [];
		for (var i = 0; i < getCookie("isCookie") ; i++) {
			var dataTemp = { id: getCookie("data[" + i + "].id"), name: getCookie("data[" + i + "].name"), type: getCookie("data[" + i + "].type") };
			dataOfGrid.push(dataTemp);
		}

		$("#jsGrid").jsGrid({
			width: "100%",
			height: "400px",

			inserting: true,
			editing: true,
			sorting: true,
			paging: true,

			data: dataOfGrid,

			fields: [

				{ name: "id", type: "number", width: 150 },
				{ name: "name", type: "text", width: 150 },
				{ name: "type", type: "number", width: 150 }

			]
		});
	}


}

//Сортировка, через перевод массив в JSON
function fillFast() {
	var data = getCookie("dataInJson");
	var dataOfGrid;
	if (data == null) {
		Study.GetData(function (data) {
			dataOfGrid = data;
			var StringifiedData = JSON.stringify(data);
			setCookie("dataInJson", StringifiedData);
			
			$("#jsGrid").jsGrid({
				width: "100%",
				height: "400px",

				inserting: true,
				editing: true,
				sorting: true,
				paging: true,

				data: dataOfGrid,

				fields: [

					{ name: "id", type: "number", width: 150 },
					{ name: "name", type: "text", width: 150 },
					{ name: "type", type: "number", width: 150 }

				]
			});
		});



	}
	else {
		dataOfGrid = JSON.parse(data)
		for (var i = 0; i < getCookie("isCookie") ; i++) {
			var dataTemp = { id: getCookie("data[" + i + "].id"), name: getCookie("data[" + i + "].name"), type: getCookie("data[" + i + "].type") };
			dataOfGrid.push(dataTemp);
		}

		$("#jsGrid").jsGrid({
			width: "100%",
			height: "400px",

			inserting: true,
			editing: true,
			sorting: true,
			paging: true,

			data: dataOfGrid,

			fields: [

				{ name: "id", type: "number", width: 150 },
				{ name: "name", type: "text", width: 150 },
				{ name: "type", type: "number", width: 150 }

			]
		});
	}


}
