import { Link } from "react-router-dom";

const TestComp = () => {
  return(
    <div className="flex justify-center">
      <div className="text-center">
        <p>Admin Office Booking</p>
        <Link to={"/login"}><p className="font-bold py-4 underline">Link To Login</p></Link>
      </div>
    </div>
  )
}

export default TestComp;