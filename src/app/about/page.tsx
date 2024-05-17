import { Form } from "../../components/form/Form";
import { AboutContainer } from "../../components/about-container/AboutContainer";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <div className="line">
          <span className="const">const </span>
          <span className="variable">valeriiKutin</span>
          <span className="equal"> = </span>
          <span className="left-braket">&#123;</span>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;fullName<span className="twodots">:</span>
          </div>
          <div className="key-value">
            "Valerii Kutin"<span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;education<span className="twodots">:</span>
          </div>
          <span className="left-braket redbraket">&#123;</span>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;institution
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            "Kryvyi Rih National University"<span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            "Software Engenerieaer"<span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yearStarted
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">2019</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yearExpectedGraduation
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">2024</span>
            <span className="comma">,</span>
          </div>
        </div>
        <span className="left-braket redbraket">&nbsp;&nbsp;&nbsp;&#125;</span>
        <span className="comma">,</span>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;skills<span className="twodots">:</span>
          </div>
          <span className="left-braket redbraket">&#123;</span>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;programmingLanguages
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span>{" "}
            "Javascript/ES5/ES6"
            <span className="comma">,</span>
            &nbsp;"TypeScript"&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;front-End
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "CSS"
            <span className="comma">,</span>
            &nbsp;"HTML5"&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preprocessors
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "SCSS"&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;library
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "React"&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tools
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "Zustand"
            <span className="comma">,</span>
            &nbsp;"Vite"
            <span className="comma">,</span>
            &nbsp;"Firebase"
            <span className="comma">,</span>
            &nbsp;"Git"
            <span className="comma">,</span>
            &nbsp;"Redux Toolkit"&nbsp;
            <span className="comma">,</span>
            &nbsp;"TanStack Query v5"&nbsp;
            <span className="comma">,</span>
            &nbsp;"Axios"&nbsp;
            <span className="comma">,</span>
            &nbsp;"Gulp"&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML layout
            <span className="twodots">:</span>
          </div>
          <span className="left-braket redbraket">&#123;</span>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ukrainian
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            "C2"
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            "B1"
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;russian
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            "C2"
            <span className="comma">,</span>
          </div>
        </div>
        {/* <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;languages
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "Ukrainian"
            <span className="comma">,</span>
            &nbsp;"English"s&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div> */}
        &nbsp;&nbsp;
        <span className="left-braket redbraket">&nbsp;&nbsp;&nbsp;&#125;</span>
        <span className="comma">,</span>
        <br />
        <span className="left-braket redbraket">&nbsp;&nbsp;&nbsp;&#125;</span>
        <span className="comma">,</span>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;HTML layout<span className="twodots">:</span>
          </div>
          <span className="left-braket redbraket">&#123;</span>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cross-browser-compatibility
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">true</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Responsiveness
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">true</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semantic-HTML
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">true</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessibility
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">true</span>
            <span className="comma">,</span>
          </div>
        </div>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optimized-Loading-Speed
            <span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="number">true</span>
            <span className="comma">,</span>
          </div>
        </div>
        <span className="left-braket redbraket">&nbsp;&nbsp;&nbsp;&#125;</span>
        <span className="comma">,</span>
        <div className="box-line-1">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;hobbies<span className="twodots">:</span>
          </div>
          <div className="key-value">
            <span className="left-square-braket">&#91;</span> "Photo"
            <span className="comma">,</span>
            &nbsp;"Мандрівки
            <span className="comma">,</span>
            &nbsp;Гітара
            <span className="comma">,</span>
            &nbsp;Велосипед
            <span className="comma">,</span>
            &nbsp;Біг&nbsp;
            <span className="right-square-braket">&#93;</span>
            <span className="comma">,</span>
          </div>
        </div>
        &nbsp;
        <div className="box-line-1 mod">
          <div className="key-object">
            &nbsp;&nbsp;&nbsp;aboutMe<span className="twodots">:</span>
          </div>
          <div className="key-value mod-key">
            "Привіт! Мене звати Максиміліан, я студент інформаційних технологій
            з великим захопленням розробкою програмного забезпечення. Я завжди
            відкритий для вивчення нових технологій та вирішення цікавих
            завдань. У вільний час я люблю фотографувати красу навколишнього
            світу, грати на гітарі та відправлятися у захоплюючі подорожі. Моя
            мета - поєднати свої уподобання з професійним розвитком, створюючи
            інноваційні програмні продукти, що змінюють світ."
            <span className="comma">,</span>
          </div>
        </div>
      </AboutContainer>
      <AboutContainer>
        <Form />
      </AboutContainer>
    </div>
    /* &#125; */
    /*  &nbsp; */
  );
};

export default About;
