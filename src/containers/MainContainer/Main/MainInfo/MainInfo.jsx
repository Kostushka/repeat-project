import UiPreloader from '../../../../components/UI/UiPreloader';
import mainImg from '../../../../assets/mainPhoto.jpeg';
import profileImg from '../../../../assets/mainPhoto.jpeg';
import MainStatus from './MainStatus';

import styles from './MainInfo.module.css';

const MainInfo = ({ profile, status, updateUserStatus }) => {
    if (!profile) {
        return <UiPreloader />;
    }
    return (
        <>
            {/* <img className={styles.img} src={mainImg} alt='main' /> */}
            <MainStatus status={status} updateUserStatus={updateUserStatus} />
            <div className={styles.main}>Основная часть</div>

            <div className={styles.container_info}>
                <img
                    className={styles.profile}
                    src={profile.photos.large || profileImg}
                    alt='profile'
                />
                <p>
                    <span>Имя:</span> {profile.fullName}
                </p>
                <p>
                    <span>Обо мне:</span> {profile.aboutMe}
                </p>
                <p>
                    <span>Статус:</span> {profile.lookingForAJobDescription}
                </p>
                <div>
                    <span>Контаты:</span>
                    <div>
                        {profile.contacts.facebook ? (
                            <a href={`https://${profile.contacts.facebook}`}>
                                facebook
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.github ? (
                            <a href={`https://${profile.contacts.github}`}>
                                github
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.instagram ? (
                            <a href={`https://${profile.contacts.instagram}`}>
                                instagram
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.mainLink ? (
                            <a href={`https://${profile.contacts.mainLink}`}>
                                mainLink
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.twitter ? (
                            <a href={`https://${profile.contacts.twitter}`}>
                                twitter
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.vk ? (
                            <a href={`https://${profile.contacts.vk}`}>vk</a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.website ? (
                            <a href={`https://${profile.contacts.website}`}>
                                website
                            </a>
                        ) : null}
                    </div>
                    <div>
                        {profile.contacts.youtube ? (
                            <a href={`https://${profile.contacts.youtube}`}>
                                youtube
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainInfo;
