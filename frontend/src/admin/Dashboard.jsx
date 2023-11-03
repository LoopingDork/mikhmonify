import '../App.css'
import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar, Offcanvas, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDashboard, faWifi, faExclamationCircle, faServer, faNetworkWired, faCalendarAlt, faRoute, faUserNinja, faLaptop, faTshirt, faChartBar } from '@fortawesome/free-solid-svg-icons'
import Chart from 'react-apexcharts'
const Dashboard = ({name, ...props}) => {
    const [username, setUsername] = useState("")
    const token = localStorage.getItem('token')
    const navigation = useNavigate()

    const checkUser = useRef(false)

    useEffect(() => {
        if(!token){
            navigation('/login')
        }
        if(checkUser.current === true){
            const fetchUser = async() => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                await axios.get('http://127.0.0.1:8000/api/me')
                .then((response) => {
                    setUsername(response.data)
                })
            }    
            fetchUser()
        }
        return () => {
            checkUser.current = true;
        }
    }, [])
    const logoutHandler = async() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://127.0.0.1:8000/api/logout')
        .then(() => {
            localStorage.removeItem('token')
            alert('Successfully logout!')
            navigation('/login')
        })
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // create a chart 

    const [state, setState] = useState([])

    var data = {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91,101]
            },
            {
                name: "series-2",
                data: [20, 0, 35, 10, 19, 10, 10, 11,21]
            },
            ]
        }

        var data2 = {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [100, 20, 25, 100, 49, 60, 70, 91,101]
            },
            {
                name: "series-2",
                data: [20, 100, 35, 90, 20, 10, 10, 11,21]
            },
            ]
        }

        var data3= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [100, 100, 100, 150, 49, 60, 70, 100,200]
            },
            {
                name: "series-2",
                data: [100, 100, 65, 90, 50, 50, 50, 51,71]
            },
            ]
        }

        var data4= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [200, 10, 90, 60, 49, 60, 70, 100,200]
            },
            {
                name: "series-2",
                data: [100, 20, 25, 90, 10, 10, 10, 51,21]
            },
            ]
        }

        var data5= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [20, 10, 90, 60, 44, 20, 30, 10,40]
            },
            {
                name: "series-2",
                data: [20, 20, 25, 20, 60, 15, 15, 51,21]
            },
            ]
        }

        var data6= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [26, 16, 96, 66, 46, 26, 36, 16,40]
            },
            {
                name: "series-2",
                data: [23, 26, 25, 26, 60, 65, 65, 61,61]
            },
            ]
        }

        var data7= {
            options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
            },
            series: [
            {
                name: "series-1",
                data: [27, 76, 76, 76, 76, 76, 76, 76,47]
            },
            {
                name: "series-2",
                data: [27, 76, 75, 76, 67, 67, 65, 61,61]
            },
            ]
        }

    const [value, setValue] = useState('')

    const options = [
        {label: "Interface Ethernet 1", value: 1},
        {label: "Interface Ethernet 2", value: 2},
        {label: "Interface Ethernet 3", value: 3},
        {label: "Interface Ethernet 4", value: 4},
        {label: "Interface Ethernet 5", value: 5},
        {label: "Interface Ethernet 6", value: 6},
        {label: "Interface Ethernet 7", value: 7},
    ]
    function handleSelect(event){
        setValue(event.target.value)
    }
    return(
        <div className='body'style={{
            height:"228vh",
            overflow: "hidden"
        }}>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={ faRoute } /> Mikhmonify</Navbar.Brand>
                    <Button variant="primary" onClick={handleShow} className="me-2">
                    {name}  <FontAwesomeIcon icon={ faBars } />
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title><FontAwesomeIcon icon={ faNetworkWired } /> MIKROTIK SMK LABOR</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="menu"style={{borderBottom:"1px solid black", marginBottom:"1rem"}}>
                            <h5>&nbsp;<FontAwesomeIcon icon={ faDashboard } /> <span style={{marginLeft:"30px;"}}> DASHBOARD</span></h5>
                        </div>
                        <div className="menu"style={{borderBottom:"1px solid black", marginBottom:"1rem"}}>
                            <h5>&nbsp;<FontAwesomeIcon icon={ faExclamationCircle } /> <span>&nbsp;About</span></h5>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="me-auto"/>
                    <Nav>
                        <Nav.Link>
                            {username.email}
                        </Nav.Link>
                        <Nav.Link className="text-primary" onClick={() => logoutHandler()}>
                            Log out
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="container">
                                    <div className="d-flex justify-content-between">
                                        <h2><FontAwesomeIcon icon={ faCalendarAlt } width="102" height="550" style={{fontSize:"4rem", marginTop:"2.0rem"}}/></h2>                                    
                                        <div>
                                            <p>
                                                Date : Oct/09/2023 
                                            </p>
                                            <p>
                                                Time : 18:03:41
                                            </p>
                                            <p>
                                                Uptime : 5d 17:33:06 
                                            </p>
                                            <p>
                                                Time Zone : Asia/Jakarta 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="container">
                                    <div className="d-flex justify-content-between">
                                        <h2><FontAwesomeIcon icon={ faExclamationCircle } width="50" height="550" style={{fontSize:"4rem", marginTop:"2.0rem"}}/></h2>                                    
                                        <div>
                                            <p>
                                                Board Name : hAP lite
                                            </p>
                                            <p>
                                                Model : RouterBOARD 941-2nD
                                            </p>
                                            <p>
                                                Router OS : 6.45.6
                                            </p>
                                            <p>
                                                Architecture : smps
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="container">
                                    <div className="d-flex justify-content-between">
                                        <h2><FontAwesomeIcon icon={ faServer } width="102" height="550" style={{fontSize:"4rem", marginTop:"2.0rem"}}/></h2>                                    
                                        <div>
                                            <p>
                                                CPU Load : 4%
                                            </p>
                                            <p>
                                                Free Memory : 6.59 MB
                                            </p>
                                            <p>
                                                Free HDD : 7.49 MB
                                            </p>
                                            <p>
                                                Voltage : Temp:-
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header">
                        <h5><FontAwesomeIcon icon={ faWifi }/> Hotspot</h5>
                        <hr />
                        <div className="card-body py-3 text-white">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className='bg-primary'style={{borderRadius:"8px"}}>
                                        <div className="container py-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 style={{fontSize:"3rem"}}>0</h2>
                                                </div>
                                                <div className="col-md-5 mt-3">
                                                    <h3>Item</h3>
                                                </div>
                                            </div>
                                            <p style={{
                                                fontWeight: "bold"
                                            }}>
                                                <FontAwesomeIcon icon={ faLaptop } /> Client Connective
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='bg-success'style={{borderRadius:"8px"}}>
                                        <div className="container py-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 style={{fontSize:"3rem"}}>2</h2>
                                                </div>
                                                <div className="col-md-5 mt-3">
                                                    <h3>Items</h3>
                                                </div>
                                            </div>
                                            <p style={{
                                                fontWeight: "bold"
                                            }}>
                                                <FontAwesomeIcon icon={ faTshirt } /> Hotspot User
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='bg-warning'style={{borderRadius:"8px"}}>
                                        <div className="container py-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 style={{fontSize:"3rem"}}>
                                                        <FontAwesomeIcon icon={  faUserNinja } />
                                                    </h2>
                                                </div>
                                                <div className="col-md-5 mt-3">
                                                    <h3>Add</h3>
                                                </div>
                                            </div>
                                            <p style={{
                                                fontWeight: "bold"
                                            }}>
                                                <FontAwesomeIcon icon={ faUserNinja } /> Hotspot User
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='bg-danger'style={{borderRadius:"8px"}}>
                                        <div className="container py-2">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <h2 style={{fontSize:"3rem"}}>
                                                        <FontAwesomeIcon icon={  faUserNinja } />
                                                    </h2>
                                                </div>
                                                <div className="col-md-7 mt-3">
                                                    <h5>Generate</h5>
                                                </div>
                                            </div>
                                            <p style={{
                                                fontWeight: "bold"
                                            }}> 
                                                <FontAwesomeIcon icon={ faUserNinja } /> Hotspot User
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header">
                        <h5>
                            <FontAwesomeIcon icon={ faChartBar } /> Traffic Lights
                        </h5> 
                        <hr />
                        <center>
                            <select 
                                onChange={handleSelect} 
                                className='form-select border border-primary'
                                style={{
                                    width:"20%"
                                }}
                            >
                                <option>Choose Interface</option>
                                {
                                    options.map((post) => (
                                        <option value={post.value}>{post.label}</option>
                                    ))
                                }
                            </select>
                            <p>
                                {
                                    value == "1" ? 
                                    <>
                                        <div className="card-body">
                                            <h5>Interface Ethernet 1</h5>
                                            <div className="row">
                                                <div className="mixed-chart">
                                                    <Chart
                                                        options={data.options}
                                                        series={data.series}
                                                        type="line"
                                                        style={{
                                                            width:"100%"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </> 
                                    : 
                                    value == "2" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 2</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data2.options}
                                                    series={data2.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    value == "3" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 3</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data3.options}
                                                    series={data3.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    value == "4" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 4</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data4.options}
                                                    series={data4.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    value == "5" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 5</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data5.options}
                                                    series={data5.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    value == "6" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 6</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data6.options}
                                                    series={data6.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    value == "7" ? 
                                    <div className="card-body">
                                        <h5>Interface Ethernet 7</h5>
                                        <div className="row">
                                            <div className="mixed-chart">
                                                <Chart
                                                    options={data7.options}
                                                    series={data7.series}
                                                    type="line"
                                                    style={{
                                                        width:"100%"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                            </p>
                        </center>
                        
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Dashboard;