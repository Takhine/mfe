import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NextNavbar = () => {
    
    const router = useRouter();
    return (
      <nav>
        {!router.pathname.includes("[...app]") && (
          <ul className="flex p-4">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block px-4 py-2 ro unded cursor-pointer">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/courses/courseSlug/courseId">
                <a className="inline-block px-4 py-2 rounded cursor-pointer">
                  Courses
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/pricing" passHref>
                <div className="inline-block px-4 py-2 rounded cursor-pointer">
                  Marketing pricing page
                </div>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  };

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <NextNavbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;