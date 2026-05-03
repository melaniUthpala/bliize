import './Sections.css';

const WISHLIST = [
  { img: null, name: 'Modern Chair', price: '$125.00', stock: 'In Stock' },
  { img: null, name: 'Interior Lamp', price: '$89.00', stock: 'In Stock' },
  { img: null, name: 'Wood Table', price: '$299.00', stock: 'Out of Stock' },
];

export default function WishlistPage({ onNavigate }) {
  return (
    <div className="wl-page">
      <section className="about-hero">
        <div className="about-inner">
          <span className="about-pill">Wishlist</span>
          <h1 className="about-h">Interior Designer, Expert Architect</h1>
        </div>
      </section>

      <section className="wl-section">
        <div className="wl-table-wrap">
          <table className="wl-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {WISHLIST.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="wl-img-box" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className={item.stock === 'In Stock' ? 'wl-in' : 'wl-out'}>
                    {item.stock}
                  </td>
                  <td>
                    <button className="wl-add-btn">Add to Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}