import $ from 'jquery'
import './app2.css'
const $tabBar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')
$tabBar.on('click','li',(e)=>{
    const $li=$(e.currentTarget);
    $li.addClass('selected')
       .siblings()
       .removeClass('selected')
    const index=$li.index()//找到点击元素的下标
    //$tabContent.children().eq(index).css({display:'block'}).siblings().css({display:'none'})
    //找到tabContent的子元素，并定位到第index个子元素，并设置他的css，再找到他的兄弟姐妹，并设置css
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')