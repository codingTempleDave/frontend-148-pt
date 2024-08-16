import NavigationBar from './components/NavigationBar';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <NavigationBar />
      <CustomerForm />
      <CustomerList />
    </>
  )
}

export default App
