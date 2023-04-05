import styles from 'public/SocialHeader.module.css';

const SocialHeader = () => {
  return (
    <div className={styles.socialHeader}>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook"></img></a>
        <a href="https://www.instagram.com"><img src="/public/instagram.png"></img></a>
        <a href="https://www.twitter.com"><img src="/images/twitter.png" alt="Twitter"></img></a>
      </div>
    </div>
  )
}

export default SocialHeader;
