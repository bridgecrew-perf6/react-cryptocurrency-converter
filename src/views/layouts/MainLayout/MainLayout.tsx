import { Outlet } from 'react-router-dom';

import { RiDashboardFill } from 'react-icons/ri';
import { IoIosWallet } from 'react-icons/io';
import { SiHiveBlockchain } from 'react-icons/si';

import { Navbar } from '../../ui';

import s from './mainLayout.module.scss';

const navbarItems = [
  { path: '/', label: 'Converter', icon: <RiDashboardFill /> },
  { path: '/wallet', label: 'Wallet', icon: <IoIosWallet /> },
];

function MainLayout() {
  return (
    <div className={s.mainLayout}>
      <aside className={s.mainLayout__aside}>
        <a href='https://bs.world/' className={s.mainLayout__logo}>
          <SiHiveBlockchain className={s.mainLayout__icon} />
          <h1>Blockchain solutions</h1>
        </a>
        <Navbar items={navbarItems} />
      </aside>
      <div className={s.mainLayout__main}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
