require('dotenv/config');
const books = require('../data/books.js');
const Book = require('../models/booksModel.js');
const connectDB = require('../config/connection.js');

connectDB();

const importBooks = async () => {
	try {
		await Book.deleteMany();

		await Book.insertMany(books);

		console.log('Data Imported');
		process.exit();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

const deleteProducts = async () => {
	try {
		await Book.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

// importProducts();
// deleteProducts();

switch (process.argv[2]) {
	case '-d': {
		deleteProducts();
		break;
	}
	default: {
		importBooks();
	}
}
