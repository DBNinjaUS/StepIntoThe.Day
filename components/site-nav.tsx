'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#location', label: 'Location' },
  { href: '#newcomers', label: 'Newcomers' },
];

export function SiteNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="site-nav-trigger">
        Explore the site. <ChevronDown size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={9} className="site-nav-content">
        {links.map((link) => (
          <DropdownMenuItem key={link.href} render={<a href={link.href} />} className="site-nav-item">
            {link.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
