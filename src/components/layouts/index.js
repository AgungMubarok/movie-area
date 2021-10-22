import * as Boots from 'react-bootstrap'

const Layouts = ({search, value}) => {
  return (
    <div>
      <Boots.Navbar bg="dark" expand="lg">
        <Boots.Container fluid>
          <Boots.Navbar.Brand href="#" className="text-white">Movies Area</Boots.Navbar.Brand>
            <Boots.Form className="d-flex">
              <Boots.FormControl
                type="search"
                onChange={search}
                value={value}
                placeholder="Search ..."
                className="me-2"
                aria-label="Search"
              />
              <Boots.Button variant="outline-light">Search</Boots.Button>
            </Boots.Form>
        </Boots.Container>
      </Boots.Navbar>
    </div>
  );
};

export default Layouts;