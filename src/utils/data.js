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
  },
  {
    id: '2',
    title: 'И пой',
    description: 'Попробуй',
    linkURL: 'https://www.example/',
  },
  {
    id: '3',
    title: 'Выпей чаю',
    description: 'Черного',
    linkURL: 'https://www.example/',
  },
  {
    id: '4',
    title: 'Смотри',
    description: 'За собой',
    linkURL: 'https://www.example/',
  },
  {
    id: '5',
    title: 'Учись',
    description: 'Работа с компонентами',
    linkURL: 'https://www.example/',
  },
  {
    id: '6',
    title: 'И еще',
    description: 'Прочитай книгу',
    linkURL: 'https://www.example/',
  },
];

export const IDPcardsData = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Designer',
    goal: 'Повышение скиллов',
    deadline: '2024-01-22',
    status: 'Created',
    deadlineFlag: false,
    messageFlag: false,
    progress: 0,
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
        title: 'Почисти зубы',
        deadline: '2024-02-22',
        description: 'Почисти зубы и умойся',
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
    goal: 'Базовое програмирование',
    deadline: '2024-01-22',
    messageFlag: false,
    status: 'InWork',
    progress: 20,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1702913182391-cb0783cbfaf8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
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
    goal: 'Работа в команде',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'Done',
    progress: 100,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1704570249452-c45247dd2b6e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
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
    goal: 'Базовое програмирование',
    deadline: '2024-01-22',
    messageFlag: true,
    status: 'Checked',
    progress: 100,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
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
    goal: 'Адаптивная и кроссбраузерная верстка',
    deadline: '2024-01-22',
    messageFlag: false,
    status: 'Canceled',
    progress: 40,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1702913182391-cb0783cbfaf8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
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
    goal: 'HTML',
    deadline: '2024-01-22',
    messageFlag: false,
    status: 'InWork',
    progress: 80,
    deadlineFlag: false,
    avatar:
      'https://images.unsplash.com/photo-1705642126091-f6a72397a183?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
            postdate: '2024-01-22',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    employeeId: '117',
    employeeName: 'Иванов Иван Иванович',
    employeeJob: 'Developer',
    goal: 'Работа в команде, git',
    deadline: '2024-01-22',
    messageFlag: false,
    status: 'InWork',
    progress: 40,
    deadlineFlag: true,
    avatar:
      'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tasks: [
      {
        id: 'string',
        title: 'string',
        deadline: '2024-01-22',
        description: 'string',
        status: 'open',
        linkURL: 'string',
        comments: [
          {
            id: 'string',
            content: 'string',
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
