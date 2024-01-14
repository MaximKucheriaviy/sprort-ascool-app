import { Page } from "@/components/Page/Page";
import { navigaion } from "@/service/navigationMap";
import { StyledCoachContacts } from "@/components/styledPages/StyledCoachContacts";
import Link from "next/link";
import { Table, TableBody, TableRow, TableCell, Grid } from "@mui/material";

export default function CoachContacts() {
  return (
    <Page title={navigaion.parrentsInfo[1].title}>
      <StyledCoachContacts>
        <div className="contactTable">
          <h3>Баскетбол</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>Федоренко Анатолій Миколайович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:050-447-17-34">050-447-17-34</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Волейбол ( дівчата)</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>Гаюк-Омельчук Олександра Олександрівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:096-876-08-63">096-876-08-63</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Гімнастика спортивна (дівчата)</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
            rowSpacing={2}
          >
            <Grid xs={9} item>
              <p>Агафонцева Наталія Анатоліївна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:067-717-44-33">067-717-44-33</a>
            </Grid>
            <Grid xs={9} item>
              <p>Сімогаєва Ольга Володимирівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:096-333-55-03">096-333-55-03</a>
            </Grid>
            <Grid xs={9} item>
              <p>Філь Яна Сергіївна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:067-152-40-24">067-152-40-24</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Гімнастика спортивна (юнаки)</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
            rowSpacing={2}
          >
            <Grid xs={9} item>
              <p>Дуднік Людмила Василівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:096-974-52-80">096-974-52-80</a>
            </Grid>
            <Grid xs={9} item>
              <p>Дячук Майя Іванівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-647-76-52">097-647-76-52</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Панкратіон</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>{`Дем'янцев Василь Іванович`}</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:067-963-64-42">067-963-64-42</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Плавання</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
            rowSpacing={2}
          >
            <Grid xs={9} item>
              <p>Вініченко Максим Миколайович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-710-60-04">097-710-60-04</a>
            </Grid>
            <Grid xs={9} item>
              <p>Пустовіт Катерина Ігорівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:098-004-21-66">098-004-21-66</a>
            </Grid>
            <Grid xs={9} item>
              <p>Лавренюк Олена Іванівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-376-27-47">097-376-27-47</a>
            </Grid>
            <Grid xs={9} item>
              <p>Фандєєва Катерина Григорівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:067-892-18-39">067-892-18-39</a>
            </Grid>
            <Grid xs={9} item>
              <p>Добровольська Юлія Сергіївна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-911-62-63">097-911-62-63</a>
            </Grid>
            <Grid xs={9} item>
              <p>Тищінська Олена Олександрівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:098-011-65-78">098-011-65-78</a>
            </Grid>
            <Grid xs={9} item>
              <p>Карпова Тетяна Григорівна</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-916-23-86">097-916-23-86</a>
            </Grid>
            <Grid xs={9} item>
              <p>Оверченко Юрій Володимирович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:097-916-23-86">068-503-40-21</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Спортивне орієнтування</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>Зіглін Олег Євгенович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:098-422-75-13">098-422-75-13</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Стрільба кульова</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>Литвин Василь Сергійович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:067-407-05-19">067-407-05-19</a>
            </Grid>
          </Grid>
        </div>
        <div className="contactTable">
          <h3>Фехтування</h3>
          <Grid
            container
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            borderBottom={"1px solid gray"}
          >
            <Grid xs={9} item>
              <p>Іваненко Володимир Миколайович</p>
            </Grid>
            <Grid xs={3} item>
              <a href="tel:050-200-83-03">050-200-83-03</a>
            </Grid>
          </Grid>
        </div>
      </StyledCoachContacts>
    </Page>
  );
}
