import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.userProfile}>
      <div className={s.description}>
        <img className={s.img} src={image} alt={name} />
        <p className={s.username}>{name}</p>
        <p className={s.text}>&#64;{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers:</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views:</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes:</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototype = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
