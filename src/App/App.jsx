import {Provider} from 'react-redux'
import './App.css'

import {NavBar} from '../Components/NavBar/NavBar'
import{CardList} from '../Components/Card/CardList'
import {SubredditsList } from '../Components/Subreddits/SubredditsList'
import {NotFound} from '../Components/NotFound/NotFound'

import store from './store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route
            path={'/r/:subreddit'}
            element={<CardList />}
          />
          <Route
            path={'/'}
            element={<CardList />}
          />
          <Route
            path={'*'}
            element={<NotFound />}
          />
        </Routes>
    
        <SubredditsList />
      </Provider>
  )
}

export default App
