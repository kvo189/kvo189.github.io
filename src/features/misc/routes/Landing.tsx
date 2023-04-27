import { Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'

export const Landing = () => {
    return (
        <div className="mt-3">
        <Row className="justify-content-center navbar--show">
        <h1 className="text-center">Khang Vo</h1>
        </Row>
        {/* <Route render={(props) => {
                return (
                  <MyNavBar location = {props.location}/>
                )
              }} />

        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    )
}