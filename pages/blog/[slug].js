import React from 'react'
import PortableText from "react-portable-text"
import { createClient } from "next-sanity";
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';

function post({ blog }) {
    console.log(blog)
    return (
        <>
            <Head>
        <title>{blog.title} - Asose Sector 5 Dwarka</title>
        
      </Head>
            <Header />
            <section class="heading-link">
                <h3>{blog.title}</h3>
                <p> <Link href="/blog/allpost">Blogs</Link> / {blog.title} </p>
            </section>

            <section className='blogContent'>
                <img src={blog.imageUrl}  alt="blogImage"/>
                <div>
                    <h1>{blog.title}</h1>
                    <PortableText
                        // Pass in block content straight from Sanity.io
                        content={blog.content}
                        projectId="jynt2wpw"
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
        projectId: "jynt2wpw",
        dataset: "production",
        useCdn: true,
        apiVersion: "2021-04-28",
    })

    const query = `*[_type == 'post' && slug.current == '${slug}'][0]{
        "imageUrl": mainImage.asset->url,
        "content":Body,
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

