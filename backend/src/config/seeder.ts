import dotenv from 'dotenv';
import books from '../data/books';
import connectDB from './connection';
import Book from '../models/booksModel';

dotenv.config();
connectDB();

const Books = new Book();

const importBooks = async () => {
	try {
		await Books.model.deleteMany();

		await Books.model.insertMany(books);

		console.log('Data Imported');
		process.exit();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

const deleteProducts = async () => {
	try {
		await Books.model.deleteMany({});

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
