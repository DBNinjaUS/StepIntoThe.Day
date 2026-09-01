'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const pageLinks = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#location', label: 'Location' },
  { href: '#newcomers', label: 'Newcomers' },
];

const communityLinks = [
  { href: '#sponsor-area', label: 'Sponsor Area' },
  { href: '#sponsee-area', label: 'Sponsee Area' },
  { href: '#messaging', label: 'Messaging' },
  { href: '#community-social-area', label: 'Community/Social Area' },
  { href: '#group-calendar', label: 'Group Calendar' },
  { href: '#group-conscious-documents', label: 'Group Conscious Documents' },
];

export function SiteNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="site-nav-trigger">
        Explore the site. <ChevronDown size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={9} className="site-nav-content">
        {pageLinks.map((link) => (
          <DropdownMenuItem key={link.href} render={<a href={link.href} />} className="site-nav-item">
            {link.label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {communityLinks.map((link) => (
          <DropdownMenuItem key={link.href} render={<a href={link.href} />} className="site-nav-item">
            {link.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
