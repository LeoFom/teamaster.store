import ArticlesAbout1 from '../components/ArticlesAbout1'
import ArticlesAbout2 from '../components/ArticlesAbout2'
import ArticlesAbout3 from '../components/ArticlesAbout3'


function ArticlesAbout() {
  let adres = window.location.pathname
  console.log(adres)
  switch(adres){
    case "articles/about-shu":
      return(<ArticlesAbout1/>)
    case "articles/about-shen":
      return(<ArticlesAbout2/>)
    case "articles/about-dishes":
      return(<ArticlesAbout3/>)   
    // case "/articles/about-dishes":
    //   return(<Outlet???/>)   
  }
}

export default ArticlesAbout
