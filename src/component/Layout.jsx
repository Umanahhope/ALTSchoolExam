import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Umanahhope/repos")
    .then((response) => response.json())
    .then((data) => {
      setRepos(data);
    })
  }, [])

  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/repos">Fetch Repos</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={{repos:repos}} />
    </div>
  )
}

export default Layout;