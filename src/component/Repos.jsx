import React from "react";
import ReactPaginate from "react-paginate";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

const Repos = () => {  
  const obj = useOutletContext();
  const [selectedRepos, setSelectedRepos] = useState([])
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(obj.repos.length / itemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setSelectedRepos(obj.repos.slice(itemOffset, endOffset));
  }, [itemOffset, obj])

  const handlePagechange = (e) => {
    const newOffset = (e.selected * itemsPerPage) % obj.repos.length;
    setItemOffset(newOffset);
  }

  return (
    <div>
      <h1>List of Repos</h1>
      <nav className="repos">
        <ul>
          {selectedRepos.map(repo => {
            return (
              <li key={repo.id}>
                <Link to={repo.name}>{repo.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>


      <ReactPaginate
        previousLabel = "<<"
        nextLabel = ">>"
        onPageChange = {handlePagechange}
        pageCount = {pageCount}
        pageRangeDisplayed = {3}
        renderOnZeroPageCount = {null}
        containerClassName='pagination'
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  )
}

export default Repos;