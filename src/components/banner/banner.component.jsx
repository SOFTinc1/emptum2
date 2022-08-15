import {
  BannerContainer,
  Head,
  Gif,
  H1,
  P,
  ImageRow,
  Image1,
  Image2,
  IntroRow,
  Intro,
  Details,
} from "./banner.styles";
import phone from "../../assets/images/phone.gif"

const Banner = () => (
  <BannerContainer>
    {/* <DarkMode /> */}
    <Head>welcome</Head>
    <H1>there's good inside.</H1>
    <P>
      unless your awesomeness with emptum store, where all things clothing are readilty available with ease of order
    </P>
    <ImageRow>
      <Image1></Image1>
    </ImageRow>
    <IntroRow>
      <Intro>we are turning to the premier company for all things crytpo.</Intro>
      <Details>Lorem ipsum dolor sit amet consectetur adipisicing elit, Ratione dignissimos at corrupti qui atque non nihil eum laudantium, reprehenderit error fuga eius amet id, Nobis beatae nulla voluptas adipisci eos debitis modi sequi, Voluptatibus voluptatem distinctio quasi minus aperiam nesciunt</Details>
    </IntroRow>
  </BannerContainer>
);

export default Banner;
