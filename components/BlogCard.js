import styles from "../styles/BlogCard.module.css";
import Link from "next/link";
import moment from "moment";
import Image from 'next/future/image';

function BlogPost({ title, author, coverPhoto, datePublished, slug, tag, description }) {
  return (
    <Link href={`/posts/${slug}`}>
    <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image fill src={coverPhoto.url} alt="" />
        </div>
      <div className={styles.text}>
        <button className={styles.tag}>{tag.tagDrop}</button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <div className={styles.author}>
            <img width='100' height='100' src={author.avatar.url} alt={title.name} />
            <h3 className={styles.authorname}>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3 className={styles.date}>{moment(datePublished).format("MMMM DD, YYYY")}</h3>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogPost;