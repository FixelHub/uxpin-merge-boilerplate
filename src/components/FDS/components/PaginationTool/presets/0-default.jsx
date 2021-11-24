import React from 'react';
import PaginationTool from '../PaginationTool';

export default (
  <PaginationTool
    uxpId='fds-pagination-tool'
    showPagesInfo
    totalItems={100}
    itemsPerPage={10}
    currentPage={1}
    onChange={() => {}}
  />
);
