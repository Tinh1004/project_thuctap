import * as React from 'react';
import './styles.css';
import Search from './search/index';
import BackToIcon from './back_to/index';
import Avatar from './avatar/index';

export default function SearchAppBar() {
  return (
    <div class="header-navbar">
      <div className="left">
        <BackToIcon/>
        <Search/>
      </div>
      <Avatar/>
    </div>
  );
}
