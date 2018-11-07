import React, { Component } from 'react';

class Left extends Component {
    clickCar=(e)=>{
        let {getCar}=this.props;
        getCar(e.target.innerText)
    }
    render() {
        let {data}=this.props;
        return (
            <div className='box' onClick={this.clickCar}>
                {
                    data.length>0&&data.map((v,i)=>{
                        return <div key={i}> {v} </div>
                    })
                }
            </div>
        );
    }
}

export default Left;
