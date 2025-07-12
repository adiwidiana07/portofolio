'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper() {
 useEffect(() => {
  AOS.init({
   duration: 800, // durasi animasi dalam ms
   once: true,  // animasi hanya terjadi sekali saat scroll
  });
 }, []);

 return null;
}
