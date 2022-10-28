import React, { useState, useEffect } from "react";
import Follower from "./Follower";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch();
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "Followers"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
