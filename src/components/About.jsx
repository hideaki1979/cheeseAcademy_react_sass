import React from 'react'

const About = () => {
    // 画像リストを配列で管理
    const aboutImages = [
        'about_01.jpg',
        'about_02.jpg',
        'about_03.jpg',
        'about_04.jpg',
        'course_01.jpg',
        'course_02.jpg',
        'course_03.jpg'
    ]

    return (
        <section id='about' className='about'>
            <div className='about__content'>
                <h2 className='entitle'>ABOUT</h2>
                <h3 className='jatitle'>チーズアカデミーについて</h3>
                <div className='about__description'>
                    <p>チーズアカデミーは、チーズ職人養成学校です。</p>
                    <p>
                        チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。<br />
                        そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
                    </p>
                    <p>そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。</p>
                    <p>
                        卒業後、チーズ自給自足のバックアップはもちろんのこと、<br />
                        チーズ職人への就職・転職もサポートします。
                    </p>
                </div>

                <div className='about__image-carousel'>
                    <div className='about__image-track'>
                        {/* 画像を2セット分レンダリングして無限ループ効果を作る */}
                        {[...aboutImages, ...aboutImages, ...aboutImages].map((image, index) => (
                            <div key={index} className='about__image-item'>
                                <img src={`/img/${image}`} alt="チーズアカデミーの様子" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About