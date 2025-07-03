import React from 'react'

const News = () => {
    // ニュースデータを配列で管理（リファクタリング）
    const newsData = [
        {
            id: 1,
            date: '2016/11/18',
            title: 'チーズアカデミー卒業生のコスゲさんによる',
            description: 'チーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が渋谷でオープンしました！',
            image: '/img/news_img.jpg'
        },
        {
            id: 2,
            date: '2016/10/15',
            title: 'チーズアカデミー新コース開始のお知らせ',
            description: '初心者向けのベーシックコースが新たに開講されます。より多くの方にチーズ作りの楽しさを体験していただけます。',
            image: '/img/news_img.jpg'
        },
        {
            id: 3,
            date: '2016/09/28',
            title: 'チーズフェスティバル開催決定',
            description: '毎年恒例のチーズフェスティバルが今年も開催されます。卒業生の作品展示や試食会も予定しています。',
            image: '/img/news_img.jpg'
        }
    ]

    const handleMoreClick = () => {
        // 実際のプロジェクトではページ遷移やモーダル表示などを実装
        const newWindow = window.open('https://www.google.co.jp/', '_blank')
        if (newWindow) {
            newWindow.opener = null
        }
    }

    return (
        <div id='news'>
            <p className='entitle'>NEWS</p>
            <p className='jatitle'>ニュース</p>

            <div className='news-boxes'>
                {newsData.map((news) => (
                    <div key={news.id} className='news-box'>
                        <div className='news-box__picture'>
                            <img src={news.image} alt={`ニュース：${news.title}`} />
                        </div>
                        <div className='news-box__description'>
                            <p className='news-box__date'>{news.date}</p>
                            <p className='news-box__text'>
                                {news.title}<br />
                                {news.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='news-more-wrapper'>
                <button
                    type='button'
                    className='news-more'
                    onClick={handleMoreClick}
                >
                    more
                </button>
            </div>
        </div>
    )
}

export default News