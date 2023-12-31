import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

function ArticlesAbout3() {
 
  return (
    <>
    <section className='articles-about-section'>
        <div className="articles-about__container">
          <div className="articles-img-block">
            <img src="../img/about_cup_dishes_full.jpg" alt="Puer"/>
            <div className="articles-title">
              <h1>Про Посуд</h1>
            </div>
          </div>
            <div className="articles-about-block">
                <div className="about-left">
                    <h1>Історія посуду для чаю</h1>
                    <p></p>
                    <h2>Існує декілька видів посуду для заварювання Пуеру</h2>
                    <p>Шу Пуер пов'язан з Шен Пуером. Шен Пуер відомий своїм натуральним процесом старіння, який відбувається протягом декількох десятиліть. Однак, в пошуках способу прискорити процес старіння і зробити пуер більш доступним, було створено Шу Пуер.</p>
                    <h1>Гайвани</h1>
                    <p>Традиційні китайські чайні посудини, які мають специфічну форму з кришкою і ручкою. Їх компактність і зручність використання роблять їх популярним вибором серед шанувальників чаю.</p>
                    <p>Гайвани дозволяють контролювати час заварювання, дозволяючи вам витягнути чай відповідно до вашого смаку. Заварюючи чай <b>Шу</b>, рекомендується використовувати глиняну гайвану з товстими стінками, оскільки вона допомагає зберегти тепло і підкреслити багатий смак і аромат.</p>
                    <p>Для чаю Шен, гайвану з тонкими стінками рекомендується, щоб допомогти зберегти свіжість і яскравість смаку.</p>
                    <h3>Переваги:</h3>
                    <ul className="info-block-1">
                        <li>Контроль часу заварювання: <p>Гайвани дозволяють зручно контролювати час заварювання. Ви можете витягнути листки чаю, коли досягнули бажаного стану настою, що дозволяє досягти оптимального смаку і аромату.</p></li>
                        <li>Збереження тепла: <p>Гайвани з глини мають властивість зберігати тепло, що сприяє глибшій екстракції смакових речовин з чайних листків і створює багатий смак і аромат.</p></li>
                        <li>Підкреслення смаку і аромату: <p>Гайвани допомагають підкреслити унікальні смакові якості чаю, дозволяючи їм виразитися повністю і детально.</p></li>
                    </ul>


                    <h1>Чайники Yixing</h1>
                    <p>Виготовляють її з особливої глини, відомої як "Yixing purple clay" або "Zisha clay", з провінції Цзянсу в Китаї. Ця глина має високу пористість, що дозволяє їй вбирати аромати і олії з чаю під час заварювання.</p>
                    <p>Чайники Yixing стають все кращими з часом, глина акумулює аромати і віддаває їх під час настоювання чаю.</p>
                    <p>Зазвичай використовуються для заварювання чаю Шен, оскільки підкреслюють його свіжість і нюанси смаку.</p>
                    <h3>Переваги:</h3>
                    <ul className="info-block-1">
                        <li>Акумуляція ароматів і олій:  <p>Глина Yixing має пористу структуру, що дозволяє їй акумулювати аромати і олії з чаю під час заварювання. Це приємно покращує смак і аромат настою.</p></li>
                        <li>Збереження тепла: <p>Глина Yixing має властивість зберігати тепло, що сприяє рівномірній і ефективній екстракції смакових речовин з чайних листків.</p></li>
                        <li>Розвиток сезонності: <p>Використання чайників Yixing протягом тривалого часу дозволяє глині поглинати аромати різних сортів чаю, створюючи унікальну "палітру" смаків і ароматів в чайнику.</p></li>
                    </ul>

                    <h1>Керамічні чайники</h1>
                    <p>Широко використовуються для заварювання чаю різних видів. Вони мають властивість рівномірно розподіляти тепло, що сприяє розкриттю смакових якостей чаю.</p>
                    <p>Кераміка є високоякісним матеріалом для заварювання чаю, оскільки вона не впливає на смак і аромат чаю, дозволяючи вам насолоджуватися чистими смаковими відтінками.</p>
                    <p>Для чаю Шу рекомендується обрати керамічний чайник з неглазурованої кераміки, оскільки він допомагає зберегти темний колір і багатий смак чаю. <br></br>Для чаю Шен можна використовувати керамічний чайник з глазур'ю, що допомагає зберегти свіжість і яскравість смаку.</p>
                    <h3>Переваги:</h3>
                    <ul className="info-block-1">
                        <li>Рівномірне розподілення тепла: <p>Керамічні чайники розподіляють тепло рівномірно, дозволяючи ефективно екстрагувати смакові речовини з чайних листків і забезпечуючи рівномірний смак настою.</p></li>
                        <li>Нейтральність смаку: <p>Кераміка не має впливу на смак і аромат чаю, що дозволяє повністю насолоджуватися натуральними характеристиками чаю без додаткових впливів.</p></li>
                        <li>Довговічність: <p>Керамічні чайники є міцними і довговічними. Вони можуть служити протягом багатьох років, забезпечуючи постійне задоволення від чаю.</p></li>
                    </ul>


                    <h1>Висновки</h1>
                    <p>Вибір посуду для заварювання Шу та Шен Пуер є важливим аспектом процесу насолоди чаями і в значній мірі залежить від вподобань і власного досвіду. Кожна з посудин має свої особливості і переваги.</p>
                    <p>Насолодження Шу, Шен Пуер та інших чаїв є відкриттям світу унікальних смаків і ароматів. Обираючи відповідний посуд для заварювання, ви можете поглибити цей досвід, дозволяючи чаю розкритися повністю і насолоджуватися всією гамою його вишуканих властивостей.</p>
                    <p></p>
                    <div className="end-info">Пам'ятайте, якість чаю, правильна температура води і час заварювання впливають на смак і його настрій, незалежно від посуду.</div>
                    <div className="article-href">
                      <h3>Сторінки:</h3>
                      <p>Каталог Посуду</p>
                    </div>
                    <div className="article-tag">
                      <h3>Теги:</h3>
                      <p>Посуд</p>
                      <p>,</p>
                      <p>Посуд для чаю</p>
                      <p>,</p>
                      <p>Гайвани</p>
                      <p>,</p>
                      <p>Yixing</p>
                      <p>,</p>
                      <p>Керамічні чайники</p>
                    
                    
                    </div>
                    
                </div>
            
                <div className="about-right">
                    {/* <NavLink to="articles/about-shu"> */}
                      <div>Ще більше</div>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ArticlesAbout3
