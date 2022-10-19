import './App.css';
import {createContext} from 'react'
import {QueryClient, QueryClientProvider } from 'react-query'
import FetchData from './Query/FetchData';
import {ReactQueryDevtools} from 'react-query/devtools'
import CompA from './Context/CompA';
import ReactQuery from './Query/ReactQuery';
const queryclient = new QueryClient()

export const NameContext = createContext()
function App() {
 
  return (<>
  <NameContext.Provider value={"jawad"}>
  <CompA/>
  </NameContext.Provider>
  
<QueryClientProvider client={queryclient}>
<ReactQuery/>
</QueryClientProvider>


 
</>  );
}

export default App;
