import cameraPhoto from '../../assets/images/camera.jpg';
import cameraPhoto2 from '../../assets/images/camera2.jpg';
import cameraPhoto3 from '../../assets/images/camera3.jpg';

const chatMock = {
  profiles: [
    {
      avatar: cameraPhoto,
      firstName: 'Андрей',
      lastName: '',
      message: 'Изображение',
      count: 2,
      date: '10:49',
      isMine: false,
    },
    {
      avatar: '',
      firstName: 'Design',
      lastName: 'Destroyer',
      message: 'В 2008 году художник Jon Rafman  начал собирать...',
      count: 0,
      date: 'Пн',
      isMine: false,
    },
  ],
  profileDetails: {
    firstName: 'Вадим',
    lastName: '',
    avatar: cameraPhoto2,
    rangeMessages: [
      {
        date: '18 июня',
        letters: [
          {
            createdDate: '11:56',
            text: 'Здарова',
            isMine: true,
          },
        ],
      },
      {
        date: '19 июня',
        letters: [
          {
            createdDate: '11:56',
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            image: cameraPhoto3,
          },
          {
            createdDate: '12:01',
            image: cameraPhoto2,
            text: 'Круто че тут еще сказать',
            isMine: true,
          },
        ],
      },
    ],
  },
}

export const chatContext = {
  contentShow: true,
  ...chatMock,
};
