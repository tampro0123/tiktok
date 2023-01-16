import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSpinner,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,

} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {
  useState,
  useEffect
} from 'react';

import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';


const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ]
    }

  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'

  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',


  },
]
const cx = classNames.bind(styles)
function Header() {

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([])
    }, 0)
  }, [])

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:

    }

  }

  const currentUser = true

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '@hoa'


    }, {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin'


    }, {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/Settings',


    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    }
  ]

  return <header className={cx('wrapper')}>
    <div className={cx('inner')}>
      <img src={images.logo} alt="TikTok" />
      <HeadlessTippy
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
      </HeadlessTippy>
      <div className={cx('actions')}>
        {currentUser ? (
          <>
            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCloudUpload} />
              </button>
            </Tippy>

          </>
        ) : (
          <>
            <Button text>Upload</Button>
            <Button primary >Log in</Button>

          </>)}
        <Menu
          items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
          {currentUser ? (
            <img src='https://file.hstatic.net/1000304519/article/cach-chup-milky-way-2-696x464_93410cf9690b4d859f8e241c4606ad6e_grande.jpg' className={cx('user-avatar')} alt='Nguyen Văn A'></img>
          ) : (

            <>
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </>
          )}
        </Menu>
      </div>

    </div >



  </header >
}

export default Header;