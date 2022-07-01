import { Link, useParams } from "react-router-dom";

const TestPage = () => {
  let {title} = useParams()

  return(
    <div className="flex justify-center bg-red-200 w-full">
      <div className="text-center">
        <p>Admin Office Booking {title}</p>
        <Link to={"/login"}><p className="font-bold py-4 underline">Link To Login</p></Link>
      </div>
    </div>
  )
}

export default TestPage;