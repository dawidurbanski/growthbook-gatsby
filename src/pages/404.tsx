import * as React from "react"
import { Link, HeadFC } from "gatsby"

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn\'t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>
      </p>
    </main>
  )
}

export const Head: HeadFC = () => <title>Not found</title>
