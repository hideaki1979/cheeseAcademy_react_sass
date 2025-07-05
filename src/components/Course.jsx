import React, { useEffect, useRef } from 'react'

const Course = () => {
    const courseBoxRef = useRef([])

    const courseData = [
        {
            id: 1,
            image: "img/course_01.jpg",
            title: "本格的な農園を使った実地研修",
            description: `チーズアカデミーでは、本格的な農園を使った実地研修を
    行うことができます。プロとして活躍するチーズ職人も
    使用するような、広大で環境も整った農園を余すところ
    なく使い、卒業時には本格的なチーズを自分の力で作れる
    実践力の養成を目指します。`,
            reverse: false
        },
        {
            id: 2,
            image: "img/course_02.jpg",
            title: "必要な知識もしっかりと取得",
            description: `チーズ作りには、しっかりとした食に関する知識が
    欠かせません。チーズアカデミーでは、一流講師陣による、
    チーズ作りに必要ないろはを余すところなく学べます。
    チーズそのものでなく、栄養学全般を学ぶことも
    可能ですので、チーズ以外への展開も夢ではないでしょう。`,
            reverse: true
        },
        {
            id: 3,
            image: "img/course_03.jpg",
            title: "卒業制作はティスティング審査あり",
            description: `チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。
    卒業制作として、チーズ作りを実際に行います。卒業後、
    一般参加によるティスティング審査があるため、作り手の
    目線だけでなく、消費者の目線から、卒業制作作品としての
    チーズを、しっかりと評価いただくことができます。`,
            reverse: false
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,  // 要素が10%見えたらトリガー
            rootMargin: '0px 0px -50px 0px' // 少し早めにトリガー
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // ビューポートに入った時：アニメーションクラスを追加
                    entry.target.classList.add('course__box--animate')
                } else {
                    // ビューポートから出た時：アニメーションクラスを削除
                    entry.target.classList.remove('course__box--animate')
                }
            })
        }, observerOptions)

        // 現在のrefs配列をローカル変数に保存
        const currentRefs = courseBoxRef.current

        // 各要素を観察対象に追加
        currentRefs.forEach((ref) => {
            if (ref) {
                observer.observe(ref)
            }
        })

        // クリーンアップ関数
        return () => {
            currentRefs.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref)
                }
            })
        }
    }, [])

    return (
        <section id='course' className='course'>
            <h2 className='entitle'>COURSE</h2>
            <h3 className='jatitle'>コースについて</h3>
            <div className='course__description'>
                <p>
                    未経験からでもスタートができるよう、カリキュラムは多くの専門家や
                    <br />
                    現役チーズ職人のアドバイスのもと、作られました。
                </p>
            </div>

            <div className='course__boxes'>
                {courseData.map((course, index) => (
                    <div
                        key={course.id}
                        ref={(el) => courseBoxRef.current[index] = el}
                        className={`course__box ${course.reverse ? 'course__box--reverse' : ''}`}
                    >
                        <div className='course__image'>
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className='course__content'>
                            <h4 className='course__item-title'>{course.title}</h4>
                            <p className='course__item-description'>
                                {course.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Course