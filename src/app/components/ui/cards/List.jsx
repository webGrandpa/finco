// src/components/ui/cards/List.jsx

import React from 'react';
import Link from 'next/link';

const List = ({ HeaderTitle, ListItems }) => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>{HeaderTitle}</h3>
      <ul>
        {ListItems.map((item) => (
          <li
            className='list-item text-[#cccccc] hover:text-blue-500 text-sm py-1'
            key={item.id}
          >
            
            {item.href.startsWith('/') ? (
              <Link href={item.href} className="underline cursor-pointer">
                {item.title}
              </Link>
            ) : (
              <a href={item.href} className="underline cursor-pointer">
                {item.title}
              </a>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;