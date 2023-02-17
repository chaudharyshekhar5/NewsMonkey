import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "NASA's Perseverance Mars Rover Shows Off Collection of Martian Samples in Stunning Panorama - SciTechDaily",
      description:
        "NASA's Red Planet rover snapped a portrait of the sample depot it has assembled with 10 backup sample tubes that could be returned to Earth by a future mission. People say “pics or it didn’t happen,” and apparently even space robots know what that means. As s…",
      url: "https://scitechdaily.com/nasas-perseverance-mars-rover-shows-off-collection-of-martian-samples-in-stunning-panorama/",
      urlToImage:
        "https://scitechdaily.com/images/Perseverance-Enhanced-Color-Portrait-of-Mars-Sample-Depot-Annotated-scaled.jpg",
      publishedAt: "2023-02-15T11:41:29Z",
      content:
        "ByJet Propulsion LaboratoryFebruary 15, 2023\r\nPerseverances Portrait of the Sample Depot: NASAs Perseverance Mars rover captured this portrait of its recently completed sample depot using its Mastcam… [+6512 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Brett Tingley",
      title:
        "Chelyabinsk meteor explosion over Russia 10 years ago was a planetary defense wakeup call - Space.com",
      description:
        "10 years ago today, the Chelyabinsk meteor explosion showed why we need better methods of detecting and tracking near-Earth asteroids.",
      url: "https://www.space.com/chelyabinsk-meteor-explosion-ten-years-later",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/HbX3CfUDABvVNEkmYJj8mX-1200-80.jpg",
      publishedAt: "2023-02-15T11:00:37Z",
      content:
        "On Feb. 15, 2013, Paul Chodas, manager of the Center for Near-Earth Object Studies (CNEOS) at NASA's Jet Propulsion Laboratory (JPL) in California, was preparing for a NASA TV segment on the flyby of… [+7623 chars]",
    },
    {
      source: { id: null, name: "Nature.com" },
      author: null,
      title:
        "An ankylosaur larynx provides insights for bird-like vocalization in non-avian dinosaurs | Communications Biology - Nature.com",
      description:
        "The earliest larynx discovered in fossil dinosaurs indicates that non-avian dinosaurs may have had bird-like vocalization.",
      url: "https://www.nature.com/articles/s42003-023-04513-x",
      urlToImage:
        "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs42003-023-04513-x/MediaObjects/42003_2023_4513_Fig1_HTML.png",
      publishedAt: "2023-02-15T10:17:44Z",
      content:
        "<li>Reilly, S. M. &amp; Lauder, G. V. The evolution of tetrapod feeding behavior: kinematic homologies in prey transport. Evolution44, 15421557 (1990).\r\nArticle \r\nGoogle Scholar \r\n</li><li>Iwasaki, S… [+7188 chars]",
    },
    {
      source: { id: null, name: "indy100" },
      author: "Harry Fletcher",
      title: "Part of the sun is broken and scientists are baffled - indy100",
      description:
        "We don’t want to alarm anyone, but the sun is broken. A section of the sun has left the surface and begun circulating around the top of the star as if it were a huge polar vortex, and it’s not exactly clear why it’s happened.The observation was made possible …",
      url: "https://www.indy100.com/science-tech/sun-polar-vortex-scientists-baffled-2659418367",
      urlToImage:
        "https://www.indy100.com/media-library/nasa-captures-133-days-of-images-of-the-sun-condenses-them-down.jpg?id=32994974&width=1200&height=600&coordinates=0%2C199%2C0%2C305",
      publishedAt: "2023-02-15T07:13:45Z",
      content:
        "We dont want to alarm anyone, but the sun is broken. \r\nA section of the sun has left the surface and begun circulating around the top of the star as if it were a huge polar vortex, and its not exactl… [+2014 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "",
      title: "Neil deGrasse Tyson lets the air out of balloon hype - CNN",
      description:
        "Famed astrophysicist Neil deGrasse Tyson speaks to CNN's Erin Burnett about how much of a threat he believes high-altitude balloons pose to the US.",
      url: "https://www.cnn.com/videos/business/2023/02/15/neil-degrasse-tyson-balloon-reax-burnett-intv-ebof-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214233318-neil-degrasse-tyson-burnett-vpx.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T05:26:15Z",
      content: null,
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "Michelle Starr",
      title:
        "A Fleeing Black Hole Was Found Leaving a Trail of Newborn Stars in Its Wake - ScienceAlert",
      description:
        "A trail found in the gas surrounding a distant galaxy could be the smoking gun pointing to a runaway supermassive black hole.",
      url: "https://www.sciencealert.com/a-fleeing-black-hole-was-found-leaving-a-trail-of-newborn-stars-in-its-wake",
      urlToImage:
        "https://www.sciencealert.com/images/2023/02/strange_streak_runaway_black_hole.jpg",
      publishedAt: "2023-02-15T03:55:57Z",
      content:
        "A trail found in the gas surrounding a distant galaxy could be the smoking gun pointing to a runaway supermassive black hole.\r\nBased on an analysis of light that has traveled for more than 7.5 billio… [+6069 chars]",
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "Carly Cassella",
      title:
        "There's an Amazing Link Between Zebra Stripes And How Our Fingerprints Grow - ScienceAlert",
      description: "Nobody on Earth has fingerprints quite like yours.",
      url: "https://www.sciencealert.com/theres-an-amazing-link-between-zebra-stripes-and-how-our-fingerprints-grow",
      urlToImage:
        "https://www.sciencealert.com/images/2023/02/FingerprintDevelopment.jpg",
      publishedAt: "2023-02-15T01:46:56Z",
      content:
        "Nobody on Earth has fingerprints quite like yours. Even if you happen to have an identical twin, the swirling arrangement of ridges on your hands and feet will be exclusive to you.\r\nScientists have h… [+4526 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "Jocelyn Timperley",
      title: "The ancient diseases that plagued the dinosaurs - BBC",
      description:
        "Scientists have discovered the tell-tale signs of a range of dinosaur diseases – and found that they're remarkably similar to those affecting animals alive today.",
      url: "https://www.bbc.com/future/article/20230214-could-dinosaurs-get-cancer",
      urlToImage: "https://ychef.files.bbci.co.uk/live/624x351/p0f31l7g.jpg",
      publishedAt: "2023-02-15T01:03:25Z",
      content:
        "Consider, though, that there is only skeletal material for around 32 adult T. rex out of an estimated 2.5 billion that ever lived, and the chances of understanding the prevalence of diseases becomes … [+3827 chars]",
    },
    {
      source: { id: null, name: "Jalopnik" },
      author: "Steve DaSilva",
      title: "NASA Adopts AI To Help Design Mission Parts - Jalopnik",
      description:
        "The software needs a substantial amount of human help, but the resulting parts can be better than human design alone.",
      url: "https://jalopnik.com/nasa-adopts-ai-to-help-design-mission-parts-1850114364",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b4fb10ad6c40262ace2ab4d0c118bfee.jpg",
      publishedAt: "2023-02-15T00:00:00Z",
      content:
        "Right now, the Hot New Thing in tech is artificial intelligence. Its showing up in art, writing, and even helping car designers invent worse versions of extant wheels. But now, artificial intelligenc… [+1664 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Jennifer Nalewicki",
      title:
        "See the lifelike face of Zuzu, a man who lived 9600 years ago in Brazil - Livescience.com",
      description:
        "A facial approximation reveals what Zuzu, a man who lived 9,600 years ago in Brazil, may have looked like.",
      url: "https://www.livescience.com/see-the-lifelike-face-of-zuzu-a-man-who-lived-9600-years-ago-in-brazil",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/4CMkkaVhAYpkkp4GqgAJgC-1200-80.jpg",
      publishedAt: "2023-02-14T22:11:22Z",
      content:
        "In 1997, archaeologists unearthed a skeleton buried in the fetal position at Toca dos Coqueiros, an archaeological site in Brazil's Serra da Capivara National Park. Based on the size and shape of the… [+3023 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Eric Mack",
      title:
        "Watch Asteroid Turn Into a Fireball Just Hours After Being Spotted - CNET",
      description:
        "Astronomers quickly and accurately calculated the approximate time and place the meteor would impact the atmosphere over Europe.",
      url: "https://www.cnet.com/science/space/watch-asteroid-turn-into-a-fireball-over-europe-just-hours-after-being-spotted/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/f07caa40058f536c03ad8829a144d1d5bb97b785/hub/2023/02/13/5569a861-eff1-4dfe-8b26-f053ecdd4d2b/fireball.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-14T22:04:00Z",
      content:
        "It may be one of the most widely observed space rocks no one knew existed just a day earlier. An asteroid officially designated 2023 CX1 (it also went by the temporary label Sar2667 during its approa… [+2718 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Stephanie Pappas",
      title:
        "'Pristine' meteorite contaminated with table salt upon crash landing on Earth - Livescience.com",
      description:
        "The Winchcombe meteorite was collected mere hours after it fell, but researchers have found that it was already contaminated with earthly minerals, including common table salt.",
      url: "https://www.livescience.com/pristine-meteorite-contaminated-with-table-salt-upon-crash-landing-on-earth",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Jx9yyCMjYHPLxTZQ5PoSac-1200-80.jpg",
      publishedAt: "2023-02-14T21:37:14Z",
      content:
        'A meteorite that crashed into a driveway in Winchcombe, England, became contaminated with a sprinkling of table salt within hours of landing, dashing hopes that it could be a "pristine" example of a … [+3327 chars]',
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Mike Wall",
      title: "Big asteroid to zoom by Earth on Wednesday - Space.com",
      description:
        "It's not a particularly close shave — just a reminder that we share space with a lot of fast-moving rocks.",
      url: "https://www.space.com/asteroid-2005-yy128-earth-flyby",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/W2TwuXoEV42sWfURaf2CW9-1200-80.jpg",
      publishedAt: "2023-02-14T21:20:53Z",
      content:
        "A sizable space rock will make its closest approach to Earth in four centuries on Wednesday evening (Feb. 15), but there's nothing to fear.\r\nThe near-Earth asteroid 2005 YY128 will zoom within 2.8 mi… [+3447 chars]",
    },
    {
      source: { id: null, name: "PetaPixel" },
      author: "Matt Growcoot",
      title:
        "Photographers Dodge Coyotes to Capture Comet and Mars Together - PetaPixel",
      description: "A coyote foiled their first attempt.",
      url: "https://petapixel.com/2023/02/14/photographers-dodge-coyotes-to-capture-comet-and-mars-together/",
      urlToImage: "https://petapixel.com/assets/uploads/2023/02/mars.jpg",
      publishedAt: "2023-02-14T20:57:33Z",
      content:
        "The green comet streaks toward Mars\r\nTwo astrophotographers avoided a close encounter with a coyote in the Las Vegas desert as they captured a stunning image of a green comet and Mars together. \r\nHus… [+3886 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X",
      title:
        "Complex subsurface of Mars imaged by Chinese rover Zhurong - Phys.org",
      description:
        "Ground-penetrating radar from China's Martian rover Zhurong reveals shallow impact craters and other geologic structures in the top five meters of the Red Planet's surface. The images of the Martian subsurface are presented in a paper published in Geology.",
      url: "https://phys.org/news/2023-02-complex-subsurface-mars-imaged-chinese.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2023/complex-subsurface-of.jpg",
      publishedAt: "2023-02-14T20:55:50Z",
      content:
        "Ground-penetrating radar from China's Martian rover Zhurong reveals shallow impact craters and other geologic structures in the top five meters of the Red Planet's surface. The images of the Martian … [+4262 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/will-shanklin-1",
      title:
        "James Webb telescope captures a Milky Way-like galaxy a billion light-years away - Engadget",
      description:
        "The European Space Agency released an image of a Milky Way-like galaxy from one billion light years away..",
      url: "https://www.engadget.com/james-webb-telescope-captures-a-milky-way-like-galaxy-a-billion-light-years-away-200514169.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2023-02/5ca3ead0-ac9e-11ed-b3ce-08a2705f5383",
      publishedAt: "2023-02-14T20:07:03Z",
      content:
        "Astronomers at the European Space Agency (ESA) used the James Webb Space Telescope to capture an image of a spiral galaxy that resembles our home, the Milky Way. The star system, LEDA 2046648, sits a… [+1395 chars]",
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "Kevin Hurler",
      title:
        "NASA's Artemis 1 Megarocket Launch Was Really, Really Loud - Gizmodo",
      description:
        "The SLS liftoff from Kennedy Space Center in November exceeded pre-launch noise models by more than 20 decibels, new research found.",
      url: "https://gizmodo.com/nasa-artemis-1-sls-noise-levels-decibels-1850112883",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dbf6d60b372ca456f4bd497310a7ce09.jpg",
      publishedAt: "2023-02-14T19:29:00Z",
      content:
        "NASAs new lunar program is in full swing, thanks to the successful launch and return of the Artemis 1 mission in late 2022. Physics researchers recently determined that the roar of the Space Launch S… [+2639 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Jordan Mendoza, USA TODAY",
      title:
        "Major X-class solar flare erupts from sun: What that means for Earth - USA TODAY",
      description:
        "A X1.1 solar flare erupted from the sun over the weekend, one of the strongest types of flare our star can produce.",
      url: "https://www.usatoday.com/story/news/nation/2023/02/14/major-x-class-solar-flare-erupts-sun/11255556002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/3acbd16d84285887595507106cc62eaf151da2b2/c=0-44-652-412/local/-/media/2014/12/22/USATODAY/USATODAY/635548657310168031-sun.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2023-02-14T18:58:43Z",
      content:
        "A massive solar flare erupted from the sun over the weekend, causing radio blackouts on Earth – and more could be on the horizon. \r\nThe sun emitted the solar flare on Saturday, peaking around 10:48 a… [+2483 chars]",
    },
    {
      source: { id: null, name: "WTOP" },
      author: "Greg Redfern",
      title:
        "Watch this ‘space’: How to catch Jupiter-Venus planetary waltz - WTOP",
      description:
        "Here is a celestial sight you do not want to miss! It’ll be happening over the next two weeks in the western sky as it starts to get dark.",
      url: "http://wtop.com/the-space-place/2023/02/watch-this-space-how-to-catch-jupiter-venus-planetary-waltz/",
      urlToImage:
        "https://wtop.com/wp-content/uploads/2023/02/EARTHSHINE-CONTRAIL.jpg",
      publishedAt: "2023-02-14T17:55:19Z",
      content:
        "Here is a celestial sight you do not want to miss! It’ll be happening over the next two weeks in the western sky as it starts to get dark.\r\nThe bright planets Venus and Jupiter are closing in on one … [+2670 chars]",
    },
    {
      source: { id: null, name: "Iai.tv" },
      author: null,
      title:
        "Our model of the universe has been falsified | Pavel Kroupa, Moritz Haslbauer - IAI",
      description:
        "New data from the Dark Energy Survey and South Pole Telescope suggest that the universe is less ‘clumpy’ than the standard cosmological model predicts. This has triggered speculation about new forces and insights into the nature of dark matter and dark energy…",
      url: "https://iai.tv/articles/our-model-of-the-universe-has-been-falsified-auid-2393",
      urlToImage:
        "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/Our-model-of-the-universe-has-been-falsified.dc.jpg",
      publishedAt: "2023-02-14T17:25:57Z",
      content:
        "New data from the Dark Energy Survey and South Pole Telescope suggest that the universe is less clumpy than the standard cosmological model predicts. This has triggered speculation about new forces a… [+11357 chars]",
    },
  ];

  static defaultProps = {
    category: "general",
    totalResults: 0,
  };
  static propTypes = {
    country: propTypes.string,
    category: propTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async handleUpdate() {
    this.setState({
      articles: this.articles,
      loading: false,
      totalResults: this.totalResults,
    });
  }
  async componentDidMount() {
    this.handleUpdate();
  }
  handlePrevClick = async () => {
    this.handleUpdate();
  };

  handleNextClick = async () => {
    this.handleUpdate();
  };
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.setState({
      articles: this.state.articles.concat(this.articles),
      loading: false,
      totalResults: this.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-2">
        <div className="text-center">
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
            }}
          >
            <h1>GET YOUR DAILY NEWS HERE</h1>
          </span>
        </div>
        {/*{this.state.loading && <Spinner />}*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) : "Latest News"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "For more detail click on Read More"
                    }
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://content.fortune.com/wp-content/uploads/2023/02/GettyImages-1261552395-e1676242511548.jpg?resize=1200,600"
                    }
                    date={
                      element.publishedAt ? element.publishedAt : "2 days ago"
                    }
                    author={element.author ? element.author : "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
