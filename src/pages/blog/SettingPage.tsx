
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useGetUserQuery } from '@/feature/blog/features/blog/queries/user.query';
import { UserContext } from '@/feature/blog/features/blog/contexts/UserContextProvider';
import { ACCESS_TOKEN_KEY } from '@/feature/blog/features/blog/constants/token.contant';
import token from '@/feature/blog/features/blog/lib/token';
import SettingForm from '@/feature/blog/features/blog/components/SettingForm';

const SettingPage = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(UserContext);
  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    setIsLogin(false);
    navigate('/');
  };

  const { data } = useGetUserQuery();

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingForm data={data} />
            <hr />
            <button type="button" className="btn btn-outline-danger" onClick={onLogout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
