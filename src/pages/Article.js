import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export default function Article() {
  const { id } = useParams()
  const url = `http://localhost:3000/articles/` + id
  const { data: article, isPending, error } = useFetch(url)
  const history = useNavigate()

  // in case of error routing to an article, redirect user to `/`
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history('/')
      }, 1000)
    }
  }, [error, history])

  return (
    <div>
      {isPending && <div>Loading...</div> }
      {error && <div>{error}</div> }
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>  
        </div>
      )}
    </div>
  )
}
