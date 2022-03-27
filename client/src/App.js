import './App.css';
import { ApolloProvider } from "@apollo/client";
import Bikes from "./components/bikes";
import CustomApolloClient from './components/custom-apollo-client';

function App() {
  return (
    <ApolloProvider client={CustomApolloClient}>
      <Bikes />
    </ApolloProvider>
  );
}

export default App;
