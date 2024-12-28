import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import '../../assets/css/card.css';
import '../../assets/css/subreddits.css';

import { selectSelectedSubreddit } from '../../Features/reddit/redditSlice'

export const Subreddits = ({ name }) => {
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
  
    return (
      <>
                  <Link
              to={`/${name}`}
              className={'link'}
            >
        <li className={selectedSubreddit === name ? 'selected-subreddit' : 'false'}>
          <button type="button">

              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/reddit-icon.png"
                alt="subreddit-name"
                className="subreddit-icon"
                style={{ border: '3px solid' }}
              />
              <span className="subreddit-name">{name}</span>
           
          </button>
        </li>
        </Link>
      </>
    );
  };