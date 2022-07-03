import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data, setData] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error ("could'nt fetch data");
        }
        return res.json()
      })
      .then(data=>{
        setData(data)
        setError(null)
      })
      .catch(err=>{
        setError(err.message);
        setData([])
      })
  }, [url])

  return {data, error}
}

export default useFetch;