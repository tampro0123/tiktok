import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')}
        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1594194104281105.jpeg?x-expires=1673874000&x-signature=%2FRPnGFV22%2FoW9kMZqzMTDx%2BCazY%3D"
        alt="Hoa"></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span >
            Nguyễn Văn A
          </span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>
          nguyenvan
        </span>
      </div>
    </div>
  );
}

export default AccountItem;