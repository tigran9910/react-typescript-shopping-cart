import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
//Types
import { CartItemType } from "../App";
//Styles
import { StyledChip, Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div className="description">
      <h3>{item.title}</h3>
      <Rating name="read-only" value={4} readOnly />
      <p>{item.description}</p>
      <StyledChip label={item.category} color="primary" />
      <h3>Price: ${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)} color="primary">
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
