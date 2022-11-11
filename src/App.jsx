import React, { useState, useEffect } from "react";
import Follower from "./Follower";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  return (
    <div>
      <main>
        <div className="section-title text-center">
          <h1>{loading ? "Loading..." : "Followers"}</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          {!loading && (
            <div className="btn-container d-flex justify-content-center">
              <button className="prev-btn" onClick={prevPage}>
                prev
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="next-btn" onClick={nextPage}>
                next
              </button>
            </div>
          )}
        </section>
      </main>
      {!loading && (
        <footer className="text-center pb-1">
          <a
            href="https://raziwebdeveloper.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-black"
          >
            Developed with ❤ by raziwebdeveloper.com
          </a>
        </footer>
      )}
    </div>
  );
}

export default App;
