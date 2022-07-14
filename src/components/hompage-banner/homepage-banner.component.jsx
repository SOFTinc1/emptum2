import React from "react";
import {
  HomepageBanner2Container,
  H1,
  Col1,
  P,
  Span
} from "./homepage-banner.styles";
import "./a.css";
import Slide from "react-reveal/Slide";

const HomepageBanner = () => (
  <HomepageBanner2Container>
    <Slide left>
      <Col1 id="scroll-container">
        <H1>unleash your <Span>ravishing</Span> within-g <br />move foward with your ravishness </H1>
      </Col1>
    </Slide>
  </HomepageBanner2Container>

  //   <HomepageBanner2Container>
  //     <Row>
  //       <Slide left>
  //         <Col1 id="scroll-container">
  //           <H1  id="scroll-text">unleash the ravishing within-g</H1>
  //           {/* <SearchBox /> */}
  //           <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti minus libero nostrum autem accusamus omnis fugit recusandae iste eaque.</P>
  //         </Col1>
  //       </Slide>
  //       <Slide right>
  //         <Col2>
  //           <ImageSrc src={Image1} />
  //         </Col2>
  //       </Slide>
  //     </Row>
  //   </HomepageBanner2Container>
);

// class HomepageBanner extends React.Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.src = "/path/to/infinite.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }

//   render() {
//     return (
//       <HomepageBanner2Container>
//         <div class="tickerwrapper">
//           <ul class="list">
//             <li class="listitem">
//               <span>This is list item 1</span>
//             </li>
//           </ul>
//         </div>
//       </HomepageBanner2Container>
//     );
//   }
// }

export default HomepageBanner;
