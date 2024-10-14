import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { useLocation } from 'react-router-dom';


const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        links: [
          {
            name: 'To do job description',
            url: '/annotation',
            icon: 'ComplianceAudit',
            key: '1'
          },
          {
            name: 'History',
            url: '/history',
            icon: 'History',
            key: '2'
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Profile',
        url: '/profile',
        icon: 'UserOptional',
        key: '3'
      },
      {
        name: 'Info',
        url: '/info',
        icon: 'Info',
        key: '4'
      }
      
    ],
  },
];

export const NavBasic: React.FunctionComponent = () => {
  const location = useLocation();
  React.useEffect(( )=>{
    const profile = localStorage.getItem('profile')
    if(!profile && location.pathname !== '/profile'){
      window.location.href = '/profile'
    }
  },[])
  return (
    <Nav
      onLinkClick={_onLinkClick}
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
