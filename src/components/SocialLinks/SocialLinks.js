import styles from './SocialLinks.module.css';

function SocialLinks (){

    const socialMedia = [
        {
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/landon-linn/",
          icon: "./assets/Icons/linkedin-icon.png",
        },
        {
          platform: "GitHub",
          url: "https://github.com/LandonLinn",
          icon: "./assets/Icons/github-icon.png",
        },
        {
          platform: "Behance",
          url: "https://www.behance.net/landonlinn1",
          icon: "./assets/Icons/behance-icon.png",
        }
      ];

    return (
        <div className={styles.socialLinks}>
            {socialMedia.map(({platform, url, icon}, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={icon} alt={`${platform} icon`} className={styles.icon}/>
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;