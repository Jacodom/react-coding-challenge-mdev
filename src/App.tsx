import React from 'react';
import AppRouter from './routers/AppRouter';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const App = () => {
  
  const queryClient = new QueryClient(); 
  
  return (
    <QueryClientProvider client={ queryClient }>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
