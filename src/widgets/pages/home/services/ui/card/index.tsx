import { useLanguage } from '@/src/context/LanguageContext'; // Подключаем контекст
import { ServiceProps } from '../../types';
import { LinkUnderline } from '@/src/shared/action';
import { ImageFlow } from '@/src/shared/image';
import styles from './styles.module.scss';

const ServiceCard = ({ index, service }: ServiceProps) => {
  const { translations } = useLanguage(); // Получаем переводы из контекста

  // Используем локализованные значения для названия и описания сервиса
  const serviceTitle = translations.services[service.slug]?.title || service.title;
  const serviceDescription = translations.services[service.slug]?.description || service.description;

  return (
    <div className={`${styles.card} ${index % 2 && styles.reverse} flex`}>
      <div className={`${styles.title} flex flex-col`}>
        <h3 className={`caption-60 text-light`}>{serviceTitle}</h3>
        <li className={`text-bold text-18 text-blue list-disc`}>0{index + 1} /</li>
      </div>
      <div className={`${styles.description} flex flex-col`}>
        <p className={`text-20 text-light text-pretty`}>{serviceDescription}</p>
        <LinkUnderline title="Learn more" href={`/services/${service.slug}`} />
      </div>
      <div className={`${styles.imageWrapper} flex`}>
        <ImageFlow
          classNames={{ image: `${styles.image}`, wrapper: `${styles.flowWrapper}` }}
          src={service.image}
          alt={service.title}
          unoptimized
        />
      </div>
    </div>
  );
};

export default ServiceCard;
