import { getArticles, getArticleBySlug } from "../fetchers";

export async function generateStaticParams(){
    return getArticles()
}
export default async function ArticlePage({
    params,
}: {
    params: { slug: string }
}) {
    const awaitParams = await params
    const article = await getArticleBySlug(awaitParams.slug)
    return <>
        <div className="relative grid place-items-center">
            <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
                {article.content}
            </article>
        </div>
    </>
}