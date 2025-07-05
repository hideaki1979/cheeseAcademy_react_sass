import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        kana: '',
        email: '',
        chance: '',
        motivations: {
            startBusiness: false,
            findWork: false,
            makeWork: false,
            education: false
        },
        detail: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        setFormData(prev => ({
            ...prev,
            motivations: {
                ...prev.motivations,
                [name]: checked
            }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // フォーム送信処理（実際の送信処理は実装しない）
        console.log('フォームデータ：', formData)
        alert('お問い合わせ内容を送信しました！')
    }

    return (
        <section id='contact' className='contact'>
            <h2 className='entitle'>CONTACT</h2>
            <h3 className='jatitle'>お問い合わせ</h3>

            <div className='contact__description'>
                <p className='contact__description-main'>
                    ぜひ1度、足を運んでみませんか。説明会は随時開催中。<br />
                    その他、お問い合わせもお気軽にどうぞ。お待ちしております。
                </p>
                <p className='contact__description-note'>
                    ※チーズアカデミーは実際には存在しません。<br />
                    間違っても問い合わせしないようお願いいたします。
                </p>
            </div>

            <form className='contact__form' onSubmit={handleSubmit}>
                <table className='contact__table'>
                    <tbody>
                        <tr>
                            <th className='contact__item'>
                                <label htmlFor='name'>
                                    名前
                                </label>
                            </th>
                            <td className='contact__body'>
                                <input
                                    id='name'
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='contact__input'
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className='contact__item'>
                                <label htmlFor='kana'>
                                    カナ
                                </label>
                            </th>
                            <td className='contact__body'>
                                <input
                                    id='kana'
                                    type="text"
                                    name='kana'
                                    value={formData.kana}
                                    onChange={handleInputChange}
                                    className='contact__input'
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className='contact__item'>
                                <label htmlFor='email'>
                                    メール
                                </label>
                            </th>
                            <td className='contact__body'>
                                <input
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='contact__input'
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className='contact__item'>
                                <div className='contact__item-multiline'>
                                    <p>チーズアカデミーを</p>
                                    <p>知ったきっかけ</p>
                                </div>
                            </th>
                            <td className='contact__body'>
                                <div className='contact__select-wrapper'>
                                    <select
                                        name='chance'
                                        value={formData.chance}
                                        onChange={handleInputChange}
                                        className='contact__select'
                                        required
                                    >
                                        <option value="">選択してください</option>
                                        <option value="google">Google検索</option>
                                        <option value="sns">SNS</option>
                                        <option value="referral">紹介</option>
                                        <option value="passing">たまたま通りかかった</option>
                                        <option value="other">その他</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className='contact__item'>志望動機</th>
                            <td className='contact__body'>
                                <div className='contact__motivations'>
                                    <label className='contact__motivation'>
                                        <input
                                            type="checkbox"
                                            name='startBusiness'
                                            checked={formData.motivations.startBusiness}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className='contact__motivation-text'>起業をしたい</span>
                                    </label>
                                    <label className='contact__motivation'>
                                        <input
                                            type="checkbox"
                                            name='findWork'
                                            checked={formData.motivations.findWork}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className='contact__motivation-text'>チーズ系企業に就職・転職したい</span>
                                    </label>
                                    <label className='contact__motivation'>
                                        <input
                                            type="checkbox"
                                            name='makeWork'
                                            checked={formData.motivations.makeWork}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className='contact__motivation-text'>チーズと関わる仕事をしており、仕事に生かしたい</span>
                                    </label>
                                    <label className='contact__motivation'>
                                        <input
                                            type="checkbox"
                                            name='education'
                                            checked={formData.motivations.education}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className='contact__motivation-text'>チーズの教養を身につけたい</span>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className='contact__item'>詳細</th>
                            <td className='contact__body'>
                                <textarea
                                    name='detail'
                                    value={formData.detail}
                                    onChange={handleInputChange}
                                    className='contact__textarea'
                                    placeholder='ご質問やご要望をお聞かせください'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type='submit' className='contact__submit'>
                    送信
                </button>
            </form>
        </section>
    )
}

export default Contact