import { Link } from "react-router-dom";

const TestComp = () => {
  return(
    <div className="flex justify-center bg-red-200 w-full">
      <div className="text-center">
        <p>Admin Office Booking</p>
        <Link to={"/login"}><p className="font-bold py-4 underline">Link To Login</p></Link>
        <Link to={"/user"}><p className="font-bold py-4 underline">Link To User</p></Link>
        <Link to={"/example-more-than-one-word"}><p className="font-bold py-4 underline">Link To example more than one word</p></Link>
      </div>
    </div>
  )
}

export default TestComp;