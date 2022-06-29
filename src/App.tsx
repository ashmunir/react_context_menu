import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './Popup'
import {Table} from 'antd'
import {columns, data } from './data'
import 'antd/dist/antd.css'

interface IProps {

}

interface IState{
  popup:{
    record:{},
    visible: boolean,
    x: number,
    y:number
  }
}

export default class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props)
    this.state = {
      popup: {
        record:{},
        visible: false, 
        x: 0, y: 0
      }
    }
  }
  onRow = (record:{}) => ({
    onContextMenu: (event:React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      if (!this.state.popup.visible) {
        const that = this
        document.addEventListener(`click`, function onClickOutside() {
          // that.setState({popup: { visible: false}})
          // console.log('state', this.state)
          document.removeEventListener(`click`, onClickOutside)
        })
      }
      this.setState({
        popup: {
          record:record,
          visible: true,
          x: event.clientX,
          y: event.clientY
        }
      })
    }
  })
  
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} onRow={this.onRow}/>
        <Popup record={this.state.popup.record} visible={this.state.popup.visible} 
        x={this.state.popup.x} y={this.state.popup.y} />
      </div>
    )
    
  }
}

          