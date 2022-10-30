import BlogList from '@/components/blog/BlogList'
import Layout from '@/app/layout'

// Refer to / directory in URL
export default function Home() {
  return (
    <Layout>
        <BlogList/>
    </Layout>
  )
}
