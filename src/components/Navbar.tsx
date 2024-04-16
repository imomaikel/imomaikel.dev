'use client';
import { NAV_ITEMS } from '@/utils/constans';
import { FloatingNav } from './ui/floating-navbar';

const Navbar = () => {
  return <FloatingNav navItems={NAV_ITEMS} />;
};

export default Navbar;
