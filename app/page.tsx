"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ms");
  }, [router]);

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0;url=/ms" />
        <title>Pusat Jagaan Durrani Asyrani</title>
      </head>
      <div className="min-h-screen flex items-center justify-center bg-cream-bg">
        <p className="text-slate-500 text-sm font-medium animate-pulse">Hala tuju semula...</p>
      </div>
    </>
  );
}
