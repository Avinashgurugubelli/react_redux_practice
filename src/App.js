import './App.css';
import HomePage from './components/home/home_page';
import AboutPage from './components/about/about';
import GreetCard from './components/prop-state/components/greet-card/greet-card';
import ReactReduxExampleHost from './components/redux-example/react-reducer-example';

function App() {
  const route = window.location.pathname;
  switch (route.toLowerCase()) {
    case '/home':
      return <HomePage />
    case '/about':
      return <AboutPage />
    case '/props-state':
      return <GreetCard />
    case '/react-redux':
      return <ReactReduxExampleHost/>
    default:
      return <HomePage />
  }
}

export default App;
