// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  bg: require("../assets/bg_berlin.svg"),
  browser: require("../assets/browser.svg"),
  phone: require("../assets/phone.svg"),
  iot: require("../assets/iot.svg"),
  server: require("../assets/server.svg"),
  fin: require("../assets/fin.jpg"),
  dash: require("../assets/dash_button.png"),
  alexa: require("../assets/alexa.png"),
  iphone: require("../assets/iphone.jpg"),
  mic: require("../assets/mic.svg"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {

    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% auto"
    };

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* Slide 0 Title*/}
        <Slide transition={["fade"]} style={skylineBg}>
          <Heading size={3}>JAVASCRIPT RULES</Heading>
          <Text margin="auto auto 5em auto">
            Things I learned in Berlin
          </Text>
        </Slide>

        {/* Slide 1 What?*/}
        <Slide bgColor="tertiary" textColor="primary" >
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}>
            WHAT?
          </Heading>
          <Text margin="auto auto 6em auto" textSize="2rem" textColor="primary">
            JavaScript, NodeJS, React
          </Text>
        </Slide>

        {/* Slide 2 JS images */}
        <Slide bgColor="primary" textColor="primary">
          <Image width="15%" src={images.browser} />
          <Image width="15%" src={images.server} />
          <Image width="15%" src={images.phone} />
          <Image width="15%" src={images.iot} />
          <Image width="8%" src={images.mic} style={{marginLeft: "20px"}}/>
        </Slide>

        {/* Slide 3 WHY? */}
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}>
            WHY?
          </Heading>
          <Text margin="auto auto 6em auto" textSize="2rem" textColor="primary">
            to have fun of course
          </Text>
        </Slide>

        {/* Slide 4 Dash button*/}
        <Slide bgColor="white">
          <Image width="50%" src={images.dash} />
            <Text margin="auto auto 6em auto" textSize="2rem" textColor="secondary">
              chuck-norris-facts@amazon.com
            </Text>
        </Slide>

        {/* Slide 5 Alexa */}
        <Slide bgColor="white">
          <Image width="50%" src={images.alexa} />
        </Slide>

        {/* Slide 6 Alexa */}
        <Slide bgColor="white">
          <Image width="50%" src={images.iphone} />
        </Slide>

        {/* Slide 5 HOW? */}
        <Slide bgColor="tertiary">
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}
          >
            HOW?
          </Heading>
        </Slide>

        {/* Slide 6 what was used */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Things involved</Heading>
          <List width="100%">
            <ListItem>DashButton: AWS Lambda, AWS SNS, AWS S3</ListItem>
            <ListItem>Mobile app: React Native, Expo</ListItem>
            <ListItem>Presentation: React, Spectacle</ListItem>
          </List>
        </Slide>

        {/* Slide 7 FIN*/}
        <Slide bgColor="black">
          <Image width="100%" src={images.fin} />
        </Slide>

        {/* Slide 8 Useful links*/}
        <Slide bgColor="white">
          <Heading caps size={3} style={{ letterSpacing: "0.05em" }}>Useful links:</Heading>
          <List>
            <Link href="https://broadcast.amazon.com/videos/70061" target="_blank">
              <ListItem>UX Served À La Carte presentation video</ListItem>
            </Link>
            <ListItem>Alexa skill tutorial</ListItem>
            <ListItem>Spectacle</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
