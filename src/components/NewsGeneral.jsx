import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Page Six" },
      author: "Nicki Cox",
      title:
        "Jennifer Lopez, Ben Affleck prove their 'commitment' with matching tattoos - Page Six",
      description:
        "Lopez, 53, and Affleck, 50 — who wed in August 2022 — proved their “commitment” to one another by getting coordinating tattoos for Valentine’s Day.",
      url: "https://pagesix.com/2023/02/14/jennifer-lopez-ben-affleck-get-matching-tattoos-on-valentines-day/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/02/NYPICHPDPICT000006682439.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-02-15T04:05:00Z",
      content:
        "They are committed. \r\nJennifer Lopez and Ben Affleck who tied the knot in August 2022 celebrated their first Valentine’s Day as a married couple by getting coordinating tattoos.\r\n“Commitment Happy Va… [+1609 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Zelenskiy urges speedy help from allies as Russia pounds Ukraine's east - Reuters",
      description:
        "Ukraine urged allies to speed up the pace of military help as NATO defence ministers prepared to meet for a second day on Wednesday and Russia bombarded the eastern front line in what appeared to be the early salvoes of a new offensive.",
      url: "https://www.reuters.com/world/europe/zelenskiy-urges-speedy-help-allies-russia-pounds-ukraines-east-2023-02-14/",
      urlToImage:
        "https://www.reuters.com/resizer/sba_vcFcnrXvCw_LixtEtV7_HJ4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AQ7FJJDOCFPFBPSD7E6Q4GAEWE.jpg",
      publishedAt: "2023-02-15T03:48:00Z",
      content:
        "KYIV, Feb 15 (Reuters) - Ukraine urged allies to speed up the pace of military help as NATO defence ministers prepared to meet for a second day on Wednesday and Russia bombarded the eastern front lin… [+5079 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Charlotte Yang and Cindy Wang",
      title:
        "Buffett’s Quick $3.7 Billion Sale of TSMC Stock Spooks Investors - Yahoo Finance",
      description:
        "(Bloomberg) -- Warren Buffett slashed his holding of Taiwan Semiconductor Manufacturing Co. just months after disclosing a major stake, an unusually quick...",
      url: "https://finance.yahoo.com/news/tsmc-shares-decline-buffett-berkshire-012514146.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/Etu29ZqzphEVvOQaYW5y1Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/5770142a446297f4a190c3fd503708d5",
      publishedAt: "2023-02-15T03:20:00Z",
      content:
        "(Bloomberg) -- Warren Buffett slashed his holding of Taiwan Semiconductor Manufacturing Co. just months after disclosing a major stake, an unusually quick reversal by the legendary stock picker thats… [+2337 chars]",
    },
    {
      source: { id: null, name: "Rolling Stone" },
      author: "Charisma Madarang",
      title:
        "Lady Gaga, Joaquin Phoenix Unveil Dramatic First Look at ‘Joker’ Sequel - Rolling Stone",
      description:
        "The actress and singer will star opposite Joaquin Phoenix in Joker: Folie à Deux",
      url: "https://www.rollingstone.com/tv-movies/tv-movie-news/lady-gaga-joaquin-phoenix-first-look-joker-sequel-1234680169/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/02/Lady-Gaga-Joker-Preview.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-02-15T03:16:27Z",
      content:
        "Lady Gaga andJoaquin Phoenix share the screen for the first look at Joker: Folie à deux, with filmmaker Todd Phillips. An image of the two locking eyes was shared on social media Tuesday for Valentin… [+869 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Paul Best, Peter Hasson",
      title:
        "White House tells governors 'thousands' of objects in the skies aren't aliens, could be used car lot balloons - Fox News",
      description:
        'A White House official told governors in a virtual briefing on Monday that "there are no UFOs" and "this is not an invasion of the aliens" after three flying objects were shot down over North America.',
      url: "https://www.foxnews.com/politics/white-house-tells-governors-thousands-objects-skies-arent-aliens-used-car-lot-balloons",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/UFO2.jpg",
      publishedAt: "2023-02-15T02:29:00Z",
      content:
        "White House officials were adamant in a virtual briefing with governors on Monday that flying objects recently spotted over North America are not of extraterrestrial origin, according to a recording … [+3273 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Manveena Suri, Kunal Sehgal, Rhea Mogul",
      title:
        "Indian authorities raid BBC offices after broadcast of Modi documentary - CNN",
      description:
        "Indian tax authorities raided the BBC's offices in New Delhi and Mumbai on Tuesday, weeks after the country banned a documentary from the British broadcaster that was critical of Prime Minister Narendra Modi's alleged role in deadly riots more than 20 years a…",
      url: "https://www.cnn.com/2023/02/14/media/india-tax-raid-bbc-offices-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214043844-01-bbc-india-raid-021423.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T02:22:00Z",
      content:
        "Indian tax authorities raided the BBCs offices in New Delhi and Mumbai on Tuesday, weeks after the country banned a documentary from the British broadcaster that was critical of Prime Minister Narend… [+3721 chars]",
    },
    {
      source: { id: null, name: "Rolling Stone" },
      author: "Tomás Mier",
      title:
        "Elon’s Super Bowl Tweet Flopped, So He Had 80 Engineers Boost His Tweets - Rolling Stone",
      description:
        "After his Super Bowl tweet flopped, the Twitter CEO had his engineers build a system to get his tweets more views",
      url: "https://www.rollingstone.com/culture/culture-news/elon-musk-engineers-twitter-engagement-1234680113/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/02/GettyImages-1246676378.jpeg?w=1600&h=900&crop=1",
      publishedAt: "2023-02-15T02:14:57Z",
      content:
        "After Elon Musk’sSuper Bowl tweet garnered less engagement than Joe Biden’s, the Twitter CEO threatened to fire several of the company’s engineers and had 80 employees build a system so that his twee… [+3358 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Scott Thompson",
      title:
        "Patrick Mahomes jumps into Chiefs-Eagles Twitter battle after Super Bowl LVII - Fox News",
      description:
        "Patrick Mahomes decided to inject himself into the Kansas City Chiefs-Philadelphia Eagles Twitter battle on Tuesday night, which was started by JuJu Smith-Schuster.",
      url: "https://www.foxnews.com/sports/patrick-mahomes-jumps-chiefs-eagles-twitter-battle-super-bowl-lvii",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/5f95feaa-Patrick-Mahomes.jpg",
      publishedAt: "2023-02-15T02:06:00Z",
      content:
        "What started as a Valentines Day troll by JuJu Smith-Schuster to James Bradberry has turned into a Twitter beef where Kansas City Chiefs quarterback Patrick Mahomes got involved. \r\nMahomes was the la… [+2189 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Clare Foran, Ali Zaslav, Ted Barrett",
      title:
        "Dianne Feinstein announces she won't run for reelection in 2024 - CNN",
      description:
        "Democratic Sen. Dianne Feinstein announced on Tuesday that she will not run for reelection in 2024, a major moment for a historic political career as the fight to succeed her is already under way.",
      url: "https://www.cnn.com/2023/02/14/politics/dianne-feinstein-reelection-not-running/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214135512-01-dianne-feinstein-0213.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T01:20:00Z",
      content:
        "Democratic Sen. Dianne Feinstein announced on Tuesday that she will not run for reelection in 2024, a major moment for a historic political career as the fight to succeed her is already under way.\r\nI… [+3218 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Randi Kaye, Dakin Andone, Alta Spells",
      title:
        "Alex Murdaugh's attorneys consider putting him on the stand in double murder trial, source says, as state nears end of its case - CNN",
      description:
        "With prosecutors nearing the end of their case, attorneys for Alex Murdaugh are strongly considering putting the disgraced former South Carolina attorney on the stand in his own defense in the trial for the killings of his wife and son, according to a source …",
      url: "https://www.cnn.com/2023/02/14/us/alex-murdaugh-trial-tuesday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230214104534-01-murdaugh-in-court-0213.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T01:13:00Z",
      content:
        "With prosecutors nearing the end of their case, attorneys for Alex Murdaugh are strongly considering putting the disgraced former South Carolina attorney on the stand in his own defense in the trial … [+7640 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Overwatch 2 - Official Loverwatch Dating Sim Trailer - IGN",
      description:
        "Watch the trailer to learn about Loverwatch, an Overwatch dating sim available to play now on desktop browsers. Loverwatch is a totally real, totally non-can...",
      url: "https://www.youtube.com/watch?v=EHPOherjWWM",
      urlToImage: "https://i.ytimg.com/vi/EHPOherjWWM/maxresdefault.jpg",
      publishedAt: "2023-02-15T01:00:04Z",
      content: null,
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Bernie Zilio",
      title:
        "Priscilla Presley denies giving Elvis' possessions to Bam Margera - Page Six",
      description:
        "“Unbeknownst to us at the time, Bam chose to circulate those photos accompanied by false information and storytelling,” Priscilla said on Tuesday.",
      url: "https://pagesix.com/2023/02/14/priscilla-presley-denies-giving-elvis-possessions-to-bam-margera/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/02/NYPICHPDPICT000006673511.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-02-15T00:58:00Z",
      content:
        "Priscilla Presley is livid over Bam Margera’s interpretation of their recent get-together.\r\nLast week, the troubled “Jackass” star whom friends believe has fallen off the wagon amid his sobriety stru… [+2010 chars]",
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
      source: { id: "cbs-news", name: "CBS News" },
      author: "Allison Elyse Gualtieri",
      title:
        'Gov. Mike DeWine says Congress needs to "take a look" into East Palestine derailment of train carrying chemicals - CBS News',
      description:
        "A total of 38 rail cars derailed, including 11 which contained hazardous materials.",
      url: "https://www.cbsnews.com/live-updates/ohio-train-derailment-east-palestine-chemicals-update-governor-mike-dewine/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/02/06/38eb76b0-3835-463a-9497-42a7294055db/thumbnail/1200x630/8284b0e3b4744e3d4321666c59411f5a/ap23037832979727.jpg",
      publishedAt: "2023-02-15T00:06:00Z",
      content:
        "Ohio Gov. Mike DeWine Tuesday said Congress must act following the Feb. 3 train derailment in East Palestine, Ohio — in which 38 rail cars derailed, including 11 which contained hazardous materials —… [+2122 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Benj Edwards",
      title:
        "AI-powered Bing Chat loses its mind when fed Ars Technica article - Ars Technica",
      description:
        '"It is a hoax that has been created by someone who wants to harm me or my service."',
      url: "https://arstechnica.com/information-technology/2023/02/ai-powered-bing-chat-loses-its-mind-when-fed-ars-technica-article/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/02/ai-loses-mind-after-reading-ars-760x380.jpg",
      publishedAt: "2023-02-14T23:46:36Z",
      content:
        "158 with \r\nOver the past few days, early testers of the new Bing AI-powered chat assistant have discovered ways to push the bot to its limits with adversarial prompts, often resulting in Bing Chat ap… [+3861 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Ellen Nakashima, Shane Harris, Jason Samenow",
      title:
        "U.S. tracked China spy balloon from launch on Hainan Island along unusual path - The Washington Post",
      description:
        "The errant path of the large Chinese spy balloon across Alaska and the continental United States may have been caused by unusual weather conditions that pulled it off course.",
      url: "https://www.washingtonpost.com/national-security/2023/02/14/china-spy-balloon-path-tracking-weather/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UPE3VKKQWAOE55KHCVK4EXONBM.JPG&w=1440",
      publishedAt: "2023-02-14T23:39:23Z",
      content:
        "Comment on this story\r\nBy the time a Chinese spy balloon crossed into American airspace late last month, U.S. military and intelligence agencies had been tracking it for nearly a week, watching as it… [+8665 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Brie Stimson",
      title:
        "Why Rihanna did not get paid for her Super Bowl performance - Fox Business",
      description:
        "Rihanna, like past performers, wasn't paid for her Super Bowl halftime show performance on Sunday but the exposure is likely to make her music sales skyrocket.",
      url: "https://www.foxbusiness.com/entertainment/why-rihanna-not-paid-super-bowl-performance",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/02/0/0/rihanna.jpg?ve=1&tl=1",
      publishedAt: "2023-02-14T23:32:03Z",
      content:
        'Sunday’s Super Bowl brought in around 113 million viewers who also took in Rihanna’s high-flying halftime show performance — but the "Umbrella" star wasn’t paid for her appearance. \r\n"We do not pay t… [+2583 chars]',
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Aaron Katersky, Teddy Grant",
      title:
        "Suspect in Brooklyn U-Haul incident was 'suffering from a mental health crisis,' police say - ABC News",
      description: "One victim, a 44-year-old, died from his injuries.",
      url: "https://abcnews.go.com/US/suspect-brooklyn-haul-incident-suffering-mental-health-crisis/story?id=97203179",
      urlToImage:
        "https://s.abcnews.com/images/US/uhaul2-wabc-ml-230213_1676308083264_hpMain_16x9_992.jpg",
      publishedAt: "2023-02-14T23:13:39Z",
      content:
        "A man driving a U-Haul was suffering from a mental health crisis and was off his medication when he allegedly struck nine people with the rented box truck in Brooklyn on Monday, one of whom died, NYP… [+2563 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Melissa Goldin",
      title:
        "Tweet spreads false claim that Chiefs' victory is 'on hold' for Mahomes probe - The Associated Press - en Español",
      description:
        "CLAIM: The Kansas City Chiefs’ Super Bowl win is being “put on hold” while the NFL launches an investigation into whether quarterback Patrick Mahomes used performance-enhancing drugs during halftime.",
      url: "https://apnews.com/article/fact-check-mahomes-chiefs-super-bowl-drugs-800317036111",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/afs:Medium:166015958850/3000.jpeg",
      publishedAt: "2023-02-14T23:03:11Z",
      content:
        "CLAIM: The Kansas City Chiefs Super Bowl win is being put on hold while the NFL launches an investigation into whether quarterback Patrick Mahomes used performance-enhancing drugs during halftime.\r\nA… [+2642 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Airbnb earnings call a home run for the vacation rental platform | After the Call - Yahoo Finance",
      description:
        "#airbnb #youtube #yahoofinance Yahoo Finance's Brian Sozzi and Brad Smith discuss the top takeaways and the vibe from Airbnb's earnings call where CEO Brian ...",
      url: "https://www.youtube.com/watch?v=DxBOI7zw3lc",
      urlToImage: "https://i.ytimg.com/vi/DxBOI7zw3lc/maxresdefault.jpg",
      publishedAt: "2023-02-14T22:53:15Z",
      content: null,
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
