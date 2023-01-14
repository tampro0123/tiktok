import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)
function Header() {

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([])
    }, 0)
  }, [])


  return <header className={cx('wrapper')}>

    <div className={cx('inner')}>
      <img src={images.logo} alt="TikTok" />

      <Tippy
        interactive={true}
        visible={searchResults.length > 0}
        render={attrs => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}> Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </PopperWrapper>
          </div>
        )}>
        <div className={cx('search')}>
          <input
            placeholder='Search account or video!'
            spellCheck="false"

          ></input>
          <button className={cx('clear')}>

            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />

          </button>
        </div>
      </Tippy>
      <div className={cx('actions')}> </div>

    </div>



  </header >
}

export default Header;