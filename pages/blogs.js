import React from 'react';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import IndexPage from '../components/IndexPage';


const graphcms = new GraphQLClient(
    "https://api-us-east-1.hygraph.com/v2/cl6ftpszc2n0f01uhbzh3cz7s/master"
    );
    
    const QUERY = gql`
      {
        posts {
          id
          title
          description
          datePublished
          slug
          content {
            html
          }
          author {
            name
            avatar {
              url
            }
          }
          coverPhoto {
            publishedAt
            createdBy {
              id
            }
            url
          }
          tag {
            tagDrop
          }
        }
      }
    `;
    
    export async function getStaticProps() {
      const { posts } = await graphcms.request(QUERY);
      return {
        props: {
          posts,
        },
        revalidate: 30,
      };
    }

    

const Blogs = ({ posts }) => {

    
  return (
    <>
    <IndexPage />
      <Nav />

    <div className='blogs-container'>
      <h3 className='blogs-header'>Blogs</h3>
      <h5 className='blog-upcoming'>Blog Coming Soon!</h5>
      <main className='blogs-main'> 
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
    </main>
    </div>

    <Footer />
    </>
  )
}

export default Blogs;