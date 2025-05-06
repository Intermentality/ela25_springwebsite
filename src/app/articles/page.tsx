import Link from "next/link";
import { getArticles } from "./fetchers";

export default async function ArticlesList() {
    const articles = await getArticles();

    return <>
        <h1 className="p-8 text-center font-bold">Articles</h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publish Date</th>
                        <th>Article Link</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{article.frontmatter.title}</td>
                            <td>{article.frontmatter.author}</td>
                            <td>{article.frontmatter.publishDate}</td>
                            <td className="text-info-content underline"><Link href={`/articles/${article.slug}`}>Read More</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}