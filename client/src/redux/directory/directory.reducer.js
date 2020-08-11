const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'fasting essentials',
            imageUrl: 'https://images.unsplash.com/photo-1565020689164-da28c4af9e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            linkUrl: 'fasting'
        },
        {
            id: 2,
            title: 'chocolates & sweets',
            imageUrl: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            linkUrl: 'sweets'
        },
        {
            id: 3,
            title: 'Pooja Needs',
            imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            linkUrl: 'pooja'
        },
        {
            id: 4,
            title: 'daily vegetables',
            imageUrl: 'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            linkUrl: 'vegetables',
            size: 'large',
        },
        {
            id: 5,
            title: 'fresh fruits',
            imageUrl: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            linkUrl: 'fruits',
            size: 'large'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action) {
        default:
            return state
    }
}

export default directoryReducer;