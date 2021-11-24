import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import IconButton from '../IconButton/IconButton';
import Avatars from '../Avatars/Avatars';

const Table = (props) => {
  function handleCheck(id) {
    if (props.tableChecked.includes(id)) {
      props.onCheck(props.tableChecked.filter((checkedId) => checkedId !== id));
    } else {
      props.onCheck([...props.tableChecked, id]);
    }
  }

  function getRowByType(header, content, rowId) {
    const avartIcon = props.tableAvatars.find((avatar) => avatar.id === rowId);
    switch (header.rowType) {
      case 'text':
        return (
          <div className='fds-table__td-content'>
            <span className='fds-table__th-text'>{content.title}</span>
          </div>
        );
      case 'textWithIcon':
        return (
          <div className='fds-table__td-content'>
            <span className='fds-table__td-content--icon'>
              <Icon type='outlined' icon={header.rowIcon} />
            </span>
            <span className='fds-table__th-text'>{content.title}</span>
          </div>
        );
      case 'textWithAvatar':
        return (
          <div className='fds-table__td-content'>
            {avartIcon && avartIcon.avatar}
            <span className='fds-table__th-text'>{content.title}</span>
          </div>
        );
      case 'avatarOnly':
        return (
          <div
            className='fds-table__td-content fds-table__td-content--icon'
            style={{ width: '60px' }}
          >
            {avartIcon && avartIcon.avatar}
          </div>
        );
      default:
        return <React.Fragment />;
    }
  }

  function makeHeaders() {
    const checkBox = (
      <th className='fds-table__th fds-table__th--col-fixed' key='checkBoxKey'>
        <div className='fds-table__th-content fds-table__th-content--button'>
          <Checkbox onChange={() => {}} />
        </div>
      </th>
    );
    const headers = [checkBox];
    props.table.headers.forEach((header) => {
      const width = header.fixedWidth
        ? { width: header.fixedWidth }
        : { width: '100%' };
      headers.push(
        <th
          className='fds-table__th fds-table__th--col-fixed'
          style={width}
          key={header.id}
        >
          <div
            className='fds-table__th-content fds-table__th-content--icon'
            style={width}
          >
            <span className='fds-table__th-text'>{header.title}</span>
            <IconButton
              icon='unfold_more'
              type='default'
              onClick={() => header.onSort && header.onSort(header.id)}
            />
          </div>
        </th>
      );
    });
    const ellipsis = (
      <th className='fds-table__th fds-table__th--col-fixed' key='ellipsisKey'>
        <div className='fds-table__th-content fds-table__th-content--button'>
          <IconButton
            icon={
              props.ellipsisType === 'horizontal' ? 'more_horiz' : 'more_vert'
            }
            type='default'
            onClick={() => {}}
          />
        </div>
      </th>
    );
    headers.push(ellipsis);
    return headers;
  }

  function makeRows() {
    const rows = [];
    props.table.rows.forEach((row, index) => {
      const checkBoxRowKey = row.id + index;
      const ellipsisRowKey = `ellipsis-${row.id + index}`;
      const isError = props.tableErrors.find((error) => error === row.id);
      const isChecked = !!props.tableChecked.find((check) => check === row.id);
      const rowContent = [];
      rowContent.push(
        <td className='fds-table__td' key={checkBoxRowKey}>
          <div className='fds-table__td-content'>
            <Checkbox
              checked={isChecked}
              onChange={() => handleCheck(row.id)}
            />
            {isError && (
              <span className='fds-table__td-content--error-icon'>
                <Icon icon='warning' />
              </span>
            )}
          </div>
        </td>
      );
      row.content.forEach((content, childIndex) => {
        const contentKey = content.title + index + childIndex;
        rowContent.push(
          <td className='fds-table__td' key={contentKey}>
            {getRowByType(props.table.headers[childIndex], content, row.id)}
          </td>
        );
      });
      rowContent.push(
        <td
          className='fds-table__td fds-table__td--ellipsis'
          key={ellipsisRowKey}
        >
          <IconButton
            icon={
              props.ellipsisType === 'horizontal' ? 'more_horiz' : 'more_vert'
            }
            type='default'
            onClick={(event) => {
              const position = {
                x: event.clientX - event.target.offsetLeft,
                y: event.clientY - event.target.offsetTop,
              };
              props.onClickMore(row.id, position);
              event.stopPropagation();
            }}
          />
        </td>
      );
      rows.push(
        <tr
          className={`fds-table__tr fds-table__tr ${
            row.disabled && 'fds-table__tr--disabled'
          }`}
          key={row.id}
          onClick={() => props.onSelect(row.id)}
        >
          {rowContent}
        </tr>
      );
    });
    return rows;
  }

  return (
    <div className='fds-table-container'>
      <div className='fds-table'>
        <div className='fds-table-fixed-container'>
          <table className='fds-table__inner'>
            <thead>
              <tr className='fds-table__tr'>{makeHeaders()}</tr>
            </thead>
            <tbody className='fds-table__tbody-hover-button'>
              {makeRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  tableErrors: PropTypes.arrayOf(PropTypes.number),
  tableChecked: PropTypes.arrayOf(PropTypes.number),
  tableAvatars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.node,
    })
  ),
  table: PropTypes.shape({
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        fixedWidth: PropTypes.string,
        onHeaderIconClick: PropTypes.func,
        title: PropTypes.string,
        rowType: PropTypes.oneOf([
          'text',
          'textWithIcon',
          'textWithAvatar',
          'avatarOnly',
        ]),
      })
    ),
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        disabled: PropTypes.bool,
        content: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
          })
        ),
      })
    ),
  }),
  onClickMore: PropTypes.func,
  ellipsisType: PropTypes.oneOf(['horizontal', 'vertical']),
  onCheck: PropTypes.func,
  onSelect: PropTypes.func,
};

Table.defaultProps = {
  tableErrors: [2],
  tableChecked: [1, 3],
  tableAvatars: [
    {
      id: 1,
      avatar: <Avatars type='account' size='small' />,
    },
    {
      id: 2,
      avatar: <Avatars type='account' size='small' />,
    },
    {
      id: 3,
      avatar: <Avatars type='account' size='small' />,
    },
    {
      id: 4,
      avatar: <Avatars type='account' size='small' />,
    },
  ],
  table: {
    headers: [
      {
        id: 1,
        rowType: 'text',
        title: '名称',
        fixedWidth: '150px',
        onSort: () => {},
      },
      {
        id: 2,
        rowType: 'textWithAvatar',
        title: '登録者名',
        fixedWidth: '200px',
        onSort: () => {},
      },
      {
        id: 3,
        rowType: 'text',
        title: '登録者ID',
        fixedWidth: '200px',
        onSort: () => {},
      },
      {
        id: 4,
        rowType: 'textWithIcon',
        title: '更新日時',
        fixedWidth: '200px',
        rowIcon: 'sync',
        onSort: () => {},
      },
    ],
    rows: [
      {
        id: 1,
        disabled: false,
        content: [
          {
            title: '営業_081.docx',
          },
          {
            title: '石沢大輔',
          },
          {
            title: 'ishizawa',
          },
          {
            title: '2020/08/20',
          },
        ],
      },
      {
        id: 2,
        disabled: true,
        content: [
          {
            title: '営業_0812.docx',
          },
          {
            title: '塚田洋介',
          },
          {
            title: 'tsukada',
          },
          {
            title: '2020/08/21',
          },
        ],
      },
      {
        id: 3,
        disabled: false,
        content: [
          {
            title: '営業_0811.docx',
          },
          {
            title: '塚本啓太',
          },
          {
            title: 'tsukamoto',
          },
          {
            title: '2020/08/28',
          },
        ],
      },
      {
        id: 4,
        disabled: false,
        content: [
          {
            title: '営業_0817.docx',
          },
          {
            title: '関野翔太',
          },
          {
            title: 'sekino',
          },
          {
            title: '2020/08/25',
          },
        ],
      },
    ],
  },
  onClickMore: () => {},
  onCheck: () => {},
  ellipsisType: 'vertical',
  onSelect: () => {},
};

export default Table;
