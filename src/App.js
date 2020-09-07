import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, BrowserRouter } from 'react-router-dom'

import { Header, CategoryCards, CategoryPage, ResultPage } from './components'

function App() {
  debugger

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path="/" exact render={() => <CategoryCards />} />
          <Route path="/cards" render={() => <CategoryPage />} />
          <Route path="/result" render={() => <ResultPage />} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
