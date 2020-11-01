import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Home() {
  return <Layout><div>Hello world!</div><p>
  <Link to="/about/">About</Link>
</p></Layout>
}
