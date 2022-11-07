import React, { useEffect, useState } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const Repo = () => {
  const navigate = useNavigate();
  const { repoName } = useParams();
  const obj = useOutletContext();
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    obj.repos.forEach(repo => {
      if (repo.name === repoName) {
        setRepo(repo);
        return;
      }
    });

  }, [repoName, obj]);

  return (
    <div className="repoDiv">
      <h2>Repo Details</h2>
      <div className="repoInfo">
        <div className="row">
          <div className="col-4">Name</div>
          <div className="col-8">{repo.name}</div>
        </div>
        <div className="row">
          <div className="col-4">Description</div>
          <div className="col-8">{repo.description}</div>
        </div>
        <div className="row">
          <div className="col-4">Topics</div>
          <div className="col-8">{repo.topics}</div>
        </div>

        <div>
          <button onClick={() => navigate(-1)} style={{ padding: "5px", marginTop: "20px" }}>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default Repo;