import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class NewsTechnology extends Component {
  articles = [
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Riot Forge Games 2023 | The Year Ahead - Nintendo Switch - Nintendo of America",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2DA16bsdscc",
      urlToImage: null,
      publishedAt: "2023-02-15T14:00:01Z",
      content: null,
    },
    {
      source: { id: null, name: "The Ringer" },
      author: "Justin Charity",
      title: "Microsoft’s Billion-Dollar ‘Call of Duty’ Problem - The Ringer",
      description:
        "Microsoft’s $69 billion takeover of Activision Blizzard seemed inevitable. Now government regulators around the world are trying to block the deal over … ‘Call of Duty’?",
      url: "https://www.theringer.com/video-games/2023/2/15/23600254/microsoft-activision-blizzard-deal-update-call-of-duty-ftc",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/5Cfv0_7VXEbNjAu7OL6fXNsvn1g=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24434360/MicrosoftActivisionWar_Activision_Ringer.jpg",
      publishedAt: "2023-02-15T13:59:06Z",
      content:
        "Its hard to overstate the industry-wide shock at the announcement 13 months ago that Microsoft would buy Activision Blizzard. The latter publishes Call of Duty, the worlds bestselling first-person sh… [+8120 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Arjun Kharpal",
      title:
        "Apple patent adds to hype around foldable device from the iPhone maker - CNBC",
      description:
        "Apple is yet to introduce a foldable iPhone or any device, unlike competitors such as Samsung.",
      url: "https://www.cnbc.com/2023/02/15/apple-patent-adds-to-hype-around-foldable-device-from-the-iphone-maker.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107184277-1674718561126-gettyimages-1244103348-S_KOGIKU_20102022_0X7A7866.jpeg?v=1676467815&w=1920&h=1080",
      publishedAt: "2023-02-15T13:30:15Z",
      content:
        "Apple's latest patent is adding to anticipation that the iPhone maker could be on the cusp of launching a foldable device.\r\nThe patent, which was awarded to Apple Tuesday, describes technology that w… [+2613 chars]",
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Anthony Wood",
      title:
        "CD Projekt Red Explains How Witcher 3 NSFW Mod Snuck Into Remaster - IGN",
      description:
        "CD Projekt Red has revealed how NSFW textures made their way into The Witcher 3 next-gen update, and why it plans to remove them.",
      url: "https://www.ign.com/articles/cd-projekt-red-explains-how-witcher-3-nsfw-mod-snuck-into-remaster",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/11/27/w-1669580339533.jpg?width=1280",
      publishedAt: "2023-02-15T13:26:14Z",
      content:
        "CD Projekt Red has revealed to IGN how certain NSFW textures made their way into The Witcher 3: Wild Hunt's next-gen update, and why it's going to remove them.\r\nThe prolific Witcher 3 PC modding comm… [+1914 chars]",
    },
    {
      source: { id: null, name: "Push Square" },
      author: "Liam Croft",
      title:
        "Big Discounts for PS Plus Members in New PS Store Sale - Push Square",
      description: "NFS! Ghost of Tsushima! Ratchet!",
      url: "https://www.pushsquare.com/news/2023/02/big-discounts-for-ps-plus-members-in-new-ps-store-sale",
      urlToImage: "https://images.pushsquare.com/cb63b1e1945ec/1280x720.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        "Ghost of Tsushima is a must have for me, but it has also been available on PS+ from the start, so this in particular is not for me.Alan Wake on the other hand, though... I was considering a physical … [+134 chars]",
    },
    {
      source: { id: null, name: "Nintendo Life" },
      author: "Jim Norman",
      title:
        "Random: Check Out These Photos From 1999's Smash Bros-Themed Wrestling Event 'Slamfest' - Nintendo Life",
      description: "Pikachu takes to the ring",
      url: "https://www.nintendolife.com/news/2023/02/random-check-out-these-photos-from-1999s-smash-bros-themed-wrestling-event-slamfest",
      urlToImage: "https://images.nintendolife.com/5e44b44c94789/1280x720.jpg",
      publishedAt: "2023-02-15T11:00:00Z",
      content:
        'Image: Nintendo\r\nBack in 1999 Nintendo revealed a Super Smash Bros. marketing campaign which makes those "everyone is here" Ultimate trailers pale in comparison. The company hosted an event called Su… [+1448 chars]',
    },
    {
      source: { id: null, name: "Video Games Chronicle" },
      author: "Chris Scullion",
      title:
        "Some of February 2023's PlayStation Plus Extra and Premium games have leaked | VGC - Video Games Chronicle",
      description:
        "Horizon Forbidden West and Scarlet Nexus are among the titles reportedly coming next week…",
      url: "https://www.videogameschronicle.com/news/some-of-february-2023s-playstation-plus-extra-and-premium-games-have-leaked/",
      urlToImage:
        "https://www.videogameschronicle.com/files/2022/08/horizon-forbidden-west-pride.jpg",
      publishedAt: "2023-02-15T09:35:33Z",
      content:
        "Some of February 2023s PlayStation Plus Premium and Extra games have been revealed ahead of an official announcement.\r\nReliable leaker billbil-kun, who has been accurately revealing the PlayStation P… [+1320 chars]",
    },
    {
      source: { id: null, name: "Samsung.com" },
      author: null,
      title:
        "Samsung One UI 5.1 Comes to Current Galaxy Devices Alongside Newly Announced Galaxy S23 Series - Samsung",
      description:
        "A new software update introduces new features for Galaxy users seeking more creativity, personalization and convenience from their mobile experience",
      url: "https://news.samsung.com/global/samsung-one-ui-5-1-comes-to-current-galaxy-devices-alongside-newly-announced-galaxy-s23-series",
      urlToImage:
        "https://img.global.news.samsung.com/global/wp-content/uploads/2023/02/One-UI-5.1_PR_Thumb728f.jpg",
      publishedAt: "2023-02-15T08:01:52Z",
      content:
        "Samsung Electronics today announced One UI 5.1, which was newly unveiled with the Galaxy S23 series at Galaxy Unpacked 2023, will begin to roll out worldwide for other Galaxy devices starting with th… [+5584 chars]",
    },
    {
      source: { id: null, name: "Notebookcheck.net" },
      author: "Fawad Murtaza",
      title:
        "Deeply-discounted RTX 3070, RTX 3080, RTX 3080 Ti, and RTX 3090 Ti Founders Edition GPUs hit Best Buy's clearance sale - Notebookcheck.net",
      description:
        "Nvidia is expected to launch the RTX 40 mid-range GPUs in the coming months. However, for people who want a card right now, Best Buy has some Founders Edition RTX 30 cards at significant discounts. For instance, the RTX 3070 Founders Edition is now going for …",
      url: "https://www.notebookcheck.net/Deeply-discounted-RTX-3070-RTX-3080-RTX-3080-Ti-and-RTX-3090-Ti-Founders-Edition-GPUs-hit-Best-Buy-s-clearance-sale.694410.0.html",
      urlToImage:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/RTX_3080_Ti_FE_1.jpg",
      publishedAt: "2023-02-15T07:56:28Z",
      content:
        "While the next-gen GeForce RTX 40 and AMD Radeon RX 7000 are available for purchase, they are not cheap. For instance, the RTX 4090 Founders Edition has an MSRP of US$1,599 whereas the RX 7900 XTX is… [+958 chars]",
    },
    {
      source: { id: null, name: "Nintendo Life" },
      author: "Liam Doolan",
      title:
        "Pre-Purchase Zelda: Tears Of The Kingdom At GameStop And Get A Free Wooden Plaque - Nintendo Life",
      description: 'Another GameStop "exclusive"',
      url: "https://www.nintendolife.com/news/2023/02/pre-purchase-zelda-tears-of-the-kingdom-at-gamestop-and-get-a-free-wooden-plaque",
      urlToImage: "https://images.nintendolife.com/c2a98cc7db4f7/1280x720.jpg",
      publishedAt: "2023-02-15T05:35:00Z",
      content:
        "Image: Nintendo\r\nIn the lead up to the release of The Legend of Zelda: Tears of the Kingdom, US video game chain GameStop has announced a new pre-order deal.\r\nIf you pre-purchase the game from the st… [+859 chars]",
    },
    {
      source: { id: null, name: "MacRumors" },
      author: "Joe Rossignol",
      title: "15-Inch MacBook Air Will Reportedly Have M2 Chip - MacRumors",
      description:
        "Apple's rumored 15-inch MacBook Air will be equipped with the M2 chip, according to Taiwanese supply chain publication DigiTimes. The report...",
      url: "https://www.macrumors.com/2023/02/15/15-inch-macbook-air-m2-chip-rumor/",
      urlToImage:
        "https://images.macrumors.com/t/9Jk4bQyyVbFsigZE7SgmTZsQOCE=/2500x/article-new/2022/06/MacBook-Air-Multiple-Sizes-Feature.jpg",
      publishedAt: "2023-02-15T05:04:19Z",
      content:
        "Apple's rumored 15-inch MacBook Air will be equipped with the M2 chip, according to Taiwanese supply chain publication DigiTimes. The report claims the laptop will be released in the second quarter o… [+1627 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: null,
      title:
        "End of an era: Microsoft officially retires Internet Explorer - The Hill",
      description: null,
      url: "https://thehill.com/policy/technology/3858253-end-of-an-era-microsoft-officially-retires-internet-explorer/",
      urlToImage: null,
      publishedAt: "2023-02-15T04:30:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Hogwarts Legacy: Which House Should You Choose? - IGN",
      description:
        "When you first start Hogwarts Legacy, the sorting hat will sort you into one of four different houses —Gryffindor, Slytherin, Ravenclaw, and Hufflepuff. Bein...",
      url: "https://www.youtube.com/watch?v=I4P0gmD7Sb0",
      urlToImage: "https://i.ytimg.com/vi/I4P0gmD7Sb0/maxresdefault.jpg",
      publishedAt: "2023-02-15T04:00:04Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Splatoon 3 – C-Side – Clickbait [In the Studio] – Nintendo Switch - Nintendo of America",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw2wfDqG1E-o",
      urlToImage: null,
      publishedAt: "2023-02-15T03:00:19Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Destiny 2: Season of the Seraph Finale Mission Gameplay - IGN",
      description:
        "​With the help of The Witness, Eramis has one last trick up her sleeve to enact her revenge since The Traveler destroyed her home world. Work with Rasputin a...",
      url: "https://www.youtube.com/watch?v=V7LEQAuHDTY",
      urlToImage: "https://i.ytimg.com/vi/V7LEQAuHDTY/hqdefault.jpg",
      publishedAt: "2023-02-15T02:00:10Z",
      content: null,
    },
    {
      source: { id: null, name: "Gematsu" },
      author: "Sal Romano",
      title: "PS VR2 headset and Sense controller teardown videos - Gematsu",
      description:
        "Sony Interactive Entertainment has released PlayStation VR2 headset and Sense controller teardown videos, in which the Mechanical Design team's Takamasa Araki and Peripheral Design team'",
      url: "https://www.gematsu.com/2023/02/ps-vr2-headset-and-sense-controller-teardown-videos",
      urlToImage:
        "https://www.gematsu.com/wp-content/uploads/2023/02/PS-VR2-Headset-Teardown_02-14-23.jpg",
      publishedAt: "2023-02-15T01:05:33Z",
      content:
        "Sony Interactive Entertainment has releasedPlayStation VR2 headset and Sense controller teardown videos, in which the Mechanical Design team’s Takamasa Araki and Peripheral Design team’s Takeshi Igar… [+1088 chars]",
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
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Omegle: Suing the website that matched me with my abuser - BBC",
      description:
        "'Alice' was groomed on a video chat website - her lawsuit against it could have far-reaching consequences.",
      url: "https://www.bbc.com/news/technology-64618791",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F840/production/_128625536_omegle_matched_with_my_abuser-promo-976-nc.png",
      publishedAt: "2023-02-15T00:35:25Z",
      content:
        "Warning: this story contains disturbing adult themes\r\nAs a young girl, Alice (not her real name) logged on to the popular live video chat website, Omegle, and was randomly paired with a paedophile, w… [+7745 chars]",
    },
    {
      source: { id: null, name: "ComicBook.com" },
      author: null,
      title: "PS5 Report Details New PlayStation Headset - ComicBook.com",
      description: null,
      url: "https://comicbook.com/gaming/news/ps5-playstation-sony-headset-report/",
      urlToImage: null,
      publishedAt: "2023-02-15T00:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Theatrhythm Final Bar Line Review - IGN",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqyTeQJECuaQ",
      urlToImage: null,
      publishedAt: "2023-02-15T00:10:13Z",
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

export default NewsTechnology;
