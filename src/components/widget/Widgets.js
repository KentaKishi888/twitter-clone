import { Search } from '@mui/icons-material';
import React from 'react'
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className='widgets_input'>
        <Search className='widgets_searchIcon'/>
        <input placeholder='キーワード検索' type="text"/>
      </div>
      <div className='widgets_widgetContainer'>
          <h2>いまどうしてる？</h2>

          {/* react-twitter-embed埋め込みライブラリを追加 */}
          {/* ①ツイート埋め込み */}
          <TwitterTweetEmbed tweetId={"1531882457741463553"}/>
            {/* ②タイムライン埋め込み */}
          <TwitterTimelineEmbed sourceType='profile' screenName='rizin_PR' options={{height:400}}/>
            {/* ツイートボタン埋め込み */}
          <TwitterShareButton url={"https://twitter.com/rizin_PR"} options={{text:"#模索中", via:"rizin_PR"}}/>

      </div>
    </div>
  )
}

export default Widgets
