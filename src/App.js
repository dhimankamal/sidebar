import { Route, Switch, useLocation } from 'react-router'
import Navbar from './today/Navbar';


import Sidebar from './Sidebar'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Calender from './Pages/Calender'
import Documents from './Pages/Documents'
import Projects from './Pages/Projects'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Jpbasic from './today/Jpbasic';
import Prodown from './today/Prodown';

const pagewidth = window.innerWidth
const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  padding-left: ${pagewidth > 998 ? '18rem' : '4rem'};

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function App () {
  const location = useLocation()
  return (
    <>
      {/*  <Sidebar />
     <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/calender" component={Calender} />
            <Route path="/documents" component={Documents} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </AnimatePresence>
      </Pages> */}

      <Navbar />
      <Jpbasic />
      <Prodown />
    </>
  )
}

export default App
