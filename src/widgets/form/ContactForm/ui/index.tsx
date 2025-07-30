import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputNormal } from '@/src/shared/input';
import styles from './style.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ContactFormData, ContactFormProps } from '../types';

// Схема валидации
const schema = yup.object({
  fullname: yup.string().required('Имя обязательно').min(2, 'Имя должно содержать минимум 2 символа'),
  company: yup.string().required('Название компании обязательно'),
  email: yup.string().email('Введите корректный email').required('Email обязателен'),
  message: yup.string().required('Сообщение обязательно').min(10, 'Сообщение должно содержать минимум 10 символов'),
  budget: yup.string().required('Бюджет обязателен'),
}).required();

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const { translations } = useLanguage();
  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px)');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: '',
      company: '',
      email: '',
      message: '',
      budget: ''
    }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    try {
      console.log('Form data:', data);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const result = await response.json();
      console.log('Response result:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Ошибка при отправке формы');
      }

      console.log('Email sent successfully:', result);
      
      if (onSubmit) {
        await onSubmit(data);
      }
      
      reset();
      
      alert('Сообщение успешно отправлено!');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      alert('Ошибка при отправке сообщения. Попробуйте еще раз.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className={`${styles.wrapper} flex flex-col`}>
        {isLargeDevice && (
          <div className={`${styles.formRow} flex`}>
            <div className={`${styles.formItem} flex justify-end`}>
              <h3 className={`${styles.caption} caption-38 text-boldest`}>
                {translations.contacts.step}
                <span className={`text-blue`}>{translations.contacts.dream}</span>
              </h3>
            </div>
            <div className={`${styles.formItem} flex`}>
              <h3 className={`${styles.caption} caption-38 text-boldest`}>
                {translations.contacts.together}
                <span className={`text-blue`}>{translations.contacts.best}</span> :)
              </h3>
            </div>
          </div>
        )}
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.fullname}
              type="text"
              placeholder="Semen Kholodaev"
              required={true}
              {...register('fullname')}
              error={errors.fullname?.message}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal
              title={translations.contacts.company}
              type="text"
              placeholder="Ronix Systems"
              required={true}
              {...register('company')}
              error={errors.company?.message}
            />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.email}
              type="email"
              placeholder="ronix@gmail.com"
              required={true}
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal
              title={translations.contacts.message}
              type="text"
              placeholder="What project do you want?"
              required={true}
              {...register('message')}
              error={errors.message?.message}
            />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.budget}
              type="text"
              placeholder="more then 1.000$"
              required={true}
              {...register('budget')}
              error={errors.budget?.message}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-black hover:text-blue-600 transition-colors disabled:opacity-50"
            >
              {/* {isSubmitting ? 'Отправка...' : `${translations.contacts.send_message}` } */}
              {isSubmitting ? 'Отправка...' : translations.contacts.send_message} &rarr;{' '}

            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
