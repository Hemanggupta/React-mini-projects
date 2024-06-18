import { useEffect, useState } from 'react';
import './UserDetail.css';

function UserDetail({ userName, url, setUserName }) {
  const userDetailsUrl = `${url}/${userName}`;

  const [userDetails, setUserDetails] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(userDetailsUrl);
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      setUserDetails(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userDetails) {
    return (
      <>
        <span className="p-3 pointer" onClick={() => setUserName(null)}>
          X
        </span>
        <h3>Loading...</h3>
      </>
    );
  }

  const { avatar_url, login } = userDetails;

  return (
    <>
      <span className="pi pi-times text-dark rounded-circle mt-5 bg-light p-3 pointer" onClick={() => setUserName(null)}></span>

      <div className="row flex-column">
        <div className="col">
          <img src={avatar_url} className="user-image" alt={login} />
        </div>
        <div className="col">
          <span className="fs-5 text-capitalize">{login}</span>
        </div>
      </div>
    </>
  );
}
export default UserDetail;
