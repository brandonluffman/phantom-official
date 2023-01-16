import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import moment from "moment";
import Link from "next/link";
import Nav from "../../components/Nav";
import '../../public/img.png';
import Footer  from '../../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faCheckCircle, faCheck, faCode, faMagnifyingGlassChart, faEnvelopeCircleCheck, faHandshake, faRocket, faMailForward, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "react-scroll-progress-bar";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';
import { useState } from 'react';
import { Form } from "reactstrap";
import Head from 'next/head';


const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/cl6ftpszc2n0f01uhbzh3cz7s/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
      tag {
        tagDrop
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}





export default function BlogPost({ post }) {

  return (
    <div>
       <Head>
          <title>{post.title} - Phantom Technologies</title>
          <meta name="description" content={post.description} />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/img.png" />
          <link rel="apple-touch-icon" href="/img.png" /> 
          <link rel="canonical" href={`https://phantomdm.com/posts/{post.slug}`}/>
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
    <ProgressBar />
    <div className={styles.slugcontainer}>
      <main className={styles.blog}>
      <div className={styles.waterfall}>
        <p className={styles.waterfallp}><Link href='/blogs'><span className={styles.bloglink}>Blog </span></Link>/ {post.title}</p>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.authdetails}>
          <img src={post.author.avatar.url} alt={post.author.name} />
          <div className={styles.authtext}>
              <h6 className={styles.authorname}>Written by {post.author.name}</h6>
              <div className={styles.authbulletdiv}>
              <FontAwesomeIcon className={styles.authbullet} icon={faCircle} />
              </div>
              <h6 className={styles.date}>{moment(post.datePublished).format("MMMM d, YYYY")}</h6>
          </div>
        </div>
        <div className={styles.imgdiv}>
          <img className={styles.cover} src={post.coverPhoto.url} alt={post.title} /> 
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        <div className={styles.sharediv}>
          <div className={styles.sharedivtext}>
          <p className={styles.sharedivp}>Like what you see? Share with a friend!</p>
          </div>
          <div className={styles.sharedivicons}>
            <FacebookShareButton url={`https://phantomdm.com/posts/${post.slug}`} >
              <FacebookIcon size={32} round className={styles.sharedivicon} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://phantomdm.com/posts/${post.slug}`} >
              <TwitterIcon size={32} round className={styles.sharedivicon} />
            </TwitterShareButton>
            <LinkedinShareButton url={`https://phantomdm.com/posts/${post.slug}`} >
              <LinkedinIcon size={32} round className={styles.sharedivicon} />
            </LinkedinShareButton>
            <EmailShareButton url={`https://phantomdm.com/posts/${post.slug}`} >
              <EmailIcon size={32} round className={styles.sharedivicon} />
            </EmailShareButton>
          </div>
        </div>
      </main>
        <div className={styles.inputcardcontainer}>
          <div className={styles.inputcard}>
            <hr className={styles.inputline}></hr>
            <h4 className={styles.inputcardheader}>Looking to <b>Boost Traffic?</b></h4>
            <p className={styles.inputcardtext}>{`Hey, we're Phantom. We specialize in boosting quality traffic to businesses. Let's get you started.`}</p>
            <div className={styles.inputcardemaildiv}>
                  <Link href='/project'><input type='submit' className={styles.inputcardbtn} value='Contact Us' /></Link>
            </div>
          </div>
        </div>
    </div>
    <Footer />
    </div>
  );
}