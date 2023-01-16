import React from 'react'
import PortableText from "react-portable-text"
import { createClient } from "next-sanity";
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';
import styles from '../../styles/Blog.module.css'
function post({ blog }) {
    console.log(blog)
    return (
        <>
            <Header />
            <section class="heading-link">
                <h3>{blog.title}</h3>
                <p> <Link href="/">blogs</Link> / {blog.title} </p>
            </section>

            <section>


                <img src={blog.imageUrl} className={styles.image}  alt="blogImage" />


                <div>
                    <h2>{blog.title}</h2>
                    <PortableText
                        // Pass in block content straight from Sanity.io
                        content={blog.content}
                        projectId="2paqrnsj"
                        dataset="production"
                        
                        // Optionally override marks, decorators, blocks, etc. in a flat
                        // structure without doing any gymnastics
                        serializers={{
                            h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                            li: ({ children }) => <li className="special-list-item">{children}</li>,
                        }}
                />
                </div>

            </section>

            {/* <section className="reviews">

                <h1 className="heading"> our students review </h1>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide">
                            <img src="/pic-3.png" alt="" />
                            <h3>Student 1</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>

            </section> */}


            <Footer />




        </>
    )
}

export default post




export async function getServerSideProps(context) {
    const { slug } = context.query
    const client = createClient({
        projectId: "2paqrnsj",
        dataset: "production",
        useCdn: true,
        apiVersion: "2021-04-28",
    })

    const query = `*[_type == 'post' && slug.current == '${slug}'][0]{
        "imageUrl": mainImage.asset->url,
        "content":body,
        "title": title,
        "author": author
      }`
    const blog = await client.fetch(query)

    return {
        props: {
            blog
        }
    }
}

