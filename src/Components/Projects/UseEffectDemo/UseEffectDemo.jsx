import { useEffect, useState } from 'react';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import UserList from './UserList/UserList';

const UseEffectDemo = () => {
  const url = 'https://api.github.com/users';
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
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
            <ContentHeader title={'User List Using useEffect Hook'} />
            <UserList userData={userData} />
          </>
        )}
      </center>
    </>
  );
};
export default UseEffectDemo;
