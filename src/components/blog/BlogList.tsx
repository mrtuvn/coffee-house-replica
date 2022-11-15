'use client';

import type { NextComponentType } from 'next'
import Image from 'next/image'
import blogData from '@components/blog/data/blog'

const BlogList:NextComponentType = () => {
    const blogArray = [...blogData];

    return(
        <>
            <section className="blog-list | my-4">
                <div className="wrapper | container">
                    <div className="title-blog-section | text-center mb-10 text-3xl font-semibold">Tin Tức</div>
                    <div className="even-columns| mx-auto flex flex-wrap gap-8 ">
                        <>
                        {blogArray.map((blog, index) => (
                            <div key={index} className="{`card-blog | flex flex-25 flex-col pb-4 shadow-custom rounded-lg `}">
                            <div className="blog-image | relative">
                                <Image src={blog.image} className="aspect-auto w-full text-center rounded-lg rounded-b-none shrink-0" alt="blogimage" width="280" height="150" />
                            </div>
                            <div className="blog-title | pt-4 px-4 text-ellipsis line-clamp-2">{blog.title}</div>
                            <div className="blog-actions | px-4 pt-4 ml-auto mt-auto ">
                                <button className="bg-btn-main rounded-full text-white p-2 px-4 text-center text-xs ">ĐỌC TIẾP</button>
                            </div>
                            </div>
                        ))}
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogList