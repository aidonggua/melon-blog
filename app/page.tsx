import React from "react";
import Description from "@/components/description";
import Contact from "@/components/contact";
import notionService from "@/server/service/notion-service";
import Tags from "@/components/tags";

export default async function Home() {
    const categories = await notionService.getCategories()
    const categoryBlogs: Map<string, Blog[]> = new Map<string, Blog[]>()
    for (const category of categories) {
        const blogs = await notionService.getCategoryBlogs(category)
        categoryBlogs.set(category, blogs!)
    }
    const tags = await notionService.getBlogTags()

    return (
        <div className="font-mono">
            {/*简介区域*/}
            <Description/>
            {/*图标跳转区域*/}
            <Contact/>
            <div className="text-base antialiased">
                {categories.map((category: string) => {
                    let num = 4
                    if (category.indexOf('编程') != -1) {
                        num = 16
                    }
                    return <div key={category}
                                className="w-full mt-5 text-[1em] bg-white p-4 shadow-md">
                        <div className="w-full h-10 px-3 flex justify-end items-center">
                            <h1 className="font-bold text-[1.5em] grow">
                                {category.split('-')[1]}
                            </h1>
                            <a className="text-gray-400" href={"/category/" + category}>更多<span
                                className="text-sm">({categoryBlogs.get(category)?.length})</span></a>
                        </div>
                        {
                            categoryBlogs.get(category)!.slice(0, num).map((blog: Blog) => {
                                return <div key={blog.id}
                                            className="w-full h-10 px-3 flex justify-between items-center hover:bg-gray-100 rounded">
                                    <div
                                        className="flex-1 flex justify-start items-center text-ellipsis whitespace-nowrap overflow-x-hidden">
                                        <a href={`/blog/${blog.id}/${blog.title}`}>{blog.title}</a>
                                    </div>
                                    <Tags tags={tags.get(blog.id)}/>
                                    <span className="text-gray-400">{blog.date}</span>
                                </div>
                            })
                        }
                    </div>
                })}
            </div>
        </div>
    )
}
