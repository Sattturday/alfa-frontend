export const dirOptions = [
  { key: '1', content: 'Фронтенд' },
  { key: '2', content: 'Бэкэнд' },
  { key: '3', content: 'Дизайн' },
  { key: '4', content: 'QA' },
  { key: '5', content: 'BA' },
  { key: '6', content: 'SA' },
];

export const dirAllOptions = [
  { key: '0', content: 'Показать все' },
  { key: '1', content: 'Фронтенд' },
  { key: '2', content: 'Бэкэнд' },
  { key: '3', content: 'Дизайн' },
  { key: '4', content: 'QA' },
  { key: '5', content: 'BA' },
  { key: '6', content: 'SA' },
];

export const samplesData = [
  {
    id: '1',
    title: 'Проснись',
    description: 'Встань с кровати',
    linkURL: 'https://www.example/',
    department: 'Фронтенд',
  },
  {
    id: '2',
    title: 'И пой',
    description: 'Попробуй',
    linkURL: 'https://www.example/',
    department: 'QA',
  },
  {
    id: '3',
    title: 'Выпей чаю',
    description: 'Черного',
    linkURL: 'https://www.example/',
    department: 'BA',
  },
  {
    id: '4',
    title: 'Смотри',
    description: 'За собой',
    linkURL: 'https://www.example/',
    department: 'Бэкэнд',
  },
  {
    id: '5',
    title: 'Учись',
    description: 'Работа с компонентами',
    linkURL: 'https://www.example/',
    department: 'Фронтенд',
  },
  {
    id: '6',
    title: 'И еще',
    description: 'Прочитай книгу',
    linkURL: 'https://www.example/',
    department: 'Фронтенд',
  },
];

export const IDPcardsData = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Designer',
    title: 'Название ИПР',
    goal: 'Повышение скиллов',
    description:
      'Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимнюю пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную пору я из лесу вышел, был сильный мороз.',
    deadline: '2024-01-22',
    status: 'InWork',
    deadlineFlag: false,
    messageFlag: true,
    progress: 33,
    avatar:
      'https://images.unsplash.com/photo-1668342482782-582a821eaa59?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
          {
            id: '3',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
      {
        id: '2',
        title: 'Умываться, умываться, умываться, умываться',
        deadline: '2024-02-22',
        description: 'Почисти зубы и умойся, и причесаться не забудь',
        status: 'inWork',
        linkURL:
          'https://www.youtube.com/watch?v=cP97KKCq4eg&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=19',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
      {
        id: '3',
        title: 'Выпей кофе',
        deadline: '2024-03-22',
        description: 'Горячее, с пенкой, кофе :)',
        status: 'noCompleted',
        linkURL: 'https://www.youtube.com/watch?v=uSwe-5dPrV8&t=248s',
        comments: [],
      },
    ],
  },
  {
    id: '2',
    employeeId: '112',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: 'Не считай дни, извлекай из них пользу.',
    goal: 'Базовое програмирование',
    description:
      'Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимнюю пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную пору я из лесу вышел, был сильный мороз.',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'InWork',
    progress: 0,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1702913182391-cb0783cbfaf8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'inWork',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
          {
            id: '3',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    employeeId: '113',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: 'Один в поле не воин',
    goal: 'Работа в команде',
    description:
      'Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимнюю пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную пору я из лесу вышел, был сильный мороз.',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'Done',
    progress: 100,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1704570249452-c45247dd2b6e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
          {
            id: '3',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    employeeId: '114',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: 'Не ждите. Время никогда не будет подходящим.',
    goal: 'Базовое програмирование',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quam facilis quisquam consequuntur deleniti quas officia error tempore, modi cupiditate placeat sapiente ipsum consequatur velit dolores labore iste fugit.',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'Checked',
    progress: 100,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
          {
            id: '3',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    employeeId: '115',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: 'Мечтатели - это спасители мира.',
    goal: 'Адаптивная и кроссбраузерная верстка',
    description:
      'Индивидуальный план развития – часть системы управления персоналом. Представляет собой документ, в котором изложена стратегия развития компетенций и расширения сферы знаний сотрудника.',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'Canceled',
    progress: 50,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1702913182391-cb0783cbfaf8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '2',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
          {
            id: '3',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
      {
        id: '2',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'inWork',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '4',
            content:
              'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
            author: 'Самый главный анархист',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    employeeId: '116',
    employeeName: 'Иванова Иштар Ивановна',
    employeeJob: 'Developer',
    title: 'Усердно работайте, мечтайте по-крупному.',
    goal: 'HTML',
    description:
      'Это документ, в котором чётко прописывается путь его развития: поставленная цель, сроки осуществления и конкретные шаги в развитии знаний и навыков, которые необходимо предпринять сотруднику для достижения установленных компанией бизнес-показателей. ИПР — популярная часть программы развития персонала.',
    deadline: '2024-01-22',
    messageFlag: false,
    status: 'InWork',
    progress: 66,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1705642126091-f6a72397a183?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [],
      },
      {
        id: '2',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'done',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [],
      },
      {
        id: '3',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'noCompleted',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [],
      },
    ],
  },
  {
    id: '7',
    employeeId: '117',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: 'Не ждите. Время никогда не будет подходящим.',
    goal: 'Работа в команде, git',
    description:
      'ИПР (индивидуальный план развития) — документ определяющий цель, способы и сроки развития сотрудника в организации. Также вы можете встретить английскую аббревиатуру PDP (personal development plan). Буква «и» является самой важной и дорогой из трёх.',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'InWork',
    progress: 0,
    deadlineFlag: true,
    avatar:
      'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: '1',
        title: 'Посмотреть видео',
        deadline: '2024-01-22',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'inWork',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        comments: [
          {
            id: '1',
            content: 'Длинный комментарий без ограничения по количеству строк',
            author: 'Иванов Иван Иванович',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '8',
    employeeId: '118',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    title: '',
    goal: '',
    deadline: '',
    messageFlag: false,
    status: '',
    progress: 0,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [],
  },
];

export const actionButtons = [
  { title: 'Завершить', id: 'complete' },
  { title: 'Отменить', id: 'cancel' },
  { title: 'Удалить', id: 'delete' },
];

export const allRealData = [
  {
    id: 2,
    employee: {
      id: 4,
      username: 'Alla',
      name: 'Алла Фронтенд Гамма',
      first_name: 'null',
      last_name: 'null',
      position: 'Фронтенд',
      photo: '/media/photo/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg',
    },
    title: 'Не считай дни, извлекай из них пользу.',
    goal: 'Базовое програмирование',
    progress: 100,
    description:
      'Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимнюю пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную пору я из лесу вышел, был сильный мороз.',
    deadline: '2024-02-01',
    is_overdue: false,
    status: 'inwork',
    task: [
      {
        id: 2,
        title: 'Прочитать очень полезную книгу',
        deadline: '2024-02-14',
        description: 'Прочитать первые три главы и сделать пересказ.',
        status: 'done',
        linkURL: 'https://www.youtube.com/watch?v=uSwe-5dPrV8&t=248s',
        has_comments: true,
        comments: {
          id: 2,
          author: {
            name: 'Самый Главный Анархист',
            last_name: 'admin',
          },
          content:
            'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
          postdate: '2024-02-02T18:08:10.791641Z',
        },
      },
      {
        id: 8,
        title: 'Посмотреть видео',
        deadline: '2024-02-07',
        description:
          'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
        status: 'nocompleted',
        linkURL:
          'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
        has_comments: false,
        comments: null,
      },
    ],
  },
  {
    id: 2,
    username: 'ivan',
    name: 'Иванов Иван Иванович',
    first_name: 'фыв',
    last_name: 'фыв',
    position: 'Developer',
    photo: '/media/photo/advice.png',
  },
  {
    id: 3,
    username: 'Dmitry',
    name: 'Дмитрий Сергеевич Альфа',
    first_name: 'null',
    last_name: 'null',
    position: 'Фронтенд',
    photo: '/media/photo/jack-finnigan-rriAI0nhcbc-unsplash.jpg',
  },
  {
    id: 4,
    username: 'Alla',
    name: 'Алла Фронтенд Гамма',
    first_name: 'null',
    last_name: 'null',
    position: 'Фронтенд',
    photo: '/media/photo/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg',
  },
  {
    id: 5,
    username: 'Kolya',
    name: 'Николай Фронтенд Эпсилон',
    first_name: 'null',
    last_name: 'null',
    position: 'Фронтенд',
    photo: '/media/photo/albert-dera-ILip77SbmOE-unsplash.jpg',
  },
  {
    id: 6,
    username: 'Nikita',
    name: 'Никита Бэкендович Чтото',
    first_name: 'null',
    last_name: 'null',
    position: 'Бэкенд',
    photo: '/media/photo/severin-hoin-oXVCgaDqX30-unsplash.jpg',
  },
  {
    id: 7,
    username: 'Oleg',
    name: 'Олег Бэкендович Пошло',
    first_name: 'null',
    last_name: 'null',
    position: 'Бэкенд',
    photo: '/media/photo/elijah-hiett-umfpFoKxIVg-unsplash.jpg',
  },
  {
    id: 8,
    username: 'Sveta',
    name: 'Светлана Бэкендовна НеТак',
    first_name: 'null',
    last_name: 'null',
    position: 'Бэкенд',
    photo: '/media/photo/jeffery-erhunse-BQMZ5ligqps-unsplash.jpg',
  },
];
