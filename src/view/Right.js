import React, { Component } from 'react'

class Right extends Component {
    render () {
        let{rightData}=this.props;
        return (
            <div className='box1'>
                {
                  rightData.length>0&&rightData.map((v,i)=>{
                      return <div key={i} className='box2'>
                          <p>{v.name}</p>
                          <p className='op'>{v.type}</p>
                      </div>
                  })  
                }
            </div>
        )
    }
}

export default Right