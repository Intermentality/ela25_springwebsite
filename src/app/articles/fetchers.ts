import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const contentDir = path.join(process.cwd(), "src/app/articles/_mdx-content")

export async function getArticleBySlug(slug: string){
    const fileName = slug + ".mdx"
    const filePath = path.join(contentDir, fileName)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { frontmatter, content } = await compileMDX<{
        title: string
        author: string
        publishDate: string
    }>({
        source: fileContent,
        options: { parseFrontmatter: true }
    })
    return {
        frontmatter,
        content,
        slug: path.parse(fileName).name
    }
}

export async function getArticles() {
    const files = fs.readdirSync(contentDir);
    const aritcles = await Promise.all(
        files.map(async (file) => await getArticleBySlug(path.parse(file).name))
    )
    return aritcles
}