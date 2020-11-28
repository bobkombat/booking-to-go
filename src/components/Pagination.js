import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { changePage } from "../store/actions/movieActions";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default function Pagination() {
  const totalMovie = useSelector((store) => store.movieReducer.totalMovie);
  const currentPage = useSelector((store) => store.movieReducer.currentPage);
  const totalPages = useSelector((store) => store.movieReducer.totalPage);
  const [pages, setPages] = useState([]);
  const [pageNeighbours] = useState(2);
  const dispatch = useDispatch();
  const history = useHistory();
  const { searched } = useParams();

  useEffect(() => {
    if (totalMovie) {
      gotoPage(1);
      setPages(fetchPageNumbers());
    }
  }, [totalMovie]);

  const gotoPage = (page) => {
    const currentPageTemp = Math.max(0, Math.min(page, totalPages));
    dispatch(changePage(currentPageTemp));
    setPages(fetchPageNumbers(page));
    history.push(`/search/${searched}/${page}`);
  };

  const handleClick = (evt, page) => {
    evt.preventDefault();
    gotoPage(+page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(+currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(+currentPage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = (currentPage = 1) => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = 1 * 3 + 2;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default:
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalMovie || totalPages === 1) return null;

  return (
    <>
      <nav aria-label="Countries Pagination">
        <ul className="pagination flex">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="/"
                    aria-label="Previous"
                    onClick={(e) => handleMoveLeft(e)}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="/"
                    aria-label="Next"
                    onClick={(e) => handleMoveRight(e)}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

            return (
              <li key={index} className={`page-item${+currentPage === page ? " active" : ""}`}>
                <a className="page-link" href="/" onClick={(e) => handleClick(e, page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
