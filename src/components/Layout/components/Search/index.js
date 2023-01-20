import {
  faCircleXmark,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'

import * as searchServices from '~/apiService/searchServices';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles)
function Search() {

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  //1 khi dc mouted vào Dom debound là chuỗi rỗng và đc truyền vào hook debound và được hook xử lý


  const debounced = useDebounce(searchValue, 500)
  const inputRef = useRef()

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true)
      const result = await searchServices.search(debounced)
      setSearchResults(result)
      setLoading(false)
    }
    fetchApi()
  }, [debounced])

  const handleHideResult = () => {
    setShowResult(false)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ') && searchValue.trim()) {

      setSearchValue(searchValue)
    }
  }



  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResults.length > 0}
      render={attrs => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}> Accounts</h4>
            {searchResults.map((result) => {
              return <AccountItem key={result.id} data={result} />

            })}

          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder='Search account or video!'
          spellCheck="false"
          onFocus={() => setShowResult(true)}
          onChange={handleChange}
        ></input>
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={() => {
            setSearchValue('')
            inputRef.current.focus()
          }}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
          <SearchIcon />

        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;