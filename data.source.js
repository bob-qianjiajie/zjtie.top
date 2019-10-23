import React from 'react';
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking Experience & Engineering Conference',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '杭州青拧科技有限公司',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <>
            <p>共享床垫</p>
          </>
        ),
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <>
            <p>2019 / 中国·杭州</p>
          </>
        ),
      },
    ],
  },
};
