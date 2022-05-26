import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
// styles
import './Home.css'

export default function Home() {
  const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')

  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div> }
      {/* check for articles first - useFetch initial state is null */}
      {articles && articles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Author: {article.author}</p>
          {/* dynamic link - use template strings */}
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>

  )
}
