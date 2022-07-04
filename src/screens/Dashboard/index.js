import { ContentHeader, ContentLayout, CardInfo, CardChat } from "../../components";

const HomeDashboard = () => {
  return(
    <ContentLayout>
      <ContentHeader/>
      <div className="flex justify-between gap-10">
        <CardInfo title={"Total Office"} color={"#4CAF50"} count={"210"} logo={"Homes.svg"}/>
        <CardInfo title={"Total Office"} color={"#FF5958"} count={"192"} logo={"Avali.svg"}/>
        <CardInfo title={"Total Office"} color={"#FCAB4A"} count={"28"} logo={"Book.svg"}/>
        <CardInfo title={"Total Office"} color={"#197BEB"} count={"1021"} logo={"Users.svg"}/>
      </div>
      <div className="w-[86vh] mt-8">
        <h5 className="font-semibold text-[24px] leading-[28px] mb-6">Obrolan Terbaru</h5>
        <div className="flex flex-col gap-3">
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        </div>
      </div>
    </ContentLayout>
  )
}

export default HomeDashboard;