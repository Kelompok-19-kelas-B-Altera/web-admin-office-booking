import { ContentHeader, ContentContainer, ContentLayout, CardInfo } from "../../components";

const HomeDashboard = () => {
  return(
    <ContentLayout>
      <ContentHeader/>
      <ContentContainer>
        <h1>Ini Test Aja</h1>
        <CardInfo title={"Total Office"} color={"#4CAF50"} count={"210"}/>
      </ContentContainer>
    </ContentLayout>
  )
}

export default HomeDashboard;