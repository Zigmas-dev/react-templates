import PropTypes from 'prop-types';
import './UserManagement.scss';

const UserManagement = ({ users }) => {
  return (
    <div className="user-management">
      <h1>Valdyti Vartotojus</h1>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>El. paštas</th>
            <th>Teisės</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><button>Redaguoti</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserManagement.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })),
};

export default UserManagement;
