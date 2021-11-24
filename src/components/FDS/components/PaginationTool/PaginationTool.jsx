import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';

const PaginationTool = (props) => {
  const totalPageNumber = props.totalItems / props.itemsPerPage;
  const [inputError, setInputError] = React.useState(false);

  function goToNextPage() {
    setInputError(false);
    if (props.currentPage < totalPageNumber) {
      props.onChange(props.currentPage + 1);
    }
  }

  function goToPreviousPage() {
    setInputError(false);
    if (props.currentPage > 1) {
      props.onChange(props.currentPage - 1);
    }
  }

  function setInputPage(page) {
    if (page >= 1 && page <= totalPageNumber) {
      setInputError(false);
      props.onChange(page);
    } else {
      setInputError(true);
      props.onChange(props.currentPage);
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
          onClick={() => goToPreviousPage()}
          disabled={props.currentPage === 1}
        />
      </div>
      <input
        className={`fds-form-input${
          inputError ? ' fds-form-input--error' : ''
        }`}
        value={props.currentPage}
        onFocus={(e) => {
          e.target.select();
        }}
        min={1}
        max={totalPageNumber}
        type='number'
        onChange={(e) => setInputPage(parseInt(e.target.value, 10))}
      />
      <div className='fds-pagination__input-number'>
        / {totalPageNumber.toLocaleString()}
      </div>
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
          onClick={() => goToNextPage()}
          disabled={props.currentPage === totalPageNumber}
        />
      </div>
    </div>
  );
};

PaginationTool.propTypes = {
  showPagesInfo: PropTypes.bool,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

PaginationTool.defaultProps = {
  showPagesInfo: true,
  totalItems: 0,
  itemsPerPage: 10,
  currentPage: 1,
  onChange: () => {},
};

export default PaginationTool;
