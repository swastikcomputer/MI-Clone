import React from 'react'
import "../Styles/PreNavbar.css"
const CartIcone=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
const PreNavbar = () => {
    return (
        <div className="preNav">
        <div>   
            <a href="https://www.mi.com/in/">Xiaomi India</a><span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store">Get Mi Store App</a><span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">Online Help </a><span>|</span>
            <a href="https://www.mi.com/in/service/authorized_stores/">Retail Store﹀</a>
        </div>
        <div>
            <a href="https://store.mi.com/in/site/login">Sign in</a><span>|</span>
            <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">Sign up</a><span>|</span>
            <a href="https://store.mi.com/in/site/login">{CartIcone}Cart (0)</a>
        </div>
        </div>
    )
}

export default PreNavbar
