import Link from 'next/link';
import React from 'react'
import { FiPhone } from 'react-icons/fi';

export default function button() {
  return (
    <div>
      <Link href="tel:(614) 397-4368">
        <button className="flex items-center gap-2 text-white bg-primary py-4 px-7 underline font-bold mt-5">
          <FiPhone /> (614) 397-4368
        </button>
      </Link>
    </div>
  );
}
