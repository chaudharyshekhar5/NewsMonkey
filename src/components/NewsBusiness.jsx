import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class NewsBusiness extends Component {
  articles = [
    {
      source: { id: null, name: "CNBC" },
      author: "Carmen Reinicke, Hakyung Kim",
      title:
        "Dow sheds more than 150 points as investors weigh retail sales, inflation data: Live updates - CNBC",
      description:
        "Investors digested the latest reading of January's consumer price index, which was hotter than anticipated.",
      url: "https://www.cnbc.com/2023/02/14/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107193653-1676308982672-Trading_Floor-OB-Photo-202302013-CC-_01.JPG?v=1676416084&w=1920&h=1080",
      publishedAt: "2023-02-15T14:32:00Z",
      content:
        "Stocks slipped Wednesday as investors mulled the latest retail sales report, which came in higher than expected, a day after the release of January's hotter-than-anticipated consumer price index.\r\nTh… [+1901 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Lufthansa IT meltdown strands thousands of passengers worldwide - Reuters",
      description:
        'An IT failure at Lufthansa <a href="https://www.reuters.com/companies/LHAG.DE" target="_blank">(LHAG.DE)</a> stranded passengers and forced flights to Germany\'s busiest airport to be cancelled or diverted on Wednesday, with the airline blaming botched railway…',
      url: "https://www.reuters.com/business/aerospace-defense/lufthansa-it-fault-causes-massive-flight-disruptions-across-group-2023-02-15/",
      urlToImage:
        "https://www.reuters.com/resizer/w_89_gFrL31xH7yhIrayvJ3g5W0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F5CLYGD3D5L43AV5UP3GINPXPQ.jpg",
      publishedAt: "2023-02-15T14:09:00Z",
      content:
        "FRANKFURT, Feb 15 (Reuters) - An IT failure at Lufthansa (LHAG.DE) stranded passengers and forced flights to Germany's busiest airport to be cancelled or diverted on Wednesday, with the airline blami… [+2988 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jacopo Prisco",
      title: "Brand new Boeing 747 scrapped after 16 flights - CNN",
      description:
        "The world's largest business jet, a Boeing 747 configured as a private VIP plane for a Saudi royal, is being scrapped after having spent just 30 hours in service over 16 flights.",
      url: "https://www.cnn.com/travel/article/boeing-747-vip-jet-scrapped/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230208111140-01-boeing-747-vip-jet-scrapped-exterior.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T13:47:00Z",
      content:
        "A Boeing 747 configured as a private VIP jet is being scrapped after having spent just 30 hours in service over 16 flights. \r\nThe aircraft, originally intended for a Saudi royal, sat on the ground fo… [+5593 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Michael Bloom",
      title:
        "Wednesday's top Wall Street analyst calls include Apple & Tesla - CNBC",
      description:
        "American Eagle was downgraded by Jefferies. Piper Sandler upgraded U.S. Bancorp.",
      url: "https://www.cnbc.com/2023/02/15/wednesdays-top-wall-street-analyst-calls-include-apple-tesla.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107134468-16656992842022-10-11t164525z_1772142506_rc23zw9srq35_rtrmadp_0_retail-holidayshopping-amazon.jpeg?v=1676468636&w=1920&h=1080",
      publishedAt: "2023-02-15T13:43:56Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Jeff Cox",
      title:
        "Retail sales jump 3% in January, smashing expectations despite inflation increase - CNBC",
      description:
        "Retail sales were expected to increase 1.9% in January, according to Dow Jones.",
      url: "https://www.cnbc.com/2023/02/15/retail-sales-january-2023-.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107194628-1676413834151-gettyimages-1247140129-US_RETAIL_SALES.jpeg?v=1676467918&w=1920&h=1080",
      publishedAt: "2023-02-15T13:31:58Z",
      content:
        "Sales at retailers rose far more than expected in January as consumers persevered despite rising inflation pressures.\r\nAdvance retail sales for the month increased 3%, compared with expectations for … [+2374 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Soma Biswas",
      title:
        "Celsius Reaches Deal to Sell Crypto Platform to NovaWulf - The Wall Street Journal",
      description:
        "The deal must be approved by bankruptcy court and accepted by a majority of Celsius customers",
      url: "https://www.wsj.com/articles/celsius-reaches-deal-to-sell-crypto-platform-to-novawulf-3626aadd",
      urlToImage: "https://images.wsj.net/im-691531/social",
      publishedAt: "2023-02-15T13:20:00Z",
      content:
        "Bankrupt cryptocurrency firm Celsius Network LLC reached a deal to sell its retail platform to NovaWulf Digital Management LP as part of a plan to distribute liquid digital assets to customers, accor… [+176 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Tesla to open U.S. charging network to rivals in $7.5 bln federal program -White House - Reuters",
      description:
        'Tesla <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> will open part of its U.S. charging network to electric vehicles (EVs) made by rivals as part of a $7.5 billion federal program to electrify the nation\'s highways to cut car…',
      url: "https://www.reuters.com/technology/tesla-open-us-charging-network-rivals-75-bln-federal-program-white-house-2023-02-15/",
      urlToImage:
        "https://www.reuters.com/resizer/YVyZPdW7Zkx7E-jWmaVFN1S-hxs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BYSM2A4PKNJMHOLMGM5KTDEHFI.jpg",
      publishedAt: "2023-02-15T13:03:00Z",
      content:
        "SAN FRANCISCO, Feb 15 (Reuters) - Tesla (TSLA.O) will open part of its U.S. charging network to electric vehicles (EVs) made by rivals as part of a $7.5 billion federal program to electrify the natio… [+4313 chars]",
    },
    {
      source: { id: null, name: "Barron's" },
      author: "Andrew Bary",
      title:
        "Berkshire Hathaway Didn't Buy More Occidental Petroleum Stock—and More Takeaways - Barron's",
      description:
        "One example: The company's stake in Apple rose slightly, but that wasn't because Warren Buffett bought more shares.",
      url: "https://www.barrons.com/articles/berkshire-hathaway-occidental-apple-stock-4852340b",
      urlToImage: "https://images.barrons.com/im-724825/social",
      publishedAt: "2023-02-15T12:49:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Becky Anderson",
      title:
        "Elon Musk wants to find someone to replace him at Twitter by year-end - CNN",
      description:
        'Elon Musk is aiming to "find someone else" to run Twitter by the end of this year.',
      url: "https://www.cnn.com/2023/02/15/tech/musk-twitter-ceo/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230209152722-elon-musk-0127.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T12:46:00Z",
      content:
        "Elon Musk is aiming to find someone else to run Twitter by the end of this year.\r\nHe first needs to stabilize the organization and make sure its financially in a healthy place, Musk said Wednesday, s… [+1178 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Phoebe Wall Howard, USA TODAY",
      title:
        "Ford F-150 Lightning battery issues: Carmaker pauses production - USA TODAY",
      description:
        "Ford stopped production of the electric F-150 Lightning and is not sending new vehicles to dealers as the carmaker wrestles with a battery issue.",
      url: "https://www.usatoday.com/story/money/cars/2023/02/15/ford-f-150-lightning-battery-issue-production/11262141002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/08/09/PDTF/35504bed-f0cf-48e1-b5dd-f2251601a2f2-2023_LIgthning2.jpg?auto=webp&crop=3982,2240,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-02-15T12:43:12Z",
      content:
        "DETROIT – The bestselling all-electric Ford F-150 Lightning was not being built Tuesday at its Michigan production site because building has been stopped while engineers try to determine what's causi… [+2268 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Diana Olick",
      title: "Mortgage demand drops as interest rates bounce higher - CNBC",
      description:
        "Total mortgage application volume fell 7.7% last week as mortgage rates increased.",
      url: "https://www.cnbc.com/2023/02/15/mortgage-demand-drops-interest-rates-jump.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107078767-1655849251148-gettyimages-1404270422-031a4288_746e5b0f-dc80-459e-a8a5-6010c1575964.jpeg?v=1676462401&w=1920&h=1080",
      publishedAt: "2023-02-15T12:00:01Z",
      content:
        "After falling for five straight weeks, mortgage rates jumped last week, triggering a decline in mortgage demand.\r\nTotal mortgage application volume fell 7.7% last week, compared with the previous wee… [+2065 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Amelia Lucas",
      title:
        "Chipotle Mexican Grill to launch new spinoff, Farmesa Fresh Eatery, in a ghost kitchen - CNBC",
      description:
        "Farmesa marks Chipotle's first spinoff attempt during CEO Brian Niccol's tenure and will have a soft opening in late February.",
      url: "https://www.cnbc.com/2023/02/15/chipotle-mexican-grill-farmesa-fresh-eatery.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107194423-1676397475869-farmesa_fresh_eatery.jpeg?v=1676462401&w=1920&h=1080",
      publishedAt: "2023-02-15T12:00:01Z",
      content:
        "Chipotle Mexican Grill is launching a new spinoff, called Farmesa Fresh Eatery, in a California ghost kitchen.\r\nIt's the latest attempt by the burrito chain to branch out into new cuisines. Its past … [+3753 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Greg Norman",
      title:
        "United Airlines passenger says people were 'praying' on flight that plunged to within 800 feet of Pacific - Fox Business",
      description:
        "A passenger onboard the United Airlines flight that came close to the Pacific Ocean late last year shortly after takeoff is speaking out.",
      url: "https://www.foxbusiness.com/lifestyle/united-airlines-passenger-says-people-praying-flight-plunged-within-800-feet-pacific",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/11/0/0/United-2.jpg?ve=1&tl=1",
      publishedAt: "2023-02-15T11:53:14Z",
      content:
        'A passenger who was traveling with this family on the United Airlines flight that came just 775 feet from crashing into the Pacific Ocean late last year says people were "praying" under their breaths… [+2716 chars]',
    },
    {
      source: { id: null, name: "MarketWatch" },
      author: "Steve Goldstein",
      title:
        "Want to play the lottery? These are the most speculative stocks of the year, by one measure - MarketWatch",
      description: "Critical information for the U.S. trading day",
      url: "https://www.marketwatch.com/story/by-one-measure-these-are-the-most-speculative-stocks-this-year-49066dd5",
      urlToImage: "https://images.mktw.net/im-725302/social",
      publishedAt: "2023-02-15T11:45:00Z",
      content:
        "Its 13-F season, which means the world gets to find out most of what the worlds top fund managers have been up, on a tape-delay basis. The likes of Warren Buffett and Carl Icahn it is fair to say are… [+6478 chars]",
    },
    {
      source: { id: null, name: "CoinDesk" },
      author: "Omkar Godbole",
      title:
        "Explaining the Disconnect Between Bitcoin and Treasury Yields Post US Inflation Data - CoinDesk",
      description:
        "Bitcoin and technology stocks rose Tuesday even as a hotter-than-expected U.S. CPI figure revived Fed angst and lifted Treasury yields.",
      url: "https://www.coindesk.com/markets/2023/02/15/explaining-the-disconnect-between-bitcoin-and-treasury-yields-post-us-inflation-data/",
      urlToImage:
        "https://www.coindesk.com/resizer/LoCIRMouDSXekq55sEJus_m82I0=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/4VGLG67RPFAUTAFPWSN6NXPGJE.jpg",
      publishedAt: "2023-02-15T11:44:00Z",
      content:
        "Risky assets like bitcoin (BTC) and the tech-heavy Nasdaq index unexpectedly put in a positive performance on Tuesday even as U.S. consumer price index (CPI) data revived hawkish Federal Reserve (Fed… [+4412 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: null,
      title: "Five Things You Need to Know to Start Your Day - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=be750a0f-ad41-11ed-b4b6-4d684d4f6962&url=L25ld3MvbmV3c2xldHRlcnMvMjAyMy0wMi0xNS9maXZlLXRoaW5ncy15b3UtbmVlZC10by1rbm93LXRvLXN0YXJ0LXlvdXItZGF5",
      urlToImage: null,
      publishedAt: "2023-02-15T11:30:26Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Hugh Son",
      title:
        "Goldman Sachs scraps idea for direct-to-consumer credit card after strategy shift - CNBC",
      description:
        "Not long ago, CEO David Solomon told analysts the bank was developing its own card, which would've made use of the platform Goldman created for the Apple Card.",
      url: "https://www.cnbc.com/2023/02/15/goldman-sachs-scraps-idea-for-direct-to-consumer-credit-card.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105950744-1559751585019qz0_5446-2.jpg?v=1676459774&w=1920&h=1080",
      publishedAt: "2023-02-15T11:16:14Z",
      content:
        "Goldman Sachs has dropped plans to develop a Goldman-branded credit card for retail customers, another casualty of the firm's strategic pivot, CNBC has learned.\r\nNot long ago, CEO David Solomon told … [+2954 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: null,
      title: "US Economic Data Threatened by Survey Non-Responses - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=2003ea06-ad40-11ed-9a6d-4478794d7765&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMi0xNS91cy1lY29ub21pYy1kYXRhLXRocmVhdGVuZWQtYnktc3VydmV5LW5vbi1yZXNwb25zZXM=",
      urlToImage: null,
      publishedAt: "2023-02-15T11:00:25Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Thomas Catenacci, Cameron Cawthorne",
      title:
        "CEO of Ford-partnered Chinese EV battery company has ties to CCP 'United Front' apparatus - Fox News",
      description:
        'The CEO of the China-based company partnering with Ford to produce electric vehicle batteries is tied to the Chinese Communist Party\'s so-called "United Front" influence campaign.',
      url: "https://www.foxnews.com/politics/ceo-ford-partnered-chinese-ev-battery-company-ties-ccp-united-front-apparatus",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Ford-ukraine-war.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        "FIRST ON FOX: The CEO of Contemporary Amperex Technology (CATL) the China-based company partnering with Ford to produce electric vehicle batteries in the U.S.  is tied to the Chinese Communist Party'… [+6798 chars]",
    },
    {
      source: { id: null, name: "Vox" },
      author: "Shirin Ghaffary",
      title:
        "After Meta’s stock jump, an executive warned employees that they’re still “at the whim of Apple” - Vox.com",
      description:
        "Though the company’s stock jumped, it’s still facing big challenges from Apple, TikTok, and younger users.",
      url: "https://www.vox.com/recode/2023/2/15/23599734/meta-facebook-stock-apple-competition-tiktok-mark-zuckerberg-alex-schultz",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/d57ZP3noa6b5XXAI6cuY6QW5hEI=/0x226:2394x1479/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24432584/1440405373.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        "Meta had an abysmal 2022. The value of its stock fell by 65 percent year over year, it laid off 11,000 people, and employee morale has suffered. \r\nThere are signs things are turning around, though: E… [+5780 chars]",
    },
  ];

  static defaultProps = {
    country: "in",
    category: "general",
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

  render() {
    return (
      <div className="container my-2">
        <h1
          className="text-center"
          style={{
            color: "red",
          }}
        >
          YOU GET DAILY NEWS HERE{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles?.map((element) => {
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-success"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsBusiness;
