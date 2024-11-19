import "./index.css";

export function ProductCard(props) {
    const { image, category, title, price } = props.data;

    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <span className="category">{category}</span>
            <h4>{title}</h4>
            <span className="price">{price}</span>
        </div>
    );
}