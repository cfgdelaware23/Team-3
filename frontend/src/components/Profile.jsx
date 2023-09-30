import React from 'react';
import './Volunteers/Volunteers.css';
import profilepic from './blankk.jpeg';
import logo from './Volunteers/acblogo.png';

const Profile = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="ACB Logo" className="logo" />
        <div className="right__side">
          <ul className="nav__tabs">
            <li className="nav__tab">
              <a className="nav__tab--anchor red" href="">
                John Doe
              </a>
            </li>
            <li className="nav__contact">
              <a className="nav__contact--text" href="">
                Profile
              </a>
            </li>
            <li className="nav_tab">
              <a href="#" className="nav__tab--anchor black">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-me__info--container">
        <figure className="about-me__picture--mask">
          <img src={profilepic} className="about-me__picture" alt="Picture of Me!" />
        </figure>
        <h1 className="about-me__info--title">
          <span className="">JOHN DOE</span>&nbsp;<span className=""></span>
        </h1>
        <div className="profile-table">
          <table>
            <tr>
              <td>
                <h3>Number of hours spent on events this week</h3>
                {/* Add data for this section */}
              </td>
              <td>
                <h3>My total events attended</h3>
                {/* Add data for this section */}
              </td>
            </tr>
            <tr>
              <td>
                <h3>20</h3>
              </td>
              <td>
                <h3>20</h3>
              </td>
            </tr>
          </table>
          <div>
            <h1 className='header__title'>My upcoming events:</h1>
          </div>
          <div className="events__profile">
          <div className="events__profile">
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            </div>
            <div className="cardnew"><h1 className="h1_new">Event Name:</h1
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores blanditiis sit mollitia. Obcaecati magni veritatis nihil iusto fugiat, illo eligendi sit assumenda esse voluptatem ut quis officia! Nemo necessitatibus repudiandae rerum, quasi voluptate quis quae dolor ab ad iure corrupti error. Quas officiis porro asperiores reprehenderit, veniam quisquam omnis?</p>
            0</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
