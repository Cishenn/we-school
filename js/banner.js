
//首页banner轮播
function getBannerImage(pageType, defaultClassName) {
    // pageType参数 6: "官网首页" 7: "秀购简介" 8: "新闻中心" 9: "我有流量" 10: "我有产品" 11: "招商合作" 12: "帮助中心" 13: "加入我们"
    // let params = { type: 26, showPage: pageType }
    IGrow.ajax({
        // type: 'POST',
        // url: '/gateway/advertising/queryAdvertisingList',
        // data: JSON.stringify(params),
        success: function (res) {
            if (res.data && res.data.length) {
                $('.swiper-wrapper')[0].innerHTML = ''
                res.data.forEach(function (item) {
                    let domNode = '';
                    $(defaultClassName).hide()
                    $('.swiper-container').show()
                    if (item.linkType === 13) {
                        domNode = $('<div class="swiper-slide"><p class="img" style="background-image:url(' + item.image + ');"></p></div>')
                    } else if (item.linkType === 6) {
                        domNode = $('<div class="swiper-slide"><a class="img" href="' + item.linkTypeCode + '" style="background-image:url(' + item.image + ');display:block"></a></div>')
                    } else {
                        domNode = $('<div class="swiper-slide"><a class="img" href="/news/detail?code=' + item.linkTypeCode + '" style="background-image:url(' + item.image + ');display:block""></a>/</div>')
                    }
                    $('.swiper-wrapper').append(domNode)
                })
            } else {
                if (defaultClassName !== '.index-banner') {
                    $('.swiper-container').hide()
                    $(defaultClassName).show()
                }
            }
            var swiper = new Swiper('.banner .swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                loop: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false
            });

        },
        error: function (res) {
            $('.swiper-container').hide()
        }
    })
}
