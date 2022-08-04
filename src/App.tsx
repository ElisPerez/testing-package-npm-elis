import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'ea-product-card';

import './App.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug2.png'
};

function App() {
  return (
    <div className='App App-header'>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle title={`${count}`} />
            <ProductButtons />
            <br />
            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
