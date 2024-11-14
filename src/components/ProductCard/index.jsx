import "./index.css";

export function ProductCard(props) {
    const { image, category, name, price } = props.data;

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <span className="category">{category}</span>
            <h4>{name}</h4>
            <span className="price">{price}</span>
        </div>
    );
}