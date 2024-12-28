'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {};

function HomeTemplate({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push('/packs');
  }, [router]);

  return <div>Home page loading...</div>;
}

export default HomeTemplate;
