import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { defaultSchema } from 'hast-util-sanitize'
import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'

defaultSchema.attributes['*'].push('className');

const markdownToHtml = async (markdown: string) => {
    //md to HTML
    const result = await remark()
        .use(remarkGfm)
        .use(remarkHtml)
        .process(markdown)

    //HTML to syntax highlight
    const parsedContent = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeHighlight)
        .process(result.toString())

    return parsedContent.value;
}

export default markdownToHtml;