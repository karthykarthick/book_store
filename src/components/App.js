import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './NavBar';

const App = () => (
  <div>
    <Navbar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
