import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { FilterR, Reload } from '../redux/action'
import { Link } from 'react-router-dom';






class mainRecord extends Component {
    state = {
        city: ""
    }

componentDidMount()
{
    console.log("venom")
    this.props.dispatch(Reload())   
}

    button(e) {
        let val = e.woeid
        this.setState({ city: e.title })
        console.log(val)
        this.props.dispatch(FilterR(val))
    }



    render() {
        const Harray = ["City Name", "Location Type", "woeid", "Latt. & Long.", "Check Weather Details"];
        return (
            <>
                <div>

                    <h2 style={{ marginLeft: "10px" }}>CITY RECORD</h2>
                    <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>

                        <Table style={{ minWidth: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "red" }}>
                                    {Harray.map((item) => (
                                        <TableCell align="center"><b>{item}</b></TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.data.Wdata.map((row) => (
                                    <TableRow >
                                        <TableCell component="th" scope="row" >
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center">{row.location_type}</TableCell>
                                        <TableCell align="center">{row.woeid}</TableCell>
                                        <TableCell align="center">{row.latt_long}</TableCell>
                                        <TableCell align="center"><Link to={{pathname:"/weather",record:row.title}}><Button variant="contained" color="primary" onClick={()=>this.button(row)}>Check
                                    </Button></Link></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state

    };
}
export default connect(mapStateToProps)(mainRecord);

