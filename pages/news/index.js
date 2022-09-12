import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>the news page</h1>
      <ul>
        <li>
          <Link href='/news/abcd'>Go ABCD</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
