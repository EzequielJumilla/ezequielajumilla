import './App.css';

/*React Router  */
import {BrowserRouter, Route, Routes} from 'react-router-dom'

/*Hoja principal */
import Main from './components/main/Main';

/*Temario */
import Temario from './components/Temario/TemarioInicial'
import TemarioPrevio from './components/Temario/TemarioPrevio';
import TemarioHtml from './components/Temario/TemarioHtml';
import TemarioCss from './components/Temario/TemarioCss';
import TemarioBootstrap from './components/Temario/TemarioBootstrap';
import TemarioSass from './components/Temario/TemarioSass';
import TemarioGithub from './components/Temario/TemarioGithub';
import TemarioLogica from './components/Temario/TemarioLogica';
import TemarioJs from './components/Temario/TemarioJs';
import TemarioReact from './components/Temario/TemarioReact';

/*Contenido Previo */
import ContenidoPrevio1 from './components/ContenidoPrevio/ContenidoPrevio1';
import ContenidoPrevio11 from './components/ContenidoPrevio/ContenidoPrevio11';
import ContenidoPrevio12 from './components/ContenidoPrevio/ContenidoPrevio12';
import ContenidoPrevio13 from './components/ContenidoPrevio/ContenidoPrevio13';
import ContenidoPrevio14 from './components/ContenidoPrevio/ContenidoPrevio14';
import ContenidoPrevio15 from './components/ContenidoPrevio/ContenidoPrevio15';
import ContenidoPrevio16 from './components/ContenidoPrevio/ContenidoPrevio16';
import ContenidoPrevio2 from './components/ContenidoPrevio/ContenidoPrevio2';
import ContenidoPrevio3 from './components/ContenidoPrevio/ContenidoPrevio3';
import ContenidoPrevio31 from './components/ContenidoPrevio/ContenidoPrevio31';
import ContenidoPrevio32 from './components/ContenidoPrevio/ContenidoPrevio32';
import ContenidoPrevio33 from './components/ContenidoPrevio/ContenidoPrevio33';
import ContenidoPrevio34 from './components/ContenidoPrevio/ContenidoPrevio34';
import ContenidoPrevio35 from './components/ContenidoPrevio/ContenidoPrevio35';
import ContenidoPrevio4 from './components/ContenidoPrevio/ContenidoPrevio4';

/*Contenido HTML */
import ContenidoHtml1 from './components/ContenidoHtml/ContenidoHtml1';
import ContenidoHtml11 from './components/ContenidoHtml/ContenidoHtml1-1';
import ContenidoHtml12 from './components/ContenidoHtml/ContenidoHtml1-2';
import ContenidoHtml13 from './components/ContenidoHtml/ContenidoHtml1-3';
import ContenidoHtml14 from './components/ContenidoHtml/ContenidoHtml1-4';
import ContenidoHtml2 from './components/ContenidoHtml/ContenidoHtml2';
import ContenidoHtml21 from './components/ContenidoHtml/ContenidoHtml2-1';
import ContenidoHtml3 from './components/ContenidoHtml/ContenidoHtml3';
import ContenidoHtml31 from './components/ContenidoHtml/ContenidoHtml3-1';
import ContenidoHtml32 from './components/ContenidoHtml/ContenidoHtml3-2';

import ContenidoHtml4 from './components/ContenidoHtml/ContenidoHtml4';
import ContenidoHtml5 from './components/ContenidoHtml/ContenidoHtml5';
import ContenidoHtml6 from './components/ContenidoHtml/ContenidoHtml6';
import ContenidoHtml7 from './components/ContenidoHtml/ContenidoHtml7';
import ContenidoHtml71 from './components/ContenidoHtml/ContenidoHtml7-1';
import ContenidoHtml74 from './components/ContenidoHtml/ContenidoHtml7-4';
import ContenidoHtml73 from './components/ContenidoHtml/ContenidoHtml7-3';
import ContenidoHtml72 from './components/ContenidoHtml/ContenidoHtml7-2';



/*Contenido CSS */
import ContenidoCss1 from './components/ContenidoCss/ContenidoCss1'
import ContenidoCss11 from './components/ContenidoCss/ContenidoCss1-1'
import ContenidoCss12 from './components/ContenidoCss/ContenidoCss1-2'
import ContenidoCss13 from './components/ContenidoCss/ContenidoCss1-3'
import ContenidoCss14 from './components/ContenidoCss/ContenidoCss1-4'
import ContenidoCss2 from './components/ContenidoCss/ContenidoCss2'
import ContenidoCss3 from './components/ContenidoCss/ContenidoCss3'
import ContenidoCss31 from './components/ContenidoCss/ContenidoCss3-1'
import ContenidoCss4 from './components/ContenidoCss/ContenidoCss4'
import ContenidoCss41 from './components/ContenidoCss/ContenidoCss4-1'
import ContenidoCss42 from './components/ContenidoCss/ContenidoCss4-2'
import ContenidoCss43 from './components/ContenidoCss/ContenidoCss4-3'
import ContenidoCss44 from './components/ContenidoCss/ContenidoCss4-4'
import ContenidoCss45 from './components/ContenidoCss/ContenidoCss4-5'
import ContenidoCss46 from './components/ContenidoCss/ContenidoCss4-6'
import ContenidoCss47 from './components/ContenidoCss/ContenidoCss4-7'
import ContenidoCss48 from './components/ContenidoCss/ContenidoCss4-8'
import ContenidoCss49 from './components/ContenidoCss/ContenidoCss4-9'
import ContenidoCss5 from './components/ContenidoCss/ContenidoCss5'

import ContenidoCss6 from './components/ContenidoCss/ContenidoCss6'
import ContenidoCss61 from './components/ContenidoCss/ContenidoCss6-1'
import ContenidoCss62 from './components/ContenidoCss/ContenidoCss6-2'
import ContenidoCss7 from './components/ContenidoCss/ContenidoCss7'
import ContenidoCss71 from './components/ContenidoCss/ContenidoCss7-1'
import ContenidoCss8 from './components/ContenidoCss/ContenidoCss8'
import ContenidoCss81 from './components/ContenidoCss/ContenidoCss8-1'
import ContenidoCss9 from './components/ContenidoCss/ContenidoCss9'
import ContenidoCss10 from './components/ContenidoCss/ContenidoCss10'
import ContenidoCss011 from './components/ContenidoCss/ContenidoCss11'
import ContenidoCss111 from './components/ContenidoCss/ContenidoCss11-1'
import ContenidoCss012 from './components/ContenidoCss/ContenidoCss12'

import ContenidoCss013 from './components/ContenidoCss/ContenidoCss13'

import ContenidoCss014 from './components/ContenidoCss/ContenidoCss14'
import ContenidoCss141 from './components/ContenidoCss/ContenidoCss14-1'
import ContenidoCss15 from './components/ContenidoCss/ContenidoCss15'
import ContenidoCss16 from './components/ContenidoCss/ContenidoCss16'
import ContenidoCss161 from './components/ContenidoCss/ContenidoCss16-1'
import ContenidoCss162 from './components/ContenidoCss/ContenidoCss16-2'
import ContenidoCss163 from './components/ContenidoCss/ContenidoCss16-3'
import ContenidoCss164 from './components/ContenidoCss/ContenidoCss16-4'

import ContenidoCss166 from './components/ContenidoCss/ContenidoCss16-6'
import ContenidoCss167 from './components/ContenidoCss/ContenidoCss16-7'

import ContenidoCss169 from './components/ContenidoCss/ContenidoCss16-9'
import ContenidoCss1610 from './components/ContenidoCss/ContenidoCss16-10'
import ContenidoCss1611 from './components/ContenidoCss/ContenidoCss16-11'
import ContenidoCss1612 from './components/ContenidoCss/ContenidoCss16-12'

/*Contenido BOOTSTRAP*/
import ContenidoBootstrap1 from './components/ContenidoBootstrap/ContenidoBootstrap1'
import ContenidoBootstrap11 from './components/ContenidoBootstrap/ContenidoBootstrap1-1'
import ContenidoBootstrap12 from './components/ContenidoBootstrap/ContenidoBootstrap1-2'


import ContenidoBootstrap2 from './components/ContenidoBootstrap/ContenidoBootstrap2'
import ContenidoBootstrap3 from './components/ContenidoBootstrap/ContenidoBootstrap3'
import ContenidoBootstrap4 from './components/ContenidoBootstrap/ContenidoBootstrap4'

import ContenidoBootstrap5 from './components/ContenidoBootstrap/ContenidoBootstrap5'

/*Contenido SASS*/
import ContenidoSass1 from './components/ContenidoSass/ContenidoSass1'
import ContenidoSass11 from './components/ContenidoSass/ContenidoSass1-1'
import ContenidoSass12 from './components/ContenidoSass/ContenidoSass1-2'

import ContenidoSass2 from './components/ContenidoSass/ContenidoSass2'

/*Contenido GITHUB*/
import ContenidoGithub1 from './components/ContenidoGithub/ContenidoGithub1'
import ContenidoGithub11 from './components/ContenidoGithub/ContenidoGithub1-1'
import ContenidoGithub12 from './components/ContenidoGithub/ContenidoGithub1-2'
import ContenidoGithub13 from './components/ContenidoGithub/ContenidoGithub1-3'
import ContenidoGithub2 from './components/ContenidoGithub/ContenidoGithub2'

/*Contenido LOGICA*/
import ContenidoLogica1 from './components/ContenidoLogica/ContenidoLogica1'
import ContenidoLogica11 from './components/ContenidoLogica/ContenidoLogica1-1'
import ContenidoLogica12 from './components/ContenidoLogica/ContenidoLogica1-2'
import ContenidoLogica13 from './components/ContenidoLogica/ContenidoLogica1-3'
import ContenidoLogica14 from './components/ContenidoLogica/ContenidoLogica1-4'
import ContenidoLogica15 from './components/ContenidoLogica/ContenidoLogica1-5'
import ContenidoLogica16 from './components/ContenidoLogica/ContenidoLogica1-6'
import ContenidoLogica17 from './components/ContenidoLogica/ContenidoLogica1-7'
import ContenidoLogica18 from './components/ContenidoLogica/ContenidoLogica1-8'
import ContenidoLogica19 from './components/ContenidoLogica/ContenidoLogica1-9'
import ContenidoLogica110 from './components/ContenidoLogica/ContenidoLogica1-10'
import ContenidoLogica111 from './components/ContenidoLogica/ContenidoLogica1-11'
import ContenidoLogica112 from './components/ContenidoLogica/ContenidoLogica1-12'
import ContenidoLogica113 from './components/ContenidoLogica/ContenidoLogica1-13'
import ContenidoLogica2 from './components/ContenidoLogica/ContenidoLogica2'
import ContenidoLogica21 from './components/ContenidoLogica/ContenidoLogica2-1'
/*Contenido JAVASCRIPT*/
import ContenidoJavascript1 from './components/ContenidoJS/ContenidoJs1'
import ContenidoJavascript2 from './components/ContenidoJS/ContenidoJs2'
import ContenidoJavascript3 from './components/ContenidoJS/ContenidoJs3'
import ContenidoJavascript31 from './components/ContenidoJS/ContenidoJs3-1'
import ContenidoJavascript4 from './components/ContenidoJS/ContenidoJs4'
import ContenidoJavascript41 from './components/ContenidoJS/ContenidoJs4-1'
import ContenidoJavascript42 from './components/ContenidoJS/ContenidoJs4-2'
import ContenidoJavascript43 from './components/ContenidoJS/ContenidoJs4-3'
import ContenidoJavascript44 from './components/ContenidoJS/ContenidoJs4-4'
import ContenidoJavascript45 from './components/ContenidoJS/ContenidoJs4-5'
import ContenidoJavascript46 from './components/ContenidoJS/ContenidoJs4-6'
import ContenidoJavascript47 from './components/ContenidoJS/ContenidoJs4-7'
import ContenidoJavascript5 from './components/ContenidoJS/ContenidoJs5'
import ContenidoJavascript51 from './components/ContenidoJS/ContenidoJs5-1'
import ContenidoJavascript52 from './components/ContenidoJS/ContenidoJs5-2'
import ContenidoJavascript6 from './components/ContenidoJS/ContenidoJs6'
import ContenidoJavascript7 from './components/ContenidoJS/ContenidoJs7'
import ContenidoJavascript8 from './components/ContenidoJS/ContenidoJs8'
import ContenidoJavascript81 from './components/ContenidoJS/ContenidoJs8-1'
import ContenidoJavascript82 from './components/ContenidoJS/ContenidoJs8-2'
import ContenidoJavascript9 from './components/ContenidoJS/ContenidoJs9'
import ContenidoJavascript10 from './components/ContenidoJS/ContenidoJs10'
import ContenidoJavascript101 from './components/ContenidoJS/ContenidoJs10-1'
import ContenidoJavascript102 from './components/ContenidoJS/ContenidoJs10-2'
import ContenidoJavascript103 from './components/ContenidoJS/ContenidoJs10-3'
import ContenidoJavascript11 from './components/ContenidoJS/ContenidoJs11'
import ContenidoJavascript111 from './components/ContenidoJS/ContenidoJs11-1'
import ContenidoJavascript112 from './components/ContenidoJS/ContenidoJs11-2'
import ContenidoJavascript12 from './components/ContenidoJS/ContenidoJs12'
import ContenidoJavascript13 from './components/ContenidoJS/ContenidoJs13'
import ContenidoJavascript14 from './components/ContenidoJS/ContenidoJs14'
import ContenidoJavascript15 from './components/ContenidoJS/ContenidoJs15'
import ContenidoJavascript16 from './components/ContenidoJS/ContenidoJs16'
import ContenidoJavascript17 from './components/ContenidoJS/ContenidoJs17'
import ContenidoJavascript18 from './components/ContenidoJS/ContenidoJs18'
import ContenidoJavascript181 from './components/ContenidoJS/ContenidoJs18-1'
import ContenidoJavascript182 from './components/ContenidoJS/ContenidoJs18-2'
import ContenidoJavascript183 from './components/ContenidoJS/ContenidoJs18-3'
import ContenidoJavascript184 from './components/ContenidoJS/ContenidoJs18-4'
import ContenidoJavascript19 from './components/ContenidoJS/ContenidoJs19'
import ContenidoJavascript20 from './components/ContenidoJS/ContenidoJs20'
import ContenidoJavascript201 from './components/ContenidoJS/ContenidoJs20-1'
import ContenidoJavascript202 from './components/ContenidoJS/ContenidoJs20-2'
import ContenidoJavascript203 from './components/ContenidoJS/ContenidoJs20-3'
import ContenidoJavascript21 from './components/ContenidoJS/ContenidoJs21'
import ContenidoJavascript22 from './components/ContenidoJS/ContenidoJs22'
import ContenidoJavascript23 from './components/ContenidoJS/ContenidoJs23'
import ContenidoJavascript231 from './components/ContenidoJS/ContenidoJs23-1'
import ContenidoJavascript24 from './components/ContenidoJS/ContenidoJs24'
import ContenidoJavascript25 from './components/ContenidoJS/ContenidoJs25'
import ContenidoJavascript251 from './components/ContenidoJS/ContenidoJs25-1'
import ContenidoJavascript26 from './components/ContenidoJS/ContenidoJs26'
import ContenidoJavascript261 from './components/ContenidoJS/ContenidoJs26-1'
import ContenidoJavascript262 from './components/ContenidoJS/ContenidoJs26-2'
import ContenidoJavascript263 from './components/ContenidoJS/ContenidoJs26-3'
import ContenidoJavascript264 from './components/ContenidoJS/ContenidoJs26-4'
import ContenidoJavascript265 from './components/ContenidoJS/ContenidoJs26-5'
import ContenidoJavascript266 from './components/ContenidoJS/ContenidoJs26-6'
import ContenidoJavascript267 from './components/ContenidoJS/ContenidoJs26-7'
import ContenidoJavascript268 from './components/ContenidoJS/ContenidoJs26-8'
import ContenidoJavascript269 from './components/ContenidoJS/ContenidoJs26-9'
import ContenidoJavascript2610 from './components/ContenidoJS/ContenidoJs26-10'
import ContenidoJavascript2611 from './components/ContenidoJS/ContenidoJs26-11'
import ContenidoJavascript2612 from './components/ContenidoJS/ContenidoJs26-12'
import ContenidoJavascript2613 from './components/ContenidoJS/ContenidoJs26-13'
import ContenidoJavascript2614 from './components/ContenidoJS/ContenidoJs26-14'
import ContenidoJavascript2615 from './components/ContenidoJS/ContenidoJs26-15'
import ContenidoJavascript2616 from './components/ContenidoJS/ContenidoJs26-16'
import ContenidoJavascript27 from './components/ContenidoJS/ContenidoJs27'
import ContenidoJavascript271 from './components/ContenidoJS/ContenidoJs27-1'


/*Contenido REACT*/
import ContenidoReact1 from './components/ContenidoReact/ContenidoReact1'
import ContenidoReact2 from './components/ContenidoReact/ContenidoReact2'
import ContenidoReact3 from './components/ContenidoReact/ContenidoReact3'
import ContenidoReact4 from './components/ContenidoReact/ContenidoReact4'
import ContenidoReact41 from './components/ContenidoReact/ContenidoReact4-1'
import ContenidoReact42 from './components/ContenidoReact/ContenidoReact4-2'
import ContenidoReact43 from './components/ContenidoReact/ContenidoReact4-3'
import ContenidoReact5 from './components/ContenidoReact/ContenidoReact5'
import ContenidoReact51 from './components/ContenidoReact/ContenidoReact5-1'
import ContenidoReact52 from './components/ContenidoReact/ContenidoReact5-2'
import ContenidoReact53 from './components/ContenidoReact/ContenidoReact5-3'
import ContenidoReact54 from './components/ContenidoReact/ContenidoReact5-4'
import ContenidoReact6 from './components/ContenidoReact/ContenidoReact6'
import ContenidoReact61 from './components/ContenidoReact/ContenidoReact6-1'
import ContenidoReact7 from './components/ContenidoReact/ContenidoReact7'
import ContenidoReact8 from './components/ContenidoReact/ContenidoReact8'
import ContenidoReact81 from './components/ContenidoReact/ContenidoReact8-1'
import ContenidoReact82 from './components/ContenidoReact/ContenidoReact8-2'
import ContenidoReact83 from './components/ContenidoReact/ContenidoReact8-3'
import ContenidoReact84 from './components/ContenidoReact/ContenidoReact8-4'
import ContenidoReact9 from './components/ContenidoReact/ContenidoReact9'
import ContenidoReact10 from './components/ContenidoReact/ContenidoReact10'
import ContenidoReact11 from './components/ContenidoReact/ContenidoReact11'
import ContenidoReact111 from './components/ContenidoReact/ContenidoReact11-1'
import ContenidoReact112 from './components/ContenidoReact/ContenidoReact11-2'
import ContenidoReact113 from './components/ContenidoReact/ContenidoReact11-3'
import ContenidoReact114 from './components/ContenidoReact/ContenidoReact11-4'
import ContenidoReact12 from './components/ContenidoReact/ContenidoReact12'
import ContenidoReact13 from './components/ContenidoReact/ContenidoReact13'
import ContenidoReact14 from './components/ContenidoReact/ContenidoReact14'
import ContenidoReact15 from './components/ContenidoReact/ContenidoReact15'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        /*Pagina principal */
       <Route path="/" element={<Main/>} />

        
        /*Temarios */
        <Route path="IndexTemario" element={<Temario/>} />
        <Route path="TemarioPrevio" element={<TemarioPrevio/>} />
        <Route path="TemarioHtml" element={<TemarioHtml/>} />
        <Route path="TemarioCss" element={<TemarioCss/>} />
        <Route path="TemarioBootstrap" element={<TemarioBootstrap/>} />
        <Route path="TemarioSass" element={<TemarioSass/>} />
        <Route path="TemarioGithub" element={<TemarioGithub/>} />
        <Route path="TemarioLogica" element={<TemarioLogica/>} />
        <Route path="TemarioJs" element={<TemarioJs/>} />
        <Route path="TemarioReact" element={<TemarioReact/>} />
        
        /*Contenido Previo */
        <Route path="ContenidoPrevio1" element={<ContenidoPrevio1/>} />
        <Route path="ContenidoPrevio1-1" element={<ContenidoPrevio11/>} />
        <Route path="ContenidoPrevio1-2" element={<ContenidoPrevio12/>} />
        <Route path="ContenidoPrevio1-3" element={<ContenidoPrevio13/>} />
        <Route path="ContenidoPrevio1-4" element={<ContenidoPrevio14/>} />
        <Route path="ContenidoPrevio1-5" element={<ContenidoPrevio15/>} />
        <Route path="ContenidoPrevio1-6" element={<ContenidoPrevio16/>} />
        <Route path="ContenidoPrevio2" element={<ContenidoPrevio2/>} />
        <Route path="ContenidoPrevio3" element={<ContenidoPrevio3/>} />
        <Route path="ContenidoPrevio3-1" element={<ContenidoPrevio31/>} />
        <Route path="ContenidoPrevio3-2" element={<ContenidoPrevio32/>} />
        <Route path="ContenidoPrevio3-3" element={<ContenidoPrevio33/>} />
        <Route path="ContenidoPrevio3-4" element={<ContenidoPrevio34/>} />
        <Route path="ContenidoPrevio3-5" element={<ContenidoPrevio35/>} />
        <Route path="ContenidoPrevio4" element={<ContenidoPrevio4/>} />

        /*Contenido HTML */
        <Route path="ContenidoHtml1" element={<ContenidoHtml1/>} />
        <Route path="ContenidoHtml1-1" element={<ContenidoHtml11/>} />
        <Route path="ContenidoHtml1-2" element={<ContenidoHtml12/>} />
        <Route path="ContenidoHtml1-3" element={<ContenidoHtml13/>} />
        <Route path="ContenidoHtml1-4" element={<ContenidoHtml14/>} />
        <Route path="ContenidoHtml2" element={<ContenidoHtml2/>} />
        <Route path="ContenidoHtml2-1" element={<ContenidoHtml21/>} />
        <Route path="ContenidoHtml3" element={<ContenidoHtml3/>} />
        <Route path="ContenidoHtml3-1" element={<ContenidoHtml31/>} />
        <Route path="ContenidoHtml3-2" element={<ContenidoHtml32/>} />
        
        <Route path="ContenidoHtml4" element={<ContenidoHtml4/>} />
        <Route path="ContenidoHtml5" element={<ContenidoHtml5/>} />
        <Route path="ContenidoHtml6" element={<ContenidoHtml6/>} />
        <Route path="ContenidoHtml7" element={<ContenidoHtml7/>} />
        <Route path="ContenidoHtml7-1" element={<ContenidoHtml71/>} />
        <Route path="ContenidoHtml7-2" element={<ContenidoHtml72/>} />
        <Route path="ContenidoHtml7-3" element={<ContenidoHtml73/>} />
        <Route path="ContenidoHtml7-4" element={<ContenidoHtml74/>} />
        
       

        /*Contenido CSS */
        <Route path="ContenidoCss1" element={<ContenidoCss1/>} />
        <Route path="ContenidoCss1-1" element={<ContenidoCss11/>} />
        <Route path="ContenidoCss1-2" element={<ContenidoCss12/>} />
        <Route path="ContenidoCss1-3" element={<ContenidoCss13/>} />
        <Route path="ContenidoCss1-4" element={<ContenidoCss14/>} />
        <Route path="ContenidoCss2" element={<ContenidoCss2/>} />
        <Route path="ContenidoCss3" element={<ContenidoCss3/>} />
        <Route path="ContenidoCss3-1" element={<ContenidoCss31/>} />
        <Route path="ContenidoCss4" element={<ContenidoCss4/>} />
        <Route path="ContenidoCss4-1" element={<ContenidoCss41/>} />
        <Route path="ContenidoCss4-2" element={<ContenidoCss42/>} />
        <Route path="ContenidoCss4-3" element={<ContenidoCss43/>} />
        <Route path="ContenidoCss4-4" element={<ContenidoCss44/>} />
        <Route path="ContenidoCss4-5" element={<ContenidoCss45/>} />
        <Route path="ContenidoCss4-6" element={<ContenidoCss46/>} />
        <Route path="ContenidoCss4-7" element={<ContenidoCss47/>} />
        <Route path="ContenidoCss4-8" element={<ContenidoCss48/>} />
        <Route path="ContenidoCss4-9" element={<ContenidoCss49/>} />
        <Route path="ContenidoCss5" element={<ContenidoCss5/>} />
 
        <Route path="ContenidoCss6" element={<ContenidoCss6/>} />
        <Route path="ContenidoCss6-1" element={<ContenidoCss61/>} />
        <Route path="ContenidoCss6-2" element={<ContenidoCss62/>} />
        <Route path="ContenidoCss7" element={<ContenidoCss7/>} />
        <Route path="ContenidoCss7-1" element={<ContenidoCss71/>} />
        <Route path="ContenidoCss8" element={<ContenidoCss8/>} />
        <Route path="ContenidoCss8-1" element={<ContenidoCss81/>} />
        <Route path="ContenidoCss9" element={<ContenidoCss9/>} />
        <Route path="ContenidoCss10" element={<ContenidoCss10/>} />
        <Route path="ContenidoCss11" element={<ContenidoCss011/>} />
        <Route path="ContenidoCss11-1" element={<ContenidoCss111/>} />
        <Route path="ContenidoCss12" element={<ContenidoCss012/>} />
   
        <Route path="ContenidoCss13" element={<ContenidoCss013/>} />

        <Route path="ContenidoCss14" element={<ContenidoCss014/>} />
        <Route path="ContenidoCss14-1" element={<ContenidoCss141/>} />
        <Route path="ContenidoCss15" element={<ContenidoCss15/>} />
        <Route path="ContenidoCss16" element={<ContenidoCss16/>} />
        <Route path="ContenidoCss16-1" element={<ContenidoCss161/>} />
        <Route path="ContenidoCss16-2" element={<ContenidoCss162/>} />
        <Route path="ContenidoCss16-3" element={<ContenidoCss163/>} />
        <Route path="ContenidoCss16-4" element={<ContenidoCss164/>} />
     
        <Route path="ContenidoCss16-6" element={<ContenidoCss166/>} />
        <Route path="ContenidoCss16-7" element={<ContenidoCss167/>} />
        
        <Route path="ContenidoCss16-9" element={<ContenidoCss169/>} />
        <Route path="ContenidoCss16-10" element={<ContenidoCss1610/>} />
        <Route path="ContenidoCss16-11" element={<ContenidoCss1611/>} />
        <Route path="ContenidoCss16-12" element={<ContenidoCss1612/>} />

        /*Contenido Bootstrap */
        <Route path="ContenidoBootstrap1" element={<ContenidoBootstrap1/>} />
        <Route path="ContenidoBootstrap1-1" element={<ContenidoBootstrap11/>} />
        <Route path="ContenidoBootstrap1-2" element={<ContenidoBootstrap12/>} />
     
        
        <Route path="ContenidoBootstrap2" element={<ContenidoBootstrap2/>} />
        <Route path="ContenidoBootstrap3" element={<ContenidoBootstrap3/>} />
        <Route path="ContenidoBootstrap4" element={<ContenidoBootstrap4/>} />
        
        <Route path="ContenidoBootstrap5" element={<ContenidoBootstrap5/>} />
       

        /*Contenido SASS */
        <Route path="ContenidoSass1" element={<ContenidoSass1/>} />
        <Route path="ContenidoSass1-1" element={<ContenidoSass11/>} />
        <Route path="ContenidoSass1-2" element={<ContenidoSass12/>} />
        
        <Route path="ContenidoSass2" element={<ContenidoSass2/>} />
        
        /*Contenido GITHUB*/
        <Route path="ContenidoGithub1" element={<ContenidoGithub1/>} />
        <Route path="ContenidoGithub1-1" element={<ContenidoGithub11/>} />
        <Route path="ContenidoGithub1-2" element={<ContenidoGithub12/>} />
        <Route path="ContenidoGithub1-3" element={<ContenidoGithub13/>} />
        
        <Route path="ContenidoGithub2" element={<ContenidoGithub2/>} />
      
        /*Contenido LOGICA*/
        <Route path="ContenidoLogica1" element={<ContenidoLogica1/>} />
        <Route path="ContenidoLogica1-1" element={<ContenidoLogica11/>} />
        <Route path="ContenidoLogica1-2" element={<ContenidoLogica12/>} />
        <Route path="ContenidoLogica1-3" element={<ContenidoLogica13/>} />
        <Route path="ContenidoLogica1-4" element={<ContenidoLogica14/>} />
        <Route path="ContenidoLogica1-5" element={<ContenidoLogica15/>} />
        <Route path="ContenidoLogica1-6" element={<ContenidoLogica16/>} />
        <Route path="ContenidoLogica1-7" element={<ContenidoLogica17/>} />
        <Route path="ContenidoLogica1-8" element={<ContenidoLogica18/>} />
        <Route path="ContenidoLogica1-9" element={<ContenidoLogica19/>} />
        <Route path="ContenidoLogica1-10" element={<ContenidoLogica110/>} />
        <Route path="ContenidoLogica1-11" element={<ContenidoLogica111/>} />
        <Route path="ContenidoLogica1-12" element={<ContenidoLogica112/>} />
        <Route path="ContenidoLogica1-13" element={<ContenidoLogica113/>} />
        <Route path="ContenidoLogica2" element={<ContenidoLogica2/>} />
        <Route path="ContenidoLogica2-1" element={<ContenidoLogica21/>} />

        /*Contenido JAVASCRIPT*/
        <Route path="ContenidoJavascript1" element={<ContenidoJavascript1/>} />
        <Route path="ContenidoJavascript2" element={<ContenidoJavascript2/>} />
        <Route path="ContenidoJavascript3" element={<ContenidoJavascript3/>} />
        <Route path="ContenidoJavascript3-1" element={<ContenidoJavascript31/>} />
        <Route path="ContenidoJavascript4" element={<ContenidoJavascript4/>} />
        <Route path="ContenidoJavascript4-1" element={<ContenidoJavascript41/>} />
        <Route path="ContenidoJavascript4-2" element={<ContenidoJavascript42/>} />
        <Route path="ContenidoJavascript4-3" element={<ContenidoJavascript43/>} />
        <Route path="ContenidoJavascript4-4" element={<ContenidoJavascript44/>} />
        <Route path="ContenidoJavascript4-5" element={<ContenidoJavascript45/>} />
        <Route path="ContenidoJavascript4-6" element={<ContenidoJavascript46/>} />
        <Route path="ContenidoJavascript4-7" element={<ContenidoJavascript47/>} />
        <Route path="ContenidoJavascript5" element={<ContenidoJavascript5/>} />
        <Route path="ContenidoJavascript5-1" element={<ContenidoJavascript51/>} />
        <Route path="ContenidoJavascript5-2" element={<ContenidoJavascript52/>} />
        <Route path="ContenidoJavascript6" element={<ContenidoJavascript6/>} />
        <Route path="ContenidoJavascript7" element={<ContenidoJavascript7/>} />
        <Route path="ContenidoJavascript8" element={<ContenidoJavascript8/>} />
        <Route path="ContenidoJavascript8-1" element={<ContenidoJavascript81/>} />
        <Route path="ContenidoJavascript8-2" element={<ContenidoJavascript82/>} />
        <Route path="ContenidoJavascript9" element={<ContenidoJavascript9/>} />
        <Route path="ContenidoJavascript10" element={<ContenidoJavascript10/>} />
        <Route path="ContenidoJavascript10-1" element={<ContenidoJavascript101/>} />
        <Route path="ContenidoJavascript10-2" element={<ContenidoJavascript102/>} />
        <Route path="ContenidoJavascript10-3" element={<ContenidoJavascript103/>} />
        <Route path="ContenidoJavascript11" element={<ContenidoJavascript11/>} />
        <Route path="ContenidoJavascript11-1" element={<ContenidoJavascript111/>} />
        <Route path="ContenidoJavascript11-2" element={<ContenidoJavascript112/>} />
        <Route path="ContenidoJavascript12" element={<ContenidoJavascript12/>} />
        <Route path="ContenidoJavascript13" element={<ContenidoJavascript13/>} />
        <Route path="ContenidoJavascript14" element={<ContenidoJavascript14/>} />
        <Route path="ContenidoJavascript15" element={<ContenidoJavascript15/>} />
        <Route path="ContenidoJavascript16" element={<ContenidoJavascript16/>} />
        <Route path="ContenidoJavascript17" element={<ContenidoJavascript17/>} />
        <Route path="ContenidoJavascript18" element={<ContenidoJavascript18/>} />
        <Route path="ContenidoJavascript18-1" element={<ContenidoJavascript181/>} />
        <Route path="ContenidoJavascript18-2" element={<ContenidoJavascript182/>} />
        <Route path="ContenidoJavascript18-3" element={<ContenidoJavascript183/>} />
        <Route path="ContenidoJavascript18-4" element={<ContenidoJavascript184/>} />
        <Route path="ContenidoJavascript19" element={<ContenidoJavascript19/>} />
        <Route path="ContenidoJavascript20" element={<ContenidoJavascript20/>} />
        <Route path="ContenidoJavascript20-1" element={<ContenidoJavascript201/>} />
        <Route path="ContenidoJavascript20-2" element={<ContenidoJavascript202/>} />
        <Route path="ContenidoJavascript20-3" element={<ContenidoJavascript203/>} />
        <Route path="ContenidoJavascript21" element={<ContenidoJavascript21/>} />
        <Route path="ContenidoJavascript22" element={<ContenidoJavascript22/>} />
        <Route path="ContenidoJavascript23" element={<ContenidoJavascript23/>} />
        <Route path="ContenidoJavascript23-1" element={<ContenidoJavascript231/>} />
        <Route path="ContenidoJavascript24" element={<ContenidoJavascript24/>} />
        <Route path="ContenidoJavascript25" element={<ContenidoJavascript25/>} />
        <Route path="ContenidoJavascript25-1" element={<ContenidoJavascript251/>} />
        <Route path="ContenidoJavascript26" element={<ContenidoJavascript26/>} />
        <Route path="ContenidoJavascript26-1" element={<ContenidoJavascript261/>} />
        <Route path="ContenidoJavascript26-2" element={<ContenidoJavascript262/>} />
        <Route path="ContenidoJavascript26-3" element={<ContenidoJavascript263/>} />
        <Route path="ContenidoJavascript26-4" element={<ContenidoJavascript264/>} />
        <Route path="ContenidoJavascript26-5" element={<ContenidoJavascript265/>} />
        <Route path="ContenidoJavascript26-6" element={<ContenidoJavascript266/>} />
        <Route path="ContenidoJavascript26-7" element={<ContenidoJavascript267/>} />
        <Route path="ContenidoJavascript26-8" element={<ContenidoJavascript268/>} />
        <Route path="ContenidoJavascript26-9" element={<ContenidoJavascript269/>} />
        <Route path="ContenidoJavascript26-10" element={<ContenidoJavascript2610/>} />
        <Route path="ContenidoJavascript26-11" element={<ContenidoJavascript2611/>} />
        <Route path="ContenidoJavascript26-12" element={<ContenidoJavascript2612/>} />
        <Route path="ContenidoJavascript26-13" element={<ContenidoJavascript2613/>} />
        <Route path="ContenidoJavascript26-14" element={<ContenidoJavascript2614/>} />
        <Route path="ContenidoJavascript26-15" element={<ContenidoJavascript2615/>} />
        <Route path="ContenidoJavascript26-16" element={<ContenidoJavascript2616/>} />
        <Route path="ContenidoJavascript27" element={<ContenidoJavascript27/>} />
        <Route path="ContenidoJavascript27-1" element={<ContenidoJavascript271/>} />
        
        /*Contenido REACT*/
        <Route path="ContenidoReact1" element={<ContenidoReact1/>} />
        <Route path="ContenidoReact2" element={<ContenidoReact2/>} />
        <Route path="ContenidoReact3" element={<ContenidoReact3/>} />
        <Route path="ContenidoReact4" element={<ContenidoReact4/>} />
        <Route path="ContenidoReact4-1" element={<ContenidoReact41/>} />
        <Route path="ContenidoReact4-2" element={<ContenidoReact42/>} />
        <Route path="ContenidoReact4-3" element={<ContenidoReact43/>} />
        <Route path="ContenidoReact5" element={<ContenidoReact5/>} />
        <Route path="ContenidoReact5-1" element={<ContenidoReact51/>} />
        <Route path="ContenidoReact5-2" element={<ContenidoReact52/>} />
        <Route path="ContenidoReact5-3" element={<ContenidoReact53/>} />
        <Route path="ContenidoReact5-4" element={<ContenidoReact54/>} />
        <Route path="ContenidoReact6" element={<ContenidoReact6/>} />
        <Route path="ContenidoReact6-1" element={<ContenidoReact61/>} />
        <Route path="ContenidoReact7" element={<ContenidoReact7/>} />
        <Route path="ContenidoReact8" element={<ContenidoReact8/>} />
        <Route path="ContenidoReact8-1" element={<ContenidoReact81/>} />
        <Route path="ContenidoReact8-2" element={<ContenidoReact82/>} />
        <Route path="ContenidoReact8-3" element={<ContenidoReact83/>} />
        <Route path="ContenidoReact8-4" element={<ContenidoReact84/>} />
        <Route path="ContenidoReact9" element={<ContenidoReact9/>} />
        <Route path="ContenidoReact10" element={<ContenidoReact10/>} />
        <Route path="ContenidoReact11" element={<ContenidoReact11/>} />
        <Route path="ContenidoReact11-1" element={<ContenidoReact111/>} />
        <Route path="ContenidoReact11-2" element={<ContenidoReact112/>} />
        <Route path="ContenidoReact11-3" element={<ContenidoReact113/>} />
        <Route path="ContenidoReact11-4" element={<ContenidoReact114/>} />
        <Route path="ContenidoReact12" element={<ContenidoReact12/>} />
        <Route path="ContenidoReact13" element={<ContenidoReact13/>} />
        <Route path="ContenidoReact14" element={<ContenidoReact14/>} />
        <Route path="ContenidoReact15" element={<ContenidoReact15/>} />

        </Routes>
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
