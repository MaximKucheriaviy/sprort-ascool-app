import { Layout } from "@/components/Layout/Layout";
import { StyledMain } from "@/components/styledPages/StyledMain";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import { navigaion } from "@/service/navigationMap";
import Image from "next/image";
import { Page } from "@/components/Page/Page";

export default function Main() {
  return (
    <Page title="Головна">
      <StyledMain>
        <div className="homeContainer">
          <div>
            <div className="buttonDiv">
              <Link className="assideLink" href="/">
                Інформація для вступу
              </Link>
              <Link className="assideLink" href="/">
                Новини
              </Link>
            </div>
            <div className="backtextCaveat">
              <p className="textCaveat">
                Дитячо-юнацька спортивна школа № 1 є закладом спеціалізованої
                позашкільної освіти спортивного профілю - закладом фізичної
                культури і спорту, який забезпечує розвиток здібностей
                вихованців в обраному виді спорту, визнаному в Україні, створює
                необхідні умови для гармонійного виховання, фізичного розвитку,
                повноцінного оздоровлення, змістовного відпочинку і дозвілля
                дітей та молоді, самореалізації, набуття навичок здорового
                способу життя, підготовки спортсменів для резервного спорту.{" "}
              </p>
            </div>
            <Carousel height={500} autoPlay duration={500} interval={3000}>
              <div>
                <div className="ImageDiv">
                  <Image src="/mainCarousel/1.jpg" width={800} height={500} />
                </div>
              </div>
              <div>
                <div className="ImageDiv">
                  <Image src="/mainCarousel/2.jpg" width={800} height={500} />
                </div>
              </div>
              <div>
                <div className="ImageDiv">
                  <Image src="/mainCarousel/3.jpg" width={800} height={500} />
                </div>
              </div>
              <div>
                <div className="ImageDiv">
                  <Image src="/mainCarousel/4.jpg" width={800} height={500} />
                </div>
              </div>
              <div>
                <div className="ImageDiv">
                  <Image src="/mainCarousel/5.jpg" width={800} height={500} />
                </div>
              </div>
            </Carousel>
          </div>
          <div className="asside">
            <h2>Спортивні відділення</h2>
            <ul className="linekList">
              {navigaion.sport[0].navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="assideLink"
                      href={`/${navigaion.sport[0].link + "/" + item.link}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </StyledMain>
    </Page>
  );
}
