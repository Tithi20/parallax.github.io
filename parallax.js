var products = [
  {
    id: 1,
    image:
      "https://cdn.mos.cms.futurecdn.net/msQYTWV7cdatF5r9GbRvjM-970-80.jpg.webp",
    heading: "Sony WH-1000XM4",
    desc: " If you're really set on owing the absolute best headphones thatmoney can buy, you can go for these headphones. These have excellent sound quality and noise cancellation and has plenty of features viaSony Headphones App.",
    link: "https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3",
    footer: "Sony WH-1000XM4",
  },
  {
    id: 2,
    image:
      "https://cdn.mos.cms.futurecdn.net/HBCdKWgwPg6xyYTLCfxcCR-970-80.jpg.webp",
    heading: "Bose 700",
    desc: "The Bose 700 are the runner up for the best headphobrs and havr a cool new design and cool features that come with its high price tag.They're equipped wuth a whipping 8 microphones, 6 of which are employed to deliver Bose's champion noise canccelation when listening to music or talking on the phone.",
    link: "https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html#v=noise_cancelling_headphones_700_black",
    footer: "Bose 700",
  },
  {
    id: 3,
    image:
      "https://cdn.mos.cms.futurecdn.net/ThLofTvT933by5MA9Mz4BE-970-80.jpg.webp",
    heading: "Apple AirPods Max",
    desc: "It's a shame the AirPods Max are so much more expensive than their noise cancelling rivals, but once you try them it's hard to take them off. The plush design and comfortable fit present an immediate feeling of luxury, and the only grows once you start playing music.",
    link: "https://www.apple.com/in/airpods-max/",
    footer: "Apple AirPods Max",
  },
  {
    id: 4,
    image:
      "https://cdn.mos.cms.futurecdn.net/D6Kuy7EMvAfHqciipYCunX-970-80.jpg.webp",
    heading: "Jabra Elite Active 75t",
    desc: "Jabra found a way to improve our favorite wireless earbuds, packing a hell of a lot of performance into a tinier waterproof design. The Elite Active 75t boasts better battery life and sound than the AirPods Pro, plus its charging case holds more portable power and feels sturdier.",
    link: "https://www.jabra.in/bluetooth-headsets/jabra-elite-active-75t",
    footer: "Jabra Elite Active 75t",
  },
  {
    id: 5,
    image:
      "https://cdn.mos.cms.futurecdn.net/GZNLaRDbTHADzaqhdjGwDK-970-80.jpeg.webp",
    heading: "Apple AirPods Pro",
    desc: "A year on store shelves and Apple’s noise-cancelling earbuds are still arguably the top model in their class. The level of engineering demonstrated on the AirPods Pro cannot be overstated. Underneath the smaller, redesigned casing are six sensors.",
    link: "https://www.apple.com/in/airpods-pro/",
    footer: "Apple AirPods Pro",
  },
  {
    id: 6,
    image:
      "https://cdn.mos.cms.futurecdn.net/p3JJcZ3qd2VEn59eGez5tg-970-80.jpg.webp",
    heading: "Master & Dynamic MW08",
    desc: " Master & Dynamic's MW08 joins the AirPods Pro among the best headphones with a true wireless earbud form factor. The MW08 is more expensive than Apple's pair of buds.",
    link: " https://www.masterdynamic.eu/products/mw08-active-noise-cancelling-true-wireless-earphones",
    footer: "Master & Dynamic MW08",
  },
  {
    id: 7,
    image:
      "https://cdn.mos.cms.futurecdn.net/i7xipepPSZQaTCmoQFbbwc-970-80.jpg.webp",
    heading: "Bose QuietComfort 45",
    desc: "The leaks left much to be desired, but the final product proves that Bose has another ANC monster on their hands. Noise cancellation on the QuietComfort 45 is just as good as the 700.",
    link: "https://www.boseindia.com/en_in/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html",
    footer: "Bose QuietComfort 45",
  },
  {
    id: 8,
    image:
      "https://cdn.mos.cms.futurecdn.net/FTAidvqjaNdhayj2HABGHc-970-80.jpg.webp",
    heading: "Cleer Enduro ANC",
    desc: "What's remarkable about this particular pair is how it still manages to be pretty good at both, while throwing in plenty of extra features and qualities, for what is relatively a very low price.",
    link: "https://www.amazon.in/Cleer-Audio-Bluetooth-Wireless-Headphones/dp/B07WJY5SKG",
    footer: "Cleer Enduro ANC",
  },
];
var img_style = document.querySelector("#img_style");
var desc_heading = document.querySelector(".desc_heading");
var desc = document.querySelector(".desc");
var desc_link = document.querySelector(".dec_link");
var grid = document.querySelector(".grid");
var lines = "";

function line(image, desc_heading, desc, desc_link, desc_footer) {
  return `<div class="col">
          <img
            id="img_style"
            src="${image}"
            alt=""
          />
          <h3 class="desc_heading">${desc_heading}</h3>
          <div class="desc">
${desc}
          </div>
          <h4 class="desc_footer">
            View
            <a
              href="${desc_link}"
              class="desc_link"
              >${desc_footer}</a
            >
            for more details.
          </h4>
        </div>`;
}

for (var i = 0; i < products.length; i++) {
  //   desc_heading.innerHTML = products[i].heading;
  var head = line(
    products[i].image,
    products[i].heading,
    products[i].desc,
    products[i].link,
    products[i].footer
  );
  lines += head;
  console.log(products[i].heading);
  console.log(products[i]);
}

grid.innerHTML = lines;
/*
<div class="col">
          <img
            id="img_style"
            src="https://cdn.mos.cms.futurecdn.net/msQYTWV7cdatF5r9GbRvjM-970-80.jpg.webp"
            alt=""
          />
          <h3 class="desc_heading"></h3>
          <div class="desc">

          </div>
          <h4 class="desc_footer">
            View
            <a
              href="https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3"
              class="desc_link"
              ></a
            >
            for more details.
          </h4>
        </div>
*/
