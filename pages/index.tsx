import type { NextComponentType } from 'next'
import { BlogList } from '@/components/blog/BlogList'
import { Layout } from '@/layout/Layout'

const Home:NextComponentType = () => {
  return (
    <Layout>
        <BlogList/>
    </Layout>
  )
}


export default Home