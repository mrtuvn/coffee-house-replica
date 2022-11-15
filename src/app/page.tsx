import type { ReactComponentElement } from 'react'
import BlogList from '@components/blog/BlogList'
import Layout from '@app/layout'
import React from 'react'

// Refer to / directory in URL
const Home: React.FC<string> = () => {
  return (
    <Layout>
      <BlogList/>
    </Layout>
  )
}

export default Home