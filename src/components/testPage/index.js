import { Link, useParams } from "react-router-dom";
import ContentHeader from "../ContentHeader";
import ContentLayout from "../ContentLayout";
import ContentContainer from "../ContentContainer";

const TestPage = () => {
  let {title} = useParams()

  return(
    <ContentLayout>
      <ContentHeader/>
      <ContentContainer>
        <h1>Ini Test Aja</h1>
      </ContentContainer>
    </ContentLayout>
    
    
  )
}

export default TestPage;