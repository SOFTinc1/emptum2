import {
  BannerContainer,
  Upper,
  Head,
  H1,
  P,
  ImageRow,
  Image1,
  IntroRow,
  Intro,
  Details,
  ButtonC,
} from "./banner.styles";

const Banner = () => (
  <BannerContainer>
    {/* <DarkMode /> */}
    <Upper>
      <Head>welcome</Head>
      <H1>there's good inside.</H1>
      <P>
        unless your awesomeness with emptum store, where all things clothing are
        readilty available with ease of order
      </P>
      <ButtonC>enter</ButtonC>
    </Upper>
    <ImageRow>
      <Image1></Image1>
    </ImageRow>
    <IntroRow>
      <Intro>
        we are turning to the premier company for all things crytpo.
      </Intro>
      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit, Ratione
        dignissimos at corrupti qui atque non nihil eum laudantium,
        reprehenderit error fuga eius amet id, Nobis beatae nulla voluptas
        adipisci eos debitis modi sequi, Voluptatibus voluptatem distinctio
        quasi minus aperiam nesciunt
      </Details>
    </IntroRow>
  </BannerContainer>
);

export default Banner;
