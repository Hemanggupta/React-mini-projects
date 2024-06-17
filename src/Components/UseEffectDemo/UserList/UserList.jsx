import './User.css';
const UserList = ({ userList, setUserName }) => {
  return (
    <>
      <ul className="list-group mx-3 mt-3 ">
        {userList.map(user => (
          <li
            className="list-group-item d-flex align-items-center shadow-sm my-3 rounded user-card"
            key={user.id}
            onClick={() => setUserName(user.login)}
          >
            <img src={user.avatar_url} alt={user.login} className="rounded-circle" style={{ width: '60px', aspectRatio: '1/1' }} />
            <span className="ms-3 fs-5 fw-bold">{user.login}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UserList;
