import React from 'react';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import IndexPage from '../components/IndexPage';
import Head from 'next/head';
import Script from 'next/script';


// const graphcms = new GraphQLClient(
//     "https://api-us-east-1.hygraph.com/v2/cl6ftpszc2n0f01uhbzh3cz7s/master"
//     );
    
//     const QUERY = gql`
//       {
//         posts {
//           id
//           title
//           description
//           datePublished
//           slug
//           content {
//             html
//           }
//           author {
//             name
//             avatar {
//               url
//             }
//           }
//           coverPhoto {
//             publishedAt
//             createdBy {
//               id
//             }
//             url
//           }
//           tag {
//             tagDrop
//           }
//         }
//       }
//     `;
    
//     export async function getStaticProps() {
//       const { posts } = await graphcms.request(QUERY);
//       return {
//         props: {
//           posts,
//         },
//         revalidate: 30,
//       };
//     }

    

const Blogs = ({ posts }) => {

    
  return (
    <>

         <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-W3Q83E2JE3', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
            />
          <Head>
          <title>Phantom Technologies | Blogs</title>
          <meta name="description" content="Impactful information and case studies on everything Web Development & SEO."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href="https://phantomdm.com/posts"/>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
            <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta property="og:image" content="LINK TO THE IMAGE FILE" />
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content="SITE NAME" />
            <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
            <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
            <meta name="twitter:image" content="LINK TO IMAGE" />
            <meta name="twitter:site" content="@USERNAME" />
            <meta name="twitter:creator" content="@USERNAME" />
      </Head>
      <Nav />

    <div className='blogs-container'>
      <h3 className='blogs-header'>Blogs</h3>
      <div className='blogs-div'>
      <h5 className='blog-upcoming'>Blog Coming Soon!</h5>
      </div>
      {/* <main className='blogs-main'> 
      {posts.map((post) => (
        <BlogCard
          title={post.title}
          author={post.author}
          coverPhoto={post.coverPhoto}
          key={post.id}
          datePublished={post.datePublished}
          slug={post.slug}
          tag={post.tag}
          description={post.description}
          className='blogs-blog-card'
        />
      ))}
    </main> */}
    </div>

    <Footer />
    </>
  )
}

export default Blogs;