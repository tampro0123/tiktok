import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,

} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config'

import Search from '../Search'
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button'
import { HeartIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';


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

  const currentUser = true
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:

    }

  }


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
      <Link to={config.routes.home} className={cx('logo-link')}> <img src={images.logo} alt="TikTok" /></Link>

      <Button>Click me</Button>
      <Search />
      <div className={cx('actions')}>
        {currentUser ? (
          <>
            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
              <button className={cx('action-btn')}>
                <UploadIcon />

              </button>
            </Tippy>
            <Tippy delay={[0, 200]} content="Message" placement='bottom'>
              <button className={cx('action-btn')}>
                <MessageIcon />

              </button>
            </Tippy>
            <Tippy delay={[0, 200]} content="Like" placement='bottom'>
              <button className={cx('action-btn')}>
                <HeartIcon />

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
            <Image src='https://file.hstatic.net/1000304519/article/cach-chup-milky-way-2-696x464_93410cf9690b4d859f8e241c4606ad6e_grande.jpg'
              className={cx('user-avatar')}
              alt='Nguyen Văn A'
              fallback='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
            />
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