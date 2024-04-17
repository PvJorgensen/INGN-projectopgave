import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer>
        <div className={styles.footerwrapper}>
        <div>
            <h5>Adresse:</h5>
            <p>Nyhedernes nyheder ApS</p>
            <p>Brandvej 232</p>
            <p>9220</p>
            <p>Aalborg Ø</p>
        </div>
        <div>
            <h5>Links</h5>
            <p>Tv50.dk</p>
            <p>Nyhederne.dk</p>
            <p>Kanyt.dk</p>
            <p>Mednyt.dk</p>
        </div>
        <div>
            <h5>Politik</h5>
            <p>Privatlivspolitik</p>
            <p>Cookiepolitik</p>
            <p>Købsinformation</p>
            <p>Delingspolitik</p>
        </div>
        <div>
            <h5>Kontakt</h5>
            <p>ingn@nyhed.dk</p>
            <p>telefon: 88888888</p>
            <p>fax: 982982-666</p>
            <p>Brevdue signal: pip pip</p>
        </div>
        </div>
    </footer>
  )
}
