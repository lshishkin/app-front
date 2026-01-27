import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from '../../queries/user.query';
import { USER_DEFAULT_IMG } from '../../constants';

const ProfileItem = () => {
  const { data } = useGetUserQuery();

  return (
    <li className="nav-item">
      <NavLink
        to={`profile/${data.username}`}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        state={data.username}
      >
        <img className="user-pic" src={data.image||USER_DEFAULT_IMG} alt="profile" />
        {data.username}
      </NavLink>
    </li>
  );
};

export default ProfileItem;
