import BlogList from '@/components/blog/BlogList'
import Layout from '@/layout/Layout'
import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

const Home: React.FC<any> = () => {
  return (
    <Layout>
        <BlogList/>
    </Layout>
  )
}

export default Home