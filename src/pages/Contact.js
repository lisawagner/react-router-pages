import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt minus id aliquam, cumque quas? Cum eos libero eligendi. Adipisci voluptatum pariatur eaque a dolorem qui maiores quod.</p>
    </div>
  )
}
