import React from 'react'
import footerimg from '../Asset/saei1.png'
export default function Footer() {
    return (
        <>
            <footer>
                <div class="f1">
                    <p id="pow">Powered By</p>
                    <img src={footerimg} id="saei" alt='footer'/>
                </div>
                <div class="f2">
                    <p id="copy">Copyright &copy; SAE - All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
