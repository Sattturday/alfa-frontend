import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userAvatar: '',
    IDPdata: {},
    // iprStatus: 'active', //active-обычное состояние ИПР, cancel-отменена, no-отстутствует
    // mainAvatar:
    //   'https://avatars.mds.yandex.net/i?id=53d567142f06907dfd8810b16c575b8354a43bbe-10871820-images-thumbs&n=13',
    // userData: {
    //   id: '1',
    //   name: 'Иванов Иван Иванович',
    //   job: 'Designer',
    //   avatar:
    //     'https://images.unsplash.com/photo-1668342482782-582a821eaa59?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   userIpr: {
    //     iprName: 'Название ИПР',
    //     iprGoal: 'Повышение скиллов',
    //     iprDescription: `Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную
    // пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты
    // красавчик. Однаждый в студеную зимную пору я из лесу вышел, был
    // сильный мороз.`,
    //     iprDeadline: '12.04.2024',
    //     deadlineFlag: false,
    //     messageFlag: false,
    //     progress: 65,
    //     isVerified: false,
    //     isNewCard: false,
    //     iprTasks: [
    //       {
    //         id: '1',
    //         title: 'Посмотреть видео',
    //         deadline: '2024-01-22',
    //         description:
    //           'Очень отличное видео, тебе точно понравится, не забудь попкорн.',
    //         status: 'done',
    //         linkURL:
    //           'https://core-ds.github.io/core-components/master/?path=/docs/button--docs',
    //         comments: [
    //           {
    //             id: '1',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк',
    //             author: 'Иванов Иван Иванович',
    //             postdate: '2024-01-22',
    //           },
    //           {
    //             id: '2',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
    //             author: 'Самый главный анархист',
    //             postdate: '2024-01-22',
    //           },
    //           {
    //             id: '3',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк',
    //             author: 'Иванов Иван Иванович',
    //             postdate: '2024-01-22',
    //           },
    //           {
    //             id: '4',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
    //             author: 'Самый главный анархист',
    //             postdate: '2024-01-22',
    //           },
    //         ],
    //       },
    //       {
    //         id: '2',
    //         title: 'Почисти зубы',
    //         deadline: '2024-02-22',
    //         description: 'Почисти зубы и умойся',
    //         status: 'inWork',
    //         linkURL:
    //           'https://www.youtube.com/watch?v=cP97KKCq4eg&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=19',
    //         comments: [
    //           {
    //             id: '1',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк',
    //             author: 'Иванов Иван Иванович',
    //             postdate: '2024-01-22',
    //           },
    //           {
    //             id: '2',
    //             content:
    //               'Длинный комментарий без ограничения по количеству строк и вообще я хочу написать очень длинный комментарий, чтобы сотрудник задумался о том, как коротка и хрупка наша жизнь.',
    //             author: 'Самый главный анархист',
    //             postdate: '2024-01-22',
    //           },
    //         ],
    //       },
    //       {
    //         id: '3',
    //         title: 'Выпей кофе',
    //         deadline: '2024-03-22',
    //         description: 'Горячее, с пенкой, кофе :)',
    //         status: 'noCompleted',
    //         linkURL: 'https://www.youtube.com/watch?v=uSwe-5dPrV8&t=248s',
    //         comments: [],
    //       },
    //     ],
    //   },
    // },
  },
  reducers: {
    setUserAvatar(state, action) {
      state.userAvatar = action.payload;
    },
    setIDPdata(state, action) {
      state.IDPdata = action.payload;
    },
    // changeStatusIpr(state, action) {
    //   state.iprStatus = action.payload;
    // },
  },
});

export const { setUserAvatar, setIDPdata, changeStatusIpr } = userSlice.actions;
export default userSlice.reducer;
