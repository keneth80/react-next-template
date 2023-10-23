import Image from 'next/image';
import styles from './styles.module.css';
import {Photo} from '../../../app/photos';

export default function Frame({photo}: {photo: Photo}) {
    return (
        <>
            <Image alt="" src={photo.imageSrc} height={600} width={600} className="w-full object-cover aspect-square col-span-2" />

            <div className="bg-white p-4 px-6">
                <h3>{photo.name}</h3>
                <p className={styles['my-custom-style']}>Taken by {photo.username}</p>
            </div>
        </>
    );
}
