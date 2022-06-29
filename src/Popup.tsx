import React from "react"
import {UserOutlined, StarOutlined, HeartOutlined } from "@ant-design/icons"
import './index.css'

const Popup = ({record, visible, x, y}) => visible &&
  <ul className="popup" style={{left: `${x}px`, top: `${y}px`}}>
    <li><UserOutlined type="user" />{record.name}</li>
    <li><HeartOutlined type="heart-o" />Like it</li>
    <li><StarOutlined type="star-o" />Bookmark</li>
  </ul>

export default Popup