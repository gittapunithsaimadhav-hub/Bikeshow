import "./index.css";
import ProductCard from "./ProductCard";

const bikes = [
  {
    name: "BMW M1000 RR",
    image: "https://media.zigcdn.com/media/model/2023/Jun/front-left-view-1763345212_930x620.jpg",
    price: "₹ 59,26,079",
    desc: "A top-tier 999cc track-focused superbike.",
    link: "https://www.bikewale.com/bmw-bikes/m-1000-rr/"
  },
  {
    name: "Ducati Panigale V4",
    image: "https://ultimatemotorcycling.com/wp-content/uploads/2018/11/2019-ducati-panigale-v4-r-first-look-preview-7-768x512.jpg",
    price: "₹ 40,01,045",
    desc: "A high-performance V4 engine superbike.",
    link: "https://www.bikewale.com/ducati-bikes/panigale-v4/"
  },
  {
    name: "Kawasaki Ninja H2R",
    image: "https://bikesin.com/images/kawasaki/h2r.jpg",
    price: "₹ 92,37,865",
    desc: "998cc supercharged engine producing over 300 horsepower.",
    link: "https://www.bikewale.com/kawasaki-bikes/ninja-h2r/"
  },
  {
    name: "Honda CBR1000RR-R Fireblade",
    image: "https://www.eicma.it/wp-content/uploads/2023/08/81d6716f1d8144ce9543a0435746cc1d_22ym_cbr1000rr-r_sp_grandprixred_r380_location_5606-5.jpg",
    price: "₹ 40,97,930",
    desc: "A flagship, track-focused 999cc inline-four superbike.",
    link: "https://www.bikewale.com/honda-bikes/cbr1000rr-r-fireblade/"
  },
  {
    name: "Ducati SuperSport",
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/4K6UfbNTM0JC14I1lRkDqW/b9190b47890450bfc63cc6856901f294/Supersport-950-overview-hero-1600x1000.jpg?fm=webp&q=90",
    price: "₹ 21,06,173",
    desc: "The Ducati SuperSport is powered by 937cc BS6 engine.",
    link: "https://www.bikewale.com/ducati-bikes/supersport/"
  },
  {
    name: "Kawasaki Z H2",
    image: "https://www.datocms-assets.com/119921/1714071473-kawasaki-z-h2_032.jpg?auto=format&w=740",
    price: "₹ 31,32,616",
    desc: "A flagship, track-focused 999cc inline-four superbike.",
    link: "https://www.bikewale.com/kawasaki-bikes/z-h2/"
  },
   {
    name: "Suzuki Hayabusa",
    image: "https://www.exhaustnotes.com.au/wp-content/uploads/2024/02/7567E836-12B9-4667-855D-213726308A8C.jpeg",
    price: "₹ 21,97,116",
    desc: "The Suzuki Hayabusa is powered by 1340cc BS6 engine.",
    link: "https://www.bikewale.com/suzuki-bikes/hayabusa/"
  },
  {
    name: "Kawasaki Z900",
    image: "https://ultimatemotorcycling.com/wp-content/uploads/2025/05/2025-kawasaki-z900-se-review-18.webp",
    price: "₹ 9,99,000",
    desc: "948cc BS6 engine which develops 123.6 bhp.",
    link: "https://www.bikewale.com/kawasaki-bikes/z900/"
  },
  
  {
    name: "Aprilia RSV4 XTrenta",
    image: "https://www.webbikeworld.com/wp-content/uploads/2023/10/DSC-7910-2.jpg",
    price: "₹ 40,00,000",
    desc: "1099cc V4 engine delivering 230 hp.",
    link: "https://www.bikewale.com/news/aprilia-unveils-rsv4-xtrenta-race-bike-costs-close-to-rs-40-lakh/"
  },
  {
    name: "BMW M 1000 XR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRHYH1pEATzGaFY02PQ9HcU1xa5wb3ERVQQ&s",
    price: "₹ 48,63,000",
    desc: "999cc BS6 engine producing 201 bhp.",
    link: "https://www.bikewale.com/bmw-bikes/m-1000-xr/"
  },
  {
    name: "Ducati Streetfighter V4",
    image: "https://www.cyclenews.com/wp-content/uploads/2023/04/2023-Ducati-Streetfighter-V4-S-right-side.jpg",
    price: "₹ 28,68,600",
    desc: "1103cc BS6 engine producing 205 bhp.",
    link: "https://www.bikewale.com/ducati-bikes/streetfighter-v4/"
  },
  {
    name: "Kawasaki Ninja H2 SX SE",
    image: "https://www.datocms-assets.com/119921/1714073084-2022-kawasaki-ninja-h2-sx-and-se-news-details-spec_111.jpg?auto=format&w=800",
    price: "₹ 36,27,783",
    desc: "998cc BS6 engine producing 197.2 bhp.",
    link: "https://www.bikewale.com/kawasaki-bikes/ninja-h2-sx-se/"
  },
  {
    name: "Aprilia RSV4 1100 Factory",
    image: "https://wide.piaggiogroup.com/articles/products/aprilia-rsv4-factory-e-tuono-v4-factory-se-09-sbk/foto2.jpg",
    price: "₹ 33,40,763",
    desc: "1099cc BS6 engine producing 213.89 bhp.",
    link: "https://www.bikewale.com/aprilia-bikes/rsv4-1100-factory/"
  },
  {
    name: "Ducati Streetfighter V2",
    image: "https://ultimatemotorcycling.com/wp-content/uploads/2021/11/2022-ducati-streetfighter-v2-first-look-naked-upright-sportbike-high-performance-motorcycle-3.jpg",
    price: "₹ 17,50,200",
    desc: "890cc BS6 engine producing 118 bhp.",
    link: "https://www.bikewale.com/ducati-bikes/streetfighter-v2/"
  },
  {
    name: "Kawasaki Ninja ZX-10R",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/octane/EIQWYZGAVRC2XNIM3QLYKCF7PM.jpg",
    price: "₹ 20,79,000",
    desc: "998cc BS6 engine producing 193 bhp.",
    link: "https://www.bikewale.com/kawasaki-bikes/ninja-zx-10r/"
  }


];

function App() {
  const hour = new Date().getHours();

  let message = "";

  if (hour < 12) {
    message = "☀️ Good Morning Rider!";
  } else if (hour < 18) {
    message = "🔥 Good Afternoon Speed Lover!";
  } else {
    message = "🌙 Good Evening Bike Enthusiast!";
  }

  return (
    <>
      <header>
        <h1>Elite Motor Work's</h1>
      </header>

      <section className="hero">
        <div className="hero-box">
          <h2>Drive Your Dream Super Bike Today</h2>

          <p>SPEED • PERFORMANCE • COMFORT</p>

          <p>{message}</p>

          <a href="#bikes">
            <button>EXPLORE MORE</button>
          </a>
        </div>
      </section>

      <section id="bikes" className="bike-section">
        <h2>Our Featured Bikes</h2>

        <div className="bike-grid">
          {bikes.map((bike, index) => (
            <ProductCard
              key={index}
              bike={bike}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;