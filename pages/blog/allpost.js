import styles from '../../styles/Dashboard.module.css'
import Link from "next/link.js";
import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity/blogclient";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Head from 'next/head';
// import Script from 'next/script'

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"  && blog == true]{
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
  <Head>
        <title>Blogs - Asose Sector 5 Dwarka</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1833417954797911"
     crossorigin="anonymous"></script>
      </Head>
    <Header/>
    <section className="heading-link">
                <h3>Blogs</h3>
                <p> <Link href="/">home</Link> / Blogs </p>
            </section>
    <div className={styles.main2} >
      {/* <h1>Welcome To Asose BlogPosts</h1> */}
      <div className={styles.grid}style={{marginTop:"5px"}}>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link href={"/blog/" + post.slug.current} key={post.slug.current}  className={styles.card}>
              <div key={index}>
                <img src={post.mainImage.asset.url} alt="" width={100} />
                    <h3>{post.title}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
