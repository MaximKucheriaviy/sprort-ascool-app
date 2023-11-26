import { Layout } from "@/components/Layout/Layout";
import { StyledMain } from "@/components/styledPages/StyledMain";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import { navigaion } from "@/service/navigationMap";
import Image from "next/image";

export default function Main() {
  return (
    <Layout>
      <StyledMain>
        <div className="container homeContainer">
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Carousel>
          <div className="asside">
            <div className="topButtonCover">
              <Link className="assideLink" href="/">
                Інформація для вступу
              </Link>
            </div>
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
            <div className="homeGalery">
              <Image
                src="/homeImages/i1.jpg"
                alt="students"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </StyledMain>
    </Layout>
  );
}
