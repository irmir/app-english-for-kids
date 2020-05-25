import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, BrowserRouter } from 'react-router-dom'

import { Header, Body, CategoryPage } from './components'
// import { MainPage } from './components'

function App() {
  debugger

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />

          <Route path="/" exact render={() => <Body />} />
          <Route path="/cards" render={() => <CategoryPage />} />

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
