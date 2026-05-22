import { useParams } from "react-router-dom"

const ArticleDetail = () => {
    const {id}= useParams();
    return (
        <div className='min-h-screen bg-[#202835]'>
            <h1>Article Detail: {id}</h1>
        </div>
    )
}

export default ArticleDetail