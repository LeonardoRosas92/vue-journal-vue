export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString,
            text: 'Aliqua anim adipisicing Lorem voluptate magna proident duis.',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString,
            text: 'Do officia dolore esse in sit qui irure tempor incididunt sit.',
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString,
            text: 'Enim aute duis reprehenderit adipisicing do irure duis duis aute officia.',
            picture: null,
        }
    ]
})