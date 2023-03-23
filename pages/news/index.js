import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>news Page</h1>;
      <ul>
        <Link href="/news/NextJS">
          <li>NextJS is Great </li>
        </Link>
        <li>NextJS is Intersting</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
