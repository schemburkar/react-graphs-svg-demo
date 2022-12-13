import markdownToHtml from '../helper/markdownToHtml'
import 'highlight.js/styles/vs2015.css'

export const CodeBlock = async ({ title, code }) => {

    const data = await markdownToHtml(code);
    return <div>
        <div className='text-white'>{title}</div>
        <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
}