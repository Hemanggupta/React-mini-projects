import { useEffect, useState } from 'react';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import UserDetail from './UserDetail/UserDetail';
import UserList from './UserList/UserList';

const UseEffectDemo = () => {
  const url = 'https://api.github.com/users';

  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setUserList([]);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <center>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <ContentHeader title={'User List/Details Using useEffect Hook'} />
            {userName ? (
              <UserDetail url={url} setUserName={setUserName} userName={userName} />
            ) : (
              <UserList userList={userList} setUserName={setUserName} />
            )}
          </>
        )}
      </center>
    </>
  );
};
export default UseEffectDemo;
