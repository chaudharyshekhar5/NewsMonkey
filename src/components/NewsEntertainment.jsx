import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class NewsEntertainment extends Component {
  articles = [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Jacob Gallagher, Nick Kostov",
      title:
        "Pharrell Williams to Join Louis Vuitton as Creative Director of Menswear - The Wall Street Journal",
      description:
        "The celebrity producer will fill Virgil Abloh’s vacant role and head men’s design at the fashion house",
      url: "https://www.wsj.com/articles/pharrell-williams-louis-vuitton-mens-design-director-d2689117",
      urlToImage: "https://images.wsj.net/im-724310/social",
      publishedAt: "2023-02-15T14:03:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Lisa Respers France",
      title: "Lady Gaga in first look of 'Joker' sequel - CNN",
      description:
        "Lady Gaga looks to be off the deep end with her new character.",
      url: "https://www.cnn.com/2023/02/15/entertainment/lady-gaga-joker-sequel/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230215085952-01-joker-folie-a-deux.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-15T14:02:00Z",
      content:
        "Lady Gaga looks to be off the deep end with her new character.\r\nThe singer/actress is believed to be playing Harley Quinn in the Joker sequel, Joker: Folie à deux.\r\nGaga shared a photo of herself in … [+477 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "FULL MATCH — Elimination Chamber Match for World Heavyweight Title opportunity: WWE No Way Out 2008 - WWE",
      description:
        "Batista, The Undertaker, Finlay, MVP, The Great Khali and Big Daddy V brawl inside the unforgiving Elimination Chamber: Courtesy of Peacock and WWE Network.S...",
      url: "https://www.youtube.com/watch?v=zWru7UIXpHI",
      urlToImage: "https://i.ytimg.com/vi/zWru7UIXpHI/maxresdefault.jpg",
      publishedAt: "2023-02-15T14:00:44Z",
      content: null,
    },
    {
      source: { id: null, name: "The A.V. Club" },
      author: "Gabrielle Sanchez",
      title:
        "Why 2023 is shaping up as the year of the rom-com - The A.V. Club",
      description:
        "The category bounces back with a full slate of films featuring stars like Nicole Kidman, Anne Hathaway, Lily James and, of course, JLo",
      url: "https://www.avclub.com/2023-year-of-the-rom-com-movies-1850089511",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/775a5cfc905e01e7bbf10c005ee80cf6.jpg",
      publishedAt: "2023-02-15T13:00:00Z",
      content:
        "Rumblings of a romantic-comedy renaissance began in 2022, when films such as The Lost City, Fire Island, Bros, and Ticket To Paradise sparked new interest in a genre that had faded sharply over the l… [+812 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Ryan Gaydos",
      title:
        "Jerry Jarrett, legendary pro wrestling promoter, dead at 80 - Fox News",
      description:
        "Jerry Jarrett, the legendary father of wrestler Jeff Jarrett, has died, the WWE announced. He was 80. Jarrett was a legendary promoter who helped create several companies.",
      url: "https://www.foxnews.com/sports/jerry-jarrett-legendary-pro-wrestling-promoter-dead",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/WWE-general.jpg",
      publishedAt: "2023-02-15T12:13:00Z",
      content:
        "Jerry Jarrett, a legendary pro wrestling promoter and the father of WWE Hall of Famer Jeff Jarrett, has died, the company announced on Tuesday. He was 80.\r\nJarrett started his in-ring career in the N… [+1645 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Former Disney executive and author Dave Hollis dies aged 47 - BBC",
      description:
        'His ex-wife, bestselling author Rachel Hollis, says the family is "devastated" by the news.',
      url: "https://www.bbc.com/news/world-us-canada-64643046",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/8799/production/_128631743_gettyimages-659720680.jpg",
      publishedAt: "2023-02-15T12:02:57Z",
      content:
        'Dave Hollis, a former distribution chief for Disney turned self-help author, has died age 47. \r\nIn a statement, Hollis\' ex-wife, bestselling author Rachel Hollis, said the family was "devastated". \r\n… [+1441 chars]',
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Codie Bullen",
      title:
        "Fans go wild for Drake's Son Adonis, 5, crashing the rapper's latest interview - Daily Mail",
      description:
        "Drake's Son Adonis crashed his father's latest interview and fans are obsessed with the joint appearance.",
      url: "https://www.dailymail.co.uk/tvshowbiz/drake/article-11753225/Fans-wild-Drakes-Son-Adonis-5-crashing-rappers-latest-interview.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2023/02/15/10/67707635-0-image-a-55_1676457413349.jpg",
      publishedAt: "2023-02-15T10:35:34Z",
      content:
        "Drake's Son Adonis crashed his father's latest interview and fans are obsessed with the joint appearance. \r\nIn a joint interview with his son Adonis on Barstool Sports on Sunday, the 5-year-old dishe… [+3545 chars]",
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "Helen Holmes",
      title:
        "Tessa Gourin, Jack Nicholson’s Estranged Daughter, Has a Lot to Say - Yahoo News",
      description:
        "Courtesy of Tessa Gourin/Patrik Andersson The East Village apartment where 28-year-old actor Tessa Gourin lives is an artist’s dream: stacks of books line...",
      url: "https://www.thedailybeast.com/tessa-gourin-jack-nicholsons-daughter-on-acting-and-nepo-baby-discourse?source=articles&via=rss",
      urlToImage:
        "https://media.zenfs.com/en/thedailybeast.com/042a05dd94460dc4225c8e86bab82dac",
      publishedAt: "2023-02-15T09:39:57Z",
      content:
        "Courtesy of Tessa Gourin/Patrik Andersson\r\nThe East Village apartment where 28-year-old actor Tessa Gourin lives is an artists dream: stacks of books line the white walls, photos from the set of Harm… [+10946 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Nika Shakhnazarova",
      title:
        "Idris Elba rules himself out of 'James Bond' gig - New York Post ",
      description:
        "The actor’s name has crept up in conversations about who the next Martini-sipping secret agent would be.",
      url: "https://nypost.com/2023/02/15/idris-elba-rules-himself-out-of-james-bond-gig-to-focus-on-luther-role/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/02/newspress-collage-25770578-1676452735186.jpg?quality=75&strip=all&1676435006&w=1024",
      publishedAt: "2023-02-15T09:37:00Z",
      content:
        "Idris Elba has officially ruled himself out of being the next James Bond.\r\nThe actor’s name has crept up in conversations about who the next Martini-sipping secret agent would be.\r\nBut contrary to th… [+2109 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Jennifer Coolidge Finds Man Trespassing At Her Los Angeles Home - TMZ",
      description:
        "Jennifer Coolidge told cops she had an unwelcome visitor takin' a stroll on her property ... and we're told there's now an investigation for the alleged trespassing.",
      url: "https://www.tmz.com/2023/02/15/jennifer-coolidge-man-trespasses-los-angeles-home-police/",
      urlToImage:
        "https://imagez.tmz.com/image/36/16by9/2023/02/14/36006a7e9fbd4e61a5a4b701b31f4eb8_xl.png",
      publishedAt: "2023-02-15T08:40:00Z",
      content:
        "Jennifer Coolidge told cops she had an unwelcome visitor takin' a stroll on her property ... and we're told there's now an investigation for the trespass.\r\nLaw enforcement sources tell TMZ ... JC not… [+883 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Nika Shakhnazarova",
      title:
        "Steven Spielberg: Tom Cruise 'saved Hollywood's ass' with 'Top Gun: Maverick' - Page Six",
      description:
        "Hollywood director Steven Spielberg wasted no time giving “Top Gun: Maverick” star Tom Cruise his well-deserved flowers at the 2023 Academy Awards luncheon.",
      url: "https://pagesix.com/2023/02/15/steven-spielberg-says-tom-cruises-top-gun-sequel-saved-hollywoods-a/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2023/02/newspress-collage-6689213-1676447893676.jpg?quality=75&strip=all&1676430235&w=1200",
      publishedAt: "2023-02-15T08:16:00Z",
      content:
        "From one legend to another.\r\nHollywood director Steven Spielberg wasted no time giving Tom Cruise his well-deserved flowers at the Academy Awards luncheon on Monday.\r\nPulling Cruise in for a hug, Spi… [+2274 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Brock Lesnar F-5 off Chamber pod: WWE Elimination Chamber 2022 - WWE",
      description:
        "Brock Lesnar capturers his 10th World Championship after F-5ing Austin Theory off the top of an Elimination Chamber pod.Stream WWE on Peacock https://pck.tv/...",
      url: "https://www.youtube.com/watch?v=_iBu6nu8O-Q",
      urlToImage: "https://i.ytimg.com/vi/_iBu6nu8O-Q/maxresdefault.jpg",
      publishedAt: "2023-02-15T08:00:14Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Reuters",
      title:
        "Freezer forming part of Banksy's new work removed hours after artist confirms mural - CNN",
      description:
        "The British street artist claimed responsibility for the mural, which shows a housewife with a swollen eye apparently pushing a man into an abandoned chest freezer, just hours before the appliance was removed.",
      url: "https://www.cnn.com/style/article/banksy-valentines-day-mascara/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/230215142139-02-banksy-valentines-day-mascara-super-tease.jpg",
      publishedAt: "2023-02-15T07:32:08Z",
      content:
        "artsPublished 15th February 2023\r\nBritish street artist Banksy confirmed a new mural showing a 1950s housewife with a swollen eye apparently pushing a man into an abandoned chest freezer was his work… [+2065 chars]",
    },
    {
      source: { id: null, name: "Cageside Seats" },
      author: "Marcus Benjamin",
      title:
        "NXT recap & reactions (Feb. 14, 2023): Roxanne Perez’s boss fight - Cageside Seats",
      description:
        "Roxanne Perez and Meiko Satomura tag team, Isla Dawn channels her voice, Trick talks a big game, and a Valentine’s Day all on this week’s NXT.",
      url: "https://www.cagesideseats.com/wwe/2023/2/15/23600349/nxt-recap-reactions-feb-14-2023-roxanne-perez-meiko-satomura-bron-breakker-brooks-kiana-james",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/jtd8aLMvJH09fAA6-LyIXbWwL2o=/0x23:1125x612/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24433892/084_NXT_02142023MP_20925__723daba5188c8f7f851151d9ad66a44b.jpg",
      publishedAt: "2023-02-15T06:00:00Z",
      content:
        "NXT comes at you live this Valentines Day! Im not sure if love is in the air but something definitely is because we got a lot of fighting this week. Love taps?\r\nClaire does what she does better than … [+8773 chars]",
    },
    {
      source: { id: null, name: "nj.com" },
      author: "Holiday Mathis",
      title: "Today’s daily horoscope for Feb. 15, 2023 - NJ.com",
      description:
        "Zodiac signs and horoscopes on 2/15/23 for Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn.",
      url: "https://www.nj.com/advice/2023/02/todays-daily-horoscope-for-feb-15-2023.html",
      urlToImage:
        "https://www.nj.com/resizer/y0GkxcEcKp6NoyUc0LAtx7APmMY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAGJVB5QCZCNFBN2U2NE2O4GTE.png",
      publishedAt: "2023-02-15T05:01:00Z",
      content:
        "Shiny Object Syndrome\r\nShiny Object Syndrome is a danger as the moon challenges a conjunction of Venus and Neptune. The thing getting all of your attention seems to require action, though what it may… [+4074 chars]",
    },
    {
      source: { id: "mashable", name: "Mashable" },
      author: "Mashable Team",
      title:
        "Wordle today: Here's the answer, hints for February 15 - Mashable",
      description:
        "Here are some tips and tricks to help you find the answer to 'Wordle' #606.",
      url: "https://mashable.com/article/wordle-today-answer-february-15",
      urlToImage:
        "https://helios-i.mashable.com/imagery/articles/061brPCRIUa0uxfIboeIm5K/hero-image.fill.size_1200x675.v1676436705.jpg",
      publishedAt: "2023-02-15T04:54:03Z",
      content: null,
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: null,
      title:
        "Tom Holland’s Spider-Man Is Returning To The MCU & Kevin Feige Says He Has “Big Ideas For That” - Yahoo Entertainment",
      description: null,
      url: "https://www.yahoo.com/entertainment/tom-holland-spider-man-returning-045044786.html",
      urlToImage: null,
      publishedAt: "2023-02-15T04:50:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Trump Incriminates Himself AGAIN, Nikki Haley Running for President & Yung Gravy Dates Aunt Chippy - Jimmy Kimmel Live",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXBTmE1OrZJU",
      urlToImage: null,
      publishedAt: "2023-02-15T04:45:00Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "Vulture" },
      author: "Alejandra Gularte",
      title:
        "LOVE AGAIN Trailer Starring Priyanka Chopra & Nick Jonas - Vulture",
      description:
        "Priyanka Chopra Jonas and Sam Heughan star in a new rom-com, “Love Again” filled with new music from Celine Dion. Chopra’s husband, Nick Jonas, makes a steamy cameo in the film, marking their first on-screen kiss.",
      url: "http://www.vulture.com/2023/02/love-again-trailer-release-date.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/bf3/a9b/309960c8812727826e2a4c77d5e3950d25-priyanka-chopra-nick-jonas.1x.rsocial.w1200.png",
      publishedAt: "2023-02-15T04:31:53Z",
      content:
        "Its finally happening: Priyanka Chopra Jonas and Nick Jonas are in a movie together. The new trailer for the romantic comedy Love Again features the real-life couple making out in the back of a taxi.… [+680 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Mr. Stone believes Von Wagner has an identity crisis: WWE NXT, Feb. 14, 2023 - WWE",
      description:
        "Another loss from Von Wagner has Mr. Stone believing that significant changes are necessary for the imposing Superstar. Catch WWE action on Peacock, WWE Netw...",
      url: "https://www.youtube.com/watch?v=IHab3_kQPXE",
      urlToImage: "https://i.ytimg.com/vi/IHab3_kQPXE/maxresdefault.jpg",
      publishedAt: "2023-02-15T04:06:05Z",
      content: null,
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

export default NewsEntertainment;
