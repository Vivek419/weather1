import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import Header from './header'






class days extends Component {
  state = {
  }
  componentDidMount()
  {
      var name=this.props.location.record
        
  }



  render() {
    const Darray=["Date","Max Temp","Max Temp","Temp"," Weather State Name","Weather State Abbr","Humidity","Wind Speed","Wind Direction Compass","Air Pressure"]
    return (
          <div >
            <div><Header/></div>
            <h2 style={{ marginLeft: "10px" }}>5 Days Weather Report of&nbsp;<i>"{this.props.location.record}"</i></h2>
            <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>
              <Table style={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "red" }}>
                      {Darray.map((item)=>(
                    <TableCell align="center"><b>{item}</b></TableCell>))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data.consolidated_weather.slice(0, 5).map((row) => (
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {row.applicable_date}
                      </TableCell>
                      <TableCell align="right">{row.max_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.min_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.the_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.weather_state_name}</TableCell>
                      <TableCell align="right">{row.weather_state_abbr}</TableCell>
                      <TableCell align="right">{row.humidity}%</TableCell>
                      <TableCell align="right">{row.wind_speed.toFixed(2)}</TableCell>
                      <TableCell align="right">{row.wind_direction_compass}</TableCell>
                      <TableCell align="right">{row.air_pressure}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      data: state
  
    };
  }

export default connect(mapStateToProps)(days);

