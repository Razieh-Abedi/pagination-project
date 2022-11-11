import React from "react";

function Follower({ avatar_url, html_url, login }) {
  return (
    <article className="card text-center">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="profile-btn text-decoration-none">
        View Profile
      </a>
    </article>
  );
}

export default Follower;
