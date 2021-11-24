import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';

const Pagination = (props) => {
  const totalPageNumber = props.totalItems / props.itemsPerPage;

  function getRange(from, to, step = 1) {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i.toString());
      i += step;
    }
    return range;
  }

  function getPageNumbers(totalPages, selectedPage) {
    const ellipsis = 'ellipsis';
    const pageNeighbors = 1;
    const visibleNumbers = 5;
    const totalBlocks = visibleNumbers + 2;

    if (totalPages > totalBlocks) {
      const firstPage = Math.max(2, selectedPage - pageNeighbors);
      const lastPage = Math.min(totalPages - 1, selectedPage + pageNeighbors);
      let pages = getRange(firstPage, lastPage);
      const hiddenLeft = firstPage > 2;
      const hiddenRight = totalPages - lastPage > 1;
      const hiddenTotal = visibleNumbers - (pages.length + 1);

      switch (true) {
        case hiddenLeft && !hiddenRight: {
          const extraPages = getRange(firstPage - hiddenTotal, firstPage - 1);
          pages = [ellipsis, ...extraPages, ...pages];
          break;
        }
        case !hiddenLeft && hiddenRight: {
          const extraPages = getRange(lastPage + 1, lastPage + hiddenTotal);
          pages = [...pages, ...extraPages, ellipsis];
          break;
        }
        case hiddenLeft && hiddenRight:
        default: {
          pages = [ellipsis, ...pages, ellipsis];
          break;
        }
      }
      return ['1', ...pages, totalPages.toString()];
    }
    return getRange(1, totalPages);
  }

  function makePages() {
    const pageNumbers = getPageNumbers(totalPageNumber, props.currentPage);
    const pages = [];
    pageNumbers.forEach((page, index) => {
      const key = page + index;
      if (page === 'ellipsis') {
        pages.push(
          <div className='fds-pagination__item' key={key}>
            ...
          </div>
        );
      } else if (page === props.currentPage.toString()) {
        pages.push(
          <div
            className='fds-pagination__number fds-pagination__number--active'
            key={page}
          >
            {page}
          </div>
        );
      } else {
        pages.push(
          <div
            className='fds-pagination__number'
            key={page}
            onClick={() => props.onChange(parseInt(page, 10))}
          >
            {page}
          </div>
        );
      }
    });
    return pages;
  }

  function goToNextPage() {
    if (props.currentPage < totalPageNumber) {
      props.onChange(props.currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (props.currentPage > 1) {
      props.onChange(props.currentPage - 1);
    }
  }

  function makePageInfo() {
    const displayTo = props.currentPage * props.itemsPerPage;
    const displayFrom = (props.currentPage - 1) * props.itemsPerPage + 1;

    return (
      <span className='fds-pagination__page-info'>
        {`${displayFrom.toLocaleString()}〜${displayTo.toLocaleString()}件（全${props.totalItems.toLocaleString()}件中）`}
      </span>
    );
  }

  return (
    <div className='fds-pagination'>
      {props.showPagesInfo && makePageInfo()}
      <div
        className={`fds-pagination__left-btn
          ${
            props.currentPage === 1
              ? 'fds-pagination__left-btn--disabled'
              : 'fds-pagination__left-btn--active'
          }`}
      >
        <IconButton
          type='default'
          size='medium'
          icon='chevron_left'
          disabled={props.currentPage === 1}
          onClick={() => goToPreviousPage()}
        />
      </div>
      {makePages()}
      <div
        className={`fds-pagination__right-btn
          ${
            props.currentPage === totalPageNumber
              ? 'fds-pagination__right-btn--disabled'
              : 'fds-pagination__right-btn--active'
          }`}
      >
        <IconButton
          type='default'
          size='medium'
          icon='chevron_right'
          disabled={props.currentPage === totalPageNumber}
          onClick={() => goToNextPage()}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  showPagesInfo: PropTypes.bool,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  showPagesInfo: true,
  totalItems: 100,
  itemsPerPage: 10,
  currentPage: 1,
  onChange: () => {},
};

export default Pagination;
