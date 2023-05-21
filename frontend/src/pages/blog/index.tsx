import Head from 'next/head'
import { Button } from 'react-bootstrap'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Articles - Flow Blog</title>
        <meta name='description' content='Read the latest post on Flow Blog' />
      </Head>
      <div>
        <div>Hello, blog!</div>
        <div>
          <Button>I am a button</Button>
        </div>
        <div>
          <a href='#'>I am a link</a>
        </div>
      </div>
    </>
  )
}
