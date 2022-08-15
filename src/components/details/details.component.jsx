import {
  DetailsContainer,
  Row,
  Col1,
  Col2,
  Col3,
  Col4,
  Gif,
  Title,
  Desc,
} from "./details.styles";
import think from "../../assets/images/think.gif";
import phone from "../../assets/images/phone.gif";
import cart from "../../assets/images/cart.gif"
import pay from "../../assets/images/pay.gif";

const Details = () => (
  <DetailsContainer>
    <Row>
      <Col1>
        <Gif src={think} />
        <Title>need</Title>
        <Desc>are you in need of any fashion item, do you want to upgrade or rebrand your wadrobe visit emptum store online</Desc>
      </Col1>
      <Col2>
        <Gif src={phone} />
        <Title>shop</Title>
        <Desc>we provide a clean and easy to use user interface for effective shopping expereience</Desc>
      </Col2>
      <Col3>
        <Gif src={cart} />
        <Title>cart</Title>
        <Desc>create an account, and add multiple items to cart with ease and efficiency even add multiple of the same item</Desc>
      </Col3>
      <Col4>
        <Gif src={pay} />
        <Title>pay</Title>
        <Desc>checkout added items with ease by paying with card or stripe payment platform, payment made easy on emptum</Desc>
      </Col4>
    </Row>
  </DetailsContainer>
);

export default Details;
