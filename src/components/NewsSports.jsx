import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Athletic" },
      author: "Zach Berman",
      title:
        "Eagles begin coordinator search as Shane Steichen, Jonathan Gannon land coaching jobs - The Athletic",
      description:
        "Philadelphia has in-house candidates on both sides of the ball who could be sensible replacements.",
      url: "https://theathletic.com/4201760/2023/02/15/eagles-coordinator-search-shane-steichen-jonathan-gannon/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/02/15004353/GettyImages-1245384831-1024x683.jpg",
      publishedAt: "2023-02-15T14:20:42Z",
      content:
        "The brain drain that follows success in the NFL hit the Philadelphia Eagles hard on Tuesday when offensive coordinator Shane Steichen was hired as the Indianapolis Colts head coach and defensive coor… [+9040 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Derek Carr released by Raiders: Best fits for QB in 2023 include multiple teams in NFC South - CBS Sports",
      description: "Assessing the ideal destinations for the veteran QB",
      url: "https://www.cbssports.com/nfl/news/derek-carr-released-by-raiders-best-fits-for-qb-in-2023-include-multiple-teams-in-nfc-south/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/07/11/32008552-07a8-49ca-af01-8ed84fc80648/thumbnail/1200x675/e93adba0aebf42cdc00e1c15e68f0faf/derek-carr-2-1400-us.jpg",
      publishedAt: "2023-02-15T14:19:00Z",
      content:
        "Derek Carr's days as Raiders quarterback are over. After the veteran's abrupt demotion at the end of the 2022 NFL season, he informed the Raiders that he would not accept a trade. As a result, the Ra… [+498 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Barcelona vs. Manchester United PREVIEW: 'Pedri is OUTSTANDING' | ESPN FC - ESPN UK",
      description:
        "The Football Forecast team of James Allcott, Nubaid Haroon and Kweku Afari preview Europa League's headline fixture in Barcelona vs. Manchester United. Nubai...",
      url: "https://www.youtube.com/watch?v=mjpxU_QZXIc",
      urlToImage: "https://i.ytimg.com/vi/mjpxU_QZXIc/maxresdefault.jpg",
      publishedAt: "2023-02-15T14:00:35Z",
      content: null,
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "NFL Mock Draft 2023: Ravens find next QB after trading Lamar Jackson to Falcons, as many deals are made - CBS Sports",
      description:
        "This mock is loaded with trades, involving the quarterback position of course",
      url: "https://www.cbssports.com/nfl/draft/news/nfl-mock-draft-2023-ravens-find-next-qb-after-trading-lamar-jackson-to-falcons-as-many-deals-are-made/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/01/19/c29ab107-8774-4b3b-aeed-34f6833d0d27/thumbnail/1200x675/921d4d358fee883658b1763ca567e8b7/lamar-jackson-g.jpg",
      publishedAt: "2023-02-15T13:38:00Z",
      content:
        "We aren't exactly sure where they'll land, but we know marquee veteran quarterbacks are going to be on the move this offseason, and, of course, those moves will have a seismic impact on the draft. \r\n… [+512 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Ben Morse",
      title:
        "Belgian goalkeeper Arne Espeel dies aged 25 after reportedly collapsing following penalty save during match - CNN",
      description:
        "Belgian goalkeeper Arne Espeel has died aged 25 after reportedly collapsing following a penalty save during a match on Saturday.",
      url: "https://www.cnn.com/2023/02/15/football/arne-espeel-death-belgian-goalkeeper-spt-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230215104704-01-arne-espeel.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T12:49:00Z",
      content:
        "Belgian goalkeeper Arne Espeel has died aged 25 after reportedly collapsing following a penalty save during a match on Saturday.\r\nEspeel had played for Winkel Sport B which plays in the second provin… [+1532 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "ESPN",
      title: "Part-time Pecotic beats ex-No. 8: Had to leave work early - ESPN",
      description:
        "Full-time real estate professional Matija Pecotic stunned former world No. 8 Jack Sock on his ATP Tour main draw debut at the Delray Beach Open on Tuesday.",
      url: "https://www.espn.com/tennis/story/_/id/35663725/part-pecotic-beats-exno-8-sock-had-leave-work-early",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0215%2Fr1131684_1296x729_16%2D9.jpg",
      publishedAt: "2023-02-15T12:25:10Z",
      content:
        "Full-time real estate professional Matija Pecotic stunned former world No. 8 Jack Sock on his ATP Tour main draw debut at the Delray Beach Open on Tuesday.\r\nPecotic, who works as a director at a real… [+1797 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Jeff Gluck",
      title:
        "Best NASCAR Cup drivers of all time, Nos. 5-1: Who has the best case for No. 1? - The Athletic",
      description:
        "Who are the best NASCAR drivers of all time? Our panel of experts cast their votes. Here are the best of the best — the top five.",
      url: "https://theathletic.com/4187709/2023/02/15/best-nascar-cup-drivers-5-1/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/02/15071140/0215_Top75Final.png",
      publishedAt: "2023-02-15T12:24:46Z",
      content:
        "The greatest of all time debate in football? There isnt one. Its Tom Brady.\r\nHockey? Easy, its Wayne Gretzky.\r\nIn the NBA, theres certainly a conversation to be had: Michael Jordan or LeBron James?\r\n… [+18770 chars]",
    },
    {
      source: { id: null, name: "Motorsport.com" },
      author: "Jonathan Noble",
      title:
        "Mercedes plans early season sidepod revamp for W14 F1 car - Motorsport.com",
      description:
        "Mercedes plans to change its sidepod concept early in the new Formula 1 season, team boss Toto Wolff has revealed.",
      url: "https://www.motorsport.com/f1/news/mercedes-plans-early-season-sidepod-revamp-for-w14-f1-car/10432503/",
      urlToImage:
        "https://cdn-1.motorsport.com/images/amp/0JBEypo0/s6/mercedes-w14-detail-1.jpg",
      publishedAt: "2023-02-15T12:16:49Z",
      content:
        "The German manufacturer launched its new W14 at Silverstone on Wednesday, with the car featuring a more aggressive version of the zero-pod concept that it ran with last season.\r\nBut with Mercedes now… [+2326 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Andrew Dampf",
      title:
        "American skier Shiffrin splits with longtime coach at worlds - The Associated Press - en Español",
      description:
        "MERIBEL, France (AP) — American skiing standout Mikaeala Shiffrin  had an unexpected parting with her longtime coach, Mike Day, during the middle of the world championships after informing him that she planned to take a new direction with her staff at the end…",
      url: "https://apnews.com/article/sports-mikaela-shiffrin-transactions-b7ca0a2f3ad1b02c6e5548c9f99d10aa",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/c7d3298262c841da89d94bdd494b016b/2000.webp",
      publishedAt: "2023-02-15T11:44:50Z",
      content:
        "MERIBEL, France (AP) American skiing standout Mikaeala Shiffrin had an unexpected parting with her longtime coach, Mike Day, during the middle of the world championships after informing him that she … [+3353 chars]",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Michael David Smith",
      title:
        "Andy Reid made the most of the Super Bowl’s longer halftime - NBC Sports",
      description:
        "Chiefs coach Andy Reid said after his team shook off a 10-point halftime deficit to win Super Bowl LVII that the longer halftime helped.Reid said that he had the time to first sit down with his assistant coaches to talk about how they needed to adjust while t…",
      url: "https://profootballtalk.nbcsports.com/2023/02/15/andy-reid-made-the-most-of-the-super-bowls-longer-halftime/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/02/GettyImages-1247110444-e1676460611831.jpg",
      publishedAt: "2023-02-15T11:30:00Z",
      content:
        "Chiefs coach Andy Reid said after his team shook off a 10-point halftime deficit to win Super Bowl LVII that the longer halftime helped.\r\nReid said that he had the time to first sit down with his ass… [+1132 chars]",
    },
    {
      source: { id: null, name: "Boston.com" },
      author: null,
      title:
        "Leona Zacha and the rest of the Bruins’ siblings lost it after Pavel Zacha’s game-tying goal against Dallas - Boston.com",
      description:
        "Leona Zacha and the rest of the Bruins' siblings had plenty to cheer about during Boston's overtime victory over the Stars on Tuesday.",
      url: "https://www.boston.com/sports/boston-bruins/2023/02/15/leona-zacha-and-the-rest-of-the-bruins-siblings-lost-it-after-pavel-zachas-game-tying-goal-against-dallas/",
      urlToImage:
        "https://www.boston.com/wp-content/uploads/2023/02/Bruins_Stars_Hockey_97479-63ec64bbebc19-scaled.jpg",
      publishedAt: "2023-02-15T11:22:00Z",
      content: "Skip to Main Content",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "David Close, Alasdair Howorth",
      title:
        "Arizona Cardinals hire Philadelphia Eagles defensive coordinator Jonathan Gannon as new head coach - CNN",
      description:
        "The Arizona Cardinals have hired Philadelphia Eagles defensive coordinator Jonathan Gannon as their new head coach, just two days after the Eagles lost 38-35 to the Kansas City Chiefs in the Super Bowl.",
      url: "https://www.cnn.com/2023/02/15/sport/jonathan-gannon-eagles-arizona-cardinals-nfl-spt-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230215102347-eagles-jonathan-gannon-012923-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T11:02:00Z",
      content:
        "The Arizona Cardinals have hired Philadelphia Eagles defensive coordinator Jonathan Gannon as their new head coach, just two days after the Eagles lost 38-35 to the Kansas City Chiefs in the Super Bo… [+1322 chars]",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: null,
      title:
        "Five Red Sox players who are being overlooked and underrated as spring training begins - NBC Sports Boston",
      description:
        "The Red Sox haven't received much positive press this offseason, but it's not all doom and gloom. As the team reports to Fort Myers, John Tomase shares five names who could make a bigger impact than many are expecting in 2023.",
      url: "https://www.nbcsports.com/boston/red-sox/five-red-sox-players-who-are-being-overlooked-and-underrated-spring-training-begins",
      urlToImage:
        "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Adam-Duvall-USATSI_18499312.jpg",
      publishedAt: "2023-02-15T11:00:32Z",
      content:
        "The assignment is to name five Red Sox players who are being overlooked/underrated as we enter the 2023 season, but that description applies to virtually the entire roster.\r\nFor better or for worse, … [+4483 chars]",
    },
    {
      source: { id: null, name: "DawgNation" },
      author: "Connor Riley",
      title:
        "What offensive coordinator changes means for Georgia football quarterback battle - DawgNation",
      description: "",
      url: "https://www.DawgNation.com/football/georgia-football-quarterback-offensive-coordinator/LRN5RJH2DRDOHPJYKMH54JJ6ME/",
      urlToImage:
        "https://www.dawgnation.com/resizer/f3VCS-AbjDEenU8eva_Tg0VEkAE=/665x470:3941x2654/1280x673/cloudfront-us-east-1.images.arcpublishing.com/ajc/ZLENAAZZARAWNFB3KMLDIEGMHA.jpg",
      publishedAt: "2023-02-15T11:00:03Z",
      content:
        "Georgias offense was already going to look different. Quarterback Stetson Bennett is off to the NFL, meaning the Georgia offense will need a new maestro to conduct the offense. \r\nWe knew those vying … [+3234 chars]",
    },
    {
      source: { id: null, name: "Boston.com" },
      author: null,
      title:
        "Celtics show grit, depth in short-handed loss to Bucks: 5 takeaways - Boston.com",
      description:
        "The Celtics nearly beat the Bucks on Tuesday despite missing nearly all of their starters, including Jayson Tatum and Jaylen Brown.",
      url: "https://www.boston.com/sports/boston-celtics/2023/02/15/celtics-bucks-takeaways-derrick-white-giannis/",
      urlToImage:
        "https://www.boston.com/wp-content/uploads/2023/02/Celtics_Bucks_Basketball_43029-63ec70916cd38-scaled.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content: "Skip to Main Content",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Dustin Long",
      title: "Wednesday NASCAR schedule at Daytona - NASCAR on NBC Sports",
      description:
        "Daytona 500 qualifying takes place Wednesday night. Here are the details.",
      url: "https://nascar.nbcsports.com/2023/02/15/wednesday-nascar-schedule-at-daytona-alex-bowman-jimmie-johnson-kyle-larson-travis-pastrana-zane-smith/",
      urlToImage:
        "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2023/02/GettyImages-1462913510-e1676231381831.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        "The 65th running of the Daytona 500 on Sunday is not short of storylines, ranging from those trying to score their first win in this event to the talented list of drivers just trying to make the 40-c… [+4296 chars]",
    },
    {
      source: { id: null, name: "WCVB Boston" },
      author: null,
      title:
        "Illegal sports bets now reported from all three Massachusetts casinos - WCVB Boston",
      description:
        "The latest involved bets that MGM Springfield accepted on two Harvard men's basketball games.",
      url: "https://www.wcvb.com/article/illegal-sports-bets-now-reported-from-all-three-massachusetts-casinos/42908510",
      urlToImage:
        "https://kubrick.htvapps.com/vidthumb/images/sports-betting-display-1547778246.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        'BOSTON —A third incident involving illegal bets on college basketball is soon to be before the Gaming Commission, regulators learned Tuesday as they tried to determine the best way for them to "set t… [+2304 chars]',
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Omar Garrick",
      title:
        "Kylian Mbappe admits he shouldn’t have played in PSG’s Champions League defeat to Bayern Munich - The Athletic",
      description:
        "Kylian Mbappe has said that he “shouldn’t have come back” and played during Paris Saint-Germain’s Champions League first-leg defeat to Bayern Munich.\nThe France international was a doubt going into the match at the Parc des Princes after he picked up a thigh …",
      url: "https://theathletic.com/4204043/2023/02/15/kylian-mbappe-paris-saint-germain-bayern-munich/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/02/15045243/FotoJet-2023-02-15T095201.937-1024x683.jpg",
      publishedAt: "2023-02-15T10:44:41Z",
      content:
        "Kylian Mbappe has said that he shouldnt have come back and played during Paris Saint-Germains Champions League first-leg defeat to Bayern Munich.\r\nThe France international was a doubt going into the … [+1532 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Amy Woodyatt",
      title:
        "Aaron Rodgers is starting his darkness retreat this week -- and he might film it - CNN",
      description:
        'Green Bay Packers quarterback Aaron Rodgers is preparing to undertake his darkness retreat, which will take place at the "end of this week."',
      url: "https://www.cnn.com/2023/02/15/sport/aaron-rodgers-darkness-retreat-to-start-intl-spt/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230215103110-01-aaron-rodgers-file-2022.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T10:42:00Z",
      content:
        "Green Bay Packers quarterback Aaron Rodgers is preparing to undertake his darkness retreat, which will take place at the end of this week.\r\nIm doing a darkness retreat later this week, Im excited abo… [+2599 chars]",
    },
    {
      source: { id: null, name: "Tampa Bay Times" },
      author: "Matt Baker",
      title:
        "Where Gators, FSU, Miami and USF rank in ESPN preseason projections - Tampa Bay Times",
      description:
        "ESPN’s initial SP+ projections have FSU as the ACC’s top team and expect improvement from the rest of the state.",
      url: "https://www.tampabay.com/sports/gators/2023/02/15/florida-gators-fsu-football-usf-bulls-miami-hurricanes-2023-preseason-rankings/",
      urlToImage:
        "https://www.tampabay.com/resizer/ssXJytv0ldNxDVEg5WyOKTutMrs=/1200x675/filters:focal(905x505:915x495)/cloudfront-us-east-1.images.arcpublishing.com/tbt/LFAL7Z2GQVZJ3YXMH6CAE4QQPE.jpg",
      publishedAt: "2023-02-15T10:28:42Z",
      content:
        "Floridas college football teams are in for improvement this year, led by a Florida State team predicted to be the best in the ACC.\r\nThats one major takeaway from the initial 2023 SP+ projections, whi… [+1565 chars]",
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

export default News;
