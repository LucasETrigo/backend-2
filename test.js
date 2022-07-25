const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('productos.txt');

const test = async () => {
	const data = await productos.save({ title: "title", price: "price", thumbnail: "thumbnail" });
	console.log(productos.objects);
}

test();