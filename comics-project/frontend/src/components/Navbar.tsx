import { useUserContext } from '../hooks/useUserContext';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Root from './Root';
const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'home'}>Home</Link>
              </li>
              <li>
                <Link to={'characters'}>Characters</Link>
              </li>
              <li>
                {user ? (
                  <button
                    className="btn btn-primary btn-outline btn-sm h-full"
                    onClick={() => setUser(undefined)}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to={'login'}
                    className="btn btn-primary btn-outline btn-sm h-full"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to={''}>
            Marvel Comics
          </Link>
        </div>
        <div className="navbar-center max-sm:hidden">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            {user && (
              <li>
                <Link to={'/characters'}>Characters</Link>
              </li>
            )}
            <li>
              {user ? (
                <button
                  className="btn btn-primary btn-outline btn-sm h-full"
                  onClick={() => {
                    setUser(undefined);
                    navigate('/login');
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={'login'}
                  className="btn btn-primary btn-outline btn-sm h-full"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex items-center gap-4">
              <div
                className="avatar hover:cursor-pointer"
                tabIndex={0}
                role="button"
              >
                <div className="w-12 rounded-full">
                  <Link to={'profile'}>
                    <img
                      src={user.picture}
                      className=" transition hover:opacity-60"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Root>
        <Outlet />
      </Root>
    </>
  );
};

export default Navbar;
