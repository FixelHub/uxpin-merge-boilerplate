import React from 'react';
import Table from '../Table';
import Avatars from '../../Avatars/Avatars';

export default (
  <Table
    uxpId='fds-table'
    tableErrors={[2]}
    tableChecked={[1, 3]}
    tableAvatars={[
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
    ]}
    table={{
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
    }}
    onClickMore={() => {}}
    onCheck={() => {}}
    ellipsisType='vertical'
    onSelect={() => {}}
  />
);
