import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ items }) => {
  return (
    <ul className={s.friendsData}>
      {items.map(item => (
        <li className={s.friendsItem} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        </li>
      ))}
      {/* Кількість li залежить від кількості об'єктів в масиві */}
    </ul>
  );
};

//propTypes для МАСИВА
FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
