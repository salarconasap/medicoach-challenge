import { Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import { DefaultTemplate } from './templates/PageTemplate'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { useSelector } from 'react-redux';

export const Routes = () => {
  const { apiserver } = useSelector( state => state.photos );
  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={(routeProps) => (
            <DefaultTemplate>
              <FirstPage {...routeProps} />
            </DefaultTemplate>
          )}
        />
        <Route 
          exact 
          path="/secondpage" 
          render={(routeProps) => (
            <DefaultTemplate>
              <SecondPage {...routeProps} />
            </DefaultTemplate>
          )}
        />
        { apiserver && 
          <Route 
            exact 
            path="/thirdpage" 
            render={(routeProps) => (
              <DefaultTemplate>
                <ThirdPage {...routeProps} />
              </DefaultTemplate>
            )}
          /> 
        }
         <Redirect to="/" />
      </Switch>
    </Router>
  )
}
