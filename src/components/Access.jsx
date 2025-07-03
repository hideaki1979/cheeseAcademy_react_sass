import React from 'react'

const Access = () => {

    const companyInfo = [
        { label: '学校名', value: 'チーズアカデミーTOKYO' },
        { label: '事務所所在地', value: '〒107-0061東京都港区北青山3-5-6 青朋ビル2F' },
        { label: 'TEL', value: '03-5413-5045' },
        { label: 'FAX', value: '03-5413-5046' },
        { label: 'MAIL', value: 'dummy@cheeseacademy.tokyo' }
    ]

    return (
        <section id='access' className='access'>
            <h2 className='entitle'>ACCESS</h2>
            <h3 className='jatitle'>会社情報</h3>

            <div className='access__map-wrapper'>
                <iframe
                    className='access__map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.6556502687954!2d139.7017094344435!3d35.66933613063013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396adb5ba7ce03!2z44K444O844K644Ki44Kr44OH44Of44O85p2x5Lqs!5e0!3m2!1sja!2sjp!4v1728546610827!5m2!1sja!2sjp"
                    frameborder="0"
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='チーズアカデミーTOKYOのMAP'
                />
            </div>

            <div className='access__info'>
                <table className='access__table'>
                    <tbody>
                        {companyInfo.map((info, index) => (
                            <tr key={index}>
                                <th>{info.label}</th>
                                <td>{info.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Access