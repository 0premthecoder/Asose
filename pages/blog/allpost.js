import styles from '../../styles/Dashboard.module.css'
import Link from "next/link.js";
import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity/blogclient";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (<>
    <Header/>
    <div className={styles.main}>
      <h3>Welcome to my blog posts page!</h3>
      <div className={styles.grid}>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link href={"/blog/" + post.slug.current} key={post.slug.current}  className={styles.card}>
              <div key={index}>
                <img src={post.mainImage.asset.url} alt="" width={30} />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}