import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreIcon from '@mui/icons-material/More';
import SidebarOption from './SidebarOption';
import Button from '@mui/material/Button';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* アイコン */}
        <TwitterIcon className='sidebar_twitterIcon'/>

        {/* サイドバー要素 */}
        <SidebarOption text="ホーム" Icon={CottageIcon}/>
        <SidebarOption text="話題を検索" Icon={SearchIcon}/>
        <SidebarOption text="通知" Icon={NotificationImportantIcon}/>
        <SidebarOption text="メッセージ" Icon={EmailIcon}/>
        <SidebarOption text="ブックマーク" Icon={BookmarkAddIcon}/>
        <SidebarOption text="リスト" Icon={ListAltIcon}/>
        <SidebarOption text="プロフィール" Icon={AccountBoxIcon}/>
        <SidebarOption text="もっとみる" Icon={MoreIcon}/>

        {/* ツイートボタン */}
        <Button className='sidebar_tweet' >ツイートする</Button>
    </div>
  )
}

export default Sidebar
