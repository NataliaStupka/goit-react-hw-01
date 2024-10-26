import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(status ? s.onLine : s.offLine)}>
        {status ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
