interface CardDishesProps {
  description: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
}

export function CardDishes({
  description, image, name, price, discount
}: CardDishesProps) {
  const discountedPrice = discount ? price - (price * discount / 100) : null;

  return (
    <div className="w-[350px] h-[380px] border-[1px] shadow-lg rounded flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <img className="object-cover object-center h-[160px] w-full rounded-tl rounded-tr" src={image} alt={name} />
        <h3 className="text-xl px-4">{name}</h3>
        <p className="text-zinc-500/70 px-4">{description}</p>
      </div>
      <div className="flex gap-4 mb-4 px-4 text-xl">
        {discountedPrice !== null && (
          <span className="text-emerald-500">R$ {discountedPrice.toFixed(2)}</span>
        )}
        <span className={discount ? 'line-through text-red-500' : ''}>
          R$ {price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
