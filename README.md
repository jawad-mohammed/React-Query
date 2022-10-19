#### What is React Query
A library for fetch data for React Application
##### Why?
There is no specific pattern for fetching data 
useEffect hook for data fetching and useState hook to maintain component state like loading,error or resulting data
If the data is needed throughout the app we tend t use state management libraries
Most of the state management libraries are good for working with client state
State management libraries are not great for woring with asynchronous or server state

##### client vs server state
client state
Persisted in your app memoryand accessing or updating it is synchronous
Server state
Persisted remotely and requires asynchronous API for fetching or updating
Has shared ownership
Data can be updated by someone else without your knowledge
UI data may not be in sync with the remote data
Challenging when you have to deal with caching,deduping multiple requests for the same data,updating stale data in the background,performance optimization etc
 
##### Basic queries
##### poll data 
##### RQ dev tools
##### create reusable query hooks
##### Query by ID
##### parallel queries
##### Dynamic queries
##### Dependent queries
##### Infinite and paginate queries
##### update data using mutations
##### Invalid queries
##### Optimistic updates
##### Axios Interceptor

