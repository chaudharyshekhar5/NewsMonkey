import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class NewsHealth extends Component {
  articles = [
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Nada Hassanein, USA TODAY",
      title:
        "Congenital syphilis cases surge among Mississippi babies - USA TODAY",
      description:
        "A surge in babies born with congenital syphilis in Mississippi is calling attention to rising cases throughout the nation, especially the South.",
      url: "https://www.usatoday.com/story/news/health/2023/02/13/congenital-syphilis-cases-surge-babies-mississippi/11247501002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/12/07/USAT/c264e2ed-435e-4ef3-b0ed-afdb69edc04a-221013_KIND_HOKD_Nurses_crochet_outfits_for_newborns_Tmobile_16x9_thumbnail_3.jpg?auto=webp&crop=1911,1075,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-02-15T14:44:27Z",
      content:
        "A surge in babies born with congenital syphilis in Mississippi calls attention to rising cases throughout the nation, especially the South, experts say.\r\nIn 2021, the state saw 106 cases, more than n… [+5958 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Cedars-Sinai Confirms Pancreatic Cancer Rates Rising Faster in Women Than Men - SciTechDaily",
      description: null,
      url: "https://scitechdaily.com/cedars-sinai-confirms-pancreatic-cancer-rates-rising-faster-in-women-than-men/",
      urlToImage: null,
      publishedAt: "2023-02-15T12:53:00Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        'Bird flu spreads to new countries, threatens non-stop "war" on poultry - Reuters',
      description:
        "Avian flu has reached new corners of the globe and become endemic for the first time in some wild birds that transmit the virus to poultry, according to veterinarians and disease experts, who warn it is now a year-round problem.",
      url: "https://www.reuters.com/world/bird-flu-spreads-new-countries-threatens-non-stop-war-poultry-2023-02-15/",
      urlToImage:
        "https://www.reuters.com/resizer/xAB2LEPdEzH4yrLdh8tcIJ1wG8s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YPLZR2TYWRJUREZX5VBEVEBCDQ.jpg",
      publishedAt: "2023-02-15T11:10:00Z",
      content:
        "CHICAGO, Feb 15 (Reuters) - Avian flu has reached new corners of the globe and become endemic for the first time in some wild birds that transmit the virus to poultry, according to veterinarians and … [+6976 chars]",
    },
    {
      source: { id: null, name: "INSIDER" },
      author: "Andrea Michelson",
      title:
        "3 lifestyle changes to lower blood pressure if you have a genetic risk - Insider",
      description:
        "Cutting back on red meat and quitting e-cigarettes can help bring down blood pressure before it becomes a problem, one cardiologist told Insider.",
      url: "https://www.insider.com/lifestyle-changes-to-lower-blood-pressure-early-family-history-2023-2",
      urlToImage:
        "https://i.insider.com/63eabddc64d0880018eb163b?width=1200&format=jpeg",
      publishedAt: "2023-02-15T10:30:18Z",
      content:
        "It's never too early to start thinking about your heart health, especially when it comes to managing your blood pressure, cardiologist Marc Katz told Insider.\r\nKatz not only treats people with heart … [+3838 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Laura Geggel",
      title:
        "Stunning reconstruction reveals 'lonely boy' with deformed skull who died in cave in Norway 8300 years ago - Livescience.com",
      description:
        "A new reconstruction of one of Norway's oldest known skeletons shows a teenager with an unusual skull who may have died alone in a cave.",
      url: "https://www.livescience.com/stunning-reconstruction-reveals-lonely-boy-with-deformed-skull-who-died-in-cave-in-norway-8300-years-ago",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WTsmR4fYYHciTyWJHTtN9h-1200-80.gif",
      publishedAt: "2023-02-15T10:00:00Z",
      content:
        "About 8,300 years ago, a teenage boy with an unusual skull and short stature may have scampered along the rocky coast of what is now Norway, pausing to regain his balance as he clutched a fishing rod… [+5755 chars]",
    },
    {
      source: { id: null, name: "Boredpanda.com" },
      author: "Justinas Keturka",
      title:
        "Anti-Vax Mom Worried That Her Kids Might Have Polio Calls Her Friend Who's A Doctor, Receives A Reality Check - Bored Panda",
      description:
        "Doctor asks the internet if they were perhaps a bit too harsh with a friend whose child may have caught polio.",
      url: "https://www.boredpanda.com/doctor-refuses-support-antivax-friend-sick-child/",
      urlToImage:
        "https://www.boredpanda.com/blog/wp-content/uploads/2023/02/doctor-refuses-support-antivax-friend-sick-child-fb-63eca650f3302.png",
      publishedAt: "2023-02-15T09:38:22Z",
      content: null,
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "WHO intensifies surveillance in E Guinea after Marburg outbreak - Al Jazeera English",
      description:
        "The country officially declared its first outbreak of Marburg virus disease on Monday.",
      url: "https://www.aljazeera.com/news/2023/2/15/who-intensifies-surveillance-in-e-guinea-after-marburg-outbreak",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/02/GettyImages-1289422427-1.jpg?resize=1200%2C675",
      publishedAt: "2023-02-15T08:46:12Z",
      content:
        "The World Health Organization (WHO) has intensified surveillance after Equatorial Guinea confirmed an outbreak of the Marburg virus, a highly infectious and deadly disease similar to Ebola, which kil… [+2490 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "",
      title:
        "Watch: Neil deGrasse Tyson lets the air out of balloon hype - CNN",
      description:
        "Famed astrophysicist Neil deGrasse Tyson speaks to CNN's Erin Burnett about how much of a threat he believes high-altitude balloons pose to the US.",
      url: "https://www.cnn.com/videos/business/2023/02/15/neil-degrasse-tyson-balloon-reax-burnett-intv-ebof-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214233318-neil-degrasse-tyson-burnett-vpx.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T05:26:15Z",
      content: null,
    },
    {
      source: { id: null, name: "Eatingwell.com" },
      author: "Julie Floyd Jones",
      title: "12 Foods to Improve Your Gut Health Overnight - EatingWell",
      description:
        "Simple changes to your diet can quickly impact your gut health—here's how.",
      url: "https://www.eatingwell.com/article/8021156/foods-to-improve-gut-health-overnight/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C316%2C2000%2C1316&poi=%5B1000%2C900%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F02%2F15%2Fgrilled-artichoke.jpg",
      publishedAt: "2023-02-15T00:54:44Z",
      content:
        "Gut health isn't just about keeping tummy troubles away. While improving your gut health can reduce gastrointestinal issues, it is also key in supporting and regulating body functions and keeping you… [+9670 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Kristen Rogers",
      title: "Too much added sugar could harm your health, study says - CNN",
      description:
        "Eating high amounts of free or added sugars could increase risk for cardiovascular disease, a new study has found.",
      url: "https://www.cnn.com/2023/02/14/health/added-free-sugars-cardiovascular-disease-risk-wellness/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214131548-assorted-cookies-stock.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T00:15:00Z",
      content:
        "Sign up for CNNs Eat, But Better: Mediterranean Style. Our eight-part guide shows you a delicious expert-backed eating lifestyle that will boost your health for life.\r\nEating a lot of free sugars als… [+6044 chars]",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "Mysterious Brain Activity in Mice Watching a Movie Could Help Tackle Alzheimer’s and Improve AI - Neuroscience News",
      description:
        "Tracking hippocampal neurons in mice as they watched a movie revealed novel ways to improve artificial intelligence and track neurological disorders associated with memory and learning deficits.",
      url: "https://neurosciencenews.com/movie-ai-alzheimers-22509/",
      urlToImage:
        "https://neurosciencenews.com/files/2023/02/ai-alzheimers-movie-mouse-neurosicences-public.jpg",
      publishedAt: "2023-02-15T00:14:36Z",
      content:
        "Summary: Tracking hippocampal neurons in mice as they watched a movie revealed novel ways to improve artificial intelligence and track neurological disorders associated with memory and learning defic… [+8372 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Dino Grandoni",
      title:
        "How climate change may already help spread malaria - The Washington Post",
      description:
        "As temperatures rise, malaria-carrying mosquitos have crept to farther from the equator in Africa, according to a new study.",
      url: "https://www.washingtonpost.com/climate-environment/2023/02/14/climate-change-malaria-mosquito/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TTF55NSLV4I6ZJ5YT3JIX4RZFE.jpg&w=1440",
      publishedAt: "2023-02-15T00:13:17Z",
      content:
        "Comment on this story\r\nAs temperatures rise, many tropical species once confined to the warmest parts of the globe are expected to climb to higher altitudes and creep farther from the equator.\r\nThat … [+3152 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "The UK’s most expensive drug saved one sister, but it is too late for the other - BBC",
      description:
        "A toddler becomes the first to be treated by the NHS with a new gene therapy costing £2.875 million.",
      url: "https://www.bbc.com/news/health-64629680",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F175/production/_128631816_1080xnalaandteddiatchristmas.jpg",
      publishedAt: "2023-02-15T00:11:50Z",
      content:
        "A toddler with a rare inherited condition has become the first child to be treated by the NHS with a new life-saving gene therapy.\r\nTeddi Shaw was diagnosed in time because her older sister Nala show… [+10947 chars]",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "Brain-Wave Data and Hearing Test May Help Diagnose Autism Earlier - Neuroscience News",
      description:
        "Researchers say brain wave data collected during routine hearing tests in newborns could help doctors to spot the signs of neurodevelopmental disorders, including ASD earlier.",
      url: "https://neurosciencenews.com/brain-wave-hearing-asd-22508/",
      urlToImage:
        "https://neurosciencenews.com/files/2023/02/brainwave-hearing-asd-neurosicnece-public.jpg",
      publishedAt: "2023-02-14T23:52:18Z",
      content:
        "Summary: Researchers say brain wave data collected during routine hearing tests in newborns could help doctors to spot the signs of neurodevelopmental disorders, including ASD earlier.\r\nSource: Rutge… [+5707 chars]",
    },
    {
      source: { id: null, name: "The Lancet" },
      author: null,
      title:
        "Why we need a deeper understanding of the pathophysiology of long COVID - The Lancet",
      description:
        "The most recent estimate of people living with post-COVID-19 condition (also known\nas long COVID) globally has surpassed 65 million1 and, without clear diagnostic or\ntreatment options available, this number is steadily increasing. There are more than\n200 repo…",
      url: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(23)00053-1/fulltext",
      urlToImage:
        "https://www.thelancet.com/cms/asset/891ae6d6-e672-4aac-9216-8fbbf0824474/gr1.jpg",
      publishedAt: "2023-02-14T23:35:16Z",
      content:
        "We use cookies to help provide and enhance our service and tailor content and ads. To update your cookie settings, please visit the Cookie Preference Center for this site.Copyright © 2023 Elsevier In… [+173 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: null,
      title:
        "Dietitians Agree: These Are The Best Leafy Greens To Eat Every Day For A Healthier Body Over 40 - Yahoo Life",
      description: null,
      url: "https://www.yahoo.com/lifestyle/dietitians-agree-best-leafy-greens-233000340.html",
      urlToImage: null,
      publishedAt: "2023-02-14T23:30:00Z",
      content: null,
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Brooke Kato",
      title:
        "Binge drinking could be reduced with this cheap pill: study - New York Post ",
      description:
        "The study, published in the American Journal of Psychiatry, focused on people who want to lower their alcohol intake, but wouldn’t be classified as alcoholics.",
      url: "https://nypost.com/2023/02/14/binge-drinking-could-be-reduced-with-this-cheap-pill-study/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/02/NYPICHPDPICT000006670649.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-02-14T23:25:00Z",
      content:
        "It might be worth a shot.\r\nA new study from researchers at the University of California, San Francisco, found that swallowing a pill an hour before embarking on a night out could “significantly reduc… [+3575 chars]",
    },
    {
      source: { id: null, name: "13newsnow.com WVEC" },
      author: "Angelo Vargas",
      title:
        "'It just came out of nowhere' | Contagious norovirus in Hampton Roads - 13newsnow.com WVEC",
      description: "The CDC shows 14 states are reporting norovirus outbreaks.",
      url: "https://www.13newsnow.com/article/news/health/contagious-norovirus-in-hampton-roads-virginia/291-4dd96113-163e-42c4-8b37-2e030f59434f",
      urlToImage:
        "https://media.13newsnow.com/assets/WVEC/images/d2d111ca-1d0d-40e9-ad55-643ee413a785/d2d111ca-1d0d-40e9-ad55-643ee413a785_1140x641.jpg",
      publishedAt: "2023-02-14T23:13:00Z",
      content:
        "CHESAPEAKE, Va. People in the Commonwealth and across the nation are experiencing a rise in outbreaks of norovirus. \r\nThe germ can cause major stomach problems for anyone infected. Doctors said this … [+1888 chars]",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "Explaining the Emerging Conceptual Framework of Neurosexuality - Neuroscience News",
      description:
        "Neurosexuality is a conceptual framework that explores the relationship between sexual behavior and brain function. Researchers say the comprehensive framework could be applied to integrate sexual rehabilitation into treatment for those with neurological and …",
      url: "https://neurosciencenews.com/neurosexuality-neurology-22505/",
      urlToImage:
        "https://neurosciencenews.com/files/2023/02/neurosexuality-neuroscience-public.jpg",
      publishedAt: "2023-02-14T22:20:17Z",
      content:
        "Summary: Neurosexuality is a conceptual framework that explores the relationship between sexual behavior and brain function. Researchers say the comprehensive framework could be applied to integrate … [+4308 chars]",
    },
    {
      source: { id: null, name: "Eatingwell.com" },
      author: "Karla Walsh",
      title:
        "A New Study Hints That 38% of Cognitive Decline Is Impacted By These Lifestyle Factors - EatingWell",
      description:
        "Whether you have family history of dementia or not, you'll want to study up.",
      url: "https://www.eatingwell.com/article/8029793/study-cognitive-decline-impacted-lifestyle-factors/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B960%2C679%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2023%2F02%2F14%2F38-of-cognitive-decline-is-impacted-by-lifestyle-factors-a-new-study-suggests-here-are-the-proven-ways-you-can-reduce-your-risk.jpg",
      publishedAt: "2023-02-14T22:04:31Z",
      content:
        "If you can still sing along to every boy band song of the early 2000s and can recite your childhood best friend's phone number, you might be thinking you'll never have to worry about memory challenge… [+4426 chars]",
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

export default NewsHealth;
