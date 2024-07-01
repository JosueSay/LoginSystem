import styles from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import IconLogo from '@public/logo.png'

const Login = () => {
    return (
        <div className={styles.LoginContainer}>
            <div className={styles.HeaderContainer}>
                
                <div className={styles.LogoContainer}>
                   <img src={IconLogo} alt="CLINICA LOGO" className={styles.Logo} />   
                </div>
            </div>
            <div className={styles.ContentContainer}>
                Contenido
            </div>
            <div className={styles.FooterContainer}>
                Footer
            </div>
        </div>
    )
}

export default Login;