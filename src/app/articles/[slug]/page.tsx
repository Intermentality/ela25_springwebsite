import { getArticles, getArticleBySlug } from "../fetchers";

export async function generateStaticParams(){
    return getArticles()
}

type Params = Promise<{ slug: string }>
export default async function ArticlePage({params}:{params:Params}){
    const { slug } = await params
    const article = await getArticleBySlug(slug)
    return <>
        <div className="relative grid place-items-center">
            <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
                {article.content}
            </article>
        </div>
    </>
}