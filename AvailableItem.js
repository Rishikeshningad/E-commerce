import Item from './Item';

const productsArr = [
    {
    id:'m1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:'m2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:'m3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id:'m4',    
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    ]

const AvailableItem = () => {
    const itemsList = productsArr.map((item) => 
    <Item 
    key={item.id} 
    id={item.id}
    title={item.title}
    imageUrl={item.imageUrl}
    price={item.price}
    />);
    return(
        <section>
            <ul>
                {itemsList}
            </ul>
        </section>
    );
};

export default AvailableItem;