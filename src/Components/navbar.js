import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='navbar-icon' >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACeCAMA
                            AACcjZZYAAAAjVBMVEUNDQ3///8AAAAKCgoPDw/8/PwEBAT29vbz8/Pt7e35+fnBwcHi4
                            uKgoKAiIiI7OzvMzMyysrIzMzPS0tLp6ekoKChAQEC+vr5HR0fa2tphYWGAgICkpKQuLi6
                            cnJy4uLhPT09ubm4YGBiLi4tycnKRkZGBgYFcXFweHh5fX18XFxdLS0twcHCNjY1VVVUcA
                            ckyAAARd0lEQVR4nO1di3qiOhCWCSAIKgioqGjVelm77fs/3plJSAgat63t7qnI/+22FpN
                            AfiZzybXTadGiRYsWLVq0aNGiRYsWLVq0aNGiRYsWLVq0aNHi/wVjAOydJADuO0keE0gMs
                            NFwg7/gegoYjjKewv63T/fD4QLMA89CeMlybCIQyVuvfEph5YunaxQ/JqCz6FkVkl/njdg
                            GeO1qKcLnlkAJBnPPqmPC6uzALNW/dpDiouWPg8HEuoA3BU29wfIyRW/W8tch9oJLblDANH
                            YgJnm7wL7lD7lZmdhDzKT8EXtO2WZreG75g73Gh+/rSlDKH4zVVS/MQ83IjB6dPzdTXETrD
                            jl2y66SMil/MPK46E2eyOeDdS4FMXl0+pTi82Yi5MCworIkSv6Iv+5BpEAPsJRYx3pw8wEj2
                            WyrduhCX5c/W6TzuiqFjX5MKX8PLn7IlBCjF7i8Wtd/41qKXcnw9KH5g1CwFNdYYCb+zlKUG
                            RePTJ9rl0I0PGNB429tJAherdZ4wEHQl16QgHGG1H+/TQzBuLQ4j0GfuR8Knkuf5fI7LU4ze
                            cdup2TX0EPI+76+46F/Cmx4WcSGVghzwcHERG0lfwb+GHSv0QfuMt41qUPGFqK0umyi16UPC
                            dLl77x71D2WJvsipzugGMUbN4c/qagOyIJb+2ImvgjN5qHib36eALWmZdCaKIow4VJ7qU7vF
                            rJXAM0kq0kFypDZ8pb5qva7PTfNsbge1LxBGLEOlHmeGsMfRKKuDjCIanpOum9nyk/+pbxj4
                            k9XcjAoOw5etYxQ+GtAfSCyNKc7S9JnvQFsa/VS7fOgXWSgbIXWfre1FLJEvc8ZcjQkUiwb1
                            JulqoQGcVpz1VSHS69q1ACBtSz/Yih/Eq9Q6k0bSm3g1LxmjJ9Rh0p5roeBdw0VQwQoHVzRK
                            b9CMYvWAb015gIMEuSlr8mfbL8x8gaYALLIKrtPlYKDDcNAhMqXqZszFiLdOy4dPjZDyGUoW
                            zog3IhuxwDHWSzqv7zQf47Vi38Pi/G86twPlJDGSxLaPkgjbzmnxnjO8FbWqUu2AyuNMie7n
                            xS1vM5aT3Jf4+8KPNtVSVCt+qjvpCdJt/pf6voXAENZ4cyFheVTJaPL5ltHL5P1P+OvGvFQ6
                            g16HjZpbpqkrTG7kncJdpIV/gXEhQ14YSMdaDN/ethwRf6qsaQZvg1ywQeuKswUyNwpbJCNc
                            s9b1wwgrRwLZmInrY0CqSapoVv5OmiIUZ/2yaaj8yJwGSHeL5Q3gQr+hf+MdU8Z3sIzbhZnI
                            T8Mk7MUk6OW30drjsGasEyyhH9Wu78OkJVfcc9lAmgwPE23A+z1SRirkWGOyzrXUiRvUAXPa
                            G097vChFwgyxXmUd89Q0zBEBVOgIaKXWhgBT/2EhiPTYH809jahT7KLSLb8aDmqpcDGnwBzH
                            Xw5bkfSZ+6kvk+guRXwwQaPOunw5/KsfVa4VsqVFOgLrbjD16egpkSDOqzUyITVE1EV+i+5y
                            Tayd301ZkgCnLg5jwnXkr7MNeS+U6BTofrWkbi8YDZk3zbEPXgCFOq1R+ZXTvlw3n8T9wMyt
                            wIM4yuh9t1va12snJ6wnYPygRo1hASFpG/osr8wDCEkDQtWnRMNCjpIPuoanav/71NOvDhOo
                            bJRDQo6Op3Km+WhAkyjNI0H31VDOCR+KBxtFbPFzaJP+rxzQBdYhGBe9j1VLM1FaDPtPstm0
                            RdUUsFEBOygfmLfsDyDesMc+jdRRVtNGukgqEaFoRr8lorwO8J6NV7OOxNnsuhmTfyrhnzWl
                            XPhXA7ffhoMEtUBeHKrWebmkc97RdXjFEIlIpbz5el5ytRSQKgmW1rWsUFBB9bySUncmjr7q
                            ip/LTjAIE11Pi+hmqTfa05XPaHqrrdyQGWv6vy1+XkwqgZHUl34/Ea13Q6zVc1oPEdbytH/Q
                            kWZJsfoUaqxc3pH3/fsPwHKo7AcH9yTWt73lcnx2nokclvkrCFC0DT6wqqmO+oYceRfzs3es
                            z5G0t0AaD3+zQo6tGkuRNkJQBu6CG9U82r0mLCH2oBxs4KOs5Vr2NAqU+Lc6D3D0assUA5up
                            6cteWtW0FGbqmLx4eyF9vdN3rMuwNYU6qPFzZkfJKD5yqK9akbTuaW2mr/MxzWf9PJNE8bvG
                            szWpY+sh86nb3+Wv2pQw6JA2oXaSHHzVnvotsOimLS2Cjr/pLjAWH8ZM6jrhm+IpX8aauJC8
                            gFHXddHn+rCh7G+L0SkWyIhjQ1rux3d8+PY0zxdDeHHpzOy+pQXZwBnZe8u1jHcP1C51xbTj
                            6jS2hVn/UGZcWtGlnvh9TlGtzqSPxs1W8m7DqY1+tB+fqTacKqxTj1g9abb0EWqes8m4RXOZ
                            /YFH+APsrSeaVpvuk7jXGYJ105r9RwD1La/cdAIvMcfjLp1HRCfW90mzUyrAwp9qyVqdq9WH
                            e/JHwz8sxynmsP8kTdwv4BfdbKKujOItY//WHtWtzaE7dSva8Lmsof8bcsdba7ij4uBTNs11
                            dj3vm3s/WfizPwaKLju/9kwv9yMqX6hOesAzWBnwdslrs9OcU+9d/I2L1g7R218woirvffXV
                            oAoNNfoVoDsHRm6NresmuV2BR9xG+8edq2T/RJXB4+ubEOn0d6oofGrqAaKrkmRKVc1mcXMu
                            tecJZTv4B3za54iUO+vvkTTjW4FMr9/kj/jmow/Go7vmG10N7AZnK/CqlFhHKX9s8X+ymSF+
                            wNk3Wvy5zhG2/snu+s8htHVcN38OsifgQx9LtUFmh3pmkCTAgx8OATT7Lx6135d9rzTQzVdj
                            tpAuS56iOIz9DW1e/kdmKJfR/C3MTTe6/Q1Z8eWz8Bkfjl7jmU4VOK629e06UAfBRzrcYRTw
                            ug3n48HKTRtKt+HYVcrBTl7kkDj1NprjsvjGd0KF2MdwnKY/D53YKbv+KjC1zHskHGdPtYxu
                            30PzJ428cXRf5kmSJk7XAy7Rz4Q1MibUxtAMvbXw/mRKBy9h6ZPhW6OpQUhRmMK5yO8HA1bw
                            PE5lN4It7naCKZxzMLcSdOgLUo/DzSnJXUy3vgDfef7CHE0bf3Lp8AX6TsKkhNjHGE+k6el7
                            4w768oGSuYZBs2bxfwJcG/kkj5jx7v5TKNmbfnwWUBu4uTNSJ/hsLHHGBm/DhjGqwkiiJIKS
                            2MYy2C5IsQLjj7H9oEjXgKYYE7KTEkfm70WLVq0aNGiRYsWLVq0aNGixT3jp3ZsfPS5bl2b/
                            4V6a/1HMB5cKeedXeb/MmC4kR+Nu0FXB0rdRIMN4+Ot/MEz9Uku8ccSTsYzOCnRgRL0F/Xed
                            fsf0ekWahI5y/LLReSw3YlrENfPffrg88Hw9s5s6OeL57z3axklMLg2cR0Sa9uPg7B2FxsO/
                            2bCIlZvJw+MOhhGPSAWC5RgZA206aoM5h9bAwLT2iGEn3w4RNDl23sP6DHV+9MOLcAHlI2XX
                            xTTGsH3aEthuiKTuuIDQy3EQBSikstvWUe71GHlp/In69TLIzqQvi2U6eAJ2xlTJYunW4gdX
                            TCdoE88ObKpve5KLG15T+aKYpA+bFbs5qVeEPApJEjfFiATe/Sjkiky2UkOq3ISvA0nwG8yI
                            hLATzAB2Pg/42ThF4X4Bi916CN9iwVRZhfcER1wgl9R2YzvwUKfRJaBeAJgPAvLMAt+GtKBJ
                            0jLngrht9gAHZGHGGSybUJ/wud7QMHpAziNNuDaSN+WHkRu/07li6c7FsCLPwKvCtL3jBezW
                            7eXholV0jd/zkOuaBhMwknul+t+iD7xYW2F8OqntBnXW+p4eXja4aPnOe1rAbs0Crwl7Xixh
                            iC1enz31/Xv0PeRBTvBAtM3eEJRmacpV7MMYj+IvD3t7EUCwGjHB886zHMvPIEdhEHibWkDkv
                            Ucnws1C1KyQx3TK455aqXlUSeAapkmPrtHK0PWpmE+CZMBLDFFGEBIN4KAhvUwN/J0SJMgXf
                            EDReYz/mxTa50loZXeuA1vRV8c055dazptIwfau0KsvyP6RNstZlZ/QsdgPdPmaBG2+GxrBW
                            NYdWmvuUzwMMyj1Zw2r7KhyBNM1MNiffwNq559fLKWEW0LS4QHPtB+hi8oOKTeoIuabZgGAY
                            C1hFUIdK5JRqo9pnvOUDbxxW2mzjJ/wRJDSV8MnoPkA52vMqIzUSDEvAU/0LFPDQe4UPCqHY
                            hC/jSjJMEbdVdEXz4A+9a9KCv66Mw98AKq0hgb0awcyUbdF69WK/H6aRNh6AV0WlVEzXNN2x
                            wGKRcMTEt/TXoTzE0aGTk8IBc7fBPUaPd0FoDlgIuZ8f38Ip0PY9pLWNDnYYkQWUNgWMkQU7
                            BiwpA+nxq1ww+QiukEH5RJmrJansuAL5ROcOsAHeAWePRQC4uO5aFUL0gZyuUuxc9xjxOLOu
                            g3PdaKzpPDm0+tcITPe+vu5hV9ARVNjx316JDNZbl+Eembz/f7Z66H6B1Bmpf0UXvG9jU7wp
                            a2S0PpW9JZYE9UB2qKEYrgYM2f2qUHLmDDZ1xA5EFpkeYkD3zCC5Vo83uPZiQ3MR+jVPeMBH
                            00BZBe4S/5cvsB3RJFzRrg/wndKO+V9CHXK5TcsLA2DPwVZNyesA6VvbI2cJyR7qOS57cu1q
                            zo43XIUfBTPyteFtJ0VY23dCKobVf0zbhBiK2XbLx3Evw44ZYG6JRK5IKMMHj5oHiLMTPbUK
                            k2t/aJM8xeluJA1UVFn8+z0Ia5zmID6p5hIunrUrPF9r8r6YuQsR6+J2zoIyvGG0W0WR2nD1
                            89KohJDM4zfjdDqrZc6dJ+bFgrm558Sq98efO6kYo+fr+E6PPiYLIcn1te4UQIiiv6xOEc2M
                            CDIJ6RXAhLTq2B00efvRQL3I1QwW/ESxL04cXFG7VMQV9X0sfzwCyheURuec+QXpmgLxH0vS
                            r6xAGMDtGXrILV9sSVAs/2C1uFPwNUqPsunb73WtHniON7plY/Dm8/c8tAX9ITg/slafEH6N
                            vRNlPcZRH0YTvpV/SFKXct0SXbCKaIvlKoWSl9jOS1I+mDAj2YpxAl5gp983I5P/T5nytr5m
                            cYOQX8Roo+1NOvA7zP3KMDvzGCWQr6Yp2+1RPXiV+lbyfp2/FHg8HQVfQxkD6YRh+r6BuXHs
                            8bKSJ0TNFOoHmMulJ7DsFmUIxAo++ZF+bCE1B1bCyqog/VPbm0NqYu71nR56WgNQlBHzoCvo
                            +WN3G4knmhNrnnOiSI5jkdrJpxLZMm4p3/rugbkvKdkTPxRfp4s0pSMm5drPsxKU0HGTIo3t
                            bkg70q+vCFDV18EuEdoqoiR2GxI/rQL9x4dFZgJJYOuceej85qkReKPvwC/Qk0gHaA5eJNgU
                            VRTkvQS+njHsYR6zwqdV9OUrripmNNRkpq5gWfPElH32XkESUotS85OS4LGPH3Gy2Jt7gr3z
                            aQ7maKvhHZIMi74+wm/lA0jjxS4r4sFxjIEsvzumUfAcydlLaQSuklcitIbZJWa0yoGuUujr
                            QFhu+QYxF4uzyxEgy5yqJJOEPL9zxyKXnYymUH7Mjqet0dtTQvDfLxno6TCIRUwbwbxZNwS2
                            4Hv2fuE3P0TrqTSZIrNw0iPnnS5g4kKkHf8rspnewdWCIa6/LrscgAc3+1CCObkVDwZ2PcGt
                            MWY7eZXnYaiioOiX42GPLQppihLpMn44q2S29vyJk+8jTFlP9U5xPbhze7lKxiJs7vVN+im0
                            oF0hV+l9OYt9vB4UVEY/BGUoGls1O5ThXfzOxNmHt+z8HI7bgFfgndAMazgWxr7rCUGhiLbN
                            PDUJQ55sfXQjEU0ik0Od5pxsPIDhuVN+IdVhQ+3sJepwzvO2V/WfmXq08LYwJnaUR4XK2LZC
                            IL0eeWEakWict5Zq7xLiIv/VdZmDpXrArxqROBDLR+gJl6AFDZ5B071WMyWR0m86oblc/1Q/
                            aHgcC51Yp9rPxuo6c6l6bo75XvN3qZh1v83QOsYNrsvXC+71hPM/6vQZcWLVq0aNGiRYu7wH
                            904d+xM6IDqQAAAABJRU5ErkJggg==" alt="TEN logo"></img>
                            
                        </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
             
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;